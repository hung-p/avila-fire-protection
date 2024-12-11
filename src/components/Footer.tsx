import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import logo_transparent from '../assets/images/avila-logo-transparent.png';

export function Footer() {
  const iconClasses = "text-2xl mr-4 text-gray-400 hover:text-white transition-colors duration-300";
  return (
    <footer className="bg-gray-900 text-white py-2">
      <div className="container mx-auto px-4 py-12">
        <div className="flex">
          <div className="w-2/4">
            <div className="flex items-center">
              <img
                src={logo_transparent}
                alt="Gilberto Avila - Fire Protection and Plumbing Services"
                className="rounded-lg  object-cover h-20 mb-4"
              />
            </div>
            <p>
              Professional fire protection and plumbing services you can trust. <br />Serving Santa Clara County & San Mateo County Area since 2002.
            </p>
          </div>
          <div className="w-1/4">
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
          <div className="w-1/4">
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
        <div className="flex justify-center items-center mb-4">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <a href="https://www.youtube.com/@avilaplumbing9307" target="_blank">
              <FaYoutube className={iconClasses} />
            </a>
            <a href="https://www.instagram.com/avilafireprotection/" target="_blank">
              <FaInstagram className={iconClasses} />
            </a>
            <a href="http://tiktok.com/@avilaplumbing" target="_blank">
              <FaTiktok className={iconClasses} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100077696689752" target="_blank" >
              <FaFacebook className={iconClasses} />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FaTwitter className={iconClasses} />
            </a>
          </div>
        </div>
        <p>&copy; 2002 - {new Date().getFullYear()} Avila Fire Protection and Plumbing. All rights reserved.</p>
      </div>
    </footer >
  );
}