import { randomUUID } from 'crypto';
import { hash } from 'bcrypt';

import createConnection from '../index';

async function create() {
  const connection = await createConnection('localhost');

  const id = randomUUID();
  const password = await hash('admin', 8);

  await connection.query(
    `INSERT INTO users (id, name, email, password, is_admin, driver_license, created_at) 
    VALUES ('${id}', 'Admin', 'admin@admin.com', '${password}', true,'abcde', now());`,
  );

  await connection.close();
}

create().then(() => console.log('User admin created!'));
