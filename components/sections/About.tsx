"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

export function About() {
  const { about } = siteConfig;

  return (
    <section className="bg-paper py-16 md:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="eyebrow text-burgundy">{about.eyebrow}</p>
            <h2 className="mt-6">{about.heading}</h2>
          </motion.div>

          <div className="lg:col-span-8">
            <div className="space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <p className={index === 0 ? "body-lg" : "body-copy"} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {about.pillars.map((pillar) => (
                <div className="border-t border-burgundy pt-5" key={pillar.label}>
                  <p className="eyebrow text-ink">{pillar.label}</p>
                  <p className="mt-4 text-sm leading-6 text-slate">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
