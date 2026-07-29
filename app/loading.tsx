export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-background">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-[#C59800]/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C59800] animate-spin" />
        <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-[#C59800]/60 animate-spin [animation-direction:reverse] [animation-duration:1.2s]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-[#C59800] animate-pulse" />
        </div>
      </div>
      <p className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60">X-HOUSE IMMOBILIER</p>
    </div>
  )
}
