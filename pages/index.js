import Layout from '@/components/Layout';
import Link from 'next/link';
import { Star, MapPin, Users, Home as HomeIcon } from 'lucide-react';

export default function Home() {

  const featuredRooms = [
    { name: 'Double Room', price: '₹1500/night', capacity: '2 Adults + 1 Child', img:'/assests/room 2 bed.jpeg' },
    { name: 'Triple Room', price: '₹2000/night', capacity: '3 Adults', img:'/assests/room3 bed.jpeg' },
    { name: 'Dormitory Beds', price: '₹600/bed', capacity: 'Shared 4 beds', img:'/assests/home1.jpeg' }
  ];

  return (
    <Layout
      title="Rana Guest House - Best Stay in Baragaon, Joshimath"
      description="Stay at Rana Guest House in Baragaon near Joshimath. Perfect base for Auli, Badrinath and Kuari Pass treks."
    >

      {/* HERO */}

      <section
        style={{
          backgroundImage:"url('/assests/cover .jpeg')",
          backgroundSize:'cover',
          backgroundPosition:'center',
          position:'relative',
          color:'white'
        }}
      >

        <div
          style={{
            background:'rgba(0,0,0,0.55)',
            padding:'120px 20px',
            textAlign:'center'
          }}
        >

          <h1 style={{ fontSize:'48px', marginBottom:'15px' }}>
            Welcome to Rana Guest House
          </h1>

          <p style={{ maxWidth:'650px', margin:'auto', marginBottom:'30px' }}>
            Comfortable stay in Baragaon, Joshimath with beautiful Himalayan
            views. Perfect for Auli, Badrinath, Kuari Pass and Valley of Flowers travelers.
          </p>

          <div style={{ display:'flex', justifyContent:'center', gap:'15px' }}>

            <Link
              href="/contact"
              style={{
                background:'#2563eb',
                color:'white',
                padding:'12px 24px',
                borderRadius:'6px',
                textDecoration:'none'
              }}
            >
              Book Your Stay
            </Link>

            <Link
              href="/rooms"
              style={{
                border:'2px solid white',
                padding:'10px 22px',
                borderRadius:'6px',
                color:'white',
                textDecoration:'none'
              }}
            >
              View Rooms
            </Link>

          </div>

        </div>

      </section>


      <div className="container">

        {/* ABOUT */}

        <section style={{ textAlign:'center', padding:'60px 0', maxWidth:'800px', margin:'auto' }}>

          <h2>Your Home in the Himalayas</h2>

          <p>
            Rana Guest House is a family-run guest house located in the peaceful
            village of Baragaon near Joshimath. We offer warm Garhwali hospitality,
            comfortable rooms and easy access to famous trekking routes and
            pilgrimage destinations.
          </p>

        </section>


        {/* ROOMS */}

        <section style={{ padding:'40px 0' }}>

          <h2 className="text-center">Featured Accommodations</h2>

          <div className="card-grid">

            {featuredRooms.map((room, index) => (

              <div
                key={index}
                style={{
                  background:'white',
                  borderRadius:'10px',
                  overflow:'hidden',
                  boxShadow:'0 8px 25px rgba(0,0,0,0.1)'
                }}
              >

                <img
                  src={room.img}
                  alt={room.name}
                  style={{
                    width:'100%',
                    height:'200px',
                    objectFit:'cover'
                  }}
                />

                <div style={{ padding:'20px' }}>

                  <h3>{room.name}</h3>

                  <div style={{ fontWeight:'bold', marginBottom:'8px' }}>
                    {room.price}
                  </div>

                  <p>
                    <Users size={16} style={{ marginRight:'5px' }} />
                    {room.capacity}
                  </p>

                  <Link
                    href="/rooms"
                    style={{
                      display:'inline-block',
                      marginTop:'10px',
                      background:'#2563eb',
                      color:'white',
                      padding:'8px 18px',
                      borderRadius:'6px',
                      textDecoration:'none'
                    }}
                  >
                    View Details
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* WHY CHOOSE */}

        <section
          style={{
            padding:'60px',
            background:'#f7f7f7',
            borderRadius:'10px',
            marginBottom:'40px'
          }}
        >

          <h2 className="text-center">Why Choose Us</h2>

          <div
            style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',
              gap:'30px',
              marginTop:'30px',
              textAlign:'center'
            }}
          >

            <div>
              <MapPin size={40} color="#2563eb" />
              <h4>Perfect Location</h4>
              <p>Close to Auli, Badrinath and Kuari Pass Trek</p>
            </div>

            <div>
              <HomeIcon size={40} color="#2563eb" />
              <h4>Family Run</h4>
              <p>Authentic Garhwali hospitality and homely atmosphere</p>
            </div>

            <div>
              <Star size={40} color="#2563eb" />
              <h4>Local Expertise</h4>
              <p>Help with treks, transport and travel planning</p>
            </div>

          </div>

        </section>

      </div>

    </Layout>
  );
}