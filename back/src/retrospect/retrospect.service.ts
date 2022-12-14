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
      title: '제목1',
      content: '내용1',
      date: '2022-09-22',
    },
    {
      id: 1,
      title: '제목2',
      content: '내용2',
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

  updateOne(body: UpdateRetrospectDto): Retrospect {
    const findOne = this.getOne(body.id);
    if (!findOne) {
      throw new NotFoundException(
        `The article with id ${body.id} does not exist`,
      );
    }

    const deleteOne = this.deleteOne(body.id);
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
