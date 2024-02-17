import { ProjectController } from '@/controllers/project/project.controller';
import { ProjectEntity } from '@/entities/project.entity';
import { ProjectService } from '@/services/project/project.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
