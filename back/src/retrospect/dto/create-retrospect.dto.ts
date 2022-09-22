import { IsString } from 'class-validator';

export class CreateRetrospectDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsString()
  readonly date: string;
}
