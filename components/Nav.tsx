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
import ThemeButton from "./ThemeButton";

const Nav = ({ dark, changeTheme }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Content", "FAQs"];

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      className={`${
        dark ? "bg-[#151515] text-white" : "bg-white"
      } transition-all delay-150 py-4 px-7`}
      height="5rem"
    >
      <NavbarContent>

        <NavbarBrand>
          <Link href="#Home" className="text-white">
            <Logo911 dark={dark}/>
          </Link>

          <NavbarContent
            className="hidden sm:flex gap-[4rem] font-normal text-white pl-[4rem]"
            justify="center"
          >
            <NavbarItem>
              <Link
                color="foreground"
                href="#"
                className={`text-2xl ${dark ? "text-white" : "text-black"}`}
              >
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                href="#"
                className={`text-2xl ${dark ? "text-white" : "text-black"}`}
              >
                About
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                href="#"
                className={`text-2xl ${dark ? "text-white" : "text-black"}`}
              >
                Domains
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarBrand>

      </NavbarContent>

      <NavbarItem className="sm:hidden">
        <ThemeButton dark={dark} handleTheme={changeTheme}/>
      </NavbarItem>
      

      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
      />

      



      <NavbarContent justify="end" className="max-sm:hidden">
        <ThemeButton dark={dark} handleTheme={changeTheme}/>
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            variant="flat"
            radius="full"
            className={`text-xl border hover:bg-white ${
              dark ? "bg-white" : "text-black"
            }`}
          >
            Sponsor Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className={`gap-10 justify-center items-center max-h-[94vh] ${dark ? "bg-black" : ""}`}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full ${dark ? "text-white" : "text-black"} font-semibold text-2xl`}
              href={"#" + item}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

        
        <Button
            as={Link}
            href="#"
            variant="flat"
            radius="full"
            className={`text-2xl p-6 border ${
              dark ? "bg-white" : "bg-[#cfcfcf]"
            }`}
          >
            Sponsor Us
          </Button>
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
