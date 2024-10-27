import { Prisma } from "@prisma/client";

export const postDateInclude = {
  user: {
    select: {
      username: true,
      displayName: true,
      avatarUrl: true,
    },
  },
} satisfies Prisma.PostInclude;

export type PostDate = Prisma.PostGetPayload<{
  include: typeof postDateInclude;
}>;
