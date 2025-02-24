"use server"

import db from "@/lib/db"

export async function getCareers() {
    return await db.career.findMany()
}

export async function getEducations() {
    return await db.education.findMany()
}

export async function getShares() {
    return await db.share.findMany()
}
