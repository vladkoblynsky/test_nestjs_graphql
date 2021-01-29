import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorsService {
  findOneById(id: number) {
    return { id: 1, firstName: 'Bob' };
  }

  findAll(first: number) {
    return [
      { id: 1, firstName: 'Bob' },
      { id: 2, firstName: 'Vlad' },
    ];
  }
}
