import { Controller, Get, Param, Request } from '@nestjs/common';
import { MentorService } from './mentor.service';
import { Types } from 'mongoose';
import { ProtectedRequest } from '../core/http/request';
import { MentorSubscriptionDto } from './dto/mentor-subsciption.dto';
import { MongoIdTransformer } from '../common/mongoid.transformer';

@Controller('mentor')
export class MentorController {
  constructor(private readonly mentorService: MentorService) {}

  @Get('id/:id')
  async findOne(
    @Param('id', MongoIdTransformer) id: Types.ObjectId,
    @Request() request: ProtectedRequest,
  ): Promise<MentorSubscriptionDto> {
    return this.mentorService.findMentorSubsciption(id, request.user);
  }
}
