import type { ReactNode } from 'react';
import { X } from 'lucide-react';

export function Modal({ title, children, onClose, footer }: { title: string; children: ReactNode; onClose: () => void; footer?: ReactNode }) {
  return <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/40 p-4"><div className="max-h-[90vh] w-full max-w-xl overflow-auto rounded-2xl bg-white shadow-2xl"><div className="flex items-center justify-between border-b border-slate-100 px-6 py-4"><h2 className="text-lg font-semibold text-slate-950">{title}</h2><button aria-label="Close dialog" onClick={onClose} className="rounded-lg p-1 text-slate-500 hover:bg-slate-100"><X className="h-5 w-5" /></button></div><div className="p-6">{children}</div>{footer && <div className="flex justify-end gap-2 border-t border-slate-100 px-6 py-4">{footer}</div>}</div></div>;
}
