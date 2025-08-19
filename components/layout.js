// In your main layout or page component
import FloatingElements from "./home/FloatingElements";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col overflow-hidden">
      {children}
      <FloatingElements />
 </div>
  );
};

export default Layout;