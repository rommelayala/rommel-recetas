import Link from "next/link";
import { recetas, categorias, formatFecha, type Receta } from "@/lib/recetas";

const categoriaIcons: Record<string, string> = {
  sopas: "🍲",
  segundos: "🍽️",
  granos: "🌾",
  postres: "🍰",
  acompañamientos: "🥗",
  otros: "🥚",
};

function RecetaCard({ receta }: { receta: Receta }) {
  return (
    <Link
      href={`/receta/${receta.slug}`}
      className="block bg-white rounded-xl border border-[#e8d5c0] overflow-hidden shadow-sm hover:shadow-md hover:border-[#c0533a] transition-all duration-200 active:scale-[0.98]"
    >
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="inline-flex items-center gap-1 text-xs font-medium bg-[#fdf0ea] text-[#c0533a] px-2 py-0.5 rounded-full">
            {categoriaIcons[receta.categoria]} {categorias[receta.categoria]}
          </span>
          <time className="text-xs text-[#8b7355] shrink-0">
            {formatFecha(receta.fecha)}
          </time>
        </div>
        <h2 className="text-lg font-bold text-[#2c1810] mb-1 leading-snug">
          {receta.titulo}
        </h2>
        <p className="text-sm text-[#8b7355] leading-relaxed line-clamp-2">
          {receta.descripcion}
        </p>
        <div className="mt-3 flex items-center gap-3 text-xs text-[#8b7355]">
          {receta.porciones && (
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
              </svg>
              {receta.porciones}
            </span>
          )}
          {receta.tiempo && (
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {receta.tiempo}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const recetasPorCategoria = recetas.reduce(
    (acc, r) => {
      if (!acc[r.categoria]) acc[r.categoria] = [];
      acc[r.categoria].push(r);
      return acc;
    },
    {} as Record<string, Receta[]>
  );

  const orden: Array<keyof typeof categorias> = ["segundos", "sopas", "granos", "postres", "acompañamientos", "otros"];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#2c1810] mb-1">Todas las Recetas</h1>
        <p className="text-[#8b7355] text-sm">{recetas.length} recetas tradicionales</p>
      </div>

      <div className="space-y-10">
        {orden.map((cat) => {
          const grupo = recetasPorCategoria[cat];
          if (!grupo) return null;
          return (
            <section key={cat}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{categoriaIcons[cat]}</span>
                <h2 className="text-lg font-bold text-[#2c1810]">
                  {categorias[cat]}
                </h2>
                <div className="flex-1 h-px bg-[#e8d5c0]" />
                <span className="text-xs text-[#8b7355]">{grupo.length}</span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {grupo.map((receta) => (
                  <RecetaCard key={receta.slug} receta={receta} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
