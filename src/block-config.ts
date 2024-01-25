import { z } from "zod";

const catchValue = {} as never;

export const configSchema = z.object({
  settings: z
    .object({ name: z.string().optional(), tag: z.string().optional() })
    .optional(),
  text: z.string(),
  icon: z.string()
});

export type Config = z.infer<typeof configSchema>;
