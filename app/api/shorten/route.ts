import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { nanoid } from "nanoid";

export async function POST(request: NextRequest){
  const {url} = await request.json()

  const shortCode = nanoid(6)

  const shortCodeURl = await prisma.uRL.create({
    data: {
      originalUrl: url,
      shorCode: shortCode,
      createAt: new Date(),
      visits: 0,
    }
  })

  return NextResponse.json({ shortCode: shortCodeURl.shorCode })
}