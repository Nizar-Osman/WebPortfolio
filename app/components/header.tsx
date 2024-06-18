import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">UNIQUE</p>
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
}

export default Header;