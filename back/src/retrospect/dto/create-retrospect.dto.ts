import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateRetrospectDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  readonly date: string;
}
