import type { NotificationItem } from '../types';

export const notifications: NotificationItem[] = [
  { id: 'n1', category: 'activity', message: 'Student 07 joined the session.', time: '10:08 AM' },
  { id: 'n2', category: 'warning', message: 'Student 12 has been idle for 5 minutes.', time: '10:12 AM' },
  { id: 'n3', category: 'activity', message: 'Student 04 completed a task.', time: '10:15 AM' },
  { id: 'n4', category: 'critical', message: 'Student 15 disconnected.', time: '10:17 AM' },
  { id: 'n5', category: 'system', message: 'Monitoring refresh cycle set to 10s.', time: '10:20 AM' },
  { id: 'n6', category: 'info', message: 'Session backup snapshot is available.', time: '10:22 AM' },
];
