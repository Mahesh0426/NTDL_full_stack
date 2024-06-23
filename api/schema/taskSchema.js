import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
    default: "easy",
  },
  priority: {
    type: String,
    default: "low",
  },
  type: {
    type: String,
    default: "entry",
  },
});

export default mongoose.model("task", taskSchema);
