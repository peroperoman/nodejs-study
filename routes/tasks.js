const express = require("express");
const router = express.Router();
const {
    getAllTasks,
    createTasks,
    getSingleTask,
    updateTask,
    deleteTask,
} = require("../controllers/tasks");

router.get("/", getAllTasks);
router.post("/", createTasks);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
