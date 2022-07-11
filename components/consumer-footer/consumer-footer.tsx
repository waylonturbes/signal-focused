import React from "react";
import Link from "next/link";

interface ConsumerFooterProps {}

/**
 * A footer component for pages intended to be used by consumers, like the home page.
 * @returns { JSX.Element } A footer element with navigation links for a cosumer page.
 */
const ConsumerFooter = ({}: ConsumerFooterProps) => {
  return (
    <footer className="px-8 py-12 flex justify-center bg-slate-900/90 dark:bg-black/60 text-slate-100">
      <div className="flex flex-auto max-w-screen-xl">
        <div>Test</div>
      </div>
    </footer>
  );
};

export { ConsumerFooter };
