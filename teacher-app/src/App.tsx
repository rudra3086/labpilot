import { useMemo, useState } from 'react';
import {
  Activity,
  AppWindow,
  Bell,
  BookOpen,
  ClipboardList,
  FileBarChart2,
  Globe,
  Grid2x2,
  LayoutDashboard,
  List,
  Search,
  Settings,
  Shield,
  UserSquare2,
  Users,
} from 'lucide-react';
import { activities } from './mock/activities';
import { applicationPolicies } from './mock/applications';
import { attendanceRows } from './mock/attendance';
import { notifications } from './mock/notifications';
import { students } from './mock/students';
import { tasks } from './mock/tasks';
import { allowedWebsites, blockedWebsites } from './mock/websites';

type PageKey =
  | 'dashboard'
  | 'students'
  | 'tasks'
  | 'monitoring'
  | 'applications'
  | 'websites'
  | 'notifications'
  | 'attendance'
  | 'activity-logs'
  | 'reports'
  | 'settings';

interface NavItem {
  key: PageKey;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'students', label: 'Students', icon: Users },
  { key: 'tasks', label: 'Tasks', icon: ClipboardList },
  { key: 'monitoring', label: 'Monitoring', icon: Shield },
  { key: 'applications', label: 'Applications', icon: AppWindow },
  { key: 'websites', label: 'Websites', icon: Globe },
  { key: 'notifications', label: 'Notifications', icon: Bell },
  { key: 'attendance', label: 'Attendance', icon: BookOpen },
  { key: 'activity-logs', label: 'Activity Logs', icon: Activity },
  { key: 'reports', label: 'Reports', icon: FileBarChart2 },
  { key: 'settings', label: 'Settings', icon: Settings },
];

function statusDot(status: string) {
  if (status === 'online' || status === 'Present' || status === 'Allowed') return 'bg-emerald-500';
  if (status === 'idle' || status === 'Late' || status === 'warning') return 'bg-amber-500';
  if (status === 'critical' || status === 'offline' || status === 'Restricted' || status === 'Left Early') return 'bg-rose-500';
  return 'bg-slate-400';
}

function cardClass() {
  return 'rounded-xl border border-slate-200 bg-white p-4 shadow-sm';
}

function TeacherDashboard() {
  const online = students.filter((s) => s.status === 'online').length;
  const idle = students.filter((s) => s.status === 'idle').length;

  return (
    <div className="space-y-5">
      <section className={`${cardClass()} flex flex-wrap items-center justify-between gap-4`}>
        <div>
          <p className="text-sm text-slate-500">Current Session</p>
          <h1 className="text-2xl font-semibold text-slate-900">Computer Networks Lab</h1>
          <p className="mt-1 flex items-center gap-2 text-sm text-emerald-600">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Session Active
          </p>
          <p className="mt-1 text-sm text-slate-600">24 Students Connected</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700">Start Session</button>
          <button className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white">End Session</button>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Total Students', value: students.length },
          { label: 'Online Students', value: online },
          { label: 'Idle Students', value: idle },
          { label: 'Active Tasks', value: 12 },
        ].map((item) => (
          <article key={item.label} className={cardClass()}>
            <p className="text-3xl font-semibold text-slate-900">{item.value}</p>
            <p className="text-sm text-slate-500">{item.label}</p>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 2xl:grid-cols-[2fr_1fr]">
        <div className={cardClass()}>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Student Screen Grid</h2>
            <span className="text-sm text-slate-500">Live Preview Placeholders</span>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {students.map((student) => (
              <article key={student.id} className="rounded-lg border border-slate-200 p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-slate-900">{student.name}</p>
                    <p className="text-xs text-slate-500">{student.rollNumber}</p>
                  </div>
                  <span className={`mt-1 h-2.5 w-2.5 rounded-full ${statusDot(student.status)}`} title={student.status} />
                </div>
                <div className="my-3 h-20 rounded-md bg-gradient-to-br from-slate-100 to-slate-200" />
                <p className="text-xs text-slate-600">{student.currentApplication}</p>
                <p className="text-xs font-medium text-slate-800">{student.activityStatus}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className={cardClass()}>
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Recent Notifications</h2>
          <div className="space-y-3">
            {notifications.slice(0, 4).map((item) => (
              <div key={item.id} className="rounded-lg border border-slate-200 p-3">
                <p className="text-sm text-slate-700">{item.message}</p>
                <p className="mt-1 text-xs text-slate-500">{item.time}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}

function App() {
  const [activePage, setActivePage] = useState<PageKey>('dashboard');
  const [studentQuery, setStudentQuery] = useState('');
  const [studentFilter, setStudentFilter] = useState<'all' | 'online' | 'offline' | 'idle'>('all');
  const [monitorView, setMonitorView] = useState<'grid' | 'list'>('grid');
  const [selectedStudentId, setSelectedStudentId] = useState(students[0]?.id ?? '');
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [allowedSites, setAllowedSites] = useState(allowedWebsites);
  const [blockedSites, setBlockedSites] = useState(blockedWebsites);
  const [newSite, setNewSite] = useState('');
  const [siteBucket, setSiteBucket] = useState<'allowed' | 'blocked'>('allowed');
  const [confirmSite, setConfirmSite] = useState<{ list: 'allowed' | 'blocked'; value: string } | null>(null);

  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      const byFilter = studentFilter === 'all' ? true : s.status === studentFilter;
      const q = studentQuery.toLowerCase();
      const bySearch = s.name.toLowerCase().includes(q) || s.rollNumber.toLowerCase().includes(q);
      return byFilter && bySearch;
    });
  }, [studentFilter, studentQuery]);

  const selectedStudent = students.find((s) => s.id === selectedStudentId) ?? null;

  function addSite() {
    const value = newSite.trim().toLowerCase();
    if (!value) return;
    if (siteBucket === 'allowed') {
      setAllowedSites((prev) => (prev.includes(value) ? prev : [...prev, value]));
    } else {
      setBlockedSites((prev) => (prev.includes(value) ? prev : [...prev, value]));
    }
    setNewSite('');
  }

  function removeSite(list: 'allowed' | 'blocked', value: string) {
    if (list === 'allowed') {
      setAllowedSites((prev) => prev.filter((v) => v !== value));
    } else {
      setBlockedSites((prev) => prev.filter((v) => v !== value));
    }
    setConfirmSite(null);
  }

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      <aside className="flex w-72 flex-col justify-between border-r border-slate-200 bg-white p-4">
        <div>
          <div className="mb-6 rounded-xl bg-slate-900 p-4 text-white">
            <p className="text-xs tracking-wide text-slate-300">ClassPilot</p>
            <p className="text-lg font-semibold">Teacher Console</p>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = activePage === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActivePage(item.key)}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm ${
                    active ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="rounded-xl border border-slate-200 p-3 text-sm">
          <div className="flex items-center gap-2">
            <UserSquare2 className="h-5 w-5 text-slate-600" />
            <div>
              <p className="font-medium text-slate-900">Prof. Meera Shah</p>
              <p className="text-xs text-slate-500">Computer Engineering</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">Version: v0.2.0-week2</p>
        </div>
      </aside>

      <main className="flex-1 overflow-auto p-6">
        {activePage === 'dashboard' && <TeacherDashboard />}

        {activePage === 'students' && (
          <section className={cardClass()}>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  value={studentQuery}
                  onChange={(e) => setStudentQuery(e.target.value)}
                  className="rounded-lg border border-slate-300 bg-white py-2 pl-8 pr-3 text-sm"
                  placeholder="Search student or roll number"
                />
              </div>
              <select
                value={studentFilter}
                onChange={(e) => setStudentFilter(e.target.value as 'all' | 'online' | 'offline' | 'idle')}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value="all">All</option>
                <option value="online">Online</option>
                <option value="idle">Idle</option>
                <option value="offline">Offline</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 text-left text-slate-600">
                  <tr>
                    <th className="px-3 py-2">Student</th>
                    <th className="px-3 py-2">Roll Number</th>
                    <th className="px-3 py-2">Status</th>
                    <th className="px-3 py-2">Current App</th>
                    <th className="px-3 py-2">Idle Status</th>
                    <th className="px-3 py-2">Last Active</th>
                    <th className="px-3 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="border-t border-slate-100">
                      <td className="px-3 py-2">{student.name}</td>
                      <td className="px-3 py-2">{student.rollNumber}</td>
                      <td className="px-3 py-2">
                        <span className="inline-flex items-center gap-1">
                          <span className={`h-2.5 w-2.5 rounded-full ${statusDot(student.status)}`} />
                          {student.status}
                        </span>
                      </td>
                      <td className="px-3 py-2">{student.currentApplication}</td>
                      <td className="px-3 py-2">{student.activityStatus}</td>
                      <td className="px-3 py-2">{student.lastActive}</td>
                      <td className="px-3 py-2">
                        <div className="flex gap-2">
                          <button className="rounded border border-slate-300 px-2 py-1">View</button>
                          <button className="rounded border border-slate-300 px-2 py-1">Message</button>
                          <button className="rounded border border-slate-300 px-2 py-1">More</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activePage === 'monitoring' && (
          <section className="grid grid-cols-1 gap-4 xl:grid-cols-[2fr_1fr]">
            <div className={cardClass()}>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    value={studentQuery}
                    onChange={(e) => setStudentQuery(e.target.value)}
                    className="rounded-lg border border-slate-300 py-2 pl-8 pr-3 text-sm"
                    placeholder="Search student"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={studentFilter}
                    onChange={(e) => setStudentFilter(e.target.value as 'all' | 'online' | 'offline' | 'idle')}
                    className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                  >
                    <option value="all">All Status</option>
                    <option value="online">Online</option>
                    <option value="idle">Idle</option>
                    <option value="offline">Offline</option>
                  </select>
                  <button
                    className={`rounded-lg border px-3 py-2 text-sm ${monitorView === 'grid' ? 'bg-slate-900 text-white' : 'border-slate-300'}`}
                    onClick={() => setMonitorView('grid')}
                    type="button"
                  >
                    <Grid2x2 className="h-4 w-4" />
                  </button>
                  <button
                    className={`rounded-lg border px-3 py-2 text-sm ${monitorView === 'list' ? 'bg-slate-900 text-white' : 'border-slate-300'}`}
                    onClick={() => setMonitorView('list')}
                    type="button"
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {filteredStudents.length === 0 ? (
                <div className="rounded-lg border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
                  No students match your filter criteria.
                </div>
              ) : (
                <div className={monitorView === 'grid' ? 'grid grid-cols-1 gap-3 md:grid-cols-2' : 'space-y-3'}>
                  {filteredStudents.map((student) => (
                    <button
                      type="button"
                      key={student.id}
                      onClick={() => setSelectedStudentId(student.id)}
                      className="rounded-lg border border-slate-200 p-3 text-left hover:border-slate-400"
                    >
                      <div className="mb-2 flex justify-between">
                        <p className="font-medium">{student.name}</p>
                        <span className={`h-2.5 w-2.5 rounded-full ${statusDot(student.status)}`} />
                      </div>
                      <div className="h-32 rounded-md bg-gradient-to-br from-slate-100 to-slate-200" />
                      <p className="mt-2 text-xs text-slate-500">{student.currentApplication}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <aside className={cardClass()}>
              <h3 className="mb-3 text-lg font-semibold">Student Detail</h3>
              {selectedStudent ? (
                <div className="space-y-2 text-sm">
                  <p><span className="text-slate-500">Name:</span> {selectedStudent.name}</p>
                  <p><span className="text-slate-500">Roll:</span> {selectedStudent.rollNumber}</p>
                  <p><span className="text-slate-500">Status:</span> {selectedStudent.status}</p>
                  <p><span className="text-slate-500">Current App:</span> {selectedStudent.currentApplication}</p>
                  <p><span className="text-slate-500">Activity:</span> {selectedStudent.activityStatus}</p>
                  <div className="mt-3 rounded-md border border-dashed border-slate-300 p-3 text-xs text-slate-500">
                    Detailed live stream panel placeholder for later phases.
                  </div>
                </div>
              ) : (
                <p className="text-sm text-slate-500">Select a student to view details.</p>
              )}
            </aside>
          </section>
        )}

        {activePage === 'tasks' && (
          <section className={cardClass()}>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Task Management</h2>
              <button
                type="button"
                onClick={() => setShowTaskModal(true)}
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white"
              >
                + Create Task
              </button>
            </div>
            <div className="space-y-3">
              {tasks.map((task) => (
                <article key={task.id} className="rounded-lg border border-slate-200 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-medium text-slate-900">{task.title}</h3>
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs">{task.status}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{task.description}</p>
                  <p className="mt-2 text-xs text-slate-500">Assigned: {task.assignedStudents} • Deadline: {task.deadline}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {activePage === 'applications' && (
          <section className={cardClass()}>
            <h2 className="mb-4 text-lg font-semibold">Application Policies</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 text-left text-slate-600">
                  <tr>
                    <th className="px-3 py-2">Application</th>
                    <th className="px-3 py-2">Status</th>
                    <th className="px-3 py-2">Students Using</th>
                    <th className="px-3 py-2">Policy</th>
                    <th className="px-3 py-2">Control</th>
                  </tr>
                </thead>
                <tbody>
                  {applicationPolicies.map((row) => (
                    <tr key={row.id} className="border-t border-slate-100">
                      <td className="px-3 py-2">{row.application}</td>
                      <td className="px-3 py-2">
                        <span className="inline-flex items-center gap-1">
                          <span className={`h-2.5 w-2.5 rounded-full ${statusDot(row.status)}`} />
                          {row.status}
                        </span>
                      </td>
                      <td className="px-3 py-2">{row.studentsUsing}</td>
                      <td className="px-3 py-2">{row.policy}</td>
                      <td className="px-3 py-2">
                        <select defaultValue={row.status} className="rounded border border-slate-300 px-2 py-1 text-xs">
                          <option>Allowed</option>
                          <option>Restricted</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activePage === 'websites' && (
          <section className="space-y-4">
            <div className={cardClass()}>
              <h2 className="mb-3 text-lg font-semibold">Website Policy</h2>
              <div className="flex flex-wrap gap-2">
                <input
                  value={newSite}
                  onChange={(e) => setNewSite(e.target.value)}
                  placeholder="example.com"
                  className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
                />
                <select value={siteBucket} onChange={(e) => setSiteBucket(e.target.value as 'allowed' | 'blocked')} className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
                  <option value="allowed">Allowed Websites</option>
                  <option value="blocked">Blocked Websites</option>
                </select>
                <button onClick={addSite} type="button" className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white">Add Website</button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              <div className={cardClass()}>
                <h3 className="mb-3 font-semibold">Allowed Websites</h3>
                <ul className="space-y-2">
                  {allowedSites.map((site) => (
                    <li key={site} className="flex items-center justify-between rounded border border-slate-200 px-3 py-2 text-sm">
                      <span>{site}</span>
                      <button onClick={() => setConfirmSite({ list: 'allowed', value: site })} className="text-rose-600">Remove</button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={cardClass()}>
                <h3 className="mb-3 font-semibold">Blocked Websites</h3>
                <ul className="space-y-2">
                  {blockedSites.map((site) => (
                    <li key={site} className="flex items-center justify-between rounded border border-slate-200 px-3 py-2 text-sm">
                      <span>{site}</span>
                      <button onClick={() => setConfirmSite({ list: 'blocked', value: site })} className="text-rose-600">Remove</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {activePage === 'notifications' && (
          <section className={cardClass()}>
            <h2 className="mb-4 text-lg font-semibold">Notification Center</h2>
            <div className="mb-4 flex gap-2 text-xs">
              {['All', 'Warnings', 'Activity', 'System'].map((tab) => (
                <button key={tab} className="rounded-full border border-slate-300 px-3 py-1">{tab}</button>
              ))}
            </div>
            <div className="space-y-2">
              {notifications.map((item) => (
                <article key={item.id} className="flex items-start justify-between rounded-lg border border-slate-200 p-3">
                  <div>
                    <p className="text-sm text-slate-700">{item.message}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.time}</p>
                  </div>
                  <span className={`rounded-full px-2 py-1 text-xs ${item.category === 'critical' ? 'bg-rose-100 text-rose-700' : item.category === 'warning' ? 'bg-amber-100 text-amber-800' : 'bg-sky-100 text-sky-700'}`}>
                    {item.category}
                  </span>
                </article>
              ))}
            </div>
          </section>
        )}

        {activePage === 'attendance' && (
          <section className={cardClass()}>
            <h2 className="mb-4 text-lg font-semibold">Attendance</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 text-left text-slate-600">
                  <tr>
                    <th className="px-3 py-2">Student</th>
                    <th className="px-3 py-2">Roll Number</th>
                    <th className="px-3 py-2">Join Time</th>
                    <th className="px-3 py-2">Leave Time</th>
                    <th className="px-3 py-2">Duration</th>
                    <th className="px-3 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceRows.map((row) => (
                    <tr key={row.id} className="border-t border-slate-100">
                      <td className="px-3 py-2">{row.student}</td>
                      <td className="px-3 py-2">{row.rollNumber}</td>
                      <td className="px-3 py-2">{row.joinTime}</td>
                      <td className="px-3 py-2">{row.leaveTime}</td>
                      <td className="px-3 py-2">{row.duration}</td>
                      <td className="px-3 py-2">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activePage === 'activity-logs' && (
          <section className={cardClass()}>
            <h2 className="mb-4 text-lg font-semibold">Activity Logs</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 text-left text-slate-600">
                  <tr>
                    <th className="px-3 py-2">Time</th>
                    <th className="px-3 py-2">Student</th>
                    <th className="px-3 py-2">Activity</th>
                    <th className="px-3 py-2">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((row) => (
                    <tr key={row.id} className="border-t border-slate-100">
                      <td className="px-3 py-2">{row.time}</td>
                      <td className="px-3 py-2">{row.student}</td>
                      <td className="px-3 py-2">{row.activity}</td>
                      <td className="px-3 py-2">{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activePage === 'reports' && (
          <section className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {['Attendance Report', 'Activity Report', 'Session Summary'].map((item) => (
                <article key={item} className={cardClass()}>
                  <p className="text-lg font-semibold text-slate-900">{item}</p>
                  <p className="mt-1 text-sm text-slate-500">Report generation will be available in later development phases.</p>
                </article>
              ))}
            </div>
            <div className={cardClass()}>
              <div className="flex flex-wrap gap-2">
                <button disabled className="cursor-not-allowed rounded-lg bg-slate-200 px-4 py-2 text-sm text-slate-500">Generate Report (Coming Soon)</button>
                <button disabled className="cursor-not-allowed rounded-lg bg-slate-200 px-4 py-2 text-sm text-slate-500">Export PDF (Coming Soon)</button>
                <button disabled className="cursor-not-allowed rounded-lg bg-slate-200 px-4 py-2 text-sm text-slate-500">Export Excel (Coming Soon)</button>
              </div>
            </div>
          </section>
        )}

        {activePage === 'settings' && (
          <section className="space-y-4">
            <div className={cardClass()}>
              <h3 className="mb-3 text-lg font-semibold">General</h3>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <input className="rounded-lg border border-slate-300 px-3 py-2 text-sm" defaultValue="Computer Networks Lab" aria-label="Class name" />
                <input className="rounded-lg border border-slate-300 px-3 py-2 text-sm" defaultValue="Prof. Meera Shah" aria-label="Teacher name" />
                <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm"><option>Manual Session Start</option><option>Auto Session Start</option></select>
              </div>
            </div>
            <div className={cardClass()}>
              <h3 className="mb-3 text-lg font-semibold">Monitoring</h3>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm"><option>Preview Quality: Medium</option><option>High</option><option>Low</option></select>
                <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm"><option>Refresh Interval: 10s</option><option>5s</option><option>15s</option></select>
                <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm"><option>Idle Threshold: 5 min</option><option>3 min</option><option>10 min</option></select>
              </div>
            </div>
            <div className={cardClass()}>
              <h3 className="mb-3 text-lg font-semibold">Policy Controls</h3>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm"><option>Application Policy: Allow by Rule</option><option>Restrict by Rule</option></select>
                <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm"><option>Website Policy: Allowlist</option><option>Blocklist</option></select>
              </div>
            </div>
          </section>
        )}
      </main>

      {showTaskModal && (
        <div className="fixed inset-0 z-30 grid place-items-center bg-slate-900/45 p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-5 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">Create Task</h3>
            <div className="mt-4 space-y-3">
              <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Task title" />
              <textarea className="h-24 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Description" />
              <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" type="text" placeholder="Deadline" />
              <select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
                <option>Assign to: Everyone</option>
                <option>Assign to: Selected students</option>
              </select>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm" onClick={() => setShowTaskModal(false)}>Cancel</button>
              <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white" onClick={() => setShowTaskModal(false)}>Create (Mock)</button>
            </div>
          </div>
        </div>
      )}

      {confirmSite && (
        <div className="fixed inset-0 z-40 grid place-items-center bg-slate-900/45 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">Confirm Removal</h3>
            <p className="mt-2 text-sm text-slate-600">Remove {confirmSite.value} from {confirmSite.list} websites? This affects only mock UI state.</p>
            <div className="mt-4 flex justify-end gap-2">
              <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm" onClick={() => setConfirmSite(null)}>Cancel</button>
              <button className="rounded-lg bg-rose-600 px-4 py-2 text-sm text-white" onClick={() => removeSite(confirmSite.list, confirmSite.value)}>Remove</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
