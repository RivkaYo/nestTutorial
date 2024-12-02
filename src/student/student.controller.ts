import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
} from '@nestjs/common';

@Controller('student')
export class StudentController {
  @Get()
  getAll() {}

  @Get()
  getById(@Param('id') id: number) {
    throw new HttpException('Internal server error', 500);
  }

  @Patch()
  patchById(@Body('id') id: number) {
    throw new HttpException('Internal server error', 500);
  }

  @Delete()
  deleteById(@Body('id') id: number) {
    throw new HttpException('Internal server error', 500);
  }
}
