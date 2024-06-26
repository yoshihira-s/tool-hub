import { ModeToggle } from "@/components/mode-toggle";
import { SiGithub } from "@icons-pack/react-simple-icons";
import React from "react";

export default function Footer() {
  return (
    <footer className="border sticky top-full">
      <div className="container h-16 flex items-center gap-3">
        <p className="text-muted-foreground">&copy; yoshihira</p>
        <span className="flex-1"></span>
        <ModeToggle />
        <a href="https://github.com/yoshihira-s/tool-hub/" target="_blank">
          <SiGithub size={24} />
        </a>
      </div>
    </footer>
  );
}
