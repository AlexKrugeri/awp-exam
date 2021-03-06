import { mongoose } from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Gotta have a name"],
      minLength: [3, "That's too short"],
    },
    role: {
      type: String,
      required: [true, "Gotta have a role"],
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    tags: {
      type: Array,
    },
    avatarImage: {
      type: String,
    },
  },
  { timestamps: true }
);

export const models = [
  {
    name: "User",
    schema: userSchema,
    collection: "users",
  },
];
