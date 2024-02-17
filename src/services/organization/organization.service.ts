import { OrganizationEntity } from '@/entities/organization.entity';
import { BaseRepository } from '@/shared/services/base-repository.service';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class OrganizationService extends BaseRepository<
  OrganizationEntity,
  Repository<OrganizationEntity>
> {
  constructor(
    @InjectRepository(OrganizationEntity)
    protected repository: Repository<OrganizationEntity>,
    @InjectEntityManager() protected entityManager: EntityManager,
  ) {
    super(repository, entityManager);
  }
}
