import type { DashboardStatistics, UsageAnalytics } from '../types/admin';

export const dashboardStatistics: DashboardStatistics = {
  totalTeachers: 48,
  activeTeachers: 21,
  inactiveTeachers: 27,
  totalInstitutions: 6,
  activeSessions: 8,
  totalSessions: 342,
  connectedStudents: 156,
};

export const usageAnalytics: UsageAnalytics = {
  dailyActiveTeachers: 21,
  weeklyActiveTeachers: 38,
  monthlyActiveTeachers: 46,
  totalSessions: 342,
  averageSessionDuration: '1h 42m',
  connectedStudents: 156,
  peakConcurrentTeachers: 14,
  mostActiveInstitution: 'CHARUSAT',
};

export const dailyUsage = [34, 42, 38, 51, 46, 58, 63, 55, 68, 61, 74, 70];
