"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

export function HowItWorks() {
  const { processSection } = siteConfig;

  return (
    <section className="bg-bone py-16 md:py-32">
      <Container>
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="eyebrow text-burgundy">{processSection.eyebrow}</p>
          <h2 className="mt-6">{processSection.heading}</h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {processSection.steps.map((step, index) => (
            <motion.article
              className="border-t border-hairline pt-6"
              initial={{ opacity: 0, y: 20 }}
              key={step.title}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="font-mono text-sm text-burgundy">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8">{step.title}</h3>
              <p className="body-copy mt-5">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
