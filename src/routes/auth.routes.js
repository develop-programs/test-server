import Express from "express";

const authRoutes = Express.Router();

authRoutes.get("/", (req, res) => {
  res.status(200).json({ message: "Login page" });
});


export default authRoutes;
