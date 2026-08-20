import type { ClassroomSession } from '../types/admin';

export const mockSessions: ClassroomSession[] = [
  { id: 'SES-0241', name: 'Computer Networks Lab', teacher: 'Dr. Amit Patel', institution: 'CHARUSAT', startTime: 'Today, 09:00 AM', endTime: '-', duration: '1h 30m', students: 24, status: 'Active' },
  { id: 'SES-0240', name: 'Database Management Lab', teacher: 'Prof. Priya Shah', institution: 'CHARUSAT', startTime: 'Today, 08:30 AM', endTime: 'Today, 10:00 AM', duration: '1h 30m', students: 31, status: 'Completed' },
  { id: 'SES-0239', name: 'Data Structures Workshop', teacher: 'Prof. Harsh Mehta', institution: 'PDEU', startTime: 'Yesterday, 02:00 PM', endTime: 'Yesterday, 03:45 PM', duration: '1h 45m', students: 28, status: 'Ended' },
  { id: 'SES-0238', name: 'Web Technology Lab', teacher: 'Dr. Kavita Trivedi', institution: 'CHARUSAT', startTime: 'Yesterday, 10:00 AM', endTime: 'Yesterday, 12:00 PM', duration: '2h', students: 19, status: 'Completed' },
  { id: 'SES-0237', name: 'Python Programming', teacher: 'Dr. Neel Joshi', institution: 'Nirma University', startTime: '15 Aug 2026, 11:00 AM', endTime: '15 Aug 2026, 12:30 PM', duration: '1h 30m', students: 36, status: 'Completed' },
];
