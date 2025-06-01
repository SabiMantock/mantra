import { ChartData } from "../lib/types/types";

export const categories = [
  'Food',
  'Transport',
  'Entertainment',
  'Shopping',
  'Health',
  'Travel',
  'Utilities',
  'Education',
  'Other',
];

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const mockMonthlyExpenseData: ChartData[] = [
  { name: 'Jan', expenses: 1200, income: 2500 },
  { name: 'Feb', expenses: 1350, income: 2500 },
  { name: 'Mar', expenses: 1450, income: 2800 },
  { name: 'Apr', expenses: 1650, income: 2800 },
  { name: 'May', expenses: 1500, income: 2900 },
  { name: 'Jun', expenses: 1380, income: 2900 },
];