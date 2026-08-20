import { Activity, BarChart3, Building2, CalendarDays, LayoutDashboard, Settings, Users } from 'lucide-react';

export type AdminPage = 'dashboard' | 'teachers' | 'institutions' | 'sessions' | 'analytics' | 'activity' | 'settings';

const items = [
  ['dashboard', 'Dashboard', LayoutDashboard], ['teachers', 'Teachers', Users], ['institutions', 'Institutions', Building2], ['sessions', 'Sessions', CalendarDays], ['analytics', 'Usage Analytics', BarChart3], ['activity', 'Activity Logs', Activity], ['settings', 'Settings', Settings],
] as const;

export function Sidebar({ activePage, onNavigate }: { activePage: AdminPage; onNavigate: (page: AdminPage) => void }) {
  return <aside className="flex w-64 shrink-0 flex-col justify-between border-r border-slate-200 bg-white p-4"><div><div className="mb-7 rounded-xl bg-slate-950 px-4 py-4 text-white"><p className="text-xs uppercase tracking-[0.2em] text-slate-400">ClassPilot</p><p className="mt-1 text-lg font-semibold">Admin Console</p></div><nav className="space-y-1">{items.map(([key, label, Icon]) => <button key={key} type="button" onClick={() => onNavigate(key)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${activePage === key ? 'bg-indigo-50 font-medium text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'}`}><Icon className="h-4 w-4" />{label}</button>)}</nav></div><div className="rounded-xl border border-slate-200 p-3"><div className="flex items-center gap-2"><div className="grid h-9 w-9 place-items-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">AU</div><div><p className="text-sm font-medium text-slate-900">Admin User</p><p className="text-xs text-slate-500">System Administrator</p></div></div><p className="mt-3 text-xs text-slate-400">ClassPilot v1.0.0</p></div></aside>;
}
