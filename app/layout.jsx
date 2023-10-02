import Navbar from "../components/Navbar"
import './globals.css'

export const metadata = {
    title: 'Mi tienda con Nextjs',
    description: 'Mi tienda generada con Next.js',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
