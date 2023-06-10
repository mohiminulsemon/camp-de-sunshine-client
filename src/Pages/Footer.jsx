import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from "../assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-800  fixed bottom-0 w-full">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-white">
            <img
              className="h-12"
              src={logo}
              alt=""
            />
            <p className="text-sm mt-4">
              58 West Portal Ave #800,
              <br />
              San Francisco, CA 94127
            </p>
            <div className="flex mt-4">
              <a className="text-white mr-4">
                <FaFacebook />
              </a>
              <a className="text-white mr-4">
                <FaInstagram />
              </a>
              <a className="text-white">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">ABOUT S&K</h3>
            <ul className="text-sm">
              <li>Philosophy</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>FAQs</li>
              <li>Events</li>
            </ul>
          </div>

          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">HELPFUL LINKS</h3>
            <ul className="text-sm">
              <li>Financial Aid</li>
              <li>Using Bright Horizons Back-Up Care</li>
              <li>Email List</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">OUR CAMPS</h3>
            <ul className="text-sm">
              <li>Summer Camps</li>
              <li>Spring Break Camps</li>
              <li>Winter Break Camps</li>
            </ul>
          </div>

          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">LEGAL STUFF</h3>
            <ul className="text-sm">
              <li>Liability Waiver</li>
              <li>DMCA</li>
              <li>Camp de Sunshine Guidelines & Safety</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Camp de Sunshine. All rights
          reserved.{' '}
          <a className="text-gray-400">Privacy Policy and COPPA Notice</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
