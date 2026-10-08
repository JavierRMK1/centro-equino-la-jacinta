export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3EFE5] text-[#1F3328]">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em]">
            Bienvenidos
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Centro Equino La Jacinta
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl">
            Un espacio dedicado al cuidado, bienestar y manejo de caballos.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#servicios"
              className="rounded-full bg-[#1F3328] px-7 py-3 font-semibold text-white"
            >
              Nuestros servicios
            </a>

            <a
              href="#contacto"
              className="rounded-full border border-[#1F3328] px-7 py-3 font-semibold"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}