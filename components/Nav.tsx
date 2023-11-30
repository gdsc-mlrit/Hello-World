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

const Nav = ({ dark }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Navbarclose = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    "HOME",
    "ABOUT",
    "DOMAINS",
    "PARTNERS",
    "FAQS",
    "CONTACT US",
  ];

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      className={`${
        dark ? "bg-[#151515] text-white" : "bg-white"
      } transition-all delay-150 lg:py-2 px-12 max-sm:px-1`}
      height="5rem"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="flex justify-between">
        <NavbarBrand className="h-[40px]">
          <Link href="/" className="text-limee">
            <Logo911 h="35" w="35" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-[4.5vw] font-normal text-white"
        justify="center"
      >
        <NavbarItem>
          <Link
            color="foreground"
            href="/#HOME"
            className={`text-xl hover:text-limee ${
              dark ? "text-white" : "text-black"
            }`}
          >
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/#ABOUT"
            className={`text-xl hover:text-limee ${
              dark ? "text-white" : "text-black"
            }`}
          >
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/#DOMAINS"
            className={`text-xl hover:text-limee ${
              dark ? "text-white" : "text-black"
            }`}
          >
            DOMAINS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#PARTNERS"
            className={`text-xl hover:text-limee ${
              dark ? "text-white" : "text-black"
            }`}
          >
            PARTNERS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#FAQS"
            className={`text-xl hover:text-limee ${
              dark ? "text-white" : "text-black"
            }`}
          >
            FAQS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/#CONTACT US"
            className={`text-xl hover:text-limee ${
              dark ? "text-white" : "text-black"
            }`}
          >
            CONTACT US
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      <NavbarContent justify="end" className="max-sm:hidden">
        <NavbarItem>
          <Button
            as={Link}
            href="/sponsorus"
            variant="flat"
            radius="full"
            className={`text-xl border p-6 px-5 hover:bg-limee hover:text-black ${
              dark
                ? "bg-[#151515] text-[#99F94E] border-[#99F94E]"
                : "text-black"
            }`}
          >
            SPONSOR US
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu
        className={` gap-10 justify-center items-center max-h-[99vh] ${
          dark ? "bg-[#151515]" : ""
        }`}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full ${
                dark ? "text-white" : "text-black"
              } font-medium text-xl`}
              href={"/#" + item}
              onPress={Navbarclose}
              size="md"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

        <Button
          as={Link}
          href="/sponsorus"
          variant="flat"
          radius="full"
          className={`text-2xl border p-6 px-5 hover:bg-limee hover:text-black bg-[#151515] text-[#99F94E] border-[#99F94E]}`}
        >
          SPONSOR US
        </Button>
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
