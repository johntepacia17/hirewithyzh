"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 8);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-bone transition-shadow duration-200 ${
        hasScrolled ? "shadow-hairline" : ""
      }`}
    >
      <Container className="flex min-h-20 items-center justify-between gap-6 md:min-h-24">
        <Link aria-label="hirewithyzh home" className="shrink-0" href="/">
          <Image
            alt="hirewithyzh"
            className="h-12 w-auto md:h-14"
            height={112}
            priority
            src="/logo.svg"
            width={360}
          />
        </Link>

        <div className="flex items-center gap-5">
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  className={`border-b pb-1 font-body text-sm font-medium transition-colors ${
                    isActive
                      ? "border-burgundy text-ink"
                      : "border-transparent text-slate hover:text-ink"
                  }`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Button
            as="a"
            className="hidden sm:inline-flex"
            external
            href={siteConfig.discoveryCallUrl}
            size="compact"
          >
            {siteConfig.ctas.discoveryCall}
          </Button>
          <Button
            as="a"
            aria-label="Open Discovery Call form"
            className="px-3 py-2 sm:hidden"
            external
            href={siteConfig.discoveryCallUrl}
            size="compact"
          >
            {siteConfig.ctas.discoveryCallMobile}
          </Button>
        </div>
      </Container>
    </header>
  );
}
