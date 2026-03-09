import Layout from '@/components/Layout';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Link from 'next/link';
import { Star, MapPin, Users, Home as HomeIcon } from 'lucide-react';

export default function Home() {
  const testimonials = [
    
  ];

  const featuredRooms = [
    { name: 'Double Room ', price: '₹1500/night', capacity: '2 Adults + 1 Child' },
    { name: 'Triple Room', price: '₹2000/night', capacity: '3 Adults + 1 Children' },
    { name: 'Dormitory Beds', price: '₹600/bed', capacity: 'Shared 4 beds' }
  ];

  return (
    <Layout 
      title="Rana Guest House - Best Stay in Baragaon, Joshimath"
      description="Welcome to Rana Guest House in Baragaon, Joshimath. Experience authentic Himalayan hospitality with stunning mountain views. Perfect base for treks and pilgrimages."
    >
      <section className="hero">
        <div className="container">
          <h1>Welcome to Rana Guest House</h1>
          <p>Experience authentic Himalayan hospitality in the heart of Baragaon, Joshimath</p>
          <Link href="/contact" className="btn">Book Your Stay</Link>
        </div>
      </section>

      <div className="container">
        <section className="text-center" style={{ padding: '4rem 0' }}>
          <h2>Your Home in the Himalayas</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto' }}>
            Nestled in the beautiful village of Baragaon, near Joshimath, our family-run guest house offers 
            warm hospitality, comfortable accommodations, and easy access to some of Uttarakhand's most 
            famous trekking routes and pilgrimage sites.
          </p>
        </section>

        <section style={{ padding: '2rem 0' }}>
          <h2 className="text-center">Featured Accommodations</h2>
          <div className="card-grid">
            {featuredRooms.map((room, index) => (
              <div className="card" key={index}>
                {room.name === 'Double Room ' ? (
                  <img src="/assests/room 2 bed.jpeg" alt="Double Room" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
                ) : room.name === 'Triple Room' ? (
                  <img src="/assests/room3 bed.jpeg" alt="Triple Room" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
                ) : room.name === 'Dormitory Beds' ? (
                  <img src="/assests/home1.jpeg" alt="Dormitory Beds" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
                ) : (
                  <ImagePlaceholder text={`Image: ${room.name}`} />
                )}
                <div className="card-content">
                  <h3>{room.name}</h3>
                  <div className="price">{room.price}</div>
                  <p><Users size={16} style={{ display: 'inline', marginRight: '5px' }} /> {room.capacity}</p>
                  <Link href="/rooms" className="btn" style={{ marginTop: '1rem', display: 'inline-block' }}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '2rem 0', background: 'var(--light-bg)', margin: '2rem 0', borderRadius: '10px', padding: '3rem' }}>
          <h2 className="text-center">Why Choose Us?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div className="text-center">
              <MapPin size={40} color="var(--primary-blue)" />
              <h4>Perfect Location</h4>
              <p>Base for Kuari Pass trek, near Badrinath, Auli, and Valley of Flowers</p>
            </div>
            <div className="text-center">
              <HomeIcon size={40} color="var(--primary-blue)" />
              <h4>Family Run</h4>
              <p>Personalized service with authentic Garhwali hospitality</p>
            </div>
            <div className="text-center">
              <Star size={40} color="var(--primary-blue)" />
              <h4>Local Expertise</h4>
              <p>Our family helps plan treks and arrange local transport</p>
            </div>
          </div>
        </section>

      
      </div>
    </Layout>
  );
}
