import express from "express";
import * as path from "path";
import * as url from "url";
import expressLayouts from "express-ejs-layouts";
import cookieParser from "cookie-parser";

import homeRoutes from "./routes/homeRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 8080;

// Establish path variables for static files and EJS templates
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// > Initialize cookie parser middleware
app.use(cookieParser());

// Static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Use express-ejs-layouts
app.use(expressLayouts);
app.set("layout", "layout");


// > Index page
app.use("/", homeRoutes);

// > Login page
app.use("/", authRoutes);

app.use("/", userRoutes);


// > Register page
// - Get register page
app.get("/register", (req: express.Request, res: express.Response) => {
  res.render("pages/register", { tabTitle: "Register" });
});
// - Post register


// > Insecure COOKIES


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
