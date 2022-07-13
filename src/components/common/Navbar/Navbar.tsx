import * as Popover from "@radix-ui/react-popover";
import Link from "next/link";
import { List } from "phosphor-react";
import Logo from "../../icon/Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import LinkList from "./LinkList";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  return (
    <nav className="bg-primary fixed top-0 z-50 flex w-full flex-row items-center justify-between p-5 sm:px-10 md:px-12 lg:px-24 xl:px-48">
      <Link href="/" passHref>
        <a className="fancy-ring fancy-ring-bg rounded-md">
          <Logo />
        </a>
      </Link>

      <div className="flex items-center gap-4 lg:gap-8">
        <Popover.Root>
          <Popover.Trigger className="fancy-ring fancy-ring-bg visible rounded-md sm:hidden">
            <List size={24} />
          </Popover.Trigger>
          <Popover.Content className="fancy-ring fancy-ring-bg-secondary rounded-md">
            <Popover.Arrow className="fill-zinc-800" />

            <ul className="bg-secondary flex min-w-max flex-col justify-around gap-4 rounded-md p-5">
              <LinkList />
            </ul>
          </Popover.Content>
        </Popover.Root>

        <ul className="hidden flex-row gap-5 sm:flex">
          <LinkList />
        </ul>

        <LanguageSwitcher />

        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
