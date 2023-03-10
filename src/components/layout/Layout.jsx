import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  console.log(children);

  return (
    <>
      <Navbar />
      {/* <Content>{children}</Content> */}
      <Footer />
    </>
  );
}
