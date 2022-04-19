interface IMailProvider {
  sendMail(
    to: string,
    subject: string,
    vaiables: any,
    path: string,
  ): Promise<void>;
}

export { IMailProvider };
