import PropTypes from "prop-types";
import { Link as ReactLink } from "react-router-dom";

const Link = ({ href, className, children }) => {
  return (
    <ReactLink
      to={href}
      className={"text-sm hover:text-blue-600 hover:shadow-sm" + className}
    >
      {children}
    </ReactLink>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Link;
