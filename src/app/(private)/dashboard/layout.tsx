import '../../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="w-full h-10 flex items-center bg-slate-300">
          
        </nav>
        {children}
      </body>
    </html>
  )
}
