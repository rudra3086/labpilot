import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Sidebar, type AdminPage } from './components/layout/Sidebar';
import { ActivityPage, AnalyticsPage, DashboardPage, InstitutionsPage, SessionsPage, SettingsPage, TeachersPage } from './pages/AdminPages';

const pageTitles: Record<AdminPage, string> = {
  dashboard: 'Dashboard',
  teachers: 'Teachers',
  institutions: 'Institutions',
  sessions: 'Sessions',
  analytics: 'Usage Analytics',
  activity: 'Activity Logs',
  settings: 'Settings',
};

function App() {
  const [activePage, setActivePage] = useState<AdminPage>('dashboard');

  function renderPage() {
    switch (activePage) {
      case 'teachers': return <TeachersPage />;
      case 'institutions': return <InstitutionsPage />;
      case 'sessions': return <SessionsPage />;
      case 'analytics': return <AnalyticsPage />;
      case 'activity': return <ActivityPage />;
      case 'settings': return <SettingsPage />;
      default: return <DashboardPage onViewTeachers={() => setActivePage('teachers')} />;
    }
  }

  return <div className="flex min-h-screen bg-slate-100 text-slate-900"><Sidebar activePage={activePage} onNavigate={setActivePage} /><div className="flex min-w-0 flex-1 flex-col"><Header title={pageTitles[activePage]} /><main className="flex-1 overflow-auto p-6">{renderPage()}</main></div></div>;
}

export default App;
