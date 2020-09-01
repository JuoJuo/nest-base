import { Injectable, OnModuleInit } from '@nestjs/common';
const users = [];
@Injectable()
export class UserService implements OnModuleInit {
  onModuleInit() {
    console.log(`The module has been initialized.`);
  }

  async userList(): Promise<any[]> {
    return users;
  }

  async createUser(): Promise<any[]> {
    return [];
  }

  async deleteUser(): Promise<any[]> {
    return [];
  }

  async patchUser(): Promise<any[]> {
    return [];
  }

  async putUser(): Promise<any[]> {
    return [];
  }
}
