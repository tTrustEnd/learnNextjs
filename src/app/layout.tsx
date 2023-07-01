import Template from "./templace"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body><span>ssjsjssjsjssjsjs</span>  <Template >{children}</Template> <span>sjsjssjsjssjsjssjsjssjsjs</span> </body>
        
      </html>
    )
  }