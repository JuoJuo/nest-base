import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class UserService implements OnModuleInit {
  onModuleInit() {
    console.log(`The module has been initialized.`);
  }

  async userList(): Promise<any[]> {
    return [
      {
        id: 0,
        name: '张三',
      },
      {
        id: 1,
        name: '李四',
      },
    ];
  }
}
