import { Controller, Get, Post, Delete, Patch, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * @Get([path])当前的path会拼接到@Controller('user')到里面user的路径后面，不写就表示为空的
   */
  @Get()
  // userList这个方法名随便自己定义,要见文思意就可以
  async userList(@Query() query: any): Promise<any[]> {
    return await this.userService.userList();
  }

  @Post()
  async createUser(): Promise<any[]> {
    return await this.userService.createUser();
  }

  @Delete()
  async deleteUser(): Promise<any[]> {
    // 控制层访问服务层的userList方法
    return await this.userService.deleteUser();
  }

  @Patch()
  async patchUser(): Promise<any[]> {
    return await this.userService.patchUser();
  }

  @Put()
  async putUser(): Promise<any[]> {
    return await this.userService.putUser();
  }
}
