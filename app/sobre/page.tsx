import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre | Recetas de Mamá",
  description: "La historia detrás de Recetas de Mamá.",
};

export default function SobrePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[#8b7355] hover:text-[#c0533a] transition-colors mb-6"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Volver a recetas
      </Link>

      <article className="prose max-w-none">
        <h1 className="text-3xl font-bold text-[#2c1810] mb-6">Sobre este blog</h1>

        <div className="bg-white rounded-xl border border-[#e8d5c0] p-6 space-y-4 text-[#2c1810] text-sm leading-relaxed">
          <p>
            Este blog es un espacio para preservar y compartir las recetas tradicionales de la
            cocina peruana, especialmente aquellas que crecí comiendo en casa.
          </p>
          <p>
            Cada receta tiene una historia: aromas de cocina, manos que amasaron con paciencia,
            sabores que viajan en el tiempo. Aquí las guardamos para que no se pierdan.
          </p>
          <p>
            Son recetas sencillas, sin pretensiones, tal como las hacía mamá.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#c0533a] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#9e3e29] transition-colors"
          >
            Ver todas las recetas
          </Link>
        </div>
      </article>
    </div>
  );
}
