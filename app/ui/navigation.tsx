"use client";

import {
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
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
import Link from "next/link";

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

const navBarClasses = {
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
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered
      isBlurred={false}
      classNames={navBarClasses}
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
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem
              key="profile"
              textValue="Profile"
              className="h-14 gap-2"
            >
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings" textValue="My Settings">
              <Link href="settings">My Settings</Link>
            </DropdownItem>
            <DropdownItem key="help" textValue="Help & Feedback">
              <Link href="help">Help & Feedback</Link>
            </DropdownItem>
            <DropdownItem key="logout" textValue="Log Out" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu>
        <Links
          items={menuItems}
          ParentComponent={NavbarMenuItem}
          closeMenu={closeMenu}
        />
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
