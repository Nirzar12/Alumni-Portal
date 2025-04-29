import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaUniversity } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaUniversity className="text-2xl" />
              <h3 className="text-xl font-bold">LDCE Alumni</h3>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Connecting generations of LD College of Engineering graduates to foster 
              lifelong relationships and professional growth opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/app/about" text="About Us" />
              <FooterLink href="/app/events" text="Events" />
              <FooterLink href="/app/alumni" text="Alumni Network" />
              <FooterLink href="/app/contact" text="Contact" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">
              Contact
            </h4>
            <ul className="space-y-3 text-blue-100">
              <FooterContact icon={<FaEnvelope />} text="alumni@ldce.ac.in" />
              <FooterContact icon={<FaPhone />} text="+91 79 2323 1234" />
              <FooterContact 
                icon={<FaMapMarkerAlt />} 
                text="LD College of Engineering, Ahmedabad, Gujarat 380015"
              />
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">
              Connect With Us
            </h4>
            <div className="flex space-x-4 mb-4">
              <SocialIcon 
                icon={<FontAwesomeIcon icon={faFacebookF} />} 
                href="https://facebook.com" 
              />
              <SocialIcon 
                icon={<FontAwesomeIcon icon={faTwitter} />} 
                href="https://twitter.com" 
              />
              <SocialIcon 
                icon={<FontAwesomeIcon icon={faLinkedinIn} />} 
                href="https://linkedin.com" 
              />
              <SocialIcon 
                icon={<FontAwesomeIcon icon={faInstagram} />} 
                href="https://instagram.com" 
              />
            </div>
            <p className="text-blue-100 text-sm">
              Subscribe to our newsletter for updates
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-6 text-center text-blue-100 text-sm">
          © {new Date().getFullYear()} LD College of Engineering Alumni Network. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }) => (
  <li>
    <a 
      href={href} 
      className="text-blue-100 hover:text-white transition flex items-center space-x-2"
    >
      <span className="w-1 h-1 bg-blue-100 rounded-full"></span>
      <span>{text}</span>
    </a>
  </li>
);

const FooterContact = ({ icon, text }) => (
  <li className="flex items-start space-x-3">
    <span className="text-white mt-0.5">{icon}</span>
    <span>{text}</span>
  </li>
);

const SocialIcon = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center bg-blue-800 rounded-full hover:bg-blue-700 transition text-white"
  >
    {icon}
  </a>
);

export default Footer;