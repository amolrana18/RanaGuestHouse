import Layout from '@/components/Layout';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function Gallery() {
  const galleryImages = [
    { category: 'Rooms', images: 6 },
    { category: 'Views', images: 8 },
    { category: 'Nearby Attractions', images: 8 },
  ];

  // image arrays for specific sections
  const roomsPics = [
    '/assests/room 2 bed.jpeg',
    '/assests/room3 bed.jpeg',
    '/assests/home.jpeg',
    '/assests/home1.jpeg',
    '/assests/washroom.jpeg',
    '/assests/room2bed1.jpeg'
  ];

  // file names for nearby attractions in order matching the sections in nearby.js
  const nearbyPics = [
    '/assests/badrinath.webp',
    '/assests/kuari pass.jpeg',
    '/assests/mana.webp',
    '/assests/niti.jpeg',
    '/assests/auli.jpg',
    '/assests/vof.jpeg',
    '/assests/vasudhara.jpeg',
    '/assests/hemkund sahib.jpeg'
  ];

  return (
    <Layout 
      title="Gallery - Rana Guest House Photos"
      description="View photos of Rana Guest House, rooms, mountain views, and nearby attractions in Baragaon, Joshimath."
    >
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <h1 className="text-center">Photo Gallery</h1>
        <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
          Get a glimpse of our homestay, the stunning mountain views, and the beautiful places around Baragaon.
        </p>

        {galleryImages.map((section, index) => (
          <div key={index} style={{ marginBottom: '3rem' }}>
            <h2>{section.category}</h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '1.5rem',
              marginTop: '1.5rem'
            }}>
              {[...Array(section.images)].map((_, i) => (
                <div key={i}>
                  {section.category === 'Views' ? (
                    <img
                      src={`/assests/view${i + 1}.jpeg`}
                      alt={`View ${i + 1}`}
                      style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px' }}
                    />
                  ) : section.category === 'Nearby Attractions' ? (
                    <img
                      src={nearbyPics[i] || '/assests/home.jpeg'}
                      alt={`Nearby ${i + 1}`}
                      style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px' }}
                    />
                  ) : section.category === 'Rooms' ? (
                    <img
                      src={roomsPics[i] || '/assests/home.jpeg'}
                      alt={`Room ${i + 1}`}
                      style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px' }}
                    />
                  ) : (
                    <ImagePlaceholder 
                      text={`${section.category} Image ${i + 1}`} 
                      height="250px"
                    />
                  )}
                  <p style={{ textAlign: 'center', marginTop: '0.5rem', color: 'var(--text-light)' }}>
                    {section.category} - Photo {i + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* <div style={{ textAlign: 'center', marginTop: '2rem', padding: '2rem', background: 'var(--light-bg)', borderRadius: '10px' }}>
          <h3>Want to see more?</h3>
          <p>Follow us on social media for regular updates and more photos!</p>
          <p style={{ marginTop: '1rem' }}>
            📸 Instagram: @ranaguesthouse<br />
            📘 Facebook: /ranaguesthouse
          </p>
        </div> */}
      </div>
    </Layout>
  );
}
