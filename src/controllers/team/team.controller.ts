import { CreateTeamDto } from '@/dtos/create/create-team.dto';
import { BaseQueryDto } from '@/dtos/query/pagination-query.dto';
import { TeamEntity } from '@/entities/team.entity';
import { TeamService } from '@/services/team/team.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller({ path: 'team', version: '1' })
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Get('/')
  async getTeams(@Query() baseQueryDto: BaseQueryDto) {
    const page = +baseQueryDto.page || 1;
    const limit = +baseQueryDto.limit || 10;

    const [data, totalCount] = await this.teamService.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return { data, metaData: { page, limit, totalCount } };
  }

  @Post('/')
  async createTeam(@Body() createTeamDto: CreateTeamDto) {
    const newTeam = new TeamEntity();
    newTeam.name = createTeamDto.name;
    newTeam.description = createTeamDto.description;
    newTeam.members = createTeamDto.members;
    return this.teamService.saveOne(newTeam);
  }
}
