import React from "react";
import Head from "next/head";
import type { ReactElement } from "react";

interface ConsumerLayoutProps {
  children: ReactElement;
  title?: string;
}

/**
 * A layout component for pages intended to be used by consumers, like the homepage.
 * @param { ReactElement } children The content that lives withing the layout
 * @param { string } title The text content for the title header of the HTML document
 * @returns { ReactElement } Layout for a cosumer page.
 */
const ConsumerLayout = ({ children, title }: ConsumerLayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export { ConsumerLayout };
