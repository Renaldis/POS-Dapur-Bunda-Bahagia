const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

const menuRoutes = require("./routes/menuRoutes");
const userRoutes = require("./routes/userRoutes");
const customerRoutes = require("./routes/customerRoutes");
const tableRoutes = require("./routes/tableRoutes");
const orderRoutes = require("./routes/orderRoutes");
const orderItemsRoutes = require("./routes/orderItemsRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware Utama
// Body parser harus berada di atas middleware lain yang membutuhkannya
app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());

// Konfigurasi CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "https://app-client-anda.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 menit
  max: 100, // maks 100 request per IP
  message: "Terlalu banyak permintaan, coba lagi nanti.",
});
app.use(limiter);

const swaggerUi = require("swagger-ui-express");
const apiDocumentation = require("../swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocumentation));

// Routing API
// Rute untuk OrderItems dihapus karena lebih baik diurus di dalam rute Order
app.use("/api/v1/menus", menuRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/customers", customerRoutes);
app.use("/api/v1/tables", tableRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/order-items", orderItemsRoutes);

// Error handling harus selalu di paling akhir
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
