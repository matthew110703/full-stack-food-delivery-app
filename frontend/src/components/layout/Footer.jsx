// UI components
import Link from "../ui/Link";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex justify-around items-center bg-gray-800 text-white px-2 py-4 rounded-t-md"
    >
      {/* Brand Copyrights */}
      <div className="space-y-2 text-center">
        <img
          src="/icon.svg"
          alt="logo"
          width={48}
          className="bg-white rounded-md p-1 mx-auto"
        />
        <h2 className="font-semibold">Food Delivery System</h2>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} All rights reserved. Developed by
          <span> Matthew</span>
        </p>
      </div>

      {/* Quick Links */}

      <div className="space-y-2">
        <h2 className="font-semibold">Quick Links</h2>
        <ul className="flex flex-col gap-2 *:text-sm">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Orders</Link>
          <Link>Privacy & Policy</Link>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold">Miscellaneous</h2>
        <ul className="flex flex-col gap-2 *:text-sm">
          <Link>Contact</Link>
          <Link>Projects</Link>
          <Link>Sitemap</Link>
          <Link>Features</Link>
        </ul>
      </div>

      {/* Social Media */}
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold">Social Media</h2>
        <div className="flex gap-2 *:cursor-pointer ">
          <img
            src="/icons/twitter.svg"
            alt="icon"
            width={32}
            loading="lazy"
            className="bg-white p-1 rounded-md"
          />
          <img
            src="/icons/instagram.svg"
            alt="icon"
            width={32}
            loading="lazy"
            className="bg-white p-1 rounded-md"
          />
          <img
            src="/icons/github.svg"
            alt="icon"
            width={32}
            loading="lazy"
            className="bg-white p-1 rounded-md"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
