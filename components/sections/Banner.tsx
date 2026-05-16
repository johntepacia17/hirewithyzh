import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

export function Banner() {
  const { hero } = siteConfig;

  return (
    <section className="bg-bone py-16 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-burgundy">{hero.eyebrow}</p>
            <h1 className="mt-8 max-w-4xl">
              {hero.headlinePrefix}{" "}
              <em className="text-burgundy">{hero.emphasis}</em>.
            </h1>
            <p className="body-lg mt-8 max-w-2xl">{hero.lead}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button as="a" external href={siteConfig.discoveryCallUrl} size="large">
                {siteConfig.ctas.discoveryCall}
              </Button>
              <Button as="a" href="#services" size="large" variant="secondary">
                {siteConfig.ctas.services}
              </Button>
            </div>
          </div>

          <aside className="border-l border-hairline pl-8 lg:col-span-5 lg:col-start-8">
            <div className="divide-y divide-hairline">
              {hero.trustPoints.map((point) => (
                <div className="py-7 first:pt-0" key={point.title}>
                  <p className="font-display text-3xl font-medium leading-tight text-ink">
                    {point.title}
                  </p>
                  <p className="body-copy mt-3">{point.description}</p>
                </div>
              ))}
            </div>
            <blockquote className="mt-10 max-w-md font-display text-2xl italic leading-snug text-graphite">
              &ldquo;{hero.quote}&rdquo;
            </blockquote>
          </aside>
        </div>
      </Container>
    </section>
  );
}
