import type { AttendanceRow } from '../types';

export const attendanceRows: AttendanceRow[] = [
  { id: 'at1', student: 'Rudra Patel', rollNumber: '24CS075', joinTime: '09:58 AM', leaveTime: '-', duration: '2h 02m', status: 'Present' },
  { id: 'at2', student: 'Aarya Shah', rollNumber: '24CS041', joinTime: '10:01 AM', leaveTime: '-', duration: '1h 59m', status: 'Present' },
  { id: 'at3', student: 'Nisarg Mehta', rollNumber: '24CS063', joinTime: '10:12 AM', leaveTime: '-', duration: '1h 48m', status: 'Late' },
  { id: 'at4', student: 'Dhruv Trivedi', rollNumber: '24CS019', joinTime: '09:57 AM', leaveTime: '10:44 AM', duration: '47m', status: 'Left Early' },
];
