"use client";
import { useEffect } from "react";
import { Plans } from "@/components/sections/Plans";
export default function P() {
  useEffect(() => { document.documentElement.classList.add("dark"); }, []);
  return <div className="preview-mode bg-ds-bg"><Plans /></div>;
}
