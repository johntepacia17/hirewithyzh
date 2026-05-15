import type { Metadata } from "next";
import { CareerCTA } from "@/components/sections/CareerCTA";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Apply to join hirewithyzh as a Filipino remote professional serving global clients."
};

export default function CareerPage() {
  return <CareerCTA />;
}
