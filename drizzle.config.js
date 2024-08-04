import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./utils/schema.js",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
    ssl: false,
  },
  verbose: true,
  strict: true,
});

// /** @type { import("drizzle-kit").Config } */
// export default {
//   schema: "./utils/schema.js",
//   dialect: 'postgresql',
//   dbCredentials: {
//     url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
//   }
// };