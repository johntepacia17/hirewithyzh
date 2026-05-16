"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

export function Founder() {
  const { founder } = siteConfig;

  return (
    <section className="bg-paper py-16 md:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="eyebrow text-burgundy">{founder.eyebrow}</p>
            <h2 className="mt-6">{founder.heading}</h2>
          </motion.div>

          <motion.div
            className="space-y-5 lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {founder.paragraphs.map((paragraph, index) => (
              <p className={index === 0 ? "body-lg" : "body-copy"} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
