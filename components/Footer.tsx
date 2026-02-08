import "../app/globals.css";

const Footer = () => {
  return (
    <footer>
      <div className="content-width font-sans x-8 py-6 flex items-center justify-between bg-white border-t border-gray-700">
        <div className="text-sm text-gray-600 flex items-center">
          © 2026 drumwolfmusik
          <div className="mx-2">|</div>
          <a href="https://www.instagram.com/drumwolf" className="hover:text-blue-600">Instagram</a>
          <div className="mx-2">|</div>
          <a href="https://www.youtube.com/@drumwolfmusik" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">YouTube</a>
        </div>
        <div className="text-sm text-gray-600 flex items-center">
          {/* Back to Top Link */}
          <a href="#top">↑ Back to Top</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
