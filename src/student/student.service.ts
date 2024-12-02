import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  getAll(): string {
    throw new HttpException('Internal server error in get all', 500);
  }

  getById(id: string) {
    throw new HttpException('Internal server error in getById', 500);
  }

  patchById(id: string, body: string) {
    throw new HttpException('Internal server error in patchById', 500);
  }

  deleteById(id: string) {
    throw new HttpException('Internal server error in deleteById', 500);
  }
}
