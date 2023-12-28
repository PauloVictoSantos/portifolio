import Link from "next/link";
import React from "react";
import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="3xl:px-0 padding-container max-container flex gap-4 flexBetween py-4">
      <Link href={"/"} className="bolde-28 text-white">
        Port <span className="reguçar-28 text-secondary">folio.</span>
      </Link>

      <Button />
    </header>
  );
};
