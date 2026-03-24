import React from 'react';
import { Layers, CalendarCheck, Search, Mail, Zap } from 'lucide-react';

const EmployeeList = ({ employees = [], searchTerm, setSearchTerm, onViewChange }) => {
  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    emp.num.includes(searchTerm)
  );

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Search Header */}
      <header className="h-14 bg-white/80 backdrop-blur-md px-8 flex items-center justify-between border-b border-slate-200 shrink-0">
        <div className="flex items-center gap-4">
          <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Staff Management</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={12} />
            <input 
              type="text" 
              placeholder="Search name or number..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-100 border-none rounded-full py-1.5 pl-8 pr-4 text-[10px] w-64 focus:ring-1 focus:ring-indigo-300 outline-none transition-all" 
            />
          </div>
        </div>
      </header>

      {/* List Area */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex px-6 mb-2 text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
          <div className="w-[25%]">Employee Profile</div>
          <div className="w-[15%]">Identification</div>
          <div className="w-[15%]">Access Group</div>
          <div className="w-[20%]">Verified Contact</div>
          <div className="w-[25%] text-right">System Control</div>
        </div>

        <div className="flex flex-col gap-2">
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((emp) => (
              <div key={emp.id} className="flex items-center px-6 py-2 rounded-xl bg-white/50 border border-transparent hover:bg-white hover:shadow-sm transition-all group">
                <div className="w-[25%] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-500 flex items-center justify-center text-[11px] font-black group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {emp.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold tracking-tight">{emp.name}</div>
                    <div className="text-[9px] text-slate-400 font-medium">EMP-ID-{emp.id}00</div>
                  </div>
                </div>

                <div className="w-[15%] text-[10px] font-mono font-bold text-slate-500">{emp.num}</div>

                <div className="w-[15%]">
                  <span className="text-[9px] font-black text-slate-400 border border-slate-200 px-2 py-0.5 rounded uppercase tracking-tighter">
                    {emp.role}
                  </span>
                </div>

                <div className="w-[20%] flex items-center gap-2">
                  <Mail size={10} className="text-slate-300" />
                  <span className="text-[10px] text-slate-500 truncate lowercase">{emp.mail}</span>
                </div>

                <div className="w-[25%] flex justify-end gap-1.5">
                  <button onClick={() => onViewChange("layer", emp)} className="group/btn relative overflow-hidden p-1.5 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm">
                    <Layers size={14} />
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-indigo-100 opacity-0 group-hover/btn:animate-shine group-hover/btn:opacity-100" />
                  </button>
                  <button onClick={() => onViewChange("calendar", emp)} className="group/btn relative overflow-hidden p-1.5 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm">
                    <CalendarCheck size={14} />
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-emerald-100 opacity-0 group-hover/btn:animate-shine group-hover/btn:opacity-100" />
                  </button>
                  <button className="bg-slate-800 p-1.5 rounded-lg text-slate-400 hover:text-white transition-all shadow-sm">
                    <Zap size={14} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-slate-400 text-xs italic">No results found.</div>
          )}
        </div>
      </main>
      <style>{`@keyframes shine { 0% { left: -100%; } 100% { left: 125%; } } .animate-shine { animation: shine 0.7s ease-in-out forwards; }`}</style>
    </div>
  );
};

export default EmployeeList;