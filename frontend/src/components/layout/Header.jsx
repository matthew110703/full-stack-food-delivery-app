// UI components
import Link from "../ui/Link";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header>
      <div className="p-4 shadow-md rounded-md flex items-center justify-between">
        {/* Brand Title & Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/icon.svg"
            alt="logo"
            width={32}
            height={32}
            loading="lazy"
          />
          <h1 className="font-semibold text-base md:text-lg">
            Food Delivery System
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-2.5 md:gap-6">
          <ul className="hidden md:flex gap-6">
            <li>
              <Link href="/home" className="ml-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="ml-2">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="ml-2">
                Orders
              </Link>
            </li>
          </ul>

          {/* Action */}
          <div className="flex items-center gap-4">
            <h4 className="bg-gray-300 p-1 text-sm md:text-base md:p-2 rounded-md font-semibold">
              Username 101
            </h4>
            <Button
              title="Logout"
              className={
                "bg-transparent border border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white"
              }
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
