import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ConvexClientProvider } from "@/components/web/ConvexClientProvider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8">
            <ConvexClientProvider>{children}</ConvexClientProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
