export function getReadingTime(text: string): number {
  if (!text) return 0;

  const wpm = 265;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}
