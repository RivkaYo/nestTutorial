import { IsNotEmpty, IsString } from 'class-validator';

export class GetStudentDto {
  @IsNotEmpty()
  @IsString()
  id: string;
  updateData?: string;
}
