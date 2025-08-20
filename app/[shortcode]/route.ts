import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";


function ensureHttp(url: string) {
  if (!/^https?:\/\//i.test(url)) return `https://${url}`;
  return url;
}

export async function GET(_req: NextRequest, ctx: { params: Promise<{ shortcode: string }> }) {
  const { shortcode } = await ctx.params;

  const record = await prisma.uRL.findUnique({
    where: { shorCode: shortcode },
    select: { originalUrl: true, id: true },
  });

 if (!record) {
    return NextResponse.redirect(new URL("/not-found", _req.url), 302);
  }

  const location = ensureHttp(record.originalUrl);

  const hdrs = await headers();
  const reqHost = hdrs.get("host");
  try {
    const u = new URL(location);
    if (u.host === reqHost) {
      return NextResponse.json(
        { error: "Destino aponta para o mesmo host (loop de redirect bloqueado)." },
        { status: 400 },
      );
    }
  } catch {
    return NextResponse.json({ error: "URL inválida." }, { status: 400 });
  }

  await prisma.uRL.update({
    where: { shorCode: shortcode },
    data: { visits: { increment: 1 } },
  });

  return NextResponse.redirect(location, 302);
}
