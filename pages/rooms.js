import Layout from '@/components/Layout';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Link from 'next/link';
import { Users } from 'lucide-react';

export default function Rooms() {
  const rooms = [
    {
      name: 'Triple Room',
      price: '₹2,000/night',
      capacity: '3 Adults + 1 Child',
      description: 'Wake up to breathtaking mountain views from your window. Spacious room with modern amenities and traditional Garhwali touches.',
      amenities: ['Mountain View', 'Attached Bathroom', 'Hot Water 24/7', 'Room Heater', 'Tea/Coffee ' ,"Almirah"]
    },
    {
      name: 'Standard Double Room',
      price: '₹1,500/night',
      capacity: '2 Adults',
      description: 'Comfortable room with garden views, perfect for couples or solo travelers. All essential amenities provided.',
      amenities: ['Garden View', 'Attached Bathroom', 'Hot Water 24/7',  'Almirah']
    },
    {
      name: 'Family Room',
      price: '₹2,500/night',
      capacity: '2 Adults + 2 Children',
      description: 'Perfect for families or groups. Two double bed and a simgle bed and kitchen access.',
      amenities: ['Almirah', 'Common Area', 'Kitchen Access', 'Mountain View', 'Hot Water',  'Heater']
    },
    {
      name: 'Dormitory Beds',
      price: '₹600/bed',
      capacity: '4 Beds (Shared)',
      description: 'Budget accommodation perfect for trekkers and backpackers. Clean, comfortable beds in a shared dormitory.',
      amenities: ['Almirah', 'Common Bathroom', 'Hot Water',  'Common Room', 'Charging Points']
    }
  ];

  return (
    <Layout 
      title="Rooms & Rates - Accommodation in Joshimath"
      description="Choose from Deluxe Himalayan View rooms, Family Suites, or budget Dormitory beds at Rana Guest House. All rooms with attached bathrooms, hot water, and WiFi."
    >
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <h1 className="text-center">Rooms & Rates</h1>
        <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
          Comfortable accommodations for every type of traveler, from solo trekkers to large families.
          All rooms include basic amenities with warm Garhwali hospitality.
        </p>

        <div className="card-grid">
          {rooms.map((room, index) => (
            <div className="card" key={index}>
              {room.name === 'Triple Room' ? (
                <img src="/assests/room2bed1.jpeg" alt="Triple Room" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : room.name === 'Standard Double Room' ? (
                <img src="/assests/room 2 bed.jpeg" alt="Standard Double Room" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : room.name === 'Family Room' ? (
                <img src="/assests/room3 bed.jpeg" alt="Family Room" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : room.name === 'Dormitory Beds' ? (
                <img src="/assests/home1.jpeg" alt="Dormitory Beds" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
              ) : (
                <ImagePlaceholder text={`Image: ${room.name}`} />
              )}
              <div className="card-content">
                <h3>{room.name}</h3>
                <div className="price">{room.price}</div>
                <p><Users size={16} style={{ display: 'inline', marginRight: '5px' }} /> {room.capacity}</p>
                <p style={{ margin: '1rem 0' }}>{room.description}</p>
                
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Amenities:</h4>
                <div className="amenities-list">
                  {room.amenities.map((amenity, i) => (
                    <span className="amenity-item" key={i}>{amenity}</span>
                  ))}
                </div>

                <Link href="/contact" className="btn" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--light-bg)', borderRadius: '10px' }}>
          <h3>Important Information</h3>
          <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>✓ Check-in: 12:00 PM | Check-out: 10:00 AM</li>
            <li style={{ marginBottom: '0.5rem' }}>✓ Complimentary breakfast included with all rooms</li>
            <li style={{ marginBottom: '0.5rem' }}>✓ Home-cooked meals available on request</li>
            <li style={{ marginBottom: '0.5rem' }}>✓ Free parking available</li>
            <li style={{ marginBottom: '0.5rem' }}>✓ 50% advance required for booking confirmation</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
