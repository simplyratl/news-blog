import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/shadcn/ui/avatar";
import Link from "next/link";
import { Switch } from "@/shadcn/ui/switch";
import ThemeSwitcher from "@/app/components/navbar/theme-switcher";

const links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Articles",
    url: "/articles",
  },
];

const Navbar = () => {
  return (
    <header>
      <div className="flex gap-4 border-b border-neutral-800 items-center justify-between">
        <div className="flex gap-4 items-center py-8">
          <div>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/4726921?v=4" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>

          <nav className="ml-6">
            <ul className="flex gap-4">
              {links.map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className="text-base dark:text-[#8B8B8B]"
                  >
                    {link.label.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
