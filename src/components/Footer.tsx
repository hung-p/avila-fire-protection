import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import logo_transparent from '../assets/images/avila-logo-transparent.png';

export function Footer() {
  const iconClasses = "text-2xl mr-4 text-gray-400 hover:text-white transition-colors duration-300";

  return (
    <footer className="bg-gray-900 text-white py-2">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row sm:space-x-12 space-y-12 sm:space-y-0">
          <div className="w-full sm:w-2/5">
            <div className="flex items-center">
              <a href="/">
                <img
                  src={logo_transparent}
                  alt="Gilberto Avila - Fire Protection and Plumbing Services"
                  className="rounded-lg object-cover h-20 mb-4"
                />
              </a>
            </div>
            <p>
            Trusted for over two decades, Gilbert Avila has been your trusted expert in fire protection and plumbing services, proudly serving the entire Bay Area, including Santa Clara, San Mateo, and other surrounding counties. Committed to quality service and customer satisfaction with dedication since 2002.</p>
          </div>

          <div className="w-full sm:w-1/4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Fire Protection</li>
                <li className="text-gray-400">Plumbing Services</li>
                <li className="text-gray-400">Residential Services</li>
                <li className="text-gray-400">Commercial Services</li>
                <li className="text-gray-400">Emergency Services</li>
                <li className="text-gray-400">Maintenance</li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center text-gray-400 pt-4 pb-2">
        <div className="flex justify-center items-center mb-4 space-x-4">
          <a href="https://www.youtube.com/@avilaplumbing9307" target="_blank" rel="noopener noreferrer">
            <FaYoutube className={iconClasses} />
          </a>
          <a href="https://www.instagram.com/avilafireprotection/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={iconClasses} />
          </a>
          <a href="http://tiktok.com/@avilaplumbing" target="_blank" rel="noopener noreferrer">
            <FaTiktok className={iconClasses} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100077696689752" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={iconClasses} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={iconClasses} />
          </a>
        </div>
        <p>
          Designed by{' '}
          <a href="https://ratexa.com" target="_blank" className="text-blue-500 hover:underline">Ratexa — Discover Top-Rated Businesses</a>
        </p>
        <p>&copy; 2002 - {new Date().getFullYear()} Avila Fire Protection and Plumbing. All rights reserved.</p>

      </div>

    </footer>
  );
}
