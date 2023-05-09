import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUser(iduser: number): Promise<User> {
    return await this.userRepository.findOne({ where: { iduser } });
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(nickname: string, password: string): Promise<User> {
    return await this.userRepository.create({ nickname, password });
  }

  async updateUser(
    iduser: number,
    nickname: string,
    password: string,
  ): Promise<User> {
    let targetUser = await this.getUser(iduser);
    targetUser.nickname = nickname;
    targetUser.password = password;
    return await this.userRepository.save(targetUser);
  }

  async deleteUser(iduser: number): Promise<DeleteResult> {
    return await this.userRepository.delete(iduser);
  }
}
