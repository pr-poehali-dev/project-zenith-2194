export default function HeroTextOverlay() {
  return (
    <div className="absolute top-30 md:top-48 left-8 z-10">
      <p className="text-red-400 font-mono text-xs tracking-[0.3em] mb-3 uppercase opacity-80">
        The Vampire Diaries
      </p>
      <h1
        className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-3.5 opacity-100"
        style={{
          fontFamily: "var(--font-montserrat)",
          color: "rgb(0, 0, 0)",
          WebkitTextStroke: "5px #dc2626",
          paintOrder: "stroke fill",
        }}
      >
        ДНЕ
        <br />
        ВНИ
        <br />
        КИ
      </h1>
      <p className="text-gray-300 font-mono text-sm md:text-base max-w-xs tracking-widest lg:text-base">
        Добро пожаловать
        <br />
        в Мистик Фолс
      </p>
    </div>
  )
}