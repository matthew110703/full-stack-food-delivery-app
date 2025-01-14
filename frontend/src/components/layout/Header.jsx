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
            <button className="flex gap-1.5 bg-blue-500 rounded-md shadow px-2 py-1 items-center">
              <img src="/icons/cart.svg" alt="cart" width={24} />
              <span className="text-sm text-white font-semibold">Cart </span>
            </button>

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
