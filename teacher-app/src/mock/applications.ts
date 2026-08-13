import type { AppPolicy } from '../types';

export const applicationPolicies: AppPolicy[] = [
  { id: 'app1', application: 'Visual Studio Code', status: 'Allowed', studentsUsing: 16, policy: 'Learning Tools' },
  { id: 'app2', application: 'Google Chrome', status: 'Allowed', studentsUsing: 20, policy: 'Research Websites Only' },
  { id: 'app3', application: 'Windows Terminal', status: 'Allowed', studentsUsing: 9, policy: 'Programming Tasks' },
  { id: 'app4', application: 'Discord', status: 'Restricted', studentsUsing: 2, policy: 'Blocked During Session' },
  { id: 'app5', application: 'Steam', status: 'Restricted', studentsUsing: 0, policy: 'Blocked During Session' },
];
