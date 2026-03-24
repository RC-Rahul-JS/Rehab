import React, { useState } from 'react';
import { 
  X, Calendar as CalIcon, CheckCircle2, Coffee, 
  ChevronLeft, ChevronRight, Plus, 
  Trash2, Clock, Home, Briefcase, Send, Check, XCircle, History, User 
} from 'lucide-react';

const AttendanceModal = ({ 
  employee, employees = [], onClose, holidays = [], leaveRequests = [], 
  onAddHoliday, onAddBulkHolidays, onDeleteHoliday, 
  onAddRequest, onUpdateLeaveStatus, isHR 
}) => {
  if (!employee) return null;

  const [viewDate, setViewDate] = useState(new Date(2026, 1, 1)); 
  const [showHrForm, setShowHrForm] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectionMonth, setSelectionMonth] = useState(new Date(2026, 1, 1)); 
  const [newHoliday, setNewHoliday] = useState({ fromDate: "", toDate: "", reason: "" });
  const [newLeave, setNewLeave] = useState({ reason: "", type: "Casual Leave" });

  const systemToday = new Date(2026, 1, 20); 
  
  const viewYear = viewDate.getFullYear();
  const viewMonth = viewDate.getMonth();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();

  const selYear = selectionMonth.getFullYear();
  const selMonth = selectionMonth.getMonth();
  const selDaysInMonth = new Date(selYear, selMonth + 1, 0).getDate();

  const getEmpName = (id) => {
    const found = employees.find(e => e.id === id);
    return found ? found.name : (id === employee.id ? employee.name : "Employee");
  };

  // LOGIC: WFH(2) & OD(3) - Purely for Feb 2026 Dashboard
  const getAttendanceValue = (day) => {
    if (viewYear === 2026 && viewMonth === 1) {
      if (day === 11) return 2; 
      if (day === 16) return 3; 
    }
    return employee.attendance ? employee.attendance[day - 1] : (day < 20 ? 1 : 0);
  };

  const getDayDetails = (day) => {
    const dStr = `${viewYear}-${(viewMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const attendanceVal = getAttendanceValue(day);
    return {
      holiday: holidays.find(h => h.date === dStr),
      leave: leaveRequests.find(l => l.empId === employee.id && l.dates.includes(dStr)),
      attendanceVal,
      isSunday: new Date(viewYear, viewMonth, day).getDay() === 0,
      isPast: new Date(viewYear, viewMonth, day) < systemToday
    };
  };

  const stats = (() => {
    let present = 0, absent = 0, off = 0, approvedLeaves = 0;
    for (let d = 1; d <= daysInMonth; d++) {
      const { holiday, leave, attendanceVal, isSunday, isPast } = getDayDetails(d);
      if (leave?.status === 'APPROVED') { approvedLeaves++; off++; if (isPast) present++; }
      else if (holiday || isSunday) { off++; if (isPast) present++; }
      else if (isPast) { attendanceVal >= 1 ? present++ : absent++; }
    }
    return { total: daysInMonth, present, absent, off, approvedLeaves };
  })();

  const toggleDateSelection = (day) => {
    const dateObj = new Date(selYear, selMonth, day);
    if (dateObj < systemToday) return; 
    const dStr = `${selYear}-${(selMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    setSelectedDates(prev => prev.includes(dStr) ? prev.filter(d => d !== dStr) : [...prev, dStr]);
  };

  // NEW LOGIC: Generate all dates for Holiday Range
  const handleSaveHoliday = () => {
    if (!newHoliday.fromDate || !newHoliday.reason) return;
    
    const start = new Date(newHoliday.fromDate);
    const end = newHoliday.toDate ? new Date(newHoliday.toDate) : start;
    const holidaysToAdd = [];
    
    let current = new Date(start);
    while (current <= end) {
      holidaysToAdd.push({
        date: current.toISOString().split('T')[0],
        reason: newHoliday.reason
      });
      current.setDate(current.getDate() + 1);
    }
    
    onAddBulkHolidays(holidaysToAdd);
    setShowHrForm(false);
    setNewHoliday({ fromDate: "", toDate: "", reason: "" });
  };

  const pendingReqs = leaveRequests.filter(r => isHR ? r.status === 'PENDING' : (r.empId === employee.id && r.status === 'PENDING'));
  const historyReqs = leaveRequests.filter(r => isHR ? r.status !== 'PENDING' : (r.empId === employee.id && r.status !== 'PENDING'));

  return (
    <div className="fixed inset-0 z-[150] bg-white flex flex-col h-screen w-screen overflow-hidden font-sans text-slate-800">
      
      {/* HEADER: NAME CENTERED AND WHITE */}
      <header className="flex-none h-14 bg-slate-900 px-6 flex items-center justify-between text-white shadow-md relative">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400"><User size={16} /></div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <h2 className="text-sm font-black uppercase tracking-[0.1em] text-white">{employee.name}</h2>
          <p className="text-[8px] text-slate-400 font-bold uppercase tracking-[0.2em]">Attendance Management</p>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full transition-all text-slate-400"><X size={20}/></button>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <aside className="w-64 bg-slate-50 border-r border-slate-200 p-5 flex flex-col gap-5 overflow-y-auto">
          <div className="space-y-3">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{employee.name} - Summary</span>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-[11px]">
              <div className="flex justify-between font-bold"><span>Total Days</span><span>{stats.total}</span></div>
              <div className="flex justify-between font-bold text-emerald-600"><span>Present</span><span className="bg-emerald-50 px-2 rounded">{stats.present}</span></div>
              <div className="flex justify-between font-bold text-rose-600"><span>Absent</span><span className="bg-rose-50 px-2 rounded">{stats.absent}</span></div>
              <div className="flex justify-between font-bold text-[#800000]"><span>Leaves</span><span className="bg-red-50 px-2 rounded">{stats.approvedLeaves}</span></div>
            </div>
          </div>
          {isHR && (
            <button onClick={() => setShowHrForm(true)} className="mt-auto w-full py-2.5 bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase flex items-center justify-center gap-2 hover:bg-black transition-all">
              <Plus size={14}/> Add Holiday
            </button>
          )}
        </aside>

        <main className="flex-1 p-6 bg-white overflow-y-auto border-r border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-slate-800 uppercase italic">
                {viewDate.toLocaleString('default', { month: 'long' })} <span className="text-indigo-600">{viewYear}</span>
              </h3>
              <div className="flex gap-2 bg-slate-100 p-1.5 rounded-2xl">
                <button onClick={() => setViewDate(new Date(viewYear, viewMonth - 1, 1))} className="p-2 hover:bg-white rounded-xl shadow-sm"><ChevronLeft size={18}/></button>
                <button onClick={() => setViewDate(new Date(viewYear, viewMonth + 1, 1))} className="p-2 hover:bg-white rounded-xl shadow-sm"><ChevronRight size={18}/></button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-3">
              {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => (
                <div key={d} className="text-center text-[10px] font-black text-slate-400 pb-2 uppercase tracking-widest">{d}</div>
              ))}
              {[...Array(firstDayOfMonth)].map((_, i) => <div key={i} className="h-24 bg-slate-50/50 rounded-2xl" />)}
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const { holiday, leave, attendanceVal, isSunday, isPast } = getDayDetails(day);
                const isPresent = isPast && attendanceVal === 1 && !holiday && !isSunday;

                return (
                  <div key={day} className={`group relative h-24 rounded-2xl p-3 border flex flex-col justify-between transition-all duration-300 ${
                    holiday ? 'bg-amber-50 border-amber-200' :
                    leave?.status === 'APPROVED' ? 'bg-[#800000]/10 border-[#800000]/20' :
                    isPresent ? 'bg-emerald-50 border-emerald-200' :
                    attendanceVal === 2 ? 'bg-blue-50 border-blue-200' :
                    attendanceVal === 3 ? 'bg-indigo-50 border-indigo-200' :
                    isPast && attendanceVal === 0 ? 'bg-rose-50 border-rose-100' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <div className="flex justify-between items-start">
                      <span className={`text-[11px] font-mono font-black ${isPresent ? 'text-emerald-600' : leave?.status === 'APPROVED' ? 'text-[#800000]' : 'text-slate-400'}`}>{day}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      {holiday ? <Coffee size={16} className="text-amber-500" /> :
                       leave?.status === 'APPROVED' ? <CheckCircle2 size={16} className="text-[#800000]" /> :
                       attendanceVal === 2 ? <Home size={16} className="text-blue-500" /> :
                       attendanceVal === 3 ? <Briefcase size={16} className="text-indigo-500" /> :
                       isPresent ? <CheckCircle2 size={16} className="text-emerald-500" /> : <CheckCircle2 size={16} className="text-slate-100" />}
                      <span className="text-[7px] font-black uppercase text-center mt-1">
                        {holiday ? holiday.reason : leave ? leave.status : isPresent ? 'PRESENT' : isSunday ? 'SUN' : attendanceVal === 2 ? 'WFH' : attendanceVal === 3 ? 'OD' : isPast ? 'ABSENT' : ''}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>

        <aside className="w-80 bg-slate-50 border-l border-slate-200 p-5 flex flex-col overflow-y-auto gap-8">
          <section>
            <h3 className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-2 mb-4 tracking-widest"><Send size={12}/> Request Feed</h3>
            <div className="space-y-3">
              {pendingReqs.map(r => (
                <div key={r.id} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black uppercase text-indigo-600">{getEmpName(r.empId)}</span>
                    <span className="text-[7px] font-black px-2 py-0.5 rounded-full bg-amber-100 text-amber-600 uppercase">Pending</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-700">Dates: <span className="text-[#800000] font-mono">{r.dates.join(', ')}</span></p>
                  {r.reason && (
                    <div className="mt-1.5 p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <p className="text-[9px] font-black uppercase text-slate-400 mb-0.5">Reason:</p>
                      <p className="text-[10px] font-medium text-slate-600 leading-tight italic">"{r.reason}"</p>
                    </div>
                  )}
                  {isHR && (
                    <div className="flex gap-2 mt-4 pt-3 border-t border-slate-50">
                      <button onClick={() => onUpdateLeaveStatus(r.id, 'APPROVED')} className="flex-1 bg-[#800000] text-white py-2 rounded-xl text-[8px] font-black uppercase flex items-center justify-center gap-1 shadow-sm"><Check size={10}/> Approve</button>
                      <button onClick={() => onUpdateLeaveStatus(r.id, 'REJECTED')} className="flex-1 bg-rose-500 text-white py-2 rounded-xl text-[8px] font-black uppercase">Reject</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-2 mb-4 tracking-widest"><History size={12}/> History</h3>
            <div className="space-y-3">
              {historyReqs.map(r => (
                <div key={r.id} className="p-4 bg-white/50 rounded-2xl border border-dashed border-slate-200 group transition-all">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] font-black uppercase text-slate-500">{getEmpName(r.empId)}</span>
                    <span className={`text-[7px] font-black px-2 py-0.5 rounded-full ${r.status === 'APPROVED' ? 'bg-[#800000] text-white' : 'bg-rose-500 text-white'}`}>{r.status}</span>
                  </div>
                  <p className="text-[10px] font-medium text-slate-500 italic">Dates: {r.dates.join(', ')}</p>
                  {isHR && (
                    <button onClick={() => onUpdateLeaveStatus(r.id, r.status === 'APPROVED' ? 'REJECTED' : 'APPROVED')} className="mt-2 text-[8px] font-black text-indigo-600 underline uppercase opacity-0 group-hover:opacity-100 transition-opacity">Toggle Status</button>
                  )}
                </div>
              ))}
            </div>
          </section>

          <button onClick={() => { setSelectionMonth(new Date(viewDate)); setShowRequestForm(true); }} className="mt-auto w-full py-4 bg-[#800000] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:brightness-110 transition-all"><Plus size={16} className="inline mr-1"/> New Request</button>
        </aside>
      </div>

      {/* REQUEST MODAL: FUTURE DATES ONLY */}
      {showRequestForm && (
        <div className="fixed inset-0 z-[200] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4 px-2">
               <button onClick={() => setSelectionMonth(new Date(selYear, selMonth - 1, 1))} className="p-1 hover:bg-slate-100 rounded-lg text-slate-400"><ChevronLeft size={16}/></button>
               <h2 className="text-[11px] font-black uppercase tracking-widest text-[#800000]">{selectionMonth.toLocaleString('default', { month: 'long' })} {selYear}</h2>
               <button onClick={() => setSelectionMonth(new Date(selYear, selMonth + 1, 1))} className="p-1 hover:bg-slate-100 rounded-lg text-slate-400"><ChevronRight size={16}/></button>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-4">
              {[...Array(selDaysInMonth)].map((_, i) => {
                const day = i + 1;
                const ds = `${selYear}-${(selMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
                const isPastDate = new Date(selYear, selMonth, day) < systemToday;
                return (
                  <button key={day} disabled={isPastDate} onClick={() => toggleDateSelection(day)} className={`aspect-square rounded-lg text-[10px] font-black transition-all ${selectedDates.includes(ds) ? 'bg-[#800000] text-white scale-95 shadow-md' : isPastDate ? 'bg-slate-50 text-slate-200 cursor-not-allowed' : 'bg-slate-100 text-slate-400 hover:bg-white hover:border-slate-300 border border-transparent'}`}>{day}</button>
                );
              })}
            </div>
            <textarea placeholder="Chutti ka reason likho..." className="w-full p-3 rounded-2xl bg-slate-50 border text-[10px] font-bold h-20 mb-3 outline-none focus:border-[#800000] transition-colors" onChange={e => setNewLeave({...newLeave, reason: e.target.value})} />
            <button onClick={() => { if(selectedDates.length === 0) return; onAddRequest({ empId: employee.id, dates: selectedDates, ...newLeave, status: isHR ? 'APPROVED' : 'PENDING' }); setShowRequestForm(false); setSelectedDates([]); }} className="w-full bg-[#800000] text-white py-4 rounded-2xl font-black text-[10px] uppercase shadow-lg mb-2 hover:brightness-110 active:scale-95 transition-all">{isHR ? "Mark Approved" : "Submit Request"}</button>
            <button onClick={() => { setShowRequestForm(false); setSelectedDates([]); }} className="w-full py-1 text-[9px] font-black text-slate-300 uppercase">Cancel</button>
          </div>
        </div>
      )}

      {/* UPDATED HOLIDAY FORM: RANGE SUPPORT */}
      {showHrForm && (
        <div className="fixed inset-0 z-[200] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xs rounded-3xl p-7 shadow-2xl">
            <h2 className="text-xs font-black uppercase mb-5 text-[#800000] text-center tracking-widest">Mark Holidays</h2>
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-[8px] font-black uppercase text-slate-400 ml-1">From</label>
                  <input type="date" className="w-full p-2 bg-slate-50 border rounded-xl text-[10px] font-bold outline-none" onChange={e => setNewHoliday({...newHoliday, fromDate: e.target.value})} />
                </div>
                <div className="flex-1">
                  <label className="text-[8px] font-black uppercase text-slate-400 ml-1">To (Optional)</label>
                  <input type="date" className="w-full p-2 bg-slate-50 border rounded-xl text-[10px] font-bold outline-none" onChange={e => setNewHoliday({...newHoliday, toDate: e.target.value})} />
                </div>
              </div>
              <div>
                <label className="text-[8px] font-black uppercase text-slate-400 ml-1">Reason</label>
                <input type="text" placeholder="Title (e.g. Holi)" className="w-full p-3 bg-slate-50 border rounded-xl text-[10px] font-bold outline-none" onChange={e => setNewHoliday({...newHoliday, reason: e.target.value})} />
              </div>
              <button onClick={handleSaveHoliday} className="w-full bg-slate-800 text-white py-3.5 rounded-2xl text-[10px] font-black uppercase hover:bg-black transition-all">Save Range</button>
              <button onClick={() => setShowHrForm(false)} className="w-full py-1 text-[9px] font-black text-slate-300 uppercase">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceModal;