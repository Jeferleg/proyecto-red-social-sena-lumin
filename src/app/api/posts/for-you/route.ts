import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { postDateInclude } from "@/lib/types";

export async function GET() {
  try {
    const { user } = await validateRequest();

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const posts = await prisma.post.findMany({
      include: postDateInclude,
      orderBy: { createdAt: "desc" },
    });

    return Response.json(posts);
  } catch (error) {
    console.error();
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}