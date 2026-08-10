import { Injectable, NotImplementedException } from '@nestjs/common';
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

  get(query: ReadManyAuthorsQueryDTO): Promise<ReadManyAuthorsDTO> {
    console.log(query);

    throw new NotImplementedException();
  }

  getOne(id: string): Promise<ReadAuthorDTO> {
    console.log(id);

    throw new NotImplementedException();
  }

  async create(data: CreateAuthorDTO): Promise<string> {
    const author = await this.prisma.artist.create({
      data,
    });

    return author.id;
  }

  update(id: string, data: CreateAuthorDTO): Promise<void> {
    console.log(id);

    console.log(data);

    throw new NotImplementedException();
  }

  delete(id: string): Promise<void> {
    throw new NotImplementedException();
  }
}
