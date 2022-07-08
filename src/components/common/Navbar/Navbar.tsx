import * as Popover from "@radix-ui/react-popover";
import Link from "next/link";
import { List } from "phosphor-react";
import Logo from "../../icon/Logo";
import LinkList from "./LinkList";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  return (
    <nav className="bg-primary fixed top-0 z-50 flex w-full flex-row items-center justify-between p-5 sm:px-10 md:px-12 lg:px-24 xl:px-48">
      <div className="fancy-ring fancy-ring-bg rounded-md">
        <Logo />
      </div>

      <div className="flex gap-8">
        <Popover.Root>
          <Popover.Trigger className="fancy-ring fancy-ring-bg visible rounded-md sm:hidden">
            <List size={24} />
          </Popover.Trigger>
          <Popover.Content className="fancy-ring fancy-ring-bg mt-4 rounded-md">
            <ul className="bg-primary flex flex-row justify-around gap-x-4 overflow-hidden p-5">
              <LinkList />
            </ul>
          </Popover.Content>
        </Popover.Root>

        <ul className="hidden flex-row gap-5 sm:flex">
          <LinkList />
        </ul>

        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
