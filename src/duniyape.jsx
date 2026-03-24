import React, { useState } from 'react';
import { Layers, CalendarCheck, Zap, Mail, Search } from 'lucide-react';
import LedgerModal from './LedgerModal';
import AttendanceModal from './AttendanceModal';

const CommandCenterUI = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewLedger, setViewLedger] = useState(null);
  const [viewAttendance, setViewAttendance] = useState(null);

  // LOGIC 2: Object-based Holiday State
  const [holidays, setHolidays] = useState([
    { date: "2026-02-26", reason: "Maha Shivratri" }
  ]);

  // NEW LOGIC: Leave Requests State (Shared across all employees)
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, empId: 1, dates: ['2026-02-25'], type: 'Casual Leave', status: 'PENDING', reason: 'Family function' }
  ]);

  const employees = [
    { 
      id: 1, name: "Rahul Sharma", num: "9876543210", mail: "rahul@dev.com", role: "Software Engineer", 
      ledger: { cr: 60000, dr: 5000 }, 
      attendance: [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] 
    },
    { 
      id: 2, name: "Sita Verma", num: "8877655443", mail: "sita@ui.com", role: "UI/UX Designer", 
      ledger: { cr: 45000, dr: 2000 }, 
      attendance: [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] 
    },
    { 
      id: 3, name: "Arjun Admin", num: "7766544332", mail: "arjun@ops.com", role: "HR Specialist", 
      ledger: { cr: 80000, dr: 12000 }, 
      attendance: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] 
    }
  ];

  // NEW LOGIC: Request Handlers
  const handleAddRequest = (newReq) => {
    setLeaveRequests(prev => [...prev, { ...newReq, id: Date.now() }]);
  };

  const handleUpdateLeaveStatus = (reqId, newStatus) => {
    setLeaveRequests(prev => prev.map(req => 
      req.id === reqId ? { ...req, status: newStatus } : req
    ));
  };

  const handleAddHoliday = (newH) => {
    setHolidays(prev => [...prev, newH]);
  };

  const handleAddBulkHolidays = (newHolidays) => {
    setHolidays(prev => {
      const existingDates = prev.map(h => h.date);
      const filteredNew = newHolidays.filter(nh => !existingDates.includes(nh.date));
      return [...prev, ...filteredNew];
    });
  };

  const handleDeleteHoliday = (dateStr) => {
    setHolidays(prev => prev.filter(h => h.date !== dateStr));
  };

  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    emp.num.includes(searchTerm)
  );

  return (
    <div className="h-screen w-screen bg-[#F0F2F5] flex overflow-hidden font-sans text-slate-800">
      <div className="flex-1 flex flex-col">
        
        {/* Top Bar */}
        <header className="h-14 bg-white/80 backdrop-blur-md px-8 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-4">
            <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 tracking-[0.2em]">Management System</h2>
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
            <div className="w-[25%] text-right pr-4">System Control</div>
          </div>

          <div className="flex flex-col gap-2">
            {filteredEmployees.map((emp) => (
              <div 
                key={emp.id}
                onClick={() => setSelectedId(emp.id)}
                className={`flex items-center px-6 py-2 rounded-xl transition-all duration-300 cursor-pointer border ${
                  selectedId === emp.id 
                  ? 'bg-white border-indigo-200 shadow-md translate-x-1' 
                  : 'bg-white/50 border-transparent hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="w-[25%] flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-black ${selectedId === emp.id ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                    {emp.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold tracking-tight">{emp.name}</div>
                    <div className="text-[9px] text-slate-400 font-medium tracking-tighter">ID: {emp.id}00</div>
                  </div>
                </div>

                <div className="w-[15%] text-[10px] font-mono font-bold text-slate-500">{emp.num}</div>

                <div className="w-[15%]">
                  <span className="text-[9px] font-black text-slate-400 border border-slate-200 px-2 py-0.5 rounded uppercase tracking-tighter">
                    {emp.role}
                  </span>
                </div>

                <div className="w-[20%] flex items-center gap-2 text-slate-500">
                  <Mail size={10} className="text-slate-300" />
                  <span className="text-[10px] truncate">{emp.mail}</span>
                </div>

                <div className="w-[25%] flex justify-end gap-1.5">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setViewLedger(emp); }}
                    className="group/btn relative overflow-hidden bg-white border border-slate-200 p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm"
                  >
                    <Layers size={14} />
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-indigo-100 opacity-0 group-hover/btn:animate-shine group-hover/btn:opacity-100" />
                  </button>

                  <button 
                    onClick={(e) => { e.stopPropagation(); setViewAttendance(emp); }}
                    className="group/btn relative overflow-hidden bg-white border border-slate-200 p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm"
                  >
                    <CalendarCheck size={14} />
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-emerald-100 opacity-0 group-hover/btn:animate-shine group-hover/btn:opacity-100" />
                  </button>
                  
                  <button className="group/btn relative overflow-hidden bg-slate-800 p-1.5 rounded-lg text-slate-400 hover:text-white transition-all shadow-sm">
                    <Zap size={14} />
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover/btn:animate-shine group-hover/btn:opacity-100" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* MODALS */}
      {viewLedger && <LedgerModal employee={viewLedger} onClose={() => setViewLedger(null)} />}
      
      {viewAttendance && (
        <AttendanceModal 
          employee={viewAttendance} 
          employees={employees}                // <--- Pass the full employees list here for name lookups
          holidays={holidays}
          leaveRequests={leaveRequests}        
          onAddRequest={handleAddRequest}      
          onUpdateLeaveStatus={handleUpdateLeaveStatus} 
          onAddHoliday={handleAddHoliday}
          onAddBulkHolidays={handleAddBulkHolidays}
          onDeleteHoliday={handleDeleteHoliday}
          // Only Arjun gets approval controls
          isHR={viewAttendance.role === "HR Specialist"} 
          onClose={() => setViewAttendance(null)} 
        />
      )}

      <style jsx>{`
        @keyframes shine { 0% { left: -100%; } 100% { left: 125%; } }
        .animate-shine { animation: shine 0.7s ease-in-out forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default CommandCenterUI;