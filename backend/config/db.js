import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dharmshaktu23:Wqhst27B3IQPJjXj@cluster0.b0gqd.mongodb.net/DeliRush"
    )
    .then(() => console.log("DB connected"));
};
