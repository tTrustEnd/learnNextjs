import Template from "./templace"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>Header</header>
        <Template >{children}</Template>
        <footer>Footer</footer>
      </body>

    </html>
  )
}