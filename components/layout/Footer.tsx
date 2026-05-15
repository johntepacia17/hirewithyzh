import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

const socialLabels = {
  linkedin: "LinkedIn",
  facebook: "Facebook",
  instagram: "Instagram"
} as const;

export function Footer() {
  const socials = Object.entries(siteConfig.socials).filter(([, url]) => Boolean(url));

  return (
    <footer className="bg-ink py-14 text-bone">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Link aria-label="hirewithyzh home" href="/">
              <Image
                alt="hirewithyzh"
                className="h-14 w-auto brightness-0 invert"
                height={112}
                src="/logo.svg"
                width={360}
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-bone/75">
              {siteConfig.tagline}. {siteConfig.subtagline}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-3 text-sm">
            {siteConfig.nav.map((item) => (
              <Link className="text-bone/75 transition-colors hover:text-bone" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <a
              className="text-bone/75 transition-colors hover:text-bone"
              href={siteConfig.discoveryCallUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {siteConfig.ctas.discoveryCall}
            </a>
          </nav>

          <div className="flex flex-col gap-3 text-sm md:items-end">
            <a className="text-bone/75 transition-colors hover:text-bone" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            {socials.length > 0 ? (
              <div className="flex gap-4">
                {socials.map(([network, url]) => (
                  <a
                    className="text-bone/75 transition-colors hover:text-bone"
                    href={url}
                    key={network}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {socialLabels[network as keyof typeof socialLabels]}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-14 border-t border-bone/15 pt-6 text-sm text-slate">
          © 2026 hirewithyzh. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
