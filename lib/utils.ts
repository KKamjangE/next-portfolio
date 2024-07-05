import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// clsx 조건부 클래스 조작
// twMerge 클래스 우선순위 병합
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatToTimeAge(date: string): string {
    const dayInMs = 1000 * 60 * 60 * 24
    const time = new Date(date).getTime()
    const now = new Date().getTime()
    const diff = Math.round((time - now) / dayInMs)

    const formatter = new Intl.RelativeTimeFormat("ko")

    return formatter.format(diff, "days")
}

export function formatToKRDate(date: Date): string {
    const formatter = new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    return formatter.format(date)
}
