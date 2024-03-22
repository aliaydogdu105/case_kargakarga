import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <Link href="/login" className=" border p-2 bg-slate-300 hover:bg-slate-400 rounded-md">
        Login please
      </Link>
    </div>
  );
}
