"use client"
import Link from "next/link";

export default function Home() {

  const menus = [
    {
      link: "login",
      title: "Login"
    },
    {
      link: "signUp",
      title: "Sign Up"
    }
  ]
  return (
    <div>
      {menus.map((menu, index) => {
        return (
          <Link key={menu.link + index} href={menu.link}>
            {menu.title}
          </Link>
        )
      })}
    </div>
  );
}
