import { Injectable, NotImplementedException } from '@nestjs/common';
import {
  ReadAuthorDTO,
  ReadManyAuthorsDTO,
  ReadManyAuthorsQueryDTO,
} from './dto';
import { CreateAuthorDTO } from './dto/create.author.dto';

@Injectable()
export class AuthorsService {
  get(query: ReadManyAuthorsQueryDTO): Promise<ReadManyAuthorsDTO> {
    console.log(query);

    throw new NotImplementedException();
  }

  getOne(id: string): Promise<ReadAuthorDTO> {
    console.log(id);

    throw new NotImplementedException();
  }

  create(data: CreateAuthorDTO): Promise<string> {
    console.log(data);

    throw new NotImplementedException();
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
