// UI Components
import { Container, Button, MenuCard } from "../components";

const Home = () => {
  return (
    <Container>
      <header className="flex justify-between items-center py-2 border-b mb-3">
        <h2 className="text-2xl font-bold">Menu Items</h2>
        <div className="flex items-center gap-4">
          <button className="text-base font-semibold border px-2 py-1 rounded-md shadow">
            Filter
          </button>
          <Button title="+ Add Item" />
        </div>
      </header>

      {/* Menu Items Grid */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MenuCard
          item={{
            name: "Burger",
            category: "Fast Food",
            price: 120,
            availability: true,
          }}
        />
        <MenuCard
          item={{
            name: "Burger",
            category: "Fast Food",
            price: 120,
            availability: true,
          }}
        />
        <MenuCard
          item={{
            name: "Burger",
            category: "Fast Food",
            price: 120,
            availability: true,
          }}
        />
        <MenuCard
          item={{
            name: "Burger",
            category: "Fast Food",
            price: 120,
            availability: true,
          }}
        />
      </div>
    </Container>
  );
};

export default Home;
