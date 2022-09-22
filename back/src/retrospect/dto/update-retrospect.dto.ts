import { PartialType } from '@nestjs/mapped-types';
import { CreateRetrospectDto } from './create-retrospect.dto';

export class UpdateRetrospectDto extends PartialType(CreateRetrospectDto) {}
