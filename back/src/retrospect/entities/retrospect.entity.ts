import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Retrospect {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  date: string;
}
