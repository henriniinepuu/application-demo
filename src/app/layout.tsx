import { auth } from "@/auth"
import { SessionProvider } from "next-auth/react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  
  return (
    <html lang="en" suppressHydrationWarning >
      <body >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SessionProvider session={session}>
            {children}
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}