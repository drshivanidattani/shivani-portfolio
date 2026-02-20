import { HeroSection } from "@/components/home/HeroSection"
import { CaseCard } from "@/components/home/CaseCard"

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Work sections */}
      <div id="work" className="max-w-5xl mx-auto px-4 sm:px-6 pb-32">
        {/* From the Field */}
        <section className="mb-24 relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-gradient-to-r from-primary/50 to-transparent flex-1 max-w-[40px]"></div>
            <p className="text-xs font-mono tracking-widest uppercase text-primary font-medium">
              From the Field
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 tracking-tight">
            Real work, real constraints
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <CaseCard
              title="EMR Migration"
              description="Led end-to-end migration from Practo Ray to Zenoti for a healthcare startup. Zero revenue disruption."
              metrics={["Zero downtime", "100% data migrated", "1-month hypercare"]}
              href="/emr-migration"
            />
            <CaseCard
              title="Lead Management System"
              description="Built a lead tracking system from scratch across 3 clinics. Recovered 100+ lost leads."
              metrics={["100+ leads recovered", "30% conversion increase", "Built from zero"]}
              href="/lead-management"
            />
          </div>
        </section>

        {/* Independent Projects */}
        <section className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-[40px]"></div>
            <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground font-medium">
              Independent Projects
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 tracking-tight">
            Self-directed builds
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <CaseCard
              title="Career Assessment Tool"
              description="Interactive assessment matching users to career paths based on skills and preferences."
              metrics={["Coming soon"]}
              href="/career-assessment"
            />
            <CaseCard
              title="SQL Analytics Project"
              description="Data analysis project demonstrating analytical thinking with real datasets."
              metrics={["Coming soon"]}
              href="/sql-analytics"
            />
          </div>
        </section>
      </div>
    </>
  )
}
