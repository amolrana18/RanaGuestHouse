import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';

const Layout = ({ children, title, description, keywords }) => {
  return (
    <>
      <SEO title={title} description={description} keywords={keywords} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
