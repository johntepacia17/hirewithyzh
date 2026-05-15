"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

export function CareerCTA() {
  const { career } = siteConfig;

  return (
    <section className="flex min-h-[70vh] items-center bg-bone py-16 md:py-32">
      <Container>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-[720px] text-center"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow text-burgundy">{career.eyebrow}</p>
          <h1 className="mt-6">{career.heading}</h1>
          <div className="mx-auto mt-8 max-w-2xl space-y-5">
            {career.paragraphs.map((paragraph, index) => (
              <p className={index === 0 ? "body-lg" : "body-copy"} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10">
            <Button as="a" external href={siteConfig.careerApplyUrl} size="large">
              {siteConfig.ctas.apply}
            </Button>
          </div>
          <p className="mt-5 text-sm font-medium leading-6 text-slate">
            {career.helperText}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
