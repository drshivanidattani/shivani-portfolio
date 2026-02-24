interface DecisionCardProps {
  decision: string
  reasoning: string
  outcome: string
}

export function DecisionCard({ decision, reasoning, outcome }: DecisionCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-4">
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
          Decision
        </p>
        <p className="font-semibold text-foreground">{decision}</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
          Why
        </p>
        <p className="text-muted-foreground">{reasoning}</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
          Result
        </p>
        <p className="text-primary font-medium">{outcome}</p>
      </div>
    </div>
  )
}
