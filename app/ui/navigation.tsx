"use client";

import {
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
import Links from "./links";

const menuItems = [
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

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred={false}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-secondary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-xl">TeachFlow</p>
          <AcademicCapIcon className="w-10 ml-2" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Links items={menuItems} ParentComponent={NavbarItem} />
      </NavbarContent>
      <NavbarMenu>
        <Links items={menuItems} ParentComponent={NavbarMenuItem} />
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
