import { IsString, Length } from 'class-validator';

export class CreateActorDto {
  @IsString()
  @Length(3, 64)
  name: string;
}
