export function Footer({ portfolio }) {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="section-wrapper flex flex-col items-start justify-between gap-4 text-xs text-muted md:flex-row md:items-center">
        <p>
          Crafted for roles in{' '}
          <span className="text-primary">
            {portfolio.targetRoles?.join(' • ') || 'marketing, growth & analytics'}
          </span>
          .
        </p>
        <p className="flex flex-wrap items-center gap-3">
          <span>{portfolio.location || 'Somewhere between strategy & SQL.'}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>© {new Date().getFullYear()} {portfolio.name || '[Your Name]'}</span>
        </p>
      </div>
    </footer>
  );
}

