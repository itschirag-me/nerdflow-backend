import { BaseEntity } from 'src/shared/entities/base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { ProjectEntity } from './project.entity';
import { UserDto } from '@/dtos/base/user.dto';
import { ProjectDto } from '@/dtos/base/project.dto';
import { TaskStatus } from '@/shared/enums/task-status.enum';

@Entity('tasks')
export class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 255 })
  taskId: string;

  @ManyToOne(() => UserEntity, (user) => user.tasks)
  @JoinTable()
  assignee: UserDto;

  @Column({ type: 'varchar', enum: TaskStatus, default: TaskStatus.PENDING })
  status: TaskStatus;

  @ManyToOne(() => ProjectEntity, (project) => project.tasks)
  @JoinColumn()
  project: ProjectDto;
}
