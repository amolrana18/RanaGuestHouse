import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h3>Rana Guest House</h3>
            <p>Experience the warmth of Himalayan hospitality in the heart of Baragaon, Joshimath.</p>
            <div className="contact-detail" style={{ justifyContent: 'flex-start' }}>
              <MapPin size={18} />
              <span>Village Baragaon, Near Joshimath,<br />District Chamoli, Uttarakhand - 246443</span>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul style={{ listStyle: 'none' }}>
              <li><Link href="/rooms">Rooms & Rates</Link></li>
              <li><Link href="/packages">Trek Packages</Link></li>
              <li><Link href="/nearby">Nearby Attractions</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact Info</h4>
            <div className="contact-detail" style={{ justifyContent: 'flex-start' }}>
              <Phone size={18} />
              <div>
                <div>Amol Rana: <a href="tel:+918979702574">+91 8979702574</a></div>
                <div>Anshul Rana: <a href="tel:+919368254360">+91 9368254360</a></div>
                <div>Akshay Rana: <a href="tel:+919368297566">+91 9368297566</a></div>
              </div>
            </div>
            <div className="contact-detail" style={{ justifyContent: 'flex-start', marginTop: '0.5rem' }}>
              <Mail size={18} />
              <a href="mailto:rana.guesthouse.baragaon@gmail.com">rana.guesthouse.baragaon@gmail.com</a>
            </div>
            <div className="contact-detail" style={{ justifyContent: 'flex-start', marginTop: '0.5rem' }}>
              <Clock size={18} />
              <span>Check-in: 12:00 PM | Check-out: 10:00 AM</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Rana Guest House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
