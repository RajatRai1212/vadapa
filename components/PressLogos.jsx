import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionReveal from "@/components/ui/SectionReveal";

export default function PressLogos() {
  return (
    <Section
      eyebrow="Featured On"
      title="Press & food platforms"
      subtitle="Brand visibility across food, city, and culture platforms."
      className="pt-6"
    >
      <SectionReveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["press-1", "press-2", "press-3", "press-4"].map((x) => (
            <div
              key={x}
              className="flex items-center justify-center rounded-2xl border border-brand-border bg-brand-card/70 p-6 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <Image
                src={`/logos/${x}.svg`}
                alt="Press logo"
                width={120}
                height={28}
                className="h-7 w-auto opacity-80"
              />
            </div>
          ))}
        </div>
      </SectionReveal>
    </Section>
  );
}
