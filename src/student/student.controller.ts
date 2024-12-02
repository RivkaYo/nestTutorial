import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { StudentService } from './student.service';
import { GetStudentDto } from './dto';

@Controller('student')
export class StudentController {
  constructor(private readonly StudentService: StudentService) {}
  @Get()
  getAll() {
    return this.StudentService.getAll();
  }

  @Get(':id')
  getById(@Param() param: GetStudentDto) {
    return this.StudentService.getById(param.id);
  }

  @Patch(':id')
  patchById(@Param() param: GetStudentDto, @Body() updateData: string) {
    return this.StudentService.patchById(param.id, updateData);
  }

  @Delete(':id')
  deleteById(@Param() param: GetStudentDto) {
    return this.StudentService.deleteById(param.id);
  }
}
