"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section";

const milestones = [
  {
    period: "Early years",
    title: "First songs & self-teaching",
    description:
      "Began writing songs and learning guitar from her father in Harare. Started recording on a home computer and creating animations alongside her music.",
  },
  {
    period: "2018",
    title: "From Ashes to Beauty",
    description:
      "Released her debut album — a collection of deeply personal songs exploring heartbreak, self-discovery, and triumph. Established her presence on SoundCloud and streaming platforms.",
  },
  {
    period: "Professional",
    title: "TBWA Zimbabwe — Lead Animator",
    description:
      "Spent two years as Lead Animator at TBWA Zimbabwe, bringing her creative vision to commercial campaigns for one of the world's largest advertising networks.",
  },
  {
    period: "Professional",
    title: "Netflix — Storyboarding Internship",
    description:
      "Selected for a three-month storyboarding internship with Netflix, applying her visual storytelling skills at a global scale.",
  },
  {
    period: "2022",
    title: "Shoko Festival",
    description:
      "Performed live at Shoko Festival at Moto Republik in Harare — one of Zimbabwe's most important arts and culture festivals.",
  },
  {
    period: "2023",
    title: "Scripts and Bars — British Council",
    description:
      "Selected for the Scripts and Bars Incubator, a creative economy programme supported by the British Council, focused on building digital and business skills for creative professionals.",
  },
  {
    period: "2024",
    title: "Maiwee & new collaborations",
    description:
      "Released Maiwee — blending indie rock with traditional Zimbabwean musical elements. Featured on Danai Clay's The Storm Is Over. Named British Council Southern Africa Arts' Artist of the Week.",
  },
];

export function AboutMilestones() {
  return (
    <section className="relative py-24 md:py-32 bg-eden-black">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <AnimatedSection>
          <SectionHeader
            label="Selected Milestones"
            title="The path so far"
          />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[140px] top-0 bottom-0 w-px bg-white/5" />

          <div className="space-y-12">
            {milestones.map((milestone, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-[140px_1fr] md:gap-8">
                  {/* Period */}
                  <div className="md:text-right md:pr-8">
                    <span className="text-xs uppercase tracking-[0.2em] text-eden-gold font-medium">
                      {milestone.period}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 md:left-[140px] top-1 w-2 h-2 rounded-full bg-eden-gold -translate-x-[3.5px]" />

                  {/* Content */}
                  <div className="md:pl-8">
                    <h3 className="font-serif text-lg md:text-xl text-eden-cream mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-eden-muted leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
