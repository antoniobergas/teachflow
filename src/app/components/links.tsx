import {
  HomeIcon,
  ClipboardDocumentCheckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItem {
  name: string;
  href: string;
  icon: any;
}

interface LinksProps {
  items: LinkItem[];
  ParentComponent: any; // Replace 'any' with the actual type if known
}

export default function Links({ items, ParentComponent }: LinksProps) {
  const pathName = usePathname();
  return (
    <>
      {items.map((link: any, index: number) => {
        const LinkIcon = link.icon;
        const selected = pathName === link.href;
        return (
          <ParentComponent key={index} isActive={selected}>
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center p-2 my-2 text-black"
            >
              <LinkIcon className="w-6 " />
              <p className="ml-2 ">{link.name}</p>
            </Link>
          </ParentComponent>
        );
      })}
    </>
  );
}
