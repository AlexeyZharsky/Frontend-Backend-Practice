import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import {
  CreateAuthorDTO,
  ReadAuthorDTO,
  ReadManyAuthorsDTO,
  ReadManyAuthorsQueryDTO,
} from './dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  get(@Param() query: ReadManyAuthorsQueryDTO): Promise<ReadManyAuthorsDTO> {
    return this.authorsService.get(query);
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<ReadAuthorDTO> {
    return this.authorsService.getOne(id);
  }

  @Post()
  async create(@Body() data: CreateAuthorDTO): Promise<ReadAuthorDTO> {
    const id = await this.authorsService.create(data);

    return this.authorsService.getOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: CreateAuthorDTO,
  ): Promise<ReadAuthorDTO> {
    await this.authorsService.update(id, data);
    return this.authorsService.getOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.authorsService.delete(id);
  }
}
