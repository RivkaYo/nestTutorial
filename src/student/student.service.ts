import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  getAll() {
    throw new HttpException('Internal server error', 500);
  }
}
