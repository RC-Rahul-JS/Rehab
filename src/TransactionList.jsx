import React, { useState } from 'react';
import { Calendar, Eye, X, Package, Tag, Calculator } from 'lucide-react';

const TransactionList = ({ data }) => {
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  if (data.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-20 border-2 border-dashed border-slate-200 text-center text-slate-400 italic">
        No transactions submitted yet.
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in duration-500">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">Date</th>
                <th className="p-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">Vendor Name</th>
                <th className="p-4 text-[10px] font-black uppercase text-slate-400 tracking-widest text-right">Grand Total</th>
                <th className="p-4 text-[10px] font-black uppercase text-slate-400 tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.map((invoice) => (
                <tr key={invoice.invoiceId} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-slate-400" />
                      <span className="text-xs font-bold text-slate-600">{invoice.date}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="text-xs font-black text-slate-800">{invoice.vendor?.name}</p>
                    <p className="text-[9px] text-slate-400 uppercase font-bold">ID: {invoice.invoiceId}</p>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-sm font-black text-blue-600">₹{invoice.grandTotal}</span>
                  </td>
                  <td className="p-4 text-center">
                    <button 
                      onClick={() => setSelectedInvoice(invoice)}
                      className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all"
                    >
                      <Eye size={14} /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-slate-50 p-3 border-t border-slate-200 flex justify-between items-center px-6">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Total Entries: {data.length}</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase">
            Sum: ₹{data.reduce((acc, curr) => acc + parseFloat(curr.grandTotal), 0).toFixed(2)}
          </span>
        </div>
      </div>

      {/* --- DETAIL MODAL --- */}
      {selectedInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 border-b flex justify-between items-center bg-slate-50">
              <div>
                <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">Transaction Details</h2>
                <p className="text-xs font-bold text-blue-500 uppercase">{selectedInvoice.invoiceId}</p>
              </div>
              <button onClick={() => setSelectedInvoice(null)} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400">
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Vendor</p>
                  <p className="text-sm font-bold text-slate-800">{selectedInvoice.vendor?.name}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Ledger Account</p>
                  <p className="text-sm font-bold text-blue-600">{selectedInvoice.ledgerAccount}</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase mb-3 flex items-center gap-2">
                  <Package size={12}/> Product Breakdown
                </p>
                <div className="space-y-2">
                  {selectedInvoice.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-100 p-2 rounded-lg text-slate-500"><Tag size={14}/></div>
                        <div>
                          <p className="text-xs font-black text-slate-800">{item.name}</p>
                          <p className="text-[9px] font-bold text-slate-400 uppercase">
                            Tax: {item.isRcm ? 'RCM' : `${item.gstRate}%`} • Mode: {item.calcMode}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-slate-800">₹{item.total}</p>
                        <p className="text-[9px] text-slate-400 font-bold">Base: ₹{item.basePrice} + GST: ₹{item.gstAmount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-900 flex justify-between items-center text-white">
              <div className="flex items-center gap-2 opacity-50">
                <Calculator size={16} />
                <span className="text-[10px] font-black uppercase">Grand Total Amount</span>
              </div>
              <span className="text-2xl font-black italic">₹{selectedInvoice.grandTotal}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionList;