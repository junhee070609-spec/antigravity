export type Category = '식비' | '교통비' | '쇼핑' | '주거비' | '문화/여가' | '기타';

export interface Expense {
  id: string;
  amount: number;      // 지출 금액 (원)
  usage: string;       // 사용처
  date: string;        // 날짜 (YYYY-MM-DD)
  category: Category;  // 카테고리
  memo?: string;       // 메모 (선택)
}

export const CATEGORIES: Category[] = ['식비', '교통비', '쇼핑', '주거비', '문화/여가', '기타'];

// Tailwind CSS v4 스타일링에 매핑될 색상 클래스
export const CATEGORY_THEMES: Record<Category, { text: string; bg: string; border: string; accent: string }> = {
  '식비': {
    text: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-950/30',
    border: 'border-red-100 dark:border-red-900/30',
    accent: 'bg-red-500'
  },
  '교통비': {
    text: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-100 dark:border-blue-900/30',
    accent: 'bg-blue-500'
  },
  '쇼핑': {
    text: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-100 dark:border-amber-900/30',
    accent: 'bg-amber-500'
  },
  '주거비': {
    text: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-100 dark:border-emerald-900/30',
    accent: 'bg-emerald-500'
  },
  '문화/여가': {
    text: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    border: 'border-violet-100 dark:border-violet-900/30',
    accent: 'bg-violet-500'
  },
  '기타': {
    text: 'text-slate-600 dark:text-slate-400',
    bg: 'bg-slate-50 dark:bg-slate-900/30',
    border: 'border-slate-100 dark:border-slate-800/30',
    accent: 'bg-slate-500'
  }
};
