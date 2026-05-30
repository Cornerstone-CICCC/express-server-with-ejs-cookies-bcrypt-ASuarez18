import express from 'express';
import * as path from 'path';
import * as url from 'url';
import expressLayouts from 'express-ejs-layouts';

const app = express();
const PORT = 8080;

// Establish path variables for static files and EJS templates
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Use express-ejs-layouts
app.use(expressLayouts);
app.set("layout", "layout");

// > Index page
app.get("/", (req:express.Request, res: express.Response) => {
  res.render("pages/index", {tabTitle: "Home Page"})
})


// TODO Login page
app.get("/login", (req:express.Request, res:express.Response) => {
  res.render("pages/login", {tabTitle: "Login"})
})

// TODO Register page
app.get("/register", (req:express.Request, res:express.Response) => {
  res.render("pages/register", {tabTitle: "Register"})
})

app.listen(PORT, () =>{
  console.log(`Server is running on http://localhost:${PORT}`);
})