import todoModel from "../models/todoModel.js"

// Create
export const createTodo = async (req, res) => {
  try {
    const { todoItem } = req.body
    if (!todoItem) {
      return res.status(400).json({
        message: "todo fields are missing",
        status: false,
      })
    }
    const createTodo = await todoModel.create({ todoItem })
    res.status(200).json({
      message: "Todo created successfully",
      createTodo,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    })
  }
}

// Read (Get All)
export const getTodos = async (req, res) => {
  try {
    const todos = await todoModel.find()
    res.status(200).json({
      message: "All todos fetched",
      todos,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    })
  }
}

// Update
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    // Direct req.body pass karna better hai (safe $set ke saath)
    const updated = await todoModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({
      message: "Todo updated",
      updated,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Delete
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params
    await todoModel.findByIdAndDelete(id)
    res.status(200).json({
      message: "Todo deleted",
    })
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error })
  }
}

// Export all functions together
