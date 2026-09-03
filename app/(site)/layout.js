import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function SiteLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <FloatingActions />
      <Footer />
    </>
  );
}