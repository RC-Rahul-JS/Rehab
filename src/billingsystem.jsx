import React, { useState } from 'react';
import EntryForm from './EntryForm';
import TransactionList from './TransactionList';
import { List, PlusCircle } from 'lucide-react';

const BillingSystem = () => {
  const [view, setView] = useState('entry'); // 'entry' or 'list'
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newRecord) => {
    setTransactions([newRecord, ...transactions]);
    setView('list'); // Automatically show the list after saving
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* VIEW TOGGLE BAR */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-sm font-black uppercase text-slate-400 tracking-widest">
            {view === 'entry' ? 'New Purchase Entry' : 'Transaction History'}
          </h1>
          
          <button 
            onClick={() => setView(view === 'entry' ? 'list' : 'entry')}
            className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold text-blue-600 shadow-sm hover:bg-blue-50 transition-all"
          >
            {view === 'entry' ? (
              <><List size={16} /> View All Submissions</>
            ) : (
              <><PlusCircle size={16} /> Create New Entry</>
            )}
          </button>
        </div>

        {/* CONDITIONAL RENDERING */}
        {view === 'entry' ? (
          <EntryForm onSave={addTransaction} />
        ) : (
          <TransactionList data={transactions} />
        )}
      </div>
    </div>
  );
};

export default BillingSystem;