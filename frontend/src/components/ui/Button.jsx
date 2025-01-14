import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ href = "#", className, title, onClick, type, children }) => {
  return (
    <Link
      role="button"
      className={` px-3 py-1.5 bg-blue-500 border-white shadow hover:bg-blue-800 hover:scale-105 rounded-md text-sm text-white font-semibold active:scale-95 transition-all ${className}`}
      to={href}
      onClick={onClick}
      type={type || "button"}
    >
      {title}
      {children}
    </Link>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
