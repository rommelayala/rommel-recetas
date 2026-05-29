import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recetas de Mamá",
  description: "Recetas tradicionales peruanas de la cocina de mamá.",
};

function Header() {
  return (
    <header className="bg-[#c0533a] text-white shadow-md">
      <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold tracking-tight leading-tight">
            Recetas de Mamá
          </span>
          <span className="text-sm text-[#f5c4b4] leading-tight">
            Cocina tradicional peruana
          </span>
        </Link>
        <nav className="flex gap-4 text-sm font-medium">
          <Link href="/" className="hover:text-[#f5c4b4] transition-colors">
            Inicio
          </Link>
          <Link href="/sobre" className="hover:text-[#f5c4b4] transition-colors">
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-[#e8d5c0] bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8 text-center text-sm text-[#8b7355]">
        <p className="font-medium text-[#c0533a] mb-1">Recetas de Mamá</p>
        <p>Recetas tradicionales peruanas con mucho amor.</p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
