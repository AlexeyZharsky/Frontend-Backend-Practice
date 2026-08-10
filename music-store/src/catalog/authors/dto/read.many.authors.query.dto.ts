import { IsInt, IsOptional, Length, Max, Min } from 'class-validator';
import { MAX_PAGE_SIZE } from 'src/config';

export class ReadManyAuthorsQueryDTO {
  @IsOptional()
  @Length(2, 32)
  search: string | undefined | null;

  @IsInt()
  @IsOptional()
  @Min(1)
  @Max(MAX_PAGE_SIZE)
  pageSize: number = MAX_PAGE_SIZE;

  @IsInt()
  @IsOptional()
  @Min(1)
  pageNumber: number = 1;

  get take(): number {
    return this.pageSize;
  }

  get skip(): number {
    return (this.pageNumber - 1) * this.pageSize;
  }
}
