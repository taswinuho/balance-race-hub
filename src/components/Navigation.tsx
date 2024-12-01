import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-racing-black">PushBike</span>
              <span className="text-xl font-bold text-racing-red">GP</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/events" className="nav-link">
                Events
              </Link>
              <Link to="/riders" className="nav-link">
                Riders
              </Link>
              <Link to="/news" className="nav-link">
                News
              </Link>
              <Link to="/rankings" className="nav-link">
                Rankings
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-racing-black hover:bg-racing-red hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                to="/events"
                className="block rounded-md px-3 py-2 text-base font-medium text-racing-black hover:bg-racing-red hover:text-white"
                onClick={toggleMenu}
              >
                Events
              </Link>
              <Link
                to="/riders"
                className="block rounded-md px-3 py-2 text-base font-medium text-racing-black hover:bg-racing-red hover:text-white"
                onClick={toggleMenu}
              >
                Riders
              </Link>
              <Link
                to="/news"
                className="block rounded-md px-3 py-2 text-base font-medium text-racing-black hover:bg-racing-red hover:text-white"
                onClick={toggleMenu}
              >
                News
              </Link>
              <Link
                to="/rankings"
                className="block rounded-md px-3 py-2 text-base font-medium text-racing-black hover:bg-racing-red hover:text-white"
                onClick={toggleMenu}
              >
                Rankings
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;