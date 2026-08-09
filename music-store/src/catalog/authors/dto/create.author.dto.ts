import { IsDate, IsOptional, IsString, IsUrl, Length } from 'class-validator';

export class CreateAuthorDTO {
  @IsString()
  @Length(1, 64)
  name: string;

  @IsString()
  @Length(2, 32)
  country: string;

  @IsString()
  @IsOptional()
  @Length(2, 1024)
  description: string | undefined | null;

  @IsUrl({ protocols: ['https'] })
  photo: string;

  @IsDate()
  dateOfBirth: Date;

  @IsDate()
  @IsOptional()
  dateOfDeath: Date | undefined | null;
}
