import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

// Importa os componentes cliente de forma dinâmica
const DynamicThemeProvider = dynamic(
  () =>
    import("@/components/theme-provider/theme-provider.component").then(
      (mod) => mod.ThemeProvider
    ),
  { ssr: false }
);

const Navbar = dynamic(
  () => import("@/components/navbar/navbar.component"),
  { ssr: false }
);
const Footer = dynamic(
  () => import("@/components/footer/footer.component"),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plataforma Cultural Uberlândia",
  description:
    "Plataforma digital para divulgação de atividades culturais, turísticas e artísticas de Uberlândia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <DynamicThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </DynamicThemeProvider>
      </body>
    </html>
  );
}