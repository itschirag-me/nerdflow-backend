import { TeamEntity } from '@/entities/team.entity';
import { BaseRepository } from '@/shared/services/base-repository.service';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class TeamService extends BaseRepository<
  TeamEntity,
  Repository<TeamEntity>
> {
  constructor(
    @InjectRepository(TeamEntity) protected repository: Repository<TeamEntity>,
    @InjectEntityManager() protected entityManager: EntityManager,
  ) {
    super(repository, entityManager);
  }
}
