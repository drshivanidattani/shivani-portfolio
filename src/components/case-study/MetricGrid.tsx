interface MetricGridProps {
  children: React.ReactNode
}

// DECISION: Using auto-fill with 220px min so 2 cards fit on tablet, 3-4 on desktop
export function MetricGrid({ children }: MetricGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 md:gap-6">
      {children}
    </div>
  )
}
