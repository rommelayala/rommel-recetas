import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <p className="text-5xl mb-4">404</p>
      <h1 className="text-2xl font-bold text-[#2c1810] mb-2">Página no encontrada</h1>
      <p className="text-[#8b7355] mb-8">Esta receta no existe... todavía.</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#c0533a] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#9e3e29] transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
