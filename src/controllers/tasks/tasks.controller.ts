import { BaseQueryDto } from '@/dtos/query/pagination-query.dto';
import { TasksService } from '@/services/tasks/tasks.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller({ path: 'tasks', version: '1' })
export class TasksController {
  constructor(protected tasksService: TasksService) {}

  @Get('/')
  async getTeams(@Query() baseQueryDto: BaseQueryDto) {
    const page = +baseQueryDto.page || 1;
    const limit = +baseQueryDto.limit || 10;

    const [data, totalCount] = await this.tasksService.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return { data, metaData: { page, limit, totalCount } };
  }
}
