import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"

const PHOTO_URL = "https://cdn.poehali.dev/files/1e1f24a3-7c84-4408-8fc8-1109ca642b79.jpeg"

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        <section
          className="relative rounded-4xl py-7 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-20"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">
            +
          </div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">
            +
          </div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>

          <div className="px-6 md:px-40">
            <div className="flex items-center justify-center mb-8 md:gap-11">
              <div className="flex flex-col items-center">
                <img
                  src={PHOTO_URL}
                  alt="Фото"
                  className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 max-w-5xl">
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm">Сериал</span>
                <span className="text-foreground font-mono text-sm">The Vampire Diaries (2009–2017)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm">Место действия</span>
                <span className="text-foreground font-mono text-sm">Мистик Фолс, Вирджиния</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm">О сериале</span>
                <span className="text-foreground font-mono text-sm">
                  История Елены Гилберт, которая влюбляется в вампира Стефана Сальваторе. Любовь, тайны и вечная борьба добра со злом в маленьком городке с большими секретами.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Index