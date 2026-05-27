import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(2).max(256),
  content: z.string().min(2).max(256),
});
