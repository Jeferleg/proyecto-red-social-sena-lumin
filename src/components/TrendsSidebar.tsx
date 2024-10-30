import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { userDateSelect } from "@/lib/types";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import UserAvatar from "./UserAvatar";
import { Button } from "./ui/button";

export default function TrendsSidebar() {
  return (
    <div className="sticky top [5.25rem] hidden md:block lg:w-80 w-72 h-fit flex-none space-y-5">
      <Suspense fallback={<Loader2 className="mx-auto animate-spin" />}>
        <WhoToFoollow />
      </Suspense>
    </div>
  );
}

async function WhoToFoollow() {
  const { user } = await validateRequest();

  if (!user) return null;

  const usersToFollow = await prisma.user.findMany({
    where: {
      NOT: {
        id: user?.id,
      },
    },
    select: userDateSelect,
    take: 5,
  });

  return (
    <div className="space-y-5 rounded-2xl bg-card p-5 shadow-sm">
      <div className="text-xl font-bold">A quién seguir</div>
      {usersToFollow.map((user) => (
        <div key={user.id} className="flex items-center justify-between gap-3">
          <Link
            href={`/users/${user.username}`}
            className=" flex items-center gap-3"
          >
            <UserAvatar avatarUrl={user.avatarUrl} className="flex-none" />
            <div>
              <p className="line-clamp-1 break-all font-semibold hover:underline">
                {user.displayName}
                </p>
                <p className="line-clamp-1 break-all text-muted-foreground">
                    @{user.username}
                </p>
            </div>
          </Link>
          <Button>Seguir</Button>
        </div>
      ))}
    </div>
  );
}
