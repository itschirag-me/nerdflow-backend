import { TaskEntity } from '@/entities/task.entity';
import { BaseRepository } from '@/shared/services/base-repository.service';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class TasksService extends BaseRepository<
  TaskEntity,
  Repository<TaskEntity>
> {
  constructor(
    @InjectRepository(TaskEntity)
    protected repository: Repository<TaskEntity>,
    @InjectEntityManager() protected entityManager: EntityManager,
  ) {
    super(repository, entityManager);
  }
}
