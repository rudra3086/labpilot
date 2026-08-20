import type { Teacher } from '../types/admin';

export const mockTeachers: Teacher[] = [
  { id: 'TCH-001', name: 'Dr. Amit Patel', email: 'amit.patel@example.com', phone: '+91 98765 12001', employeeId: 'EMP-CP-1042', institution: 'CHARUSAT', department: 'Computer Science', status: 'Active', registrationDate: '10 Aug 2026', lastActive: 'Today, 10:30 AM', sessionsConducted: 42 },
  { id: 'TCH-002', name: 'Prof. Priya Shah', email: 'priya.shah@example.com', phone: '+91 98765 12002', employeeId: 'EMP-CP-1043', institution: 'CHARUSAT', department: 'Information Technology', status: 'Active', registrationDate: '08 Aug 2026', lastActive: 'Today, 09:52 AM', sessionsConducted: 35 },
  { id: 'TCH-003', name: 'Dr. Neel Joshi', email: 'neel.joshi@example.com', phone: '+91 98765 12003', employeeId: 'EMP-CP-1044', institution: 'Nirma University', department: 'Computer Engineering', status: 'Inactive', registrationDate: '28 Jul 2026', lastActive: '12 Aug 2026', sessionsConducted: 27 },
  { id: 'TCH-004', name: 'Ms. Riya Desai', email: 'riya.desai@example.com', phone: '+91 98765 12004', employeeId: 'EMP-CP-1045', institution: 'DA-IICT', department: 'Data Science', status: 'Suspended', registrationDate: '22 Jul 2026', lastActive: '09 Aug 2026', sessionsConducted: 18 },
  { id: 'TCH-005', name: 'Prof. Harsh Mehta', email: 'harsh.mehta@example.com', phone: '+91 98765 12005', employeeId: 'EMP-CP-1046', institution: 'PDEU', department: 'Computer Science', status: 'Active', registrationDate: '15 Jul 2026', lastActive: 'Today, 08:40 AM', sessionsConducted: 51 },
  { id: 'TCH-006', name: 'Dr. Kavita Trivedi', email: 'kavita.trivedi@example.com', phone: '+91 98765 12006', employeeId: 'EMP-CP-1047', institution: 'CHARUSAT', department: 'Electronics', status: 'Active', registrationDate: '04 Jul 2026', lastActive: 'Yesterday, 04:15 PM', sessionsConducted: 29 },
];
