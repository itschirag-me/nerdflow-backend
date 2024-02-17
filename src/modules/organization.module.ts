import { OrganizationController } from '@/controllers/organization/organization.controller';
import { OrganizationEntity } from '@/entities/organization.entity';
import { OrganizationService } from '@/services/organization/organization.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationEntity])],
  controllers: [OrganizationController],
  providers: [OrganizationService],
})
export class OrganizationModule {}
