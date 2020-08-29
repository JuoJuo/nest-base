import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class LogService {
  // 依赖注入的方式
  constructor(@Inject('PREFIX') private readonly prefix: string) {}

  log(str: string): void {
    console.log(`${this.prefix}-${str}`);
  }

  error(str: string): void {
    console.log(str);
  }
}
