import type { ActivityEvent } from '../types';

export const activities: ActivityEvent[] = [
  { id: 'a1', time: '10:02 AM', student: 'Rudra Patel', activity: 'Application', details: 'VS Code opened' },
  { id: 'a2', time: '10:05 AM', student: 'Student 04', activity: 'Status', details: 'Became idle' },
  { id: 'a3', time: '10:08 AM', student: 'Student 12', activity: 'Session', details: 'Joined session' },
  { id: 'a4', time: '10:11 AM', student: 'Aarya Shah', activity: 'Website', details: 'Opened stackoverflow.com' },
  { id: 'a5', time: '10:14 AM', student: 'Milan Patel', activity: 'Task', details: 'Submitted partial solution' },
];
