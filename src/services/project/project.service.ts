import { ProjectEntity } from '@/entities/project.entity';
import { BaseRepository } from '@/shared/services/base-repository.service';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ProjectService extends BaseRepository<
  ProjectEntity,
  Repository<ProjectEntity>
> {
  constructor(
    @InjectRepository(ProjectEntity)
    protected repository: Repository<ProjectEntity>,
    @InjectEntityManager() protected entityManager: EntityManager,
  ) {
    super(repository, entityManager);
  }
}
