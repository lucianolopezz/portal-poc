import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <div>
      <header className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
              <Link href="/">Penapolis</Link>
          </div>
          <nav>
              <ul className="flex space-x-4">
                  <li>
                      <Link href="/" className="hover:text-gray-400">
                          Home
                      </Link>
                  </li>
                  <li>
                      <Link href="/noticias" className="hover:text-gray-400">
                          Notícias
                      </Link>
                  </li>
              </ul>
          </nav>
      </div>
  </header>
     {children}
     <footer className="bg-primary text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="mb-2">
              <Link href="/politica-de-privacidade" className="hover:text-gray-400">
                  Política de Privacidade
              </Link>
          </div>
          <div className="mb-2">
              <Link href="/termos-de-uso" className="hover:text-gray-400">
                  Termos de Uso
              </Link>
          </div>
          <div className="mb-2">
              <span>© {new Date().getFullYear()} Meu Portal. Todos os direitos reservados.</span>
          </div>
      </div>
  </footer>
   </div>
  )
}
