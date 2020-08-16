import { getRepository, getConnection } from 'typeorm';
import Subject from '@entities/Subject';
import User from '@entities/User';
import Classe from '@entities/Classe';
import Schedule from '@entities/Schedule';
import TimeUtils from '@utils/timeUtils';

interface ScheduleDTO {
    week_day: number;
    to: string;
    from: string;
}

interface ClasseDTO {
    cost: number;
    subject: string;
    schedules: ScheduleDTO[];
}

interface UserDTO extends ClasseDTO {
    name: string;
    avatar: string;
    bio: string;
    whatsapp: string;
}

export type UserClasseScheduleDTO = UserDTO;

export default class CreateUserClassesScheduleService {
    constructor(private userClasseSchedule: UserClasseScheduleDTO) {}

    async execute() {
        const dataSave = await getConnection().transaction(
            async transactionalEntityManager => {
                const userRepository = getRepository(User);

                let user = null;

                const userExists = await userRepository.findOne({
                    name: this.userClasseSchedule.name,
                    whatsapp: this.userClasseSchedule.whatsapp,
                });

                if (!userExists) {
                    const userSave = await transactionalEntityManager.save(
                        getRepository(User).create({
                            avatar: this.userClasseSchedule.avatar,
                            bio: this.userClasseSchedule.bio,
                            name: this.userClasseSchedule.name,
                            whatsapp: this.userClasseSchedule.whatsapp,
                        }),
                    );

                    user = userSave;
                } else {
                    user = userExists;
                }

                if (!user) throw new Error(`User inválido!`);

                const subject = await getRepository(Subject).findOne({
                    id: this.userClasseSchedule.subject,
                });

                if (!subject) throw new Error(`Matéria inválida!`);

                // const classe: Classe = {} as Classe;

                // const classeRepository = getRepository(Classe);

                const classeSave = await transactionalEntityManager.save(
                    getRepository(Classe).create({
                        cost: this.userClasseSchedule.cost,
                        userId: user.id,
                        subjectId: subject.id,
                    }),
                );

                const schedules = this.userClasseSchedule.schedules.map(
                    ({ from, to, week_day }) => {
                        const schedule = new Schedule();

                        schedule.from = TimeUtils.convertHourToMinutes(from);
                        schedule.to = TimeUtils.convertHourToMinutes(to);
                        schedule.weekDay = week_day;
                        schedule.classId = classeSave.id;

                        return schedule;
                    },
                ) as Schedule[];

                const schedulesSave = await transactionalEntityManager.save<
                    Schedule[]
                >(schedules);

                return {
                    user,
                    classeSave,
                    schedulesSave,
                };
            },
        );

        return dataSave;
    }
}
