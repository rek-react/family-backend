import { Router } from "express";
import cities from "../controller/cities.js";
const router = Router();

router.get("/cities", cities.get);

export default router;
