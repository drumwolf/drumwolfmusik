const Footer = () => {
  return (
    <footer className="border-t border-gray-700 bg-gray-300 mt-12">
      <div className="max-w-4xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          © 2026 drumwolfmusik
        </div>
        <div className="text-sm text-gray-600 flex items-center">
          <a href="https://www.instagram.com/drumwolf" className="hover:text-blue-600">Instagram</a>
          <div className="mx-2">|</div>
          <a href="https://www.youtube.com/@drumwolfmusik" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">YouTube</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer