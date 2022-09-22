import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRetrospectDto } from './dto/create-retrospect.dto';
import { UpdateRetrospectDto } from './dto/update-retrospect.dto';
import { Retrospect } from './entities/retrospect.entity';

@Injectable()
export class RetrospectService {
  id = 2;
  retrospects: Retrospect[] = [
    {
      id: 0,
      title: 'Title1',
      content: 'Content1',
      date: '2022-09-22',
    },
    {
      id: 1,
      title: 'Title2',
      content: 'Content2',
      date: '2022-09-22',
    },
  ];

  getAll(): Retrospect[] {
    return this.retrospects;
  }

  getOne(id: number): Retrospect {
    return this.retrospects.find((retrospect) => id === retrospect.id);
  }

  createOne(body: CreateRetrospectDto): Retrospect {
    const newRetrospect = {
      id: this.id++,
      ...body,
    };

    this.retrospects = this.retrospects.concat(newRetrospect);

    return newRetrospect;
  }

  deleteOne(id: number): boolean {
    const find = this.getOne(id);
    if (!find) return false;

    this.retrospects = this.retrospects.filter(
      (retrospect) => id !== retrospect.id,
    );
    return true;
  }

  updateOne(id: number, body: UpdateRetrospectDto): Retrospect {
    const findOne = this.getOne(id);
    if (!findOne) {
      throw new NotFoundException(`The article with id ${id} does not exist`);
    }

    const deleteOne = this.deleteOne(id);
    if (!deleteOne) {
      throw new Error(
        `The article does not be deleted by internal server error`,
      );
    }

    const newOne = {
      ...findOne,
      ...body,
    };

    this.retrospects = this.retrospects.concat(newOne);

    return newOne;
  }
}
