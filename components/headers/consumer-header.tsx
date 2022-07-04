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
            className="sticky top-0 backdrop-blur-lg py-4 px-8 flex 
        justify-center bg-opacity-80 dark:bg-opacity-80 bg-slate-50 
        dark:bg-slate-900 border-b border-b-slate-200 
        dark:border-b-slate-700"
        >
            <nav className="flex flex-auto max-w-screen-xl">
                <div className="flex-auto space-x-6">
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
                <div className="space-x-6">
                    <ThemeToggle />
                    <Link href="/sign-in" passHref>
                        <a className="nav-link">Sign In</a>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export { ConsumerHeader };
