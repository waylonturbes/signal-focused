import React from "react";
import Head from "next/head";
import { ConsumerHeader } from "@components";
import type { ReactElement } from "react";

interface ConsumerLayoutProps {
    children: ReactElement;
    title: string;
    description: string;
}

/**
 * A layout component for pages intended to be used by consumers, like the homepage.
 * @param { ReactElement } children The content that lives withing the layout
 * @param { string } title The text content for the title of the HTML document
 * @param { string } description The text content for the description of the HTML document
 * @returns { ReactElement } Layout for a cosumer page.
 */
const ConsumerLayout = ({
    children,
    title,
    description,
}: ConsumerLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="description" content={description} />
            </Head>
            <ConsumerHeader />
            <main className="flex-auto">{children}</main>
            <footer>Footer</footer>
        </div>
    );
};

export { ConsumerLayout };
