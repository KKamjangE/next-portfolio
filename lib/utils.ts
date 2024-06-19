import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// clsx 조건부 클래스 조작
// twMerge 클래스 우선순위 병합
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
