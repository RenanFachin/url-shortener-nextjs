import { PrismaClient, Prisma } from "../lib/generated/prisma"

const prisma = new PrismaClient()

const userData: Prisma.URLCreateInput[] = [
  {
    originalUrl: "https://www.google.com",
    shorCode: "123456",
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