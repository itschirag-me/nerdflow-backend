import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { ProjectEntity } from './project.entity';
import { UserDto } from '@/dtos/base/user.dto';
import { ProjectDto } from '@/dtos/base/project.dto';

@Entity('organizations')
export class OrganizationEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => UserEntity, (user) => user.organization)
  @JoinTable()
  employees: UserDto[];

  @OneToMany(() => ProjectEntity, (project) => project.organization)
  @JoinTable()
  projects: ProjectDto[];
}
