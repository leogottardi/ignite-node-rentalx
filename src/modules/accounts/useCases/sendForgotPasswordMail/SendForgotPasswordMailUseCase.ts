import { AppError } from '@errors/AppError';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { inject, injectable } from 'tsyringe';
import { randomUUID } from 'crypto';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';

@injectable()
class SendForgotPasswordMailUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
    @inject('DayjsDateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute(email: string) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Users does not exists!');
    }

    const token = randomUUID();

    const expires_date = this.dateProvider.addHours(3);

    await this.usersTokensRepository.create({
      refresh_token: token,
    });
  }
}
export { SendForgotPasswordMailUseCase };
