import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host?: string): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  if (host) {
    Object.assign(defaultOptions, {
      host,
    });
  }

  return createConnection(defaultOptions);
};
