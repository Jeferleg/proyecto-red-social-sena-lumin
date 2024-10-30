import { Prisma } from "@prisma/client";

export const userDateSelect = {
  id: true,
  username: true,
  displayName: true,
  avatarUrl: true,
} satisfies Prisma.UserSelect;

export const postDateInclude = {
  user: {
    select: userDateSelect,
  },
} satisfies Prisma.PostInclude;

export type PostDate = Prisma.PostGetPayload<{
  include: typeof postDateInclude;
}>;
