import PostEditor from "@/components/post/editor/PostEditor";
import Post from "@/components/post/Post";
import TrendsSidebar from "@/components/TrendsSidebar";
import prisma from "@/lib/prisma";
import { postDateInclude } from "@/lib/types";

export default async function Home() {
  const post = await prisma.post.findMany({
    include: postDateInclude,
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className=" w-full min-w-0 flex gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
        {post.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <TrendsSidebar />
    </main>
  );
}
