import PostEditor from "@/components/post/editor/PostEditor";

export default function Home() {
  return (
    <main className="h-[200vh] w-full bg-white-50">
      <div className="w-full">
        <PostEditor />
      </div>
    </main>
  );
}
