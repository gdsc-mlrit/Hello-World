"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Logo911 } from "@/components/logo";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Content", "FAQs"];

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      className="bg-white"
      height="5rem"
    >
      <NavbarBrand>
        <Logo911 />
      </NavbarBrand>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      <NavbarContent
        className="hidden sm:flex gap-10 font-semibold"
        justify="center"
      >
        <NavbarItem className="text-sm">
          <Link color="foreground" href="#" className="text-xl">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-xl">Customers</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-xl">
            FAQs
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="max-sm:hidden">
        <NavbarItem>
          <Button as={Link} href="#" variant="flat" radius="full" className="text-xl border">
            Sponsor Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="gap-10 justify-center items-center max-h-[77vh]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-black font-bold text-xl" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

        <Button
          as={Link}
          href="#"
          variant="flat"
          radius="full"
          className="font-bold sm:text-2xl text-lg"
          size="lg"
        >
          Sponsor Us
        </Button>
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
