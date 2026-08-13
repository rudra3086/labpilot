export type StudentStatus = 'online' | 'offline' | 'idle';

export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  status: StudentStatus;
  currentApplication: string;
  activityStatus: string;
  lastActive: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedStudents: string;
  deadline: string;
  status: 'In Progress' | 'Pending' | 'Completed';
}

export interface NotificationItem {
  id: string;
  category: 'info' | 'warning' | 'critical' | 'activity' | 'system';
  message: string;
  time: string;
}

export interface ActivityEvent {
  id: string;
  time: string;
  student: string;
  activity: string;
  details: string;
}

export interface AppPolicy {
  id: string;
  application: string;
  status: 'Allowed' | 'Restricted';
  studentsUsing: number;
  policy: string;
}

export interface AttendanceRow {
  id: string;
  student: string;
  rollNumber: string;
  joinTime: string;
  leaveTime: string;
  duration: string;
  status: 'Present' | 'Late' | 'Left Early';
}
