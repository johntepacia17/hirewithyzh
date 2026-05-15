"use client";

import { motion } from "motion/react";
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
              {hero.headlineWords.map((word, index) => (
                <motion.span
                  animate={{ opacity: 1, y: 0 }}
                  className="mr-[0.22em] inline-block"
                  initial={{ opacity: 0, y: 8 }}
                  key={word}
                  transition={{ delay: index * 0.04, duration: 0.5, ease: "easeOut" }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.em
                animate={{ opacity: 1, y: 0 }}
                className="inline-block text-burgundy"
                initial={{ opacity: 0, y: 8 }}
                transition={{ delay: hero.headlineWords.length * 0.04, duration: 0.5, ease: "easeOut" }}
              >
                {hero.emphasis}
              </motion.em>
              .
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

          <motion.aside
            animate={{ opacity: 1, y: 0 }}
            className="border-l border-hairline pl-8 lg:col-span-5 lg:col-start-8"
            initial={{ opacity: 0, y: 24 }}
            transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          >
            <div className="divide-y divide-hairline">
              {hero.stats.map((stat) => (
                <div className="py-6 first:pt-0" key={stat.label}>
                  <p className="font-display text-5xl font-medium leading-none tracking-[-0.04em] text-ink md:text-6xl">
                    {stat.value}
                  </p>
                  <p className="eyebrow mt-3 text-slate">{stat.label}</p>
                </div>
              ))}
            </div>
            <blockquote className="mt-10 max-w-md font-display text-2xl italic leading-snug text-graphite">
              “{hero.quote}”
            </blockquote>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
