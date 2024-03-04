import { Controller, Get } from '@nestjs/common';

@Controller('dumi')
export class DumiController {
  @Get()
  index() {
    return 'dumi';
  }
}
