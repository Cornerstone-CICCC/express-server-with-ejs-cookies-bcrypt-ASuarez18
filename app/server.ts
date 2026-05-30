import express from "express";
import * as path from "path";
import * as url from "url";
import expressLayouts from "express-ejs-layouts";

const app = express();
const PORT = 8080;

// Establish path variables for static files and EJS templates
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Global variables
type User = {
  id: number;
  email: string;
  password: string;
};

const users: User[] = [];

// > Index page
app.get("/", (req: express.Request, res: express.Response) => {
  res.render("pages/index", { tabTitle: "Home Page" });
});

// > Login page
// - Get login page
app.get("/login", (req: express.Request, res: express.Response) => {
  res.render("pages/login", { tabTitle: "Login" });
});

// - Post login
app.post("/login", (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const user = users.find((user) => user.email === email);
    if (!user) {
      // return res.status(404).json({ error: "User not found" });
      return res.redirect("/");
    }
    if (user.password !== password) {
      // return res.status(401).json({ error: "Invalid password" });
      res.redirect("/");
    }
    res.redirect("/");
  } catch (err) {
    // return res.status(500).json({ error: err });
    res.redirect("/");
  }
});

// > Register page
// - Get register page
app.get("/register", (req: express.Request, res: express.Response) => {
  res.render("pages/register", { tabTitle: "Register" });
});
// - Post register
app.post("/register", (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      // return res.status(400).json({ error: "Email and password are required" });
      return;
    }
    const newUser: User = {
      id: users.length + 1,
      email,
      password,
    };
    users.push(newUser);
    res.redirect("/login");
  } catch (err) {
    // return res.status(500).json({ error: err });
    return;
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
