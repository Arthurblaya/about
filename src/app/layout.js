import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'About me',
  description: 'About me page, Artur Blaya',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
