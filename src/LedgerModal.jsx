import React from 'react';
import { X, Printer, Download, Landmark } from 'lucide-react';

const LedgerModal = ({ employee, onClose }) => {
  if (!employee) return null;

  const transactions = [
    { date: "01/05/2025", particular: "Opening Balance", debit: 0, credit: 0, balance: 0 },
    { date: "19/10/2025", particular: "Goods Sold - INV/665", debit: 1300, credit: 0, balance: 1300 },
    { date: "19/10/2025", particular: "Payment Received - Bhagchad Nageshwar", debit: 0, credit: 1300, balance: 0 },
    { date: "05/11/2025", particular: "Goods Sold - INV/734", debit: 1300, credit: 0, balance: 1300 },
    { date: "05/11/2025", particular: "Payment Received - Bhagchad Nageshwar", debit: 0, credit: 1300, balance: 0 },
    { date: "18/11/2025", particular: "Goods Sold - INV/825", debit: 1300, credit: 0, balance: 1300 },
    { date: "18/11/2025", particular: "Payment Received - Bhagchad Nageshwar", debit: 0, credit: 1300, balance: 0 },
    { date: "04/12/2025", particular: "Goods Sold - INV/1005", debit: 1300, credit: 0, balance: 1300 },
    { date: "04/12/2025", particular: "Payment Received - Bhagchad Nageshwar", debit: 0, credit: 1300, balance: 0 },
    { date: "26/12/2025", particular: "Goods Sold - INV/1209", debit: 1300, credit: 0, balance: 1300 },
    { date: "26/12/2025", particular: "Payment Received - Bhagchad Nageshwar", debit: 0, credit: 1300, balance: 0 },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col font-sans h-screen w-screen overflow-hidden animate-in fade-in duration-200">
      
      {/* 1. HEADER - Flush with top and sides */}
      <header className="flex-none h-20 bg-[#F8FAFC] border-b border-slate-200 px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg">
            <Landmark size={20} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight leading-none">{employee.name}</h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">General Account Ledger</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2.5 text-slate-400 hover:bg-white hover:shadow-sm rounded-lg transition-all"><Printer size={18} /></button>
          <button className="p-2.5 text-slate-400 hover:bg-white hover:shadow-sm rounded-lg transition-all"><Download size={18} /></button>
          <div className="w-px h-8 bg-slate-200 mx-2" />
          <button 
            onClick={onClose} 
            className="w-10 h-10 flex items-center justify-center bg-rose-50 text-rose-500 rounded-full hover:bg-rose-500 hover:text-white transition-all"
          >
            <X size={20} />
          </button>
        </div>
      </header>

      {/* 2. TABLE CONTENT - No Padding/Margin between header and table */}
      <div className="flex-1 flex flex-col overflow-hidden bg-white">
        
        {/* TABLE HEADINGS - Full Width */}
        <div className="flex-none flex bg-[#1E293B] text-white py-4 px-8 font-bold text-[10px] uppercase tracking-[0.15em] border-b border-slate-700">
          <div className="w-[15%]">Date</div>
          <div className="w-[40%]">Particular</div>
          <div className="w-[15%] text-right pr-4">Debit (DR)</div>
          <div className="w-[15%] text-right pr-4">Credit (CR)</div>
          <div className="w-[15%] text-right bg-indigo-600 -my-4 flex items-center justify-end px-8">Balance</div>
        </div>

        {/* SCROLLABLE ROWS - Flush edges */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {transactions.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex items-center px-8 py-3.5 border-b border-slate-100 transition-colors hover:bg-slate-50/80 group`}
            >
              <div className="w-[15%] text-[10px] font-mono font-bold text-slate-400">
                {item.date}
              </div>
              <div className="w-[40%] text-xs font-bold text-slate-700">
                {item.particular}
              </div>
              <div className="w-[15%] text-right pr-4 text-xs font-mono font-bold text-rose-500">
                {item.debit > 0 ? item.debit.toFixed(2) : "0.00"}
              </div>
              <div className="w-[15%] text-right pr-4 text-xs font-mono font-bold text-emerald-600">
                {item.credit > 0 ? item.credit.toFixed(2) : "0.00"}
              </div>
              <div className="w-[15%] text-right text-xs font-mono font-black text-slate-900 pr-8">
                {item.balance.toFixed(2)}
              </div>
            </div>
          ))}

          {/* TOTAL SUMMARY - Appears at the bottom of the scroll */}
          <div className="flex items-center px-8 py-8 bg-slate-50 border-t-2 border-slate-100">
            <div className="w-[55%] text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">
              Statement End
            </div>
            
            <div className="w-[15%] text-right pr-4">
              <span className="block text-[8px] font-black text-slate-400 uppercase">Total DR</span>
              <span className="text-sm font-mono font-bold text-rose-500 tracking-tighter">₹6,500.00</span>
            </div>
            
            <div className="w-[15%] text-right pr-4">
              <span className="block text-[8px] font-black text-slate-400 uppercase">Total CR</span>
              <span className="text-sm font-mono font-bold text-emerald-600 tracking-tighter">₹6,500.00</span>
            </div>
            
            <div className="w-[15%] text-right pr-8">
              <span className="block text-[8px] font-black text-slate-400 uppercase">Net Balance</span>
              <span className="text-sm font-mono font-black text-indigo-600 tracking-tighter">₹0.00</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #CBD5E1; }
      `}</style>
    </div>
  );
};

export default LedgerModal;