/*1. Program to create middleware to check if user is logged using a query parameter loggedin==true if not logged send access denied 
2. Program middleware applied only on admin route check if role== admin if not admin send not authorised 
3. By using express where middleware checks if name and age are present in req.body if missing send invalid 
4.Error handling middleware if any route throws an error then middleware should send something went wrong and login error
5. Calculate the time taken to handle each request and log in
*/
const express = require("express");
const app = express();

app.use(express.json());

// -------------------------------------------------
// 1) Middleware: Check if loggedin == true (query)
// -------------------------------------------------
function checkLogin(req, res, next) {
  if (req.query.loggedin === "true") {
    next();
  } else {
    res.status(401).send("Access Denied: User not logged in");
  }
}

// Example route using this middleware
app.get("/home", checkLogin, (req, res) => {
  res.send("Welcome! You are logged in.");
});


// -------------------------------------------------
// 2) Middleware: Check if role == admin (only admin route)
// -------------------------------------------------
function checkAdmin(req, res, next) {
  if (req.query.role === "admin") {
    next();
  } else {
    res.status(403).send("Not Authorised: Admin only");
  }
}

// Example admin route
app.get("/admin", checkAdmin, (req, res) => {
  res.send("Welcome Admin!");
});


// -------------------------------------------------
// 3) Middleware: Check if name & age exist in req.body
// -------------------------------------------------
function validateUser(req, res, next) {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).send("Invalid: name or age missing");
  }
  next();
}

// Example route
app.post("/register", validateUser, (req, res) => {
  res.send("User registered successfully");
});


// -------------------------------------------------
// 4) Error handling middleware
// -------------------------------------------------
app.get("/error", (req, res) => {
  throw new Error("Login failed!");
});

// Error middleware — runs when any route throws an error
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Something went wrong and login error");
});


// -------------------------------------------------
// 5) Middleware for logging request time
// -------------------------------------------------
app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const end = Date.now();
    console.log(`Time taken: ${end - start} ms for ${req.method} ${req.url}`);
  });

  next();
});

// Example route to test time log
app.get("/test", (req, res) => {
  setTimeout(() => {
    res.send("Testing request time…");
  }, 500);
});


// -------------------------------------------------
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
