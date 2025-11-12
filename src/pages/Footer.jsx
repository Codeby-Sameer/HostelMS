
import { Link } from 'react-router-dom';
import { 
  Building,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Shield,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Heart
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">HostelHub</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Modern hostel management solution for educational institutions. 
              Streamlining operations and enhancing student experience.
            </p>
            <div className="flex space-x-3">
              <SocialIcon href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialIcon href="#" icon={<Linkedin className="h-5 w-5" />} />
              <SocialIcon href="#" icon={<Instagram className="h-5 w-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/about" text="About Us" />
              <FooterLink to="/features" text="Features" />
              <FooterLink to="/pricing" text="Pricing Plans" />
              <FooterLink to="/white-label" text="White Label" />
              <FooterLink to="/contact" text="Contact" />
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <Shield className="h-4 w-4" />
                <span>University Hostels</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <Building className="h-4 w-4" />
                <span>Private Hostels</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <GraduationCap className="h-4 w-4" />
                <span>Student Portal</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <MessageCircle className="h-4 w-4" />
                <span>Support System</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <ContactItem 
                icon={<MapPin className="h-5 w-5" />}
                text="123 Education Boulevard, Campus City"
              />
              <ContactItem 
                icon={<Phone className="h-5 w-5" />}
                text="+91 6305675199"
                href="tel:6305675199"
              />
              <ContactItem 
                icon={<Mail className="h-5 w-5" />}
                text="hello@hostelhub.com"
                href="mailto:designcareermetrics@gmail.com"
              />
              <ContactItem 
                icon={<MessageCircle className="h-5 w-5" />}
                text="24/7 Customer Support"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {new Date().getFullYear()} HostelHub. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for better education</span>
            </div>
            
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <FooterBottomLink to="/privacy" text="Privacy Policy" />
              <FooterBottomLink to="/terms" text="Terms of Service" />
              <FooterBottomLink to="/cookies" text="Cookies" />
              <FooterBottomLink to="/security" text="Security" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable Components
const FooterLink = ({ to, text }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
    >
      <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
      <span>{text}</span>
    </Link>
  </li>
);

const FooterBottomLink = ({ to, text }) => (
  <Link 
    to={to} 
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    {text}
  </Link>
);

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    className="bg-gray-800 hover:bg-blue-600 text-white p-2 rounded-lg transition-all duration-200 hover:scale-110"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const ContactItem = ({ icon, text, href }) => {
  const content = (
    <div className="flex items-center space-x-3 text-gray-300 group">
      <div className="text-blue-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="group-hover:text-white transition-colors">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="hover:no-underline">
        {content}
      </a>
    );
  }

  return content;
};

export default Footer;