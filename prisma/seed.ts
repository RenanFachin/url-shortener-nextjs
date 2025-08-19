import { PrismaClient, Prisma } from "../lib/generated/prisma"

const prisma = new PrismaClient()
import { nanoid } from "nanoid"

const userData: Prisma.URLCreateInput[] = [
  {
    originalUrl: "https://www.google.com",
    shorCode: nanoid(6),
    createAt: new Date(),
    visits: 0,
  },
]

export async function main() {
  for (const u of userData) {
    await prisma.uRL.create({ data: u })
  }
}

main()