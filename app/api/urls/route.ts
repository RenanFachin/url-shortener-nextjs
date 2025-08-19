import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){

  const urls = await prisma.uRL.findMany({
    orderBy: {
      createAt: "desc",
    },
    take: 5,
  })

  return NextResponse.json(urls)
}