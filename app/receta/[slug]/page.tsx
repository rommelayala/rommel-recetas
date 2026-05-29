import { notFound } from "next/navigation";
import Link from "next/link";
import { recetas, getRecetaBySlug, categorias, formatFecha } from "@/lib/recetas";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return recetas.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const receta = getRecetaBySlug(slug);
  if (!receta) return { title: "Receta no encontrada" };
  return {
    title: `${receta.titulo} | Recetas de Mamá`,
    description: receta.descripcion,
  };
}

export default async function RecetaPage({ params }: Props) {
  const { slug } = await params;
  const receta = getRecetaBySlug(slug);
  if (!receta) notFound();

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

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 text-xs font-medium bg-[#fdf0ea] text-[#c0533a] px-2 py-0.5 rounded-full">
              {categorias[receta.categoria]}
            </span>
            <time className="text-xs text-[#8b7355]">
              {formatFecha(receta.fecha)}
            </time>
          </div>

          <h1 className="text-3xl font-bold text-[#2c1810] mb-3 leading-tight">
            {receta.titulo}
          </h1>

          <p className="text-[#8b7355] text-base leading-relaxed mb-4">
            {receta.descripcion}
          </p>

          {(receta.porciones || receta.tiempo) && (
            <div className="flex flex-wrap gap-4 p-4 bg-white rounded-xl border border-[#e8d5c0]">
              {receta.porciones && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#c0533a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                  </svg>
                  <div>
                    <p className="text-xs text-[#8b7355] leading-none">Porciones</p>
                    <p className="text-sm font-medium text-[#2c1810]">{receta.porciones}</p>
                  </div>
                </div>
              )}
              {receta.tiempo && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#c0533a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-xs text-[#8b7355] leading-none">Tiempo</p>
                    <p className="text-sm font-medium text-[#2c1810]">{receta.tiempo}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#2c1810] mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c0533a] rounded-full inline-block" />
            Ingredientes
          </h2>
          <ul className="bg-white rounded-xl border border-[#e8d5c0] divide-y divide-[#f0e4d4]">
            {receta.ingredientes.map((ing, i) => (
              <li key={i} className="flex items-start gap-3 px-4 py-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#c0533a] shrink-0" />
                <span className="text-[#2c1810] text-sm leading-relaxed">{ing}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#2c1810] mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c0533a] rounded-full inline-block" />
            Preparación
          </h2>
          <ol className="space-y-3">
            {receta.pasos.map((paso, i) => (
              <li key={i} className="flex gap-4 bg-white rounded-xl border border-[#e8d5c0] p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#c0533a] text-white text-sm font-bold flex items-center justify-center leading-none">
                  {i + 1}
                </span>
                <p className="text-[#2c1810] text-sm leading-relaxed pt-0.5">{paso}</p>
              </li>
            ))}
          </ol>
        </section>

        {receta.notas && (
          <aside className="bg-[#fdf0ea] border border-[#e8c8b0] rounded-xl p-4">
            <h3 className="text-sm font-bold text-[#c0533a] mb-1 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Nota
            </h3>
            <p className="text-sm text-[#6b4e35] leading-relaxed">{receta.notas}</p>
          </aside>
        )}
      </article>
    </div>
  );
}
