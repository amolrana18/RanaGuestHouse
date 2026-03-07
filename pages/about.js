import Layout from '@/components/Layout';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { Heart, Users, Coffee, Mountain } from 'lucide-react';

export default function About() {
  return (
    <Layout 
      title="About Us - Rana Guest House Family Story"
      description="Meet the Rana family, your hosts at Rana Guest House in Baragaon, Joshimath. Three generations of Himalayan hospitality experience."
    >
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <h1 className="text-center">Our Story</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', margin: '3rem 0' }}>
          <div>
            <ImagePlaceholder text="Image: Rana Family" height="350px" />
          </div>
          <div>
            <h2>Welcome to Our Home</h2>
            <p style={{ marginBottom: '1rem' }}>
              For over 8 years, the Rana family has been welcoming travelers to our home in the beautiful 
              village of Baragaon. What started as a small guest room for passing trekkers has grown into 
              a beloved homestay known for its warm hospitality and authentic Garhwali experiences.
            </p>
            <p>
              Our family has lived in these mountains for generations, and we take pride in sharing our 
              home, our culture, and our knowledge of the region with guests from around the world.
            </p>
          </div>
        </div>

        <h2 className="text-center" style={{ margin: '3rem 0 2rem' }}>Meet Your Hosts</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div className="card text-center">
          <img src="/assests/amol.jpeg" alt="Amol Rana" height="200px" />
            <div className="card-content">
              <h3>Amol Rana</h3>
              <p className="price">Primary Host & Trek Guide</p>
              <p>Amol leads our trekking expeditions and knows every trail in the region. He's your go-to person for adventure planning.</p>
              <p style={{ marginTop: '1rem' }}>📞 <a href="tel:+918979702574">+91 8979702574</a></p>
            </div>
          </div>

          <div className="card text-center">
            <ImagePlaceholder text="Image: Anshul Rana" height="200px" />
            <div className="card-content">
              <h3>Anshul Rana</h3>
              <p className="price">Hospitality Manager</p>
              <p>Anshul ensures your stay is comfortable. From delicious home-cooked meals to room arrangements, she takes care of everything.</p>
              <p style={{ marginTop: '1rem' }}>📞 <a href="tel:+919368254360">+91 9368254360</a></p>
            </div>
          </div>

          <div className="card text-center">
            <ImagePlaceholder text="Image: Akshay Rana" height="200px" />
            <div className="card-content">
              <h3>Akshay Rana</h3>
              <p className="price">Operations & Transport</p>
              <p>Akshay manages local transport arrangements and coordinates pilgrimage tours. He ensures smooth logistics for all guests.</p>
              <p style={{ marginTop: '1rem' }}>📞 <a href="tel:+919368297566">+91 9368297566</a></p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div>
            <Heart size={40} color="var(--secondary-gold)" />
            <h4>20+ Years</h4>
            <p>of hospitality</p>
          </div>
          <div>
            <Users size={40} color="var(--secondary-gold)" />
            <h4>100+ Guests</h4>
            <p>welcomed annually</p>
          </div>
          <div>
            <Coffee size={40} color="var(--secondary-gold)" />
            <h4>Home-cooked</h4>
            <p>Garhwali meals</p>
          </div>
          <div>
            <Mountain size={40} color="var(--secondary-gold)" />
            <h4>Local Expertise</h4>
            <p>treks & tours</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
