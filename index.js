const { Sequelize } = require('sequelize');

const { secrets } = require('./secrets.json');

// Testing connection String
(async () => {
  const sequelize = new Sequelize(
    `postgres://${secrets.user}:${secrets.pass}@${secrets.host}/${secrets.base}`,
    {
      logging: console.log,
    }
  );

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
