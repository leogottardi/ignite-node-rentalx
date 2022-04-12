import { ICreateUserTokenDTO } from '@modules/accounts/dtos/ICreateUserTokenDTO';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { getRepository, Repository } from 'typeorm';
import { UserTokens } from '../entities/UserTokens';

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = getRepository(UserTokens);
  }

  async create(data: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      user_id: data.user_id,
      expires_date: data.expires_date,
      refresh_token: data.refresh_token,
    });

    await this.repository.save(userToken);

    return userToken;
  }
}

export { UsersTokensRepository };
