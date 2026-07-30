export function todayStr(): string {
  return new Date().toISOString().split("T")[0];
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getMonth() + 1}月${d.getDate()}日`;
}

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getMonthCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const days = getDaysInMonth(year, month);
  const calendar: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) calendar.push(null);
  for (let i = 1; i <= days; i++) calendar.push(i);
  return calendar;
}
