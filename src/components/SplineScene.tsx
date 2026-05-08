const HERO_BG = "https://cdn.poehali.dev/projects/19463656-650b-4cfd-a8cd-d88fc0211d74/files/3cd66272-db24-40b8-a731-7d32c7849891.jpg"

export default function SplineScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <img
        src={HERO_BG}
        alt="The Vampire Diaries"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  )
}
