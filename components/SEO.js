import Head from 'next/head';

const SEO = ({ title, description, keywords }) => {
  const siteTitle = 'Rana Guest House - Homestay in Baragaon, Joshimath';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Experience authentic Himalayan hospitality at Rana Guest House in Baragaon, Joshimath. Perfect base for Kuari Pass trek, Badrinath pilgrimage, and Auli skiing.';
  const defaultKeywords = 'homestay Baragaon, Joshimath accommodation, Kuari Pass trek base, Badrinath stay, Auli skiing homestay, Valley of Flowers base, Rana Guest House';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/assests/logo.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
    </Head>
  );
};

export default SEO;
