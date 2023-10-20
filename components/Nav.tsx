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

const Nav = ({ dark,}: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Navbarclose = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  const menuItems = ["HOME", "ABOUT", "DOMAINS"];

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      className={`${
        dark ? "bg-[#151515] text-white" : "bg-white"
      } transition-all delay-150 py-4 px-7 max-sm:px-1`}
      height="5rem"
      isMenuOpen = {isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>

        <NavbarBrand>
          <Link href="#Home" className="text-white">
            <Logo911 dark={dark}/>
          </Link>

          <NavbarContent
            className="hidden sm:flex gap-[4.5vw] font-normal text-white pl-[4.5rem]"
            justify="center"
          >
            <NavbarItem>
              <Link
                color="foreground"
                href="#HOME"
                className={`text-[1.38rem] ${dark ? "text-white" : "text-black"}`}
              >
                HOME
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                href="#ABOUT"
                className={`text-[1.38rem] ${dark ? "text-white" : "text-black"}`}
              >
                ABOUT
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                href="#DOMAINS"
                className={`text-[1.38rem] ${dark ? "text-white" : "text-black"}`}
              >
                DOMAINS
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarBrand>

      </NavbarContent>

      {/* <NavbarItem className="md:hidden">
        <ThemeButton dark={dark} handleTheme={changeTheme}/>
      </NavbarItem>
       */}

      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
      />

      



      <NavbarContent justify="end" className="max-sm:hidden">
        {/* <ThemeButton dark={dark} handleTheme={changeTheme}/> */}
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            variant="flat"
            radius="full"
            className={`text-xl border p-6 px-5 hover:bg-white ${
              dark ? "bg-[#151515] text-[#99F94E] border-[#99F94E]" : "text-black"}`}
          >
            CONTACT US
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className={` gap-10 justify-center items-center max-h-[99vh] ${dark ? "bg-[#151515]" : ""}`}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full ${dark ? "text-white" : "text-black"} font-medium text-2xl`}
              href={"#" + item}
              onPress={Navbarclose}
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
            className={`text-2xl border p-6 px-5 hover:bg-white ${
              dark ? "bg-[#151515] text-[#99F94E] border-[#99F94E]" : "text-black"}`}
          >
            CONTACT US
          </Button>
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
