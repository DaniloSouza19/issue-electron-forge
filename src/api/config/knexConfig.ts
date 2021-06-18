import Knex from 'knex';

/* to this example is not necessary knex */
const knex = Knex({
  client: 'oracledb',
  connection: {
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    connectString: process.env.CONNECT_STRING_DB
  }
});

export { knex }
