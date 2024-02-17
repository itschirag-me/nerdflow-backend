import { BaseEntity } from '@/shared/entities/base.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDto } from '@/dtos/base/user.dto';
import { ProjectEntity } from './project.entity';
import { ProjectDto } from '@/dtos/base/project.dto';

@Entity('teams')
export class TeamEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => UserEntity, (user) => user.team)
  @JoinTable()
  members: UserDto[];

  @OneToMany(() => ProjectEntity, (project) => project.team)
  @JoinTable()
  projects: ProjectDto[];
}
