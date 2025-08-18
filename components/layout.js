// In your main layout or page component
import FloatingElements from "./home/FloatingElements";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <FloatingElements />
    </>
  );
};

export default Layout;