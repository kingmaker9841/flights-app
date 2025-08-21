import { DAYS, MONTHS } from "../config/constants";

export const formatDateDisplay = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

export const formatDateToDayDateMonth = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const months = MONTHS.map((m) => m.slice(0, 3));
  return `${DAYS[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
};

export const adjustDate = (dateString, days, setDate) => {
  if (!dateString) return;
  const date = new Date(dateString);
  date.setDate(date.getDate() + days);
  const newDateString = date.toISOString().split("T")[0];
  setDate(newDateString);
};

export const addDays = (dateString, days) => {
  if (!dateString) {
    const today = new Date();
    today.setDate(today.getDate() + days);
    return today.toISOString().split("T")[0];
  }
  const date = new Date(dateString);
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
};

export function formatTimeHHMM(isoOrTimeString) {
  try {
    if (!isoOrTimeString) return "";
    // If already in HH:MM format
    if (/^\d{1,2}:\d{2}/.test(isoOrTimeString)) return isoOrTimeString;

    const date = new Date(isoOrTimeString);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  } catch {
    return String(isoOrTimeString);
  }
}

export const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (month, year) => {
  return new Date(year, month, 1).getDay();
};

export const formatDateString = (year, month, day) => {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
};

export const isDateSelected = (dateStr, departDate, returnDate) => {
  return dateStr === departDate || dateStr === returnDate;
};

export const isDateInRange = (dateStr, departDate, returnDate) => {
  if (!departDate || !returnDate) return false;
  return dateStr >= departDate && dateStr <= returnDate;
};

export const generateMonths = () => {
  const months = [];
  const today = new Date();

  for (let i = 0; i < 13; i++) {
    const date = new Date(today.getFullYear(), today.getMonth() + i, 1);
    months.push({
      month: date.getMonth(),
      year: date.getFullYear(),
      name: MONTHS[date.getMonth()],
      fullName: `${MONTHS[date.getMonth()]} ${date.getFullYear()}`,
    });
  }
  return months;
};
