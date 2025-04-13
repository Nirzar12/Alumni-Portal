// import mongoose from "mongoose";

// const eventSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     link: { type: String, required: true },
//     contact: { type: String, required: true },
//     date: { type: Date, required: true },
//     tag: { type: String, enum: ["upcoming", "past"], required: true },
//     poster: { type: String, default: "" },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Event", eventSchema);


import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    contact: { type: String, required: true },
    date: { type: Date, required: true },
    tag: { type: String, enum: ["upcoming", "past"], required: true },
    poster: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);

