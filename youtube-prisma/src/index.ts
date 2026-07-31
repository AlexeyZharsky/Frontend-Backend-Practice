import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import type { PrismaClient } from './generated/prisma/client.js'
import withPrisma from './lib/prisma.js'

type ContextWithPrisma = {
  Variables: {
    prisma: PrismaClient
  }
}

const app = new Hono<ContextWithPrisma>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/users', withPrisma, async c => {
  const prisma = c.get('prisma')
  const users = await prisma.user.findMany({
    include: {
      channels: {
        include: {
          videos: true
        }
      }
    }
  })
  return c.json(users)
})

app.get('/user/:id', withPrisma, async c => {
  const prisma = c.get('prisma')
  const id = c.req.param('id')
  const user = await prisma.user.findUnique({
    where: { id }
  })

  if (!user) {
    return c.json({ message: 'User not found' }, 404)
  }

  return c.json(user, 200)
})

app.get('/channels', withPrisma, async c => {
  const prisma = c.get('prisma')
  const channel = await prisma.channel.findMany()

  return c.json(channel, 200)
})

app.post('/users', withPrisma, async c => {
  const prisma = c.get('prisma')
  const {
    email,
    password,
    username,
    channel: {
      name,
    }
  } = await c.req.json()

  const user = await prisma.user.create({
    data: {
      email,
      password,
      username,
      channels: {
        create: {
          name,
        }
      }
    }
  })

  return c.json(user, 200)
})

app.put('/user/:id', withPrisma, async c => {
  const prisma = c.get('prisma')
  const id = c.req.param('id')
  const {
    email,
    password,
    username,
    channel: {
      name,
    }
  } = await c.req.json()

  const user = await prisma.user.update({
    where: {
      id
    },
    data: {
      email,
      password,
      username,
    }
  })

  return c.json(user, 200)
})

app.delete('/user/:id', withPrisma, async c => {
  const prisma = c.get('prisma')
  const id = c.req.param('id')

  const user = await prisma.user.delete({
    where: {
      id
    }
  })

  return c.json(user, 200)
})

app.get('/videos', withPrisma, async c => {
  const prisma = c.get('prisma')
  const videos = await prisma.video.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      channel: true,
      comments: true,
    }
  })

  return c.json(videos, 200)
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
