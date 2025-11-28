import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "js",   // <--- ESTA ES LA OPCIÓN CORRECTA PARA TU VERSIÓN
  datasource: {
    url: env("DATABASE_URL"),
  },
});
