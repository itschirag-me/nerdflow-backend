import { TasksController } from '@/controllers/tasks/tasks.controller';
import { TaskEntity } from '@/entities/task.entity';
import { TasksService } from '@/services/tasks/tasks.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
