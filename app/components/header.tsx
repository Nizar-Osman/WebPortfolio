import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

function Header() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">Nizahr Osman</p>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link color="primary" href="#">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="#">
            Resume
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );

  <img src="" alt="hero" className="w-full h-96 object-cover" />;
}

export default Header;