import React, { useState, useEffect } from 'react';
import { Search, Trash2, CheckCircle, Plus, X, Calculator, Calendar } from 'lucide-react';

const EntryForm = ({ onSave }) => {
  // --- MOCK DATA ---
  const vendorsDB = [{ id: 'V-01', name: 'Global Tech', city: 'Mumbai' }, { id: 'V-02', name: 'Standard Spares', city: 'Delhi' }];
  const productsDB = [{ id: 'P-01', name: 'Industrial Motor', price: 5000 }, { id: 'P-02', name: 'Steel Pipe', price: 1200 }];
  const ledgers = ["Purchase A/c", "Cash Account", "Inventory Inward"];

  // --- STATES ---
  const [entryDate, setEntryDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [vendorSearch, setVendorSearch] = useState('');
  const [vSuggestions, setVSuggestions] = useState([]);
  const [selectedProd, setSelectedProd] = useState(null);
  const [prodSearch, setProdSearch] = useState('');
  const [pSuggestions, setPSuggestions] = useState([]);
  const [taxType, setTaxType] = useState('18'); 
  const [calcMode, setCalcMode] = useState('Exclusive'); 
  const [itemsList, setItemsList] = useState([]);
  const [ledger, setLedger] = useState('');

  // --- SEARCH LOGIC ---
  useEffect(() => {
    setVSuggestions(vendorSearch && !selectedVendor ? vendorsDB.filter(v => v.name.toLowerCase().includes(vendorSearch.toLowerCase())) : []);
  }, [vendorSearch, selectedVendor]);

  useEffect(() => {
    setPSuggestions(prodSearch && !selectedProd ? productsDB.filter(p => p.name.toLowerCase().includes(prodSearch.toLowerCase())) : []);
  }, [prodSearch, selectedProd]);

  // --- ADD ITEM LOGIC ---
  const handleAddItem = () => {
    if (!selectedProd) return;
    const isRcm = taxType === 'RCM';
    const gstRate = isRcm ? 0 : parseInt(taxType);
    let basePrice, gstAmount, total;

    if (calcMode === 'Exclusive') {
      basePrice = selectedProd.price;
      gstAmount = (basePrice * gstRate) / 100;
      total = basePrice + gstAmount;
    } else {
      total = selectedProd.price;
      basePrice = total / (1 + gstRate / 100);
      gstAmount = total - basePrice;
    }

    setItemsList([...itemsList, {
      ...selectedProd,
      tempId: Date.now(),
      gstRate,
      isRcm,
      calcMode,
      basePrice: parseFloat(basePrice.toFixed(2)),
      gstAmount: parseFloat(gstAmount.toFixed(2)),
      total: parseFloat(total.toFixed(2))
    }]);
    setSelectedProd(null); setProdSearch('');
  };

  const handlePriceChange = (tempId, newPrice) => {
    const val = parseFloat(newPrice) || 0;
    setItemsList(itemsList.map(item => {
      if (item.tempId === tempId) {
        let nB, nG, nT;
        const rate = item.isRcm ? 0 : item.gstRate;
        if (item.calcMode === 'Exclusive') {
          nB = val; nG = (nB * rate) / 100; nT = nB + nG;
        } else {
          nT = val; nB = nT / (1 + rate / 100); nG = nT - nB;
        }
        return { ...item, price: val, basePrice: parseFloat(nB.toFixed(2)), gstAmount: parseFloat(nG.toFixed(2)), total: parseFloat(nT.toFixed(2)) };
      }
      return item;
    }));
  };

  const grandTotal = itemsList.reduce((sum, item) => sum + item.total, 0);

  const handleSubmit = () => {
    const finalRecord = {
      invoiceId: `INV-${Date.now().toString().slice(-6)}`,
      date: entryDate,
      vendor: selectedVendor,
      ledgerAccount: ledger,
      items: itemsList,
      grandTotal: grandTotal.toFixed(2)
    };
    onSave(finalRecord);
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
          {/* DATE */}
          <div className="lg:col-span-2">
            <label className="text-[10px] font-black text-slate-400 uppercase mb-1 block">Entry Date</label>
            <input type="date" value={entryDate} onChange={(e) => setEntryDate(e.target.value)} className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg outline-none font-bold text-slate-600 bg-slate-50 h-[38px]" />
          </div>

          {/* VENDOR */}
          <div className="lg:col-span-3">
            <label className="text-[10px] font-black text-slate-400 uppercase mb-1 block">1. Vendor</label>
            {!selectedVendor ? (
              <div className="relative">
                <input type="text" placeholder="Search Vendor..." className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg outline-none h-[38px]" value={vendorSearch} onChange={(e) => setVendorSearch(e.target.value)} />
                {vSuggestions.length > 0 && (
                  <div className="absolute z-30 w-full bg-white border rounded-lg shadow-xl mt-1 overflow-hidden">
                    {vSuggestions.map(v => <div key={v.id} onClick={() => setSelectedVendor(v)} className="p-2 hover:bg-blue-50 cursor-pointer text-xs flex justify-between border-b"><b>{v.name}</b><span className="text-[10px] text-slate-400">{v.id}</span></div>)}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-between bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1.5 rounded-lg h-[38px]">
                <span className="text-xs font-bold truncate">{selectedVendor.name}</span>
                <button onClick={() => setSelectedVendor(null)}><X size={14}/></button>
              </div>
            )}
          </div>

          {/* PRODUCT */}
          <div className="lg:col-span-3">
            <label className="text-[10px] font-black text-slate-400 uppercase mb-1 block">2. Product</label>
            <div className="relative">
              <input type="text" placeholder="Find Product..." className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg outline-none h-[38px]" value={prodSearch} onChange={(e) => setProdSearch(e.target.value)} />
              {pSuggestions.length > 0 && (
                <div className="absolute z-30 w-full bg-white border rounded-lg shadow-xl mt-1 overflow-hidden">
                  {pSuggestions.map(p => <div key={p.id} onClick={() => {setSelectedProd(p); setProdSearch(p.name); setPSuggestions([]);}} className="p-2 hover:bg-emerald-50 cursor-pointer text-xs flex justify-between border-b"><span>{p.name}</span><b>₹{p.price}</b></div>)}
                </div>
              )}
            </div>
          </div>

          {/* TAX & MODE */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase mb-1 block">3. Tax</label>
              <select value={taxType} onChange={(e) => setTaxType(e.target.value)} className="w-full px-2 py-2 text-xs border border-slate-200 rounded-lg outline-none font-bold h-[38px]">
                <option value="5">5% GST</option><option value="12">12% GST</option><option value="18">18% GST</option><option value="RCM">RCM</option>
              </select>
            </div>
            <div className="flex items-end gap-2">
              <div className="flex bg-slate-100 p-1 rounded-lg h-[38px] flex-grow">
                <button onClick={() => setCalcMode('Exclusive')} className={`flex-1 text-[9px] font-bold rounded ${calcMode === 'Exclusive' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}>EXCL</button>
                <button onClick={() => setCalcMode('Inclusive')} className={`flex-1 text-[9px] font-bold rounded ${calcMode === 'Inclusive' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}>INCL</button>
              </div>
              <button onClick={handleAddItem} disabled={!selectedProd} className="bg-slate-900 text-white p-2 rounded-lg hover:bg-black disabled:opacity-20 h-[38px]"><Plus size={18}/></button>
            </div>
          </div>
        </div>
      </div>

      {/* ITEMS TABLE */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px] border-b">
            <tr><th className="p-4">Item & Mode</th><th className="p-4 text-right">Price (Edit)</th><th className="p-4 text-center">Tax Info</th><th className="p-4 text-right">GST Amount</th><th className="p-4 text-right">Net Total</th><th className="p-4"></th></tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {itemsList.map((item) => (
              <tr key={item.tempId}>
                <td className="p-4"><p className="font-bold">{item.name}</p><span className="text-[8px] font-bold px-1 py-0.5 rounded bg-blue-50 text-blue-600 uppercase">{item.calcMode}</span></td>
                <td className="p-4 text-right"><input type="number" className="w-20 text-right bg-transparent border-b border-transparent focus:border-blue-500 outline-none font-bold" value={item.price} onChange={(e) => handlePriceChange(item.tempId, e.target.value)} /></td>
                <td className="p-4 text-center font-bold">{item.isRcm ? 'RCM' : `${item.gstRate}%`}</td>
                <td className="p-4 text-right text-slate-500">₹{item.gstAmount}</td>
                <td className="p-4 text-right font-bold">₹{item.total}</td>
                <td className="p-4 text-center"><button onClick={() => setItemsList(itemsList.filter(i => i.tempId !== item.tempId))} className="text-slate-300 hover:text-red-500"><Trash2 size={14}/></button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-slate-50 p-4 border-t flex justify-end">
          <div className="text-right">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Grand Total</p>
            <p className="text-xl font-black text-slate-900">₹{grandTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* BOTTOM ACTION BAR */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200">
        <div className="flex items-center gap-3">
           <Calculator size={20} className="text-slate-400"/>
           <select value={ledger} onChange={(e) => setLedger(e.target.value)} className="font-bold text-xs outline-none cursor-pointer min-w-[200px] bg-transparent">
             <option value="">Select Ledger Account...</option>
             {ledgers.map(l => <option key={l} value={l}>{l}</option>)}
           </select>
        </div>
        <button onClick={handleSubmit} disabled={!selectedVendor || itemsList.length === 0 || !ledger} className="bg-blue-600 text-white px-10 py-3 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg uppercase tracking-widest disabled:opacity-20 transition-all active:scale-95">
          Submit & Save <CheckCircle size={16}/>
        </button>
      </div>
    </div>
  );
};

export default EntryForm;