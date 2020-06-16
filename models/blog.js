import { Schema, model } from "mongoose";

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true, // This must exist
    },
    content: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["DRAFT", "PUBLISHED"],
      default: "DRAFT",
    },
  },
  {
    timestamps: true,
  }
);

// Query Helpers
BlogSchema.query.drafts = function () {
  return this.where({
    status: "DRAFT",
  });
};

BlogSchema.query.published = function () {
  return this.where({
    status: "PUBLISHED",
  });
};

export default model("Blog", BlogSchema);
