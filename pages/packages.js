import Layout from '@/components/Layout';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Link from 'next/link';
import { Calendar, Mountain, Clock } from 'lucide-react';

export default function Packages() {
  const packages = [
    {
      name: 'Kuari Pass Trek',
      duration: '4 Days / 3 Nights',
      price: '₹8,500 per person',
      difficulty: 'Moderate',
      bestSeason: 'April-June, Sept-Nov',
      description: 'Trek to the famous Kuari Pass (12,516 ft) also known as Curzon\'s Trail. Experience breathtaking 360° views of Nanda Devi, Dronagiri, and Hathi Parbat.',
      highlights: ['Alpine meadows', 'Camping under stars', 'Bird watching', 'Panoramic Himalayan views']
    },
    {
      name: 'Badrinath Pilgrimage',
      duration: '3 Days / 2 Nights',
      price: '₹6,500 per person',
      difficulty: 'Easy',
      bestSeason: 'May-October',
      description: 'Visit the sacred Badrinath Temple, one of the Char Dham. Includes visit to Tapt Kund hot springs and Mana Village.',
      highlights: ['Badrinath Temple', 'Tapt Kund', 'Mana Village', 'River Alaknanda']
    },
    {
      name: 'Auli Ski Package',
      duration: '5 Days / 4 Nights',
      price: '₹12,500 per person',
      difficulty: 'Beginner/Intermediate',
      bestSeason: 'December-March',
      description: 'Experience skiing at India\'s premier ski resort. Includes ski equipment rental and basic instruction.',
      highlights: ['Skiing lessons', 'Gondola ride', 'Triveni Lake', 'Nanda Devi views']
    },
    {
      name: 'Valley of Flowers',
      duration: '5 Days / 4 Nights',
      price: '₹10,500 per person',
      difficulty: 'Moderate',
      bestSeason: 'July-September',
      description: 'Trek to the UNESCO World Heritage Valley of Flowers, home to over 500 species of alpine flowers.',
      highlights: ['Brahma Kamal', 'Medicinal plants', 'Photography paradise', 'Himalayan wildlife']
    },
    {
      name: 'Niti Valley Explorer',
      duration: '3 Days / 2 Nights',
      price: '₹9,500 per person',
      difficulty: 'Easy',
      bestSeason: 'May-October',
      description: 'Explore the beautiful Niti Valley, home to the Bhotia tribe. Visit Malari village and hot springs.',
      highlights: ['Bhotia villages', 'Malari', 'Hot springs', 'Tibetan border views']
    }
  ];

  return (
    <Layout 
      title="Trek & Tour Packages - Adventure in Uttarakhand"
      description="Book trekking and tour packages from Rana Guest House. Kuari Pass trek, Auli skiing, Badrinath pilgrimage, Valley of Flowers, and Niti Valley exploration."
    >
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <h1 className="text-center">Adventure Packages</h1>
        <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
          Explore the best of Uttarakhand with our curated trekking and tour packages. 
          All packages include accommodation, meals, and experienced local guides.
        </p>

        <div className="card-grid">
          {packages.map((pkg, index) => (
            <div className="card" key={index}>
              {pkg.name === 'Kuari Pass Trek' ? (
                <img src="/assests/kuari pass.jpeg" alt="Kuari Pass Trek" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : pkg.name === 'Badrinath Pilgrimage' ? (
                <img src="/assests/badrinath.webp" alt="Badrinath Temple" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : pkg.name === 'Auli Ski Package' ? (
                <img src="/assests/auli.jpg" alt="Auli Ski Resort" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : pkg.name === 'Valley of Flowers' ? (
                <img src="/assests/vof.jpeg" alt="Valley of Flowers" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : pkg.name === 'Niti Valley Explorer' ? (
                <img src="/assests/niti.jpeg" alt="Niti Valley" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : (
                <ImagePlaceholder text={`Image: ${pkg.name}`} />
              )}
              <div className="card-content">
                <h3>{pkg.name}</h3>
                <div className="price">{pkg.price}</div>
                
                <div style={{ margin: '0.5rem 0' }}>
                  <Clock size={16} style={{ display: 'inline', marginRight: '5px' }} /> {pkg.duration}
                </div>
                <div style={{ margin: '0.5rem 0' }}>
                  <Mountain size={16} style={{ display: 'inline', marginRight: '5px' }} /> Difficulty: {pkg.difficulty}
                </div>
                <div style={{ margin: '0.5rem 0' }}>
                  <Calendar size={16} style={{ display: 'inline', marginRight: '5px' }} /> Best: {pkg.bestSeason}
                </div>

                <p style={{ margin: '1rem 0' }}>{pkg.description}</p>
                
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Highlights:</h4>
                <div className="amenities-list">
                  {pkg.highlights.map((highlight, i) => (
                    <span className="amenity-item" key={i}>{highlight}</span>
                  ))}
                </div>

                <Link href="/contact" className="btn" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                  Book Package
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--light-bg)', borderRadius: '10px' }}>
          <h3>Package Inclusions</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            <div>✓ Accommodation</div>
            <div>✓ All meals</div>
            <div>✓ Local guide</div>
            <div>✓ Permits</div>
            <div>✓ First aid</div>
            <div>✓ Transport from base</div>
          </div>
          <p style={{ marginTop: '1rem' }}><strong>Note:</strong> Prices may vary based on group size and season. Contact us for custom packages.</p>
        </div>
      </div>
    </Layout>
  );
}
