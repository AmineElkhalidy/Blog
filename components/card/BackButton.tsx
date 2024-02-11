import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button size="sm" variant="link" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
