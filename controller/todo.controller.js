const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//all task
const getTodos = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Error fetching todos" });
  }
};

//find by id
const getTodoById = async (req, res) => {
  try {
    const todo = await prisma.todo.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Error fetching todo" });
  }
};

// add task
const createTodo = async (req, res) => {
  try {
    const { title, completed, color } = req.body;
    const newTodo = await prisma.todo.create({
      data: { title, completed, color },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Error creating todo" });
  }
};

// Update an existing todo
const updateTodo = async (req, res) => {
  try {
    const { title, completed, color } = req.body;
    const updatedTodo = await prisma.todo.update({
      where: { id: parseInt(req.params.id) },
      data: { title, completed, color },
    });
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Error updating todo" });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  try {
    await prisma.todo.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting todo" });
  }
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
