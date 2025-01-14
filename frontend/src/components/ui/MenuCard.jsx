import PropTypes from "prop-types";

// Ui components
import Button from "./Button";

const MenuCard = ({ item }) => {
  return (
    <article className="bg-white shadow-md p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h3 className="w-full text-lg font-semibold text-wrap line-clamp-1 text-ellipsis">
          {item.name}
        </h3>
        <span
          style={{ fontSize: "0.65rem" }}
          className="text-nowrap bg-gray-200 px-2 py-1 font-semibold rounded-full uppercase"
        >
          {item.category}
        </span>
      </div>
      <p className="text-sm text-gray-500">Price: ₹ {item.price}</p>

      {/* Availablity */}
      <div className="flex items-center mt-2 gap-1">
        <span
          className={`${
            item.availability ? "text-green-500" : "text-red-500"
          } text-2xl`}
        >
          •{" "}
        </span>
        <p className="text-xs text-gray-500 align-middle">
          {item.availability ? "Available" : "Unavailable"}
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-2  p-1 rounded-md">
        <div className="flex mx-auto items-center gap-4">
          <button className=" rounded-md shadow border border-blue-500 px-3 py-1">
            -
          </button>
          <span>0</span>
          <button className="rounded-md shadow border border-blue-500 px-3 py-1">
            +
          </button>
        </div>

        <Button title="Add to Cart" className={"w-1/2 text-center"} />
      </div>
    </article>
  );
};

MenuCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MenuCard;
