import React from "react";
import type { ReactElement } from "react";

interface ConsumerHeaderProps {}

/**
 * A header component for pages intended to be used by consumers, like the home page.
 * @returns { JSX.Element } A header element with navigation links for a cosumer page.
 */
const ConsumerHeader = ({}: ConsumerHeaderProps) => {
  return <header className="py-4 px-8">Header</header>;
};

export { ConsumerHeader };
