import { Injectable } from '@nestjs/common';
import { IUser } from '@glory-to-ukraine/interfaces';

@Injectable()
export class AppService {
  getData(): { message: IUser } {
    const user = {
      id: 'test',
      address1: 'test',
      address2: 'test',
      birthday: 'test',
      city: 'test',
      country: 'test',
      createdAt: new Date(),
      email: 'test',
      firstName: 'test',
      postalCode: 'test',
      region: 'test',
      state: null
    } as IUser;
    return { message: user };
  }
}
