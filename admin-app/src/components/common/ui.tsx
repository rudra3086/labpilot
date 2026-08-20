import type { ReactNode } from 'react';
import { Search } from 'lucide-react';
import type { AccountStatus, ActivityStatus, SessionStatus } from '../../types/admin';

export const card = 'rounded-xl border border-slate-200 bg-white shadow-sm';

export function PageHeader({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return <div className="mb-6 flex flex-wrap items-start justify-between gap-4"><div><h1 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h1><p className="mt-1 text-sm text-slate-500">{description}</p></div>{action}</div>;
}

export function SearchInput({ value, onChange, placeholder = 'Search...' }: { value: string; onChange: (value: string) => void; placeholder?: string }) {
  return <div className="relative"><Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" /><input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" /></div>;
}

export function StatusBadge({ status }: { status: AccountStatus | SessionStatus | ActivityStatus }) {
  const styles: Record<string, string> = { Active: 'bg-emerald-50 text-emerald-700', Success: 'bg-emerald-50 text-emerald-700', Completed: 'bg-sky-50 text-sky-700', Inactive: 'bg-slate-100 text-slate-600', Ended: 'bg-slate-100 text-slate-600', Suspended: 'bg-rose-50 text-rose-700', Warning: 'bg-amber-50 text-amber-700', Info: 'bg-indigo-50 text-indigo-700' };
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${styles[status] ?? 'bg-slate-100 text-slate-600'}`}>{status}</span>;
}

export function EmptyState({ message }: { message: string }) { return <div className={`${card} border-dashed p-10 text-center text-sm text-slate-500`}>{message}</div>; }
