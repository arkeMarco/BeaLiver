/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FC } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Content } from "@prismicio/client";
import Link from "next/link";

interface HeaderProps {
  settings: Content.HeaderDocument;
}

const Header: FC<HeaderProps> = ({ settings }) => {
  const navigationLinks = settings.data.links || [];
  const ctaButton = settings.data.button;
  const logo = settings.data.logo;

  return (
    <header className="w-full py-6 bg-transparent">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO (Sinistra) */}
        <div className="shrink-0 w-16">
          <Link href="/">
            <PrismicNextImage
              field={logo}
              className="w-full h-auto object-contain"
            />
          </Link>
        </div>

        {/* NAVIGAZIONE (Centro) - Sempre visibile, in fila */}
        <div className="flex items-center gap-8 xl:gap-12">
          {navigationLinks.map((item, index) => (
            <div key={index}>
              <PrismicNextLink
                field={item.page}
                className="text-gray-400 text-sm hover:text-gray-300 font-extralight neutralFace"
              />
            </div>
          ))}
        </div>

        {/* BOTTONE JOIN US (Destra) */}
        <div className="shrink-0">
          {ctaButton && (
            <PrismicNextLink
              field={ctaButton}
              className="inline-block px-4 py-3 border border-white rounded-lg text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
