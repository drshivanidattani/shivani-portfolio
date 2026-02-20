import { HeroSection } from "@/components/home/HeroSection"
import { CaseCard } from "@/components/home/CaseCard"

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Work sections — will be wrapped properly in Tasks 23+24 */}
      <div id="work" className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
        {/* From the Field */}
        <section className="mb-16">
          <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
            From the Field
          </p>
          <h2 className="text-2xl font-bold text-foreground mb-8">
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
        <section>
          <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
            Independent Projects
          </p>
          <h2 className="text-2xl font-bold text-foreground mb-8">
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
