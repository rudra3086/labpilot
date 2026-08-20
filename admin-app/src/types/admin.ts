export type AccountStatus = 'Active' | 'Inactive' | 'Suspended';
export type SessionStatus = 'Active' | 'Completed' | 'Ended';
export type ActivityStatus = 'Success' | 'Warning' | 'Info';

export interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  employeeId: string;
  institution: string;
  department: string;
  status: AccountStatus;
  registrationDate: string;
  lastActive: string;
  sessionsConducted: number;
}

export interface Institution {
  id: string;
  name: string;
  location: string;
  teachers: number;
  activeTeachers: number;
  totalSessions: number;
  registrationDate: string;
  status: AccountStatus;
  contactEmail: string;
  contactNumber: string;
}

export interface ClassroomSession {
  id: string;
  name: string;
  teacher: string;
  institution: string;
  startTime: string;
  endTime: string;
  duration: string;
  students: number;
  status: SessionStatus;
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  user: string;
  role: 'Teacher' | 'Administrator' | 'System';
  activity: string;
  details: string;
  status: ActivityStatus;
}

export interface DashboardStatistics {
  totalTeachers: number;
  activeTeachers: number;
  inactiveTeachers: number;
  totalInstitutions: number;
  activeSessions: number;
  totalSessions: number;
  connectedStudents: number;
}

export interface UsageAnalytics {
  dailyActiveTeachers: number;
  weeklyActiveTeachers: number;
  monthlyActiveTeachers: number;
  totalSessions: number;
  averageSessionDuration: string;
  connectedStudents: number;
  peakConcurrentTeachers: number;
  mostActiveInstitution: string;
}
