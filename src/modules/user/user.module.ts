import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { LogModule } from '../log/log.module';

@Module({
  imports: [LogModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
