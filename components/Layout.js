import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-yellow-400 text-black text-center py-3 px-4">
        <p className="font-bold text-sm sm:text-base">
          🏷️ This domain is for sale! Contact us at{' '}
          <a href="mailto:info@selectauthority.com" className="underline font-extrabold hover:text-yellow-900">
            info@selectauthority.com
          </a>{' '}
          for details.
        </p>
      </div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}