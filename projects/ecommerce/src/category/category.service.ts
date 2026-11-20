import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CategoryService {
  findOne(id: number) {
    if (id !== 1) {
      throw new NotFoundException(`Category ${id} not found`);
    }

    return id;
  }
}
