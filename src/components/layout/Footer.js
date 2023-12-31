import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import logoWhiteImage from '../../assets/logo-white.png';
import '../../styles/footer.css';
import { navLinks } from '../../utils/navLinks';

const contacts = [
  {
    icon: faLocationDot,
    info: '678 Pisa Ave, Chicago, IL 60611',
  },
  {
    icon: faPhone,
    info: '(312) 593-2744',
  },
  {
    icon: faEnvelope,
    info: 'customer@littlelemon.com',
  },
];

const socials = [
  {
    icon: faFacebook,
    name: 'facebook',
  },
  {
    icon: faTwitter,
    name: 'twitter',
  },
  {
    icon: faInstagram,
    name: 'instagram',
  },
  {
    icon: faYoutube,
    name: 'youtube',
  },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img
          className="site-footer-logo"
          src={logoWhiteImage}
          alt="Little Lemon"
        />
        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
          <ul>
            {navLinks.map((navLink) =>
              <li key={navLink.path}>
                <Link to={navLink.path}>
                  {navLink.name}
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          {contacts.map((contact) =>
            <p key={contact.info}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          )}
        </div>
        <div className="site-footer-social">
          <h4>Connect with us</h4>
          {socials.map((social) =>
            <a
              key={social.name}
              href={`https://${social.name}.com`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;