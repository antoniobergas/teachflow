'use client'

import {
  HomeIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Link {
  name: string;
  href: string;
  icon: any;
}

const links: Link[] = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Planning",
    href: "/planning",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Evaluation",
    href: "/evaluation",
    icon: UserIcon,
  },
];

export function ActiveLink(link: Link){
  const pathName = usePathname();
  const LinkIcon = link.icon;
  const style = {
    color: pathName === link.href ? "white" : "black",
  }
  return (
    <Link
      key={link.name}
      href={link.href}
      // style={style}
      className="flex items-center p-2 my-2 hover:bg-sky-300 hover:bg-opacity-40 "
    >
      <LinkIcon className="w-6" />
      <p className="ml-2 text-lg">{link.name}</p>
    </Link>
  );
}

export function Links() {
  return (
    <>
      {links.map((link) => {
        return ActiveLink(link)
      })}
    </>
  );
}
