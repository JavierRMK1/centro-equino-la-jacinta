export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3EFE5] text-[#1F3328]">

      {/* =========================
          MENÚ SUPERIOR
      ========================== */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#1F3328]/10 bg-[#F3EFE5]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="#" className="text-xl font-bold tracking-wide">
            La Jacinta
          </a>

          {/* MENÚ ESCRITORIO */}
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#" className="transition hover:opacity-60">
              Inicio
            </a>

            <a
              href="#nosotros"
              className="transition hover:opacity-60"
            >
              Nosotros
            </a>

            <a
              href="#servicios"
              className="transition hover:opacity-60"
            >
              Servicios
            </a>

            <a
              href="#instalaciones"
              className="transition hover:opacity-60"
            >
              Instalaciones
            </a>

            <a
              href="#galeria"
              className="transition hover:opacity-60"
            >
              Galería
            </a>

            <a
              href="#contacto"
              className="rounded-full bg-[#1F3328] px-5 py-2.5 text-white transition hover:opacity-80"
            >
              Contacto
            </a>
          </div>

          {/* MENÚ CELULAR */}
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-[#1F3328] px-4 py-2 text-sm font-semibold">
              Menú
            </summary>

            <div className="absolute right-0 mt-3 flex w-48 flex-col gap-4 rounded-2xl bg-white p-5 shadow-xl">
              <a href="#">Inicio</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#servicios">Servicios</a>
              <a href="#instalaciones">Instalaciones</a>
              <a href="#galeria">Galería</a>
              <a href="#contacto">Contacto</a>
            </div>
          </details>

        </nav>
      </header>


      {/* =========================
          PORTADA
      ========================== */}
      <section className="min-h-screen bg-[#F3EFE5] pt-20">
        <div className="grid min-h-[calc(100vh-80px)] md:grid-cols-2">

          {/* TEXTO */}
          <div className="flex items-center justify-center px-8 py-16 md:px-16">
            <div className="max-w-xl">

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.4em]">
                Bienvenidos
              </p>

              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
                Centro Equino
                <br />
                La Jacinta
              </h1>

              <p className="mb-10 max-w-lg text-lg leading-relaxed text-[#1F3328]/80 md:text-xl">
                Un espacio dedicado al cuidado, bienestar y manejo de caballos.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">

                <a
                  href="#servicios"
                  className="rounded-full bg-[#1F3328] px-7 py-3.5 text-center font-semibold text-white transition hover:opacity-80"
                >
                  Nuestros servicios
                </a>

                <a
                  href="#contacto"
                  className="rounded-full border border-[#1F3328] px-7 py-3.5 text-center font-semibold transition hover:bg-[#1F3328] hover:text-white"
                >
                  Contacto
                </a>

              </div>
            </div>
          </div>

          {/* FOTO */}
          <div
            className="min-h-[550px] bg-cover bg-center md:min-h-full"
            style={{
              backgroundImage: "url('/portada.jpg')",
            }}
          />

        </div>
      </section>


      {/* =========================
          NOSOTROS
      ========================== */}
      <section
        id="nosotros"
        className="scroll-mt-20 bg-white px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em]">
              Sobre nosotros
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Un espacio pensado para el bienestar equino
            </h2>

            <p className="mb-5 text-lg leading-relaxed text-[#1F3328]/75">
              En Centro Equino La Jacinta buscamos entregar un entorno dedicado
              al cuidado, manejo y bienestar de los caballos.
            </p>

            <p className="text-lg leading-relaxed text-[#1F3328]/75">
              Nuestro objetivo es que cada caballo reciba atención responsable
              en un ambiente tranquilo y adecuado para sus necesidades.
            </p>
          </div>

          <div className="grid gap-5">

            <div className="rounded-3xl bg-[#F3EFE5] p-7">
              <h3 className="mb-2 text-xl font-bold">
                Bienestar
              </h3>

              <p className="text-[#1F3328]/70">
                El cuidado del caballo es el centro de nuestro trabajo.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F3EFE5] p-7">
              <h3 className="mb-2 text-xl font-bold">
                Cuidado
              </h3>

              <p className="text-[#1F3328]/70">
                Atención y manejo responsable en el día a día.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F3EFE5] p-7">
              <h3 className="mb-2 text-xl font-bold">
                Confianza
              </h3>

              <p className="text-[#1F3328]/70">
                Un espacio donde propietarios y caballos puedan sentirse seguros.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          SERVICIOS
      ========================== */}
      <section
        id="servicios"
        className="scroll-mt-20 bg-[#F3EFE5] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-2xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em]">
              Nuestros servicios
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Cuidado pensado para cada caballo
            </h2>

            <p className="text-lg leading-relaxed text-[#1F3328]/70">
              Entregamos un espacio orientado al bienestar, cuidado y manejo
              responsable de los caballos.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl bg-white p-8">
              <p className="mb-5 text-sm font-semibold text-[#1F3328]/50">
                01
              </p>

              <h3 className="mb-4 text-2xl font-bold">
                Pupilaje
              </h3>

              <p className="leading-relaxed text-[#1F3328]/70">
                Alojamiento y cuidado diario en un entorno tranquilo y preparado
                para las necesidades del caballo.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <p className="mb-5 text-sm font-semibold text-[#1F3328]/50">
                02
              </p>

              <h3 className="mb-4 text-2xl font-bold">
                Alimentación y cuidado
              </h3>

              <p className="leading-relaxed text-[#1F3328]/70">
                Atención diaria y alimentación responsable para mantener el
                bienestar de cada caballo.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <p className="mb-5 text-sm font-semibold text-[#1F3328]/50">
                03
              </p>

              <h3 className="mb-4 text-2xl font-bold">
                Manejo diario
              </h3>

              <p className="leading-relaxed text-[#1F3328]/70">
                Supervisión y manejo orientado a entregar seguridad, tranquilidad
                y buenas condiciones para cada ejemplar.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          INSTALACIONES
      ========================== */}
      <section
        id="instalaciones"
        className="scroll-mt-20 bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-3xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em]">
              Instalaciones
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Un entorno preparado para el bienestar de los caballos
            </h2>

            <p className="text-lg leading-relaxed text-[#1F3328]/70">
              Contamos con espacios destinados al alojamiento, cuidado y manejo
              diario de los caballos en un ambiente tranquilo.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl bg-[#F3EFE5] p-8">
              <p className="mb-4 text-sm font-semibold text-[#1F3328]/50">
                01
              </p>

              <h3 className="mb-3 text-2xl font-bold">
                Pesebreras
              </h3>

              <p className="leading-relaxed text-[#1F3328]/70">
                Espacios pensados para entregar resguardo, comodidad y seguridad.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F3EFE5] p-8">
              <p className="mb-4 text-sm font-semibold text-[#1F3328]/50">
                02
              </p>

              <h3 className="mb-3 text-2xl font-bold">
                Áreas exteriores
              </h3>

              <p className="leading-relaxed text-[#1F3328]/70">
                Sectores abiertos para el movimiento, manejo y bienestar diario.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F3EFE5] p-8">
              <p className="mb-4 text-sm font-semibold text-[#1F3328]/50">
                03
              </p>

              <h3 className="mb-3 text-2xl font-bold">
                Entorno natural
              </h3>

              <p className="leading-relaxed text-[#1F3328]/70">
                Un ambiente tranquilo que favorece el bienestar de los caballos.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          GALERÍA
      ========================== */}
      <section
        id="galeria"
        className="scroll-mt-20 bg-[#1F3328] px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-2xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/70">
              Galería
            </p>

            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Conoce La Jacinta
            </h2>

            <p className="text-lg leading-relaxed text-white/70">
              Algunos momentos y espacios de nuestro centro equino.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <div
              className="min-h-[420px] rounded-3xl bg-cover bg-center"
              style={{
                backgroundImage: "url('/portada.jpg')",
              }}
            />

            <div
              className="min-h-[420px] rounded-3xl bg-cover bg-[center_35%]"
              style={{
                backgroundImage: "url('/portada.jpg')",
              }}
            />

            <div
              className="min-h-[420px] rounded-3xl bg-cover bg-[center_70%]"
              style={{
                backgroundImage: "url('/portada.jpg')",
              }}
            />

          </div>

          <p className="mt-6 text-sm text-white/50">
            Próximamente agregaremos más fotografías del centro.
          </p>

        </div>
      </section>


      {/* =========================
          CONTACTO
      ========================== */}
      <section
        id="contacto"
        className="scroll-mt-20 bg-[#F3EFE5] px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em]">
              Contacto
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              ¿Quieres conocer más sobre La Jacinta?
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-[#1F3328]/70">
              Contáctanos para conocer nuestros servicios, disponibilidad
              y resolver cualquier duda sobre el cuidado de tu caballo.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 md:p-10">

            <div className="mb-7">
              <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#1F3328]/50">
                Centro
              </p>

              <p className="text-xl font-bold">
                Centro Equino La Jacinta
              </p>
            </div>

            <div className="mb-7">
              <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#1F3328]/50">
                Ubicación
              </p>

              <p className="text-lg">
                Mantagua, Región de Valparaíso
              </p>
            </div>

            <div className="mb-8">
              <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#1F3328]/50">
                Contacto
              </p>

              <p className="text-lg">
                Teléfono y WhatsApp próximamente
              </p>
            </div>

            <a
              href="#"
              className="inline-block rounded-full bg-[#1F3328] px-7 py-3.5 font-semibold text-white transition hover:opacity-80"
            >
              Contactar
            </a>

          </div>
        </div>
      </section>


      {/* =========================
          FOOTER
      ========================== */}
      <footer className="bg-[#17281F] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-xl font-bold">
              La Jacinta
            </p>

            <p className="mt-1 text-sm text-white/60">
              Centro Equino
            </p>
          </div>

          <p className="text-sm text-white/60">
            © 2026 Centro Equino La Jacinta
          </p>

        </div>
      </footer>

    </main>
  );
}
