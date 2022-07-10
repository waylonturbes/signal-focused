import React from "react";
import Link from "next/link";
import { ThemeToggle } from "@components";

interface ConsumerHeaderProps {}

/**
 * A header component for pages intended to be used by consumers, like the home page.
 * @returns { JSX.Element } A header element with navigation links for a cosumer page.
 */
const ConsumerHeader = ({}: ConsumerHeaderProps) => {
  return (
    <header
      className="sticky top-0 backdrop-blur-lg h-14 px-8 flex justify-center
        bg-opacity-75 dark:bg-opacity-75 bg-slate-50
        dark:bg-slate-900 border-b"
    >
      <nav className="flex flex-auto max-w-screen-xl justify-between">
        <div className="space-x-6 my-auto">
          <Link href="/" passHref>
            <a className="nav-link">Home</a>
          </Link>
          <Link href="/articles" passHref>
            <a className="nav-link">Articles</a>
          </Link>
          <Link href="/about" passHref>
            <a className="nav-link">About</a>
          </Link>
        </div>
        <div className="flex space-x-6 my-auto divide-x">
          <div>
            <ThemeToggle className="nav-link align-middle" />
          </div>
          <div className="align-middle space-x-6 pl-6">
            <Link href="/sign-in" passHref>
              <a className="nav-link">Sign In</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { ConsumerHeader };
