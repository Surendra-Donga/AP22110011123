import Image from "next/image";
import NavBar from "./components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <NavBar />
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="flex flex-col space-y-4 items-center">
        <Link href="/top-users" className="px-6 py-3 bg-blue-500 text-white rounded-lg">Top Users</Link>
        <Link href="/trending-posts" className="px-6 py-3 bg-green-500 text-white rounded-lg">Trending Posts</Link>
        <Link href="/feed" className="px-6 py-3 bg-purple-500 text-white rounded-lg">Live Feed</Link>
      </div>
    </div>
    </>
  );
}
