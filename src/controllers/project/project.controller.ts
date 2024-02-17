import { CreateProjectDto } from '@/dtos/create/create-project.dto';
import { BaseQueryDto } from '@/dtos/query/pagination-query.dto';
import { ProjectEntity } from '@/entities/project.entity';
import { ProjectService } from '@/services/project/project.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller({ path: 'project', version: '1' })
export class ProjectController {
  constructor(protected projectService: ProjectService) {}

  @Get('/')
  async getProject(@Query() baseQueryDto: BaseQueryDto) {
    const page = +baseQueryDto.page || 1;
    const limit = +baseQueryDto.limit || 10;

    const [data, totalCount] = await this.projectService.findAndCount({
      relations: {
        team: true,
        tasks: true,
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return { data, metaData: { page, limit, totalCount } };
  }

  @Post('/')
  async createTeam(@Body() createProjectDto: CreateProjectDto) {
    const newProject = new ProjectEntity();
    newProject.name = createProjectDto.name;
    newProject.description = createProjectDto.description;
    newProject.team = createProjectDto.team;
    return this.projectService.saveOne(newProject);
  }
}
