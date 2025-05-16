import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you&#39;re looking for doesn&#39;t exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 
            border border-transparent text-base font-medium rounded-md 
            text-white bg-primary hover:bg-secondary transition-colors 
            duration-300"
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}