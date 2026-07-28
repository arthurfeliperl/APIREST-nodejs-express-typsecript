import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('desafio_usuarios', 'postgres', '1234', {
    host: '127.0.0.1',
    dialect: 'postgres'
});

export async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
}