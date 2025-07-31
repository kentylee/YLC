import { Link } from 'react-router-dom';
import Logo from "./Logo";

function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
      {/* Logo on the left */}
      <div className="flex-shrink-0">
        <Logo />
      </div>

      {/* Navigation links */}
       <nav className="flex-1 flex justify-center gap-6 text-sm font-medium uppercase tracking-wide">
        <Link to="/" className="hover:text-gray-500">Home</Link>
        <Link to="/services" className="hover:text-gray-500">Services</Link>
        <Link to="/pricing" className="hover:text-gray-500">Pricing</Link>
        <Link to="/contact" className="hover:text-gray-500">Contact</Link>
        <Link to="/reviews" className="hover:text-gray-500">Reviews</Link>
        <Link to="/about" className="hover:text-gray-500">About</Link>
      </nav>
    </header>
  );
}

export default Navbar;
