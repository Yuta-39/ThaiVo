/**
 * Utility for managing the daily 'Fire' bonus (streak/login bonus)
 * 1 Fire per day, resets at 6:00 AM.
 */

export interface FireData {
  fireCount: number;
  lastCompletedAt: string | null; // ISO Date String
}

const STORAGE_KEY = 'thaivo_fire_data';

/**
 * Returns adjusted Date representing the day starting at 6:00 AM.
 * (Subtract 6 hours so 00:00 - 05:59 falls into the previous day)
 */
function getAdjustedDayString(date: Date): string {
  const adjusted = new Date(date.getTime() - 6 * 60 * 60 * 1000);
  const yyyy = adjusted.getFullYear();
  const mm = String(adjusted.getMonth() + 1).padStart(2, '0');
  const dd = String(adjusted.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export function getFireData(): FireData {
  const dataStr = localStorage.getItem(STORAGE_KEY);
  if (!dataStr) {
    return { fireCount: 0, lastCompletedAt: null };
  }
  try {
    const parsed = JSON.parse(dataStr);
    return {
      fireCount: typeof parsed.fireCount === 'number' ? parsed.fireCount : 0,
      lastCompletedAt: parsed.lastCompletedAt || null,
    };
  } catch {
    return { fireCount: 0, lastCompletedAt: null };
  }
}

/**
 * Check if the user can earn a Fire bonus today.
 */
export function canEarnFireToday(): boolean {
  const data = getFireData();
  if (!data.lastCompletedAt) return true;

  const todayStr = getAdjustedDayString(new Date());
  const lastStr = getAdjustedDayString(new Date(data.lastCompletedAt));

  return todayStr !== lastStr;
}

/**
 * Attempt to increment fire. Returns new count and if it was successful.
 */
export function recordFireEarned(): { fireCount: number; earned: boolean } {
  const data = getFireData();
  const todayStr = getAdjustedDayString(new Date());
  
  if (data.lastCompletedAt) {
    const lastStr = getAdjustedDayString(new Date(data.lastCompletedAt));
    if (todayStr === lastStr) {
      // Already earned today
      return { fireCount: data.fireCount, earned: false };
    }
  }

  const newCount = data.fireCount + 1;
  const newData: FireData = {
    fireCount: newCount,
    lastCompletedAt: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  return { fireCount: newCount, earned: true };
}
