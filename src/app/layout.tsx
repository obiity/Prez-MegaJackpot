import type { Metadata } from "next";
import { Montserrat, Chakra_Petch, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import { HudBackground } from "@/components/ui/HudBackground";
import { HeaderV2 } from "@/components/sections/HeaderV2";
import { Footer } from "@/components/sections/Footer";
import { BottomNav } from "@/components/sections/BottomNav";
import { DesktopNav } from "@/components/sections/DesktopNav";
import { FloatingSupportButton } from "@/components/ui/FloatingSupportButton";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MEGA JACKPOT - Chaque ticket, une chance de changer de vie",
  description: "Participez au MEGA JACKPOT et gagnez des opportunités de vie : Maisons, Business, Rentes familiales. Tirages certifiés.",
  icons: {
    icon: "/MJ_logo_icone.png",
  },
  openGraph: {
    images: ["/MEGA JACKPOT -CLAIR.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`dark ${montserrat.variable} ${chakraPetch.variable} ${shareTechMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.documentElement.classList.add('dark');
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#010919] text-white">
        <ThemeProvider
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <HudBackground />
          <HeaderV2 />
          <main className="flex flex-col flex-1">
            {children}
          </main>
          <Footer />
          <BottomNav />
          <DesktopNav />
          <FloatingSupportButton />
          <Toaster position="bottom-center" richColors theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}
