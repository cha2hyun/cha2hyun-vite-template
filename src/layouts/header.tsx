import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar isBordered maxWidth="2xl" position="sticky" className="bg-default-800">
      <NavbarContent className="basis-full" justify="start">
        <NavbarBrand className="gap-1 ">
          <a className="flex items-center justify-start" href="/">
            <p className="text-xl   font-black text-inherit">채수현</p>
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="flex
       basis-full justify-end"
        justify="end"
      >
        <NavbarItem className="flex gap-2 text-left">
          <div className="flex flex-col text-right">
            <span>채수현</span>
            <span className="text-sm text-default-500">cha2hyun@kakao.com</span>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
