import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { FollowerInfo } from "@/lib/types";

export async function GET(
  req: Request,
  { params: { userId } }: { params: { userId: string } }
) {
  try {
    const { user: loggedIdUser } = await validateRequest();

    if (!loggedIdUser) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        Followers: {
          where: {
            followerId: loggedIdUser.id,
          },
          select: {
            followerId: true,
          },
        },
        _count: {
          select: {
            Followers: true,
          },
        },
      },
    });

    if (!user) {
      return Response.json({ error: "User no fount" }, { status: 404 });
    }

    const data: FollowerInfo = {
      followers: user._count.Followers,
      isFollowedByUser: !!user.Followers.length,
    };

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params: { userId } }: { params: { userId: string } }
) {
  try {
    const { user: loggedIdUser } = await validateRequest();

    if (!loggedIdUser) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.follow.upsert({
      where: {
        followerId_followingId: {
          followerId: loggedIdUser.id,
          followingId: userId,
        },
      },
      create: {
        followerId: loggedIdUser.id,
        followingId: userId,
      },
      update: {},
    });

    return new Response();
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params: { userId } }: { params: { userId: string } }
) {
  try {
    const { user: loggedIdUser } = await validateRequest();

    if (!loggedIdUser) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.follow.deleteMany({
      where: {
        followerId: loggedIdUser.id,
        followingId: userId,
      },
    });

    return new Response();
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
