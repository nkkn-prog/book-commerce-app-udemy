"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Header = () => {

  // useSession()は Next.js の認証フックで、以下の形式のオブジェクトを返す。
  // {
  //   data: {
  //     user: { ... },
  //     expires: "..."
  //   },
  //   status: "authenticated" | "loading" | "unauthenticated"
  // }

  const { data:session } = useSession();
  const user = session?.user;

  console.log(user)
  return (
    <header className="bg-slate-600 text-gray-100 shadow-lg">
      <nav className="flex items-center justify-between p-4">
        <Link href={"/"} className="text-xl font-bold">
          Book Commerce
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            ホーム
          </Link>
          <Link
            href="/login"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            ログイン
          </Link>
          {user ? (
            <button
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => signOut({callbackUrl:"/login"})}>ログアウト</button>
          ) : (
            ""
          )}

          <Link href={`/profile`}>
            <Image
              width={50}
              height={50}
              alt="profile_icon"
              src={user?.image || "/default_icon.png"}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;