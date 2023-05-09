import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { DeleteResult } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Get(':iduser')
  async getUser(@Param('iduser') iduser: number): Promise<User> {
    return await this.userService.getUser(iduser);
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return await this.userService.createUser(user.nickname, user.password);
  }

  @Post()
  async updateUser(@Body() newUser: User): Promise<User> {
    return await this.userService.updateUser(
      newUser.iduser,
      newUser.nickname,
      newUser.password,
    );
  }

  @Delete(':iduser')
  async deleteUser(@Param('iduser') iduser: number): Promise<DeleteResult> {
    return await this.userService.deleteUser(iduser);
  }
}
