import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add to lib/utils.ts:
export function getDifficulty(levelNumber: number): string {
  if (levelNumber <= 3) return "Beginner";
  if (levelNumber <= 7) return "Intermediate";
  return "Advanced";
}
