import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Retrospect } from './entities/retrospect.entity';
import { RetrospectService } from './retrospect.service';
import { CreateRetrospectDto } from './dto/create-retrospect.dto';
import { UpdateRetrospectDto } from './dto/update-retrospect.dto';

@Resolver()
export class RetrospectResolver {
  constructor(private readonly retrospectService: RetrospectService) {}

  @Query(() => [Retrospect])
  getAll() {
    return this.retrospectService.getAll();
  }

  @Query(() => Retrospect)
  getOne(@Args('id') id: number) {
    return this.retrospectService.getOne(id);
  }

  @Mutation(() => Retrospect)
  writeRetrospect(@Args('body') body: CreateRetrospectDto) {
    return this.retrospectService.createOne(body);
  }

  @Mutation(() => Boolean)
  deleteRetrospect(@Args('id') id: number) {
    return this.retrospectService.deleteOne(id);
  }

  @Mutation(() => Retrospect)
  updateRetrospect(@Args('body') body: UpdateRetrospectDto) {
    return this.retrospectService.updateOne(body);
  }
}
