import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrganizationEntity } from './organization.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { TeamEntity } from './team.entity';
import { TaskEntity } from './task.entity';
import { TaskDto } from '@/dtos/base/task.dto';
import { TeamDto } from '@/dtos/base/team.dto';
import { OrganizationDto } from '@/dtos/base/organization.dto';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ManyToOne(() => OrganizationEntity, (organization) => organization.employees)
  @JoinColumn()
  organization: OrganizationDto;

  @ManyToOne(() => TeamEntity, (team) => team.members)
  @JoinColumn()
  team: TeamDto;

  @OneToMany(() => TaskEntity, (task) => task.assignee)
  @JoinTable()
  tasks: TaskDto[];
}
