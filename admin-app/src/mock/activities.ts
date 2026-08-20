import type { ActivityLog } from '../types/admin';

export const mockActivities: ActivityLog[] = [
  { id: 'ACT-001', timestamp: '10:02 AM', user: 'Dr. Amit Patel', role: 'Teacher', activity: 'Session Started', details: 'Computer Networks Lab', status: 'Success' },
  { id: 'ACT-002', timestamp: '10:05 AM', user: 'Admin User', role: 'Administrator', activity: 'Teacher Deactivated', details: 'TCH-004', status: 'Warning' },
  { id: 'ACT-003', timestamp: '09:48 AM', user: 'Prof. Priya Shah', role: 'Teacher', activity: 'Registered', details: 'New platform account', status: 'Success' },
  { id: 'ACT-004', timestamp: 'Yesterday, 04:10 PM', user: 'System', role: 'System', activity: 'Session Completed', details: 'Database Management Lab', status: 'Info' },
  { id: 'ACT-005', timestamp: 'Yesterday, 02:24 PM', user: 'Admin User', role: 'Administrator', activity: 'Institution Updated', details: 'CHARUSAT contact details', status: 'Success' },
  { id: 'ACT-006', timestamp: '15 Aug, 12:35 PM', user: 'Prof. Harsh Mehta', role: 'Teacher', activity: 'Session Ended', details: 'Data Structures Workshop', status: 'Success' },
];
