const app = require("./app");
const dotenv = require("dotenv");
const dbConnect = require("./lib/dbConnect");

dotenv.config(); // Load environment variables
dbConnect(); // Connect to the database

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
