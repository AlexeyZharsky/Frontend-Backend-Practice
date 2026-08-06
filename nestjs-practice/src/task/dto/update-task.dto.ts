import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  title: string;

  @IsBoolean()
  isCompleted: boolean;
}
