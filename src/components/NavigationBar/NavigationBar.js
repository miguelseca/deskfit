"use client";
import React from "react";
import { Logo } from "./Logo";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const pathname = usePathname();

  const navigation = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Workout",
      link: "/workout",
    },
    {
      title: "Exercises",
      link: "/exercises",
    },
    {
      title: "Options",
      link: "/options",
    },
  ];

  function renderLinks() {
    return (
      <>
        {navigation.map((item, index) => {
          if (pathname === item.link) {
            return (
              <NavbarItem isActive key={index}>
                <Link aria-current="page" href={item.link}>
                  {item.title}
                </Link>
              </NavbarItem>
            );
          }
          return (
            <NavbarItem key={index}>
              <Link color="foreground" href={item.link}>
                {item.title}
              </Link>
            </NavbarItem>
          );
        })}
      </>
    );
  }

  return (
    <Navbar
      className="bg-zinc-800/90"
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
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">DeskWorkout</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {renderLinks()}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
