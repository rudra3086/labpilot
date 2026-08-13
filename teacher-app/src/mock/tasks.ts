import type { Task } from '../types';

export const tasks: Task[] = [
  {
    id: 't1',
    title: 'Implement Binary Search',
    description: 'Build and test iterative and recursive binary search in C++.',
    assignedStudents: 'Everyone',
    deadline: '11:30 AM',
    status: 'In Progress',
  },
  {
    id: 't2',
    title: 'OSI Layer Mapping Worksheet',
    description: 'Submit protocol-to-layer mapping sheet with examples.',
    assignedStudents: 'Group A',
    deadline: '12:15 PM',
    status: 'Pending',
  },
  {
    id: 't3',
    title: 'Socket Programming Demo',
    description: 'Run local TCP client-server demo and upload screenshots.',
    assignedStudents: 'Selected students',
    deadline: '01:00 PM',
    status: 'Completed',
  },
];
