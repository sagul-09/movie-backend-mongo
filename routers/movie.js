import express from "express";
const router = express.Router();

import {
  getAllMovies,
  getMovie,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.js";

router.route("/").get(getAllMovies).post(addMovie);
router
  .route("/:id")
  .get(getMovieById, getMovie)
  .patch(updateMovie, getMovie)
  .delete(deleteMovie, getMovie);

export default router;
