import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Rooms & Rates', path: '/rooms' },
    { label: 'Packages', path: '/packages' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Nearby', path: '/nearby' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky-header">
      <div className="header-container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>

        {/* LOGO */}

        <Link href="/" style={{ display:'flex', alignItems:'center', textDecoration:'none', color:'inherit' }}>
          <img 
            src="/assests/logo.png" 
            alt="Rana Guest House Logo"
            style={{ height:'45px', marginRight:'12px' }}
          />

          <div>
            <h2 style={{ margin:0, fontSize:'20px' }}>Rana Guest House</h2>
            <p style={{ margin:0, fontSize:'12px', color:'gray' }}>
              Baragaon • Joshimath
            </p>
          </div>
        </Link>

        {/* HAMBURGER */}

        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV */}

        <nav>
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>

            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  style={{ fontWeight:'500' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* BOOK BUTTON */}

            <li>
              <Link
                href="/contact"
                style={{
                  background:'#2563eb',
                  color:'white',
                  padding:'8px 16px',
                  borderRadius:'6px',
                  fontWeight:'600'
                }}
              >
                Book Now
              </Link>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;