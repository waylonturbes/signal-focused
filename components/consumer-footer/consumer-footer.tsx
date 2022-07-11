import React from "react";
import Link from "next/link";

interface ConsumerFooterProps {}

/**
 * A footer component for pages intended to be used by consumers, like the home page.
 * @returns { JSX.Element } A footer element with navigation links for a cosumer page.
 */
const ConsumerFooter = ({}: ConsumerFooterProps) => {
  return <footer className="p-12 bg-slate-50 dark:bg-slate-900">Test</footer>;
};

export { ConsumerFooter };
