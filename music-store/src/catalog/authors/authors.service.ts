import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { PrismaService } from '../prisma';
import {
  ReadAuthorDTO,
  ReadManyAuthorsDTO,
  ReadManyAuthorsQueryDTO,
} from './dto';
import { CreateAuthorDTO } from './dto/create.author.dto';

@Injectable()
export class AuthorsService {
  constructor(private readonly prisma: PrismaService) {}

  async get(query: ReadManyAuthorsQueryDTO): Promise<ReadManyAuthorsDTO> {
    const name: Prisma.StringFilter | undefined = query.search
      ? { contains: query.search, mode: 'insensitive' }
      : undefined;

    const count = await this.prisma.artist.count({ where: { name } });

    const data = await this.prisma.artist.findMany({
      take: query.take,
      skip: query.skip,
      where: {
        name: name,
      },
    });

    return {
      count,
      data,
    };
  }

  async getOne(id: string): Promise<ReadAuthorDTO> {
    const artist = await this.prisma.artist.findFirst({
      where: {
        id,
      },
    });

    if (!artist) {
      throw new NotFoundException();
    }

    return artist;
  }

  async create(data: CreateAuthorDTO): Promise<string> {
    const artist = await this.prisma.artist.create({
      data,
    });

    return artist.id;
  }

  async update(id: string, data: CreateAuthorDTO): Promise<void> {
    await this.prisma.artist.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.artist.delete({ where: { id } });
  }
}
