import Layout from '@/components/Layout';
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react';

export default function Contact() {
  const contacts = [
    { name: 'Amol Rana', phone: '+91 8979702574', role: 'Primary Contact' },
    { name: 'Anshul Rana', phone: '+91 7830368842', role: 'Hospitality' },
    { name: 'Akshay Rana', phone: '+91 9368297566', role: 'Operations' },
    { name: 'Ayush Rana', phone: '+91 8755481856', role: 'Operations' }
  ];

  const latitude = "30.521658";
  const longitude = "79.599922";

  return (
    <Layout 
      title="Contact Us - Rana Guest House Joshimath"
      description="Contact Rana Guest House in Baragaon, Joshimath. Call or WhatsApp for bookings and inquiries."
    >
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        
        <h1 className="text-center">Contact Us</h1>
        <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
          Ready to experience the Himalayas? Call us directly for bookings and inquiries.
        </p>

        {/* Map Section */}
        <div className="map-container" style={{ position: "relative", marginBottom: "2rem" }}>
          
          <iframe
            src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`}
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
            title="Rana Guest House Location"
          ></iframe>

          {/* Map Buttons */}
          <div style={{
            position: "absolute",
            bottom: "15px",
            left: "15px",
            display: "flex",
            gap: "10px"
          }}>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#fff",
                padding: "8px 14px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "500",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
              }}
            >
              Open in Maps
            </a>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#1a73e8",
                color: "white",
                padding: "8px 14px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "500"
              }}
            >
              <Navigation size={16} style={{ marginRight: "5px" }} />
              Get Directions
            </a>

          </div>
        </div>

        {/* Contact Cards */}
        <div className="contact-info-grid">
          {contacts.map((contact, index) => (
            <div className="contact-card" key={index}>
              <h3>{contact.name}</h3>
              <p style={{ color: 'var(--secondary-gold)', marginBottom: '1rem' }}>
                {contact.role}
              </p>

              <div className="contact-detail">
                <Phone size={18} />
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                  {contact.phone}
                </a>
              </div>

              <a 
                href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`}
                className="whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: '1rem' }}
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginTop: '2rem',
          padding: '2rem',
          background: 'var(--light-bg)',
          borderRadius: '10px'
        }}>

          <div className="text-center">
            <Mail size={24} color="var(--primary-blue)" />
            <h4 style={{ margin: '0.5rem 0' }}>Email</h4>
            <a href="mailto:rana.guesthouse.baragaon@gmail.com">
              rana.guesthouse.baragaon@gmail.com
            </a>
          </div>

          <div className="text-center">
            <Clock size={24} color="var(--primary-blue)" />
            <h4 style={{ margin: '0.5rem 0' }}>Check-in / Check-out</h4>
            <p>
              Check-in: 12:00 PM <br />
              Check-out: 10:00 AM
            </p>
          </div>

          <div className="text-center">
            <MapPin size={24} color="var(--primary-blue)" />
            <h4 style={{ margin: '0.5rem 0' }}>Address</h4>
            <p>
              Village Baragaon, Near Joshimath <br />
              District Chamoli, Uttarakhand - 246443
            </p>
          </div>

        </div>

        {/* Extra Note */}
        <div style={{ marginTop: '2rem', padding: '1rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-light)' }}>
            ⏰ We recommend calling between 8 AM - 8 PM for quick responses. <br />
            💬 WhatsApp messages are monitored throughout the day.
          </p>
        </div>

      </div>
    </Layout>
  );
}