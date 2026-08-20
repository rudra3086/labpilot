import type { Institution } from '../types/admin';

export const mockInstitutions: Institution[] = [
  { id: 'INS-001', name: 'CHARUSAT', location: 'Anand, Gujarat', teachers: 18, activeTeachers: 9, totalSessions: 142, registrationDate: '12 Jun 2026', status: 'Active', contactEmail: 'admin@charusat.ac.in', contactNumber: '+91 2697 265011' },
  { id: 'INS-002', name: 'Nirma University', location: 'Ahmedabad, Gujarat', teachers: 12, activeTeachers: 5, totalSessions: 86, registrationDate: '20 Jun 2026', status: 'Active', contactEmail: 'it@nirmauni.ac.in', contactNumber: '+91 2717 241900' },
  { id: 'INS-003', name: 'DA-IICT', location: 'Gandhinagar, Gujarat', teachers: 8, activeTeachers: 4, totalSessions: 64, registrationDate: '28 Jun 2026', status: 'Active', contactEmail: 'office@daiict.ac.in', contactNumber: '+91 79 30510500' },
  { id: 'INS-004', name: 'PDEU', location: 'Gandhinagar, Gujarat', teachers: 7, activeTeachers: 2, totalSessions: 32, registrationDate: '05 Jul 2026', status: 'Inactive', contactEmail: 'admin@pdpu.ac.in', contactNumber: '+91 79 23275060' },
];
