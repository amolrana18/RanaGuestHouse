import Layout from '@/components/Layout';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { MapPin, Navigation } from 'lucide-react';

export default function Nearby() {
  const attractions = [
    {
      name: 'Badrinath Temple',
      distance: '45 km, 2  hours',
      altitude: '3,300 m',
      description: 'One of the Char Dham temples, dedicated to Lord Vishnu. Ancient temple with a golden roof, located on the banks of river Alaknanda.',
      highlights: ['Tapt Kund hot springs', 'Nar-Narayan mountain range', 'Evening aarti']
    },
    {
      name: 'Kuari Pass',
      distance: '18 km and then trek from Tugasi ',
      altitude: '12,516 ft',
      description: 'Also known as Curzon\'s Trail, offering stunning 360° views of Nanda Devi, Dronagiri, and Hathi Parbat peaks.',
      highlights: ['Alpine meadows', 'Camping', 'Birdlife', 'Sunrise views']
    },
    {
      name: 'Mana Village',
      distance: '48 km, 2.5 hours',
      altitude: '3,200 m',
      description: 'The last village before the Tibet border, with mythological connections to the Mahabharata.',
      highlights: ['Vyasa Gufa', 'Ganesh Gufa', 'Bhim Pul', 'Saraswati River origin']
    },
    {
      name: 'Niti Valley',
      distance: '90 km, 3 hours',
      altitude: '3,600 m',
      description: 'Beautiful valley inhabited by the Bhotia tribe. Inner Line Permit required for certain areas.',
      highlights: ['Malari village', 'Hot springs', 'Ancient temples',"Timarsain mahadev ", 'Tibetan border views']
    }
  ];

  const moreAttractions = [
    {
      name: 'Auli',
      distance: '15 km from Joshimath',
      altitude: '2,800-3,050 m',
      description: 'India\'s premier ski resort, featuring the world\'s highest cable car and stunning views of Nanda Devi.',
      highlights: ['Skiing', 'Gondola ride', 'Triveni Lake', 'Nanda Devi views']
    },
    {
      name: 'Valley of Flowers',
      distance: '25 km to base + 16 km trek',
      altitude: '3,600 m',
      description: 'UNESCO World Heritage Site famous for its alpine flowers and meadows. Best visited July-September.',
      highlights: ['Brahma Kamal', 'Medicinal plants', 'Photography', 'Endemic wildlife']
    },
    {
      name: 'Vasudhara Falls',
      distance: '48 km + 6 km trek',
      altitude: '3,700 m',
      description: 'Mythological waterfall that creates rainbows on sunny days. Sacred to Hindus and Buddhists.',
      highlights: ['6 km trek from Mana', 'Rainbow formation', 'Draupadi legend', 'Crystal clear water']
    },
    {
      name: 'Hemkund Sahib',
      distance: '25 km + 19 km trek',
      altitude: '15,200 ft',
      description: 'The highest Gurudwara in the world, surrounded by seven snow-capped peaks and a crystal clear lake.',
      highlights: ['Highest Gurudwara', 'Free Langar', 'Crystal lake', 'June-October only']
    }
  ];

  const allAttractions = [...attractions, ...moreAttractions];

  return (
    <Layout 
      title="Nearby Attractions - Places to Visit in Joshimath"
      description="Explore nearby attractions from Rana Guest House: Badrinath Temple, Kuari Pass, Auli, Valley of Flowers, Mana Village, Niti Valley, Vasudhara Falls, and Hemkund Sahib."
    >
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <h1 className="text-center">Nearby Attractions</h1>
        <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
          Rana Guest House is perfectly located to explore the best of Uttarakhand. 
          From sacred temples to breathtaking treks, here are the must-visit places near Baragaon.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {allAttractions.map((place, index) => (
            <div className="card" key={index} style={{ height: '100%' }}>
              {place.name === 'Badrinath Temple' ? (
                <img src="/assests/badrinath.webp" alt="Badrinath Temple" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : place.name === 'Kuari Pass' ? (
                <img src="/assests/kuari pass.jpeg" alt="Kuari Pass" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : place.name === 'Niti Valley' ? (
                <img src="/assests/niti.jpeg" alt="Niti Valley" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : place.name === 'Auli' ? (
                <img src="/assests/auli.jpg" alt="Auli Ski Resort" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : place.name === 'Valley of Flowers' ? (
                <img src="/assests/vof.jpeg" alt="Valley of Flowers" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : place.name === 'Mana Village' ? (
                <img src="/assests/niti.jpeg" alt="Mana Village" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : place.name === 'Vasudhara Falls' ? (
                <img src="/assests/vasudhara.jpeg" alt="Vasudhara Falls" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : place.name === 'Hemkund Sahib' ? (
                <img src="/assests/hemkund sahib.jpeg" alt="Hemkund Sahib" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : (
                <ImagePlaceholder text={`Image: ${place.name}`} height="180px" />
              )}
              <div className="card-content">
                <h3>{place.name}</h3>
                
                <div style={{ marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>
                  <MapPin size={16} style={{ display: 'inline', marginRight: '5px' }} />
                  <span style={{ fontWeight: '500' }}>{place.distance}</span>
                </div>
                
                <div style={{ marginBottom: '1rem', color: 'var(--secondary-gold)' }}>
                  <Navigation size={16} style={{ display: 'inline', marginRight: '5px' }} />
                  <span>Altitude: {place.altitude}</span>
                </div>

                <p style={{ marginBottom: '1rem' }}>{place.description}</p>

                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Highlights:</h4>
                <div className="amenities-list">
                  {place.highlights.map((highlight, i) => (
                    <span className="amenity-item" key={i}>{highlight}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--light-bg)', borderRadius: '10px' }}>
          <h3>Travel Tips</h3>
          <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>✓ Carry valid ID proof for permit requirements</li>
            <li style={{ marginBottom: '0.5rem' }}>✓ Best time to visit: April-June and September-November</li>
            <li style={{ marginBottom: '0.5rem' }}>✓ Carry warm clothes even in summer</li>
            <li style={{ marginBottom: '0.5rem' }}>✓ We can help arrange local transport and guides</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
