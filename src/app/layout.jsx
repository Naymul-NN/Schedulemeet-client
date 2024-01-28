import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/components/auth/Authprovider'
import { Toaster } from 'react-hot-toast'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SchedulMeet',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`bg-[#0d0c22] ${inter.className} text-white`}>
        <link rel="icon" href="https://i.ibb.co/5LFVvdk/logo-white.webp" sizes="any" />
        
        <AuthProvider>
          {children}
          </AuthProvider>
          <Toaster />
      </body>
    </html>
  )
}
