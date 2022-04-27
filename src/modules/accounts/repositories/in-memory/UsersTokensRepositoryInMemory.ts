import { ICreateUserTokenDTO } from '@modules/accounts/dtos/ICreateUserTokenDTO';
import { UserTokens } from '@modules/accounts/infra/typeorm/entities/UserTokens';
import { IUsersTokensRepository } from '../IUsersTokensRepository';

class UsersTokensRepositoryInMemory implements IUsersTokensRepository {
  usersTokens: UserTokens[] = [];

  async create(data: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = new UserTokens();

    Object.assign(userToken, { ...data });

    this.usersTokens.push(userToken);
    return userToken;
  }
  async findByUserIdAndRefreshToken(
    user_id: string,
    token: string,
  ): Promise<UserTokens> {
    const userToken = this.usersTokens.find(
      userToken =>
        userToken.user_id === user_id && userToken.refresh_token === token,
    );

    return userToken;
  }

  async findByToken(token: string): Promise<UserTokens> {
    const userToken = this.usersTokens.find(
      userToken => userToken.refresh_token === token,
    );

    return userToken;
  }

  async deleteById(id: string): Promise<void> {
    const usersTokens: UserTokens[] = this.usersTokens.filter(
      userToken => userToken.id !== id,
    );

    this.usersTokens = usersTokens;
  }
}

export { UsersTokensRepositoryInMemory };
