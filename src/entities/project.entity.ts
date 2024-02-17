import { BaseEntity } from '@/shared/entities/base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskEntity } from './task.entity';
import { TaskDto } from '@/dtos/base/task.dto';
import { OrganizationEntity } from './organization.entity';
import { OrganizationIdDto } from '@/dtos/base/organization.dto';
import { TeamEntity } from './team.entity';
import { TeamIdDto } from '@/dtos/base/team.dto';

@Entity('projects')
export class ProjectEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => TaskEntity, (task) => task.project)
  @JoinTable()
  tasks: TaskDto[];

  @ManyToOne(() => TeamEntity, (team) => team.projects)
  @JoinTable()
  team: TeamIdDto;

  @ManyToOne(() => OrganizationEntity, (organization) => organization.projects)
  @JoinColumn()
  organization: OrganizationIdDto;
}
