import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LibraryLayout = ({ children }) => {
  return (
    <main className="library-layout">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default LibraryLayout;
