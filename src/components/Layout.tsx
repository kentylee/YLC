import Navbar from './Navbar';
import Footer from './Footer';
import type { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="font-sans bg-white text-black">
      <Navbar />
      <main className="px-6 md:px-16 pt-10">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;