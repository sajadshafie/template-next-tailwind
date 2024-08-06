"use client";
import React from "react";
import { default as MuiBreadCrumps } from "@mui/material/Breadcrumbs";
import Link from "../Link";
import { usePathname } from "next/navigation";
import Typography from "../Typography";
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
type Props = {};

const arr = [
  {
    title: "s",
    route: "/",
    active: false,
  },
  {
    title: "s",
    route: "/",
    active: false,
  },
  {
    title: "s",
    route: "/",
    active: false,
  },
];

export default function BreadCrumps({}: Props) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div role="presentation" onClick={handleClick}>
      <MuiBreadCrumps aria-label="breadcrumb">
        <Link underline="hover" color="inherit" text="سند های جاری" href="/" />
        <Link underline="hover" color="inherit" text="کارمند احمدی" href="/" />
        <Typography color="text.primary">لیست پیوست</Typography>
      </MuiBreadCrumps>
    </div>
  );
}
