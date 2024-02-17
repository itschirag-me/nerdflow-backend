import { BaseQueryDto } from '@/dtos/query/pagination-query.dto';
import { UserService } from '@/services/user/user.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller({ path: 'user', version: '1' })
export class UserController {
  constructor(protected userService: UserService) {}

  @Get('/')
  async getTeams(@Query() baseQueryDto: BaseQueryDto) {
    const page = +baseQueryDto.page || 1;
    const limit = +baseQueryDto.limit || 10;

    const [data, totalCount] = await this.userService.findAndCount({
      relations: ['organization'],
      skip: (page - 1) * limit,
      take: limit,
    });

    return { data, metaData: { page, limit, totalCount } };
  }
}
