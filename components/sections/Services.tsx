"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

export function Services() {
  const { servicesSection } = siteConfig;

  return (
    <section className="bg-bone py-16 md:py-32" id="services">
      <Container>
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="eyebrow text-burgundy">{servicesSection.eyebrow}</p>
          <h2 className="mt-6">{servicesSection.heading}</h2>
          <p className="body-lg mt-6">{servicesSection.lead}</p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, index) => (
            <article
              className="group relative overflow-hidden border border-hairline bg-paper p-8 transition-colors duration-200 hover:border-ink"
              key={service.title}
            >
              <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-burgundy transition-transform duration-200 group-hover:scale-x-100" />
              <p className="font-mono text-sm text-burgundy">{String(index + 1).padStart(2, "0")} —</p>
              <h3 className="mt-10">{service.title}</h3>
              <p className="body-copy mt-5">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-hairline pt-8 md:flex-row md:items-center">
          <p className="font-display text-3xl leading-tight tracking-[-0.02em]">
            {servicesSection.closingLine}
          </p>
          <Button as="a" external href={siteConfig.discoveryCallUrl}>
            {siteConfig.ctas.discoveryCall}
          </Button>
        </div>
      </Container>
    </section>
  );
}
