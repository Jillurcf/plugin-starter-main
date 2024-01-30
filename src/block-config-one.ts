import { z } from "zod";

const catchValue = {} as never;

export const configSchemas = z.object({
  settings: z
    .object({ name: z.string().optional(), tag: z.string().optional(), Image: z.string().optional() })
    .optional(),
  text: z.string(),
  icon: z.string(),
});

export type Configs = z.infer<typeof configSchemas>;
