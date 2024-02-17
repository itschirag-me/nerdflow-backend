import { UserEntity } from '@/entities/user.entity';
import { BaseRepository } from '@/shared/services/base-repository.service';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UserService extends BaseRepository<
  UserEntity,
  Repository<UserEntity>
> {
  constructor(
    @InjectRepository(UserEntity)
    protected repository: Repository<UserEntity>,
    @InjectEntityManager() protected entityManager: EntityManager,
  ) {
    super(repository, entityManager);
  }
}
