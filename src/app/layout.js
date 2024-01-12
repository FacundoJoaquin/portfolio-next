import { Poppins } from 'next/font/google'
import './globals.css'
import AnimatedBg from './ui/components/atoms/AnimatedBg/AnimatedBg'

const poppins = Poppins({
  subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Facundo Joaquin',
  description: 'Portfolio Facundo Joaquin - 2024',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} h-screen w-screen `}>
        <AnimatedBg />
        {children}
      </body>
    </html>
  )
}