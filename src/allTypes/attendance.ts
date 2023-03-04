export interface IAttendance {
  id: number;
  userId: number;
  checkIn: Date | null;
  log: Date | null;
  todayTime: number;
}
