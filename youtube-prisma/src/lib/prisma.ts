import { PrismaPg } from "@prisma/adapter-pg"
import "dotenv/config"
import { PrismaClient } from "../generated/prisma/client.js"
import type { Context, Next } from "hono"

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error("Database URL not found")
}

const adapter = new PrismaPg({
  connectionString: databaseUrl,
})

const prisma = new PrismaClient({
  adapter
})

const withPrisma = (c: Context, next: Next) => {
  if (!c.get('prisma')) {
    c.set('prisma', prisma)
  }

  return next()
}

export default withPrisma