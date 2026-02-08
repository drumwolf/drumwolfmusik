import "../app/globals.css";

const Footer = () => {
  return (
    <footer>
      <div className="content-width px-8 py-6 flex flex-col items-center md:flex-row md:justify-between bg-white border-t border-gray-700 text-sm text-gray-600 gap-2">
        <div>© 2026 drumwolfmusik</div>
        <div className="flex items-center">
          <a href="https://www.instagram.com/drumwolf" className="hover:text-blue-600">Instagram</a>
          <div className="mx-2">|</div>
          <a href="https://www.youtube.com/@drumwolfmusik" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">YouTube</a>
        </div>
        <a href="#top" className="hover:text-blue-600">↑ Back to Top</a>
      </div>
    </footer>
  )
}

export default Footer
