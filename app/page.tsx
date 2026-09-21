"use client";

import Link from "next/link";
import { ConceptPanel } from "@/components/ui/ConceptPanel";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock3,
  Coffee,
  Mail,
  MapPin,
  MessageSquareText,
  MountainSnow,
  Phone,
  Sparkles,
  Utensils,
} from "lucide-react";
import { DemoBanner } from "@/components/layout/DemoBanner";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  branches,
  businessInfo,
  experiences,
  menuHighlights,
  socialGallery,
} from "@/data/concept";

export default function HomePage() {
  const [activeBranchId, setActiveBranchId] = useState(branches[1].id);
  const activeBranch = branches.find((branch) => branch.id === activeBranchId) ?? branches[0];
  const mapPanelRef = useRef<HTMLDivElement>(null);

  const focusBranchMap = (branchId: string) => {
    setActiveBranchId(branchId);
    window.requestAnimationFrame(() => mapPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }));
  };

  return (
    <div id="top" className="bg-[#f7f1ea] text-[#1e1a17]">
      <DemoBanner />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-[#f4efe9]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,177,152,0.26),_transparent_40%)]" aria-hidden="true" />
          <div className="absolute bottom-0 left-[-8%] h-64 w-64 rounded-full bg-[#d7d7d1]/60 blur-3xl" aria-hidden="true" />
          <div className="absolute right-[-8%] top-20 h-72 w-72 rounded-full bg-[#d4cab9]/40 blur-3xl" aria-hidden="true" />

          <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-4 pb-16 pt-10 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-12">
            <div className="relative z-10" style={{ animation: "fadeUp 0.7s ease-out forwards" }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#221f1e]/10 bg-[#faf5f0]/80 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.25em] text-[#4f4945]">
                <Sparkles size={12} className="text-[#b37739]" aria-hidden="true" />
                An imagined café
              </div>

              <h1 className="max-w-xl font-display text-[clamp(3.6rem,8vw,8rem)] leading-[0.88] tracking-[-0.08em] text-[#1a1715]">
                SAMPLE
                <span className="block text-[#3d362f]">COFFEE</span>
              </h1>

              <div className="mt-6 max-w-xl space-y-4 text-[1.05rem] leading-8 text-[#514b46]">
                <p className="font-display text-[clamp(1.8rem,3vw,3rem)] uppercase tracking-[-0.05em] leading-[0.95] text-[#2e2a27]">
                  A little warmth in every cup.
                </p>
                <p>
                  Specialty coffee, signature drinks, freshly baked treats and comforting meals made for slow mornings, late-night conversations and everything in between.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="#menu" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1a18] px-6 py-3.5 text-sm font-medium text-[#f6efe9] transition-transform hover:-translate-y-0.5">
                  Explore the Menu
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link href="#locations" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1d1a18]/15 bg-white/60 px-6 py-3.5 text-sm font-medium text-[#1d1a18] transition-transform hover:-translate-y-0.5">
                  Explore Sample Locations
                </Link>
              </div>

              <div className="mt-7 flex items-center gap-3 text-sm text-[#49413d]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#1d1a18]/10 bg-[#faf5f0] px-3 py-1.5">
                  <Clock3 size={14} aria-hidden="true" />
                  A café concept for every hour
                </span>
              </div>
            </div>

            <div className="relative" style={{ animation: "fadeUp 0.9s ease-out forwards 0.12s", opacity: 0 }}>
              <div className="relative overflow-hidden rounded-[2rem] border border-[#201d1b]/10 bg-[#efe5db] p-4 shadow-[0_30px_90px_rgba(21,16,14,0.08)]">
                <div className="absolute inset-x-10 top-8 h-24 rounded-full bg-[#f6efe8]/80 blur-2xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[1.6rem] bg-[#eddfd0]">
                  <ConceptPanel title="A slower kind of coffee." caption="An imagined space for good coffee and easy conversation." className="h-[650px] w-full" />
                </div>
                <div className="absolute left-8 top-8 rounded-full border border-[#1d1a18]/10 bg-[#f9f4ee]/90 px-4 py-2 text-[0.68rem] uppercase tracking-[0.25em] text-[#413a36]">
                  CAFÉ DESIGN STUDY
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="mx-auto max-w-7xl px-4 py-24 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Story"
            title="An imagined neighborhood café."
            description="A fictional gathering place bringing together specialty coffee, fresh pastries and all-day meals in a warm, welcoming space."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border border-[#d7cec4] bg-[#f2e8df] p-6">
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#72655c]">CONCEPT</p>
                <div className="mt-4 font-display text-5xl leading-none tracking-[-0.08em] text-[#211d1b]">SAMPLE</div>
                <div className="mt-2 font-display text-4xl leading-none tracking-[-0.08em] text-[#5f564f]">COFFEE</div>
                <div className="mt-2 font-display text-4xl leading-none tracking-[-0.08em] text-[#b98e5d]">ROASTERY</div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-[#d7cec4] bg-[#e7d9ca]">
                <ConceptPanel title="Made for everyday moments." caption="A fictional neighborhood café, expressed through type and color." className="h-full w-full" />
              </div>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#4c4643]">
              <p>
                Sample Coffee explores what a neighborhood café could feel like: thoughtful drinks, warm hospitality and a strong sense of place. It is a fictional brand created for this design study.
              </p>
              <p>
                The identity sits between mountain cool and café warmth—coffee roasting, seasonal drinks and comforting food shaped for slow afternoons and meaningful conversations.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="rounded-full border border-[#201d1b]/10 bg-white/70 px-3 py-1.5 text-xs uppercase tracking-[0.2em]">Coffee roastery</span>
                <span className="rounded-full border border-[#201d1b]/10 bg-white/70 px-3 py-1.5 text-xs uppercase tracking-[0.2em]">Signature drinks</span>
                <span className="rounded-full border border-[#201d1b]/10 bg-white/70 px-3 py-1.5 text-xs uppercase tracking-[0.2em]">All-day meals</span>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="bg-[#f1e5d7] py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Menu"
              title="What we serve."
              description="An illustrative menu of café favorites, created for this design concept."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {menuHighlights.map((group) => (
                <div key={group.category} className="rounded-[2rem] border border-[#d9c9b3] bg-[#faf6f1] p-6 shadow-[0_30px_70px_rgba(61,40,25,0.04)] transition-transform hover:-translate-y-1">
                  <p className="text-[0.7rem] uppercase tracking-[0.26em] text-[#71645f]">{group.category}</p>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-base text-[#2f2a27]">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8e6847]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-between gap-4 border-t border-[#d9c9b3] pt-6 text-sm text-[#524b46]">
              <p>Sample menu for illustration only.</p>
              <Link href="#contact" className="inline-flex items-center gap-2 font-medium text-[#1e1a17] transition-colors hover:text-[#5d4334]">
                Sample Menu Inquiries
                <ChevronRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-24 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-[#d7cec4] bg-[#ede0d2] p-3 shadow-[0_30px_90px_rgba(42,31,25,0.08)]">
              <ConceptPanel title="Espresso. Milk. A little pause." caption="An illustrative house latte from our sample menu." className="h-[680px] w-full rounded-[1.5rem]" />
            </div>

            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#766a63]">Signature</p>
              <h2 className="mt-4 font-display text-[clamp(3rem,6vw,6rem)] leading-[0.9] tracking-[-0.08em] text-[#1e1a17]">
                THE HOUSE
                <span className="block text-[#644d3d]">SIGNATURE LATTE</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#4a433f]">
                Rich espresso. Silky milk. A little everyday comfort.
              </p>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#564d47]">
                A café ritual imagined for quiet mornings, conversations and the slow rhythm of a well-made cup.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#e5eee8] py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="The café experience"
              title="Coffee weather, all year."
              description="From early mornings to midnight conversations, there’s always time for coffee."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="overflow-hidden rounded-[2rem] border border-[#bfd1c5] bg-[#dfe9e3]">
                <ConceptPanel title="Stay a little longer." caption="Warm tones, quiet corners and an unhurried pace." className="h-full w-full" />
              </div>
              <div className="grid gap-5">
                <div className="rounded-[2rem] border border-[#bfd1c5] bg-[#f7f4f1] p-7">
                  <div className="flex items-center gap-3 text-[#2f302d]">
                    <MountainSnow size={18} aria-hidden="true" />
                    <span className="text-xs uppercase tracking-[0.25em]">Cool mornings</span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-[#514b46]">
                    Foggy air, warm drinks and an easy rhythm that fits the city’s pace.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-[#bfd1c5] bg-[#f7f4f1] p-7">
                  <div className="flex items-center gap-3 text-[#2f302d]">
                    <Coffee size={18} aria-hidden="true" />
                    <span className="text-xs uppercase tracking-[0.25em]">All-day café life</span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-[#514b46]">
                    Work sessions, late-night catch-ups and warm pastries all find a place in this imagined café.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-[#bfd1c5] bg-[#f7f4f1] p-7">
                  <div className="flex items-center gap-3 text-[#2f302d]">
                    <MessageSquareText size={18} aria-hidden="true" />
                    <span className="text-xs uppercase tracking-[0.25em]">Human moments</span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-[#514b46]">
                    The atmosphere is a mix of city life, quiet study time and conversation that lasts long after the last sip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-4 py-24 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Experiences & services"
            title="More than a coffee run."
            description="Thoughtful experiences that match the pace of the neighborhood café culture."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {experiences.map((experience) => (
              <div key={experience.title} className="group rounded-[2rem] border border-[#ddd0c5] bg-[#faf6f1] p-6 shadow-[0_20px_60px_rgba(39,29,24,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(39,29,24,0.08)]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#e9dfd4] text-[#2b2927]">
                  {experience.title === "Coffee Tasting" ? <Coffee size={18} aria-hidden="true" /> : null}
                  {experience.title === "Barista Workshop" ? <Sparkles size={18} aria-hidden="true" /> : null}
                  {experience.title === "Reservations" ? <Calendar size={18} aria-hidden="true" /> : null}
                  {experience.title === "Group Gatherings" ? <Utensils size={18} aria-hidden="true" /> : null}
                </div>
                <h3 className="text-2xl font-display tracking-[-0.05em] text-[#1e1a17]">{experience.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#514b46]">{experience.description}</p>
                <div className="mt-7 flex items-center gap-2 text-sm font-medium text-[#2a2624]">
                  <Link href="#contact" className="inline-flex items-center gap-2 hover:text-[#5d4334]">
                    {experience.title === "Reservations" ? "Reserve / Inquire" : "Learn More"}
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#d9c5ae] bg-[#efe4d6] p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[#685f59]">Planning something?</p>
                <h3 className="mt-3 font-display text-3xl leading-none tracking-[-0.06em] text-[#1e1a17] md:text-4xl">
                  Have a group gathering, collaboration or special request?
                </h3>
              </div>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1a18] px-6 py-3.5 text-sm font-medium text-[#f7f1ea]">
                Ask About Group Inquiries
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section id="locations" className="bg-[#f7efe7] py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Locations"
              title="Find Your Coffee Spot."
              description="Two fictional café locations. Addresses and opening hours are samples for this concept."
            />

            <div className="mt-10 flex flex-wrap gap-3">
              {branches.map((branch) => (
                <button
                  key={branch.id}
                  type="button"
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    activeBranchId === branch.id
                      ? "border-[#1d1a18] bg-[#1d1a18] text-[#f7f1ea]"
                      : "border-[#201d1b]/10 bg-white/70 text-[#201d1b] hover:bg-[#201d1b] hover:text-[#f5efe8]"
                  }`}
                  aria-pressed={activeBranchId === branch.id}
                  onClick={() => focusBranchMap(branch.id)}
                >
                  {branch.label}
                </button>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6">
                {branches.map((branch) => (
                  <article key={branch.id} className="rounded-[2rem] border border-[#d9c9b3] bg-[#faf6f1] p-6 shadow-[0_20px_60px_rgba(39,29,24,0.04)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#72655c]">{branch.label}</p>
                        <h3 className="mt-3 font-display text-3xl tracking-[-0.06em] text-[#201d1b]">{branch.name}</h3>
                      </div>
                      <span className="rounded-full bg-[#e7d0ae] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#2f2b29]">
                        {branch.highlight}
                      </span>
                    </div>

                    <div className="mt-6 space-y-4 text-base text-[#4f4945]">
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="mt-1 text-[#74583d]" aria-hidden="true" />
                        <p className="whitespace-pre-line">{branch.address}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock3 size={18} className="mt-1 text-[#74583d]" aria-hidden="true" />
                        <p className="whitespace-pre-line">{branch.hours}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone size={18} className="mt-1 text-[#74583d]" aria-hidden="true" />
                        <span>{branch.tel} (sample)</span>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <button type="button" onClick={() => focusBranchMap(branch.id)} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1a18] px-5 py-3 text-sm font-medium text-[#f7f1ea]">
                        Preview Location
                        <ArrowRight size={15} aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div ref={mapPanelRef} className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-[#d9c9b3] bg-[#efe6dc] p-3 shadow-[0_20px_60px_rgba(39,29,24,0.04)]">
                <div className="relative aspect-[4/3] min-h-[360px] overflow-hidden rounded-[1.6rem] border border-[#c0b2a4] bg-white/60 lg:aspect-[5/6]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center text-[#74583d]">
                    <MapPin size={40} aria-hidden="true" />
                    <p className="font-display text-3xl">{activeBranch.label}</p>
                    <p className="whitespace-pre-line">{activeBranch.address}</p>
                    <p className="max-w-xs text-sm">Location preview only. This fictional café has no physical address or directions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-24 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s talk over coffee."
              />

              <div className="mt-8 space-y-6 text-base text-[#524b46]">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-[#6e5e4d]" aria-hidden="true" />
                  <span>{businessInfo.email} (sample)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-1 text-[#6e5e4d]" aria-hidden="true" />
                  <span>{businessInfo.phone} (sample)</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-[#6e5e4d]" aria-hidden="true" />
                  <span>{businessInfo.city}</span>
                </div>
              </div>

              <p className="mt-8 text-sm text-[#655548]">Social profile placeholder — no account connected.</p>
            </div>

            <div className="rounded-[2.2rem] border border-[#d8c7b1] bg-[#faf6f1] p-5 shadow-[0_28px_90px_rgba(38,29,25,0.06)] md:p-8">
              <div className="flex items-center justify-between gap-4 pb-4">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[#72655c]">Inquiry</p>
                  <h3 className="mt-2 font-display text-3xl tracking-[-0.06em] text-[#1d1a18]">Sample inquiry</h3>
                </div>
              </div>

              <fieldset disabled className="mt-6 space-y-5">
                <legend className="text-sm text-[#655548]">Sample form — no personal information is collected.</legend>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-[#312d2b]">Full Name *</label>
                    <input id="fullName" name="fullName" type="text" required className="w-full rounded-2xl border border-[#d7cbbd] bg-white px-4 py-3 text-base text-[#1e1a17] outline-none ring-0 transition-colors focus:border-[#5e4a39]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#312d2b]">Email *</label>
                    <input id="email" name="email" type="email" required className="w-full rounded-2xl border border-[#d7cbbd] bg-white px-4 py-3 text-base text-[#1e1a17] outline-none ring-0 transition-colors focus:border-[#5e4a39]" />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="mobileNumber" className="mb-2 block text-sm font-medium text-[#312d2b]">Mobile Number</label>
                    <input id="mobileNumber" name="mobileNumber" type="tel" className="w-full rounded-2xl border border-[#d7cbbd] bg-white px-4 py-3 text-base text-[#1e1a17] outline-none ring-0 transition-colors focus:border-[#5e4a39]" />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="mb-2 block text-sm font-medium text-[#312d2b]">Inquiry Type *</label>
                    <select id="inquiryType" name="inquiryType" required className="w-full rounded-2xl border border-[#d7cbbd] bg-white px-4 py-3 text-base text-[#1e1a17] outline-none ring-0 transition-colors focus:border-[#5e4a39]">
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Reservation Request">Reservation Request</option>
                      <option value="Group / Special Inquiry">Group / Special Inquiry</option>
                      <option value="Coffee Tasting">Coffee Tasting</option>
                      <option value="Barista Workshop">Barista Workshop</option>
                      <option value="Group Gathering">Group Gathering</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  <div>
                    <label htmlFor="preferredBranch" className="mb-2 block text-sm font-medium text-[#312d2b]">Preferred Branch</label>
                    <select id="preferredBranch" name="preferredBranch" className="w-full rounded-2xl border border-[#d7cbbd] bg-white px-4 py-3 text-base text-[#1e1a17] outline-none ring-0 transition-colors focus:border-[#5e4a39]">
                      <option value="">Select</option>
                      <option value="Downtown / Sample Branch">Downtown / Sample Branch</option>
                      <option value="Hillside / Sample Roastery">Hillside / Sample Roastery</option>
                      <option value="No preference">No preference</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preferredDate" className="mb-2 block text-sm font-medium text-[#312d2b]">Preferred Date</label>
                    <input id="preferredDate" name="preferredDate" type="date" className="w-full rounded-2xl border border-[#d7cbbd] bg-white px-4 py-3 text-base text-[#1e1a17] outline-none ring-0 transition-colors focus:border-[#5e4a39]" />
                  </div>
                  <div>
                    <label htmlFor="partySize" className="mb-2 block text-sm font-medium text-[#312d2b]">Party Size</label>
                    <input id="partySize" name="partySize" type="text" placeholder="e.g. 4 people" className="w-full rounded-2xl border border-[#d7cbbd] bg-white px-4 py-3 text-base text-[#1e1a17] outline-none ring-0 transition-colors focus:border-[#5e4a39]" />
                  </div>
                </div>

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Leave this blank</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#312d2b]">Message *</label>
                  <textarea id="message" name="message" required rows={5} className="w-full rounded-2xl border border-[#d7cbbd] bg-white px-4 py-3 text-base text-[#1e1a17] outline-none ring-0 transition-colors focus:border-[#5e4a39]" />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-[#564d47]">Concept preview only. This form does not send messages or make reservations.</p>
                  <button type="submit" disabled className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1a18] px-6 py-3.5 text-sm font-medium text-[#f7f1ea] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70">
                    Sample Inquiry
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
        </section>

        <section className="bg-[#1d1a18] py-24 text-[#f5efe8]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[#d7c0a1]">Concept notes</p>
                <h2 className="mt-3 font-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] tracking-[-0.07em] text-white">Small moments, good coffee.</h2>
              </div>
              <p className="text-sm text-[#d7c0a1]">Illustrative content / No social account</p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {socialGallery.map((item, index) => (
                <div key={item.id} className={`overflow-hidden rounded-[2rem] border border-white/10 ${index % 2 === 0 ? "lg:translate-y-8" : ""}`}>
                  <div className="relative h-72 bg-[#d9d2ca]">
                    <ConceptPanel title={item.title} caption={item.caption} className="h-full w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
