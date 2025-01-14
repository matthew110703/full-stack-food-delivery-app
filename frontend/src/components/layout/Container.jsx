import PropTypes from "prop-types";

// Components
import Header from "./Header";
import Footer from "./Footer";

const Container = ({ children, className, styles }) => {
  return (
    <div
      className={`container mx-auto p-2.5 flex flex-col min-h-screen ${className}`}
      style={styles}
    >
      <Header />
      <main className="py-6">{children}</main>
      <Footer />
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styles: PropTypes.object,
};

export default Container;
