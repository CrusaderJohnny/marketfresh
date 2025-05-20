"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p>Hello World, What the....</p>
        <button className="w-50 h-15 bg-white text-black border-2" onClick={() => router.push("marketmap")}>Tika taka toey</button>
        <button className="w-50 h-15 bg-white text-black border-2" onClick={() => router.push("map")}>Map button</button>
        <button className="w-50 h-15 bg-white text-black border-2" onClick={() => router.push("stickyHeaderAndCompTest")}>Header</button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
