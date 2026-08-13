import { useState } from 'react';
import { Bell, CheckCircle2, Shield, Wifi } from 'lucide-react';
import { announcements, currentTask } from './mock/classroom';

function App() {
  const [joined, setJoined] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [sessionCode, setSessionCode] = useState('');
  const [taskDone, setTaskDone] = useState(false);

  if (!joined) {
    return (
      <div className="grid min-h-screen place-items-center bg-slate-100 p-6">
        <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-sm uppercase tracking-wide text-slate-500">ClassPilot</p>
          <h1 className="mt-1 text-3xl font-semibold text-slate-900">Join Classroom</h1>
          <div className="mt-6 space-y-4">
            <label className="block text-sm">
              <span className="mb-1 block text-slate-600">Student Name</span>
              <input
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="Enter your name"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-slate-600">Roll Number</span>
              <input
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="24CS000"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-slate-600">Session Code</span>
              <input
                value={sessionCode}
                onChange={(e) => setSessionCode(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="CNL-2026"
              />
            </label>
            <button
              type="button"
              onClick={() => setJoined(true)}
              className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white"
            >
              Join Classroom
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6 text-slate-900">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 xl:grid-cols-[2fr_1fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <header className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-500">ClassPilot</p>
              <h1 className="text-2xl font-semibold">Classroom Workspace</h1>
            </div>
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              <Wifi className="h-4 w-4" />
              Connected
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Teacher</p>
              <p className="font-medium">Prof. XYZ</p>
              <p className="mt-2 text-sm text-slate-500">Class</p>
              <p className="font-medium">Computer Networks Lab</p>
            </article>

            <article className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Student</p>
              <p className="font-medium">{studentName || 'Student Name'}</p>
              <p className="mt-2 text-sm text-slate-500">Roll Number</p>
              <p className="font-medium">{rollNumber || '24CS000'}</p>
            </article>
          </div>

          <article className="mt-4 rounded-xl border border-slate-200 p-4">
            <h2 className="text-lg font-semibold">Current Task</h2>
            <p className="mt-2 text-base font-medium text-slate-900">{currentTask.title}</p>
            <p className="text-sm text-slate-600">Deadline: {currentTask.deadline}</p>
            <p className="mt-2 text-sm">Status: <span className="font-medium">{taskDone ? 'Completed' : currentTask.status}</span></p>
            <button
              type="button"
              onClick={() => setTaskDone((prev) => !prev)}
              className="mt-3 rounded-lg bg-slate-900 px-4 py-2 text-sm text-white"
            >
              {taskDone ? 'Marked Completed' : 'Mark as Completed'}
            </button>
          </article>
        </section>

        <aside className="space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="mb-2 flex items-center gap-2 text-base font-semibold">
              <Shield className="h-4 w-4" />
              Monitoring Status
            </h3>
            <p className="inline-flex items-center gap-2 text-sm text-emerald-700">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Active
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Your computer is currently connected to the classroom session.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="mb-2 flex items-center gap-2 text-base font-semibold">
              <Bell className="h-4 w-4" />
              Teacher Announcements
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {announcements.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="mb-2 flex items-center gap-2 text-base font-semibold">
              <CheckCircle2 className="h-4 w-4" />
              Session Status
            </h3>
            <p className="text-sm text-slate-600">Session Code: {sessionCode || 'CNL-2026'}</p>
            <p className="text-sm text-slate-600">Connection: Stable</p>
          </article>
        </aside>
      </div>
    </div>
  );
}

export default App;
