import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      name: 'User 1',
      username: 'user1',
      email: 'user1@test.com',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with #id ${id} not found`);
    } else {
      return user;
    }
  }

  validateUserName(username: string) {
    const user = this.users.find((user) => user.username === username);
    if (user) {
      throw new ConflictException(`Username ${username} already exists`);
    } else {
      return true;
    }
  }

  createUser(payload: CreateUserDto) {
    this.validateUserName(payload.username);
    const newUser = {
      id: (this.counterId += 1),
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, payload: UpdateUserDto) {
    const user = this.findOne(id);
    if (user) {
      this.validateUserName(payload.username);
      const index = this.users.findIndex((user) => user.id === id);
      this.users[index] = {
        ...user,
        ...payload,
      };
      return this.users[index];
    } else {
      throw new NotFoundException(`User with #id ${id} not found`);
    }
  }

  deleteUser(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with #id ${id} not found`);
    }
    this.users.splice(index, 1);
    return;
  }
}
