import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

export default function NotFound() {
  const { notFound } = siteConfig;

  return (
    <section className="bg-bone py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow text-burgundy">{notFound.eyebrow}</p>
          <h1 className="mt-6">{notFound.heading}</h1>
          <p className="body-lg mt-6">{notFound.body}</p>
          <Link
            className="mt-10 inline-flex rounded-[2px] border border-burgundy bg-burgundy px-6 py-3 font-body text-sm font-medium text-bone transition-colors hover:border-burgundy-deep hover:bg-burgundy-deep"
            href="/"
          >
            {notFound.cta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
