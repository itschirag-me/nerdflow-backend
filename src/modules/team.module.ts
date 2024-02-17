import { TeamController } from '@/controllers/team/team.controller';
import { TeamEntity } from '@/entities/team.entity';
import { TeamService } from '@/services/team/team.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TeamEntity])],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
