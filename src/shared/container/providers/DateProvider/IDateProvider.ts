interface IDateProvider {
  compare(start_date: Date, end_date: Date, unit?: any): number;
  convertToUTC(date: Date): string;
  dateNow(): Date;
  addDays(days: number): Date;
  addHours(hours: number): Date;
}

export { IDateProvider };
