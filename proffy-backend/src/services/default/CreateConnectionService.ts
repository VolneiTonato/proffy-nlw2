import { getRepository } from 'typeorm';
import Connection from '../../entities/Connection';
import User from '../../entities/User';

export type ConnectionDTO = Pick<Connection, 'userId'>;

export default class CreateConnectionService {
    constructor(private connectionDTO: ConnectionDTO) {}

    async execute() {
        const userExists = await getRepository(User).findOne({
            id: this.connectionDTO.userId,
        });

        if (!userExists) throw new Error(`User is invalid!`);

        const connectionRepo = getRepository(Connection);

        const connection = connectionRepo.create({
            userId: this.connectionDTO.userId,
        });

        await connectionRepo.save(connection);

        return connection;
    }
}
