import { getRepository } from 'typeorm';
import Classe from '@entities/Classe';
import TimeUtils from '@utils/timeUtils';
import Schedule from '@entities/Schedule';

export interface QueryDTO {
    week_day: string;
    subject: string;
    time: string;
}

export default class ListClassesScheduleService {
    constructor(private queryDTO: QueryDTO) {}

    async execute() {
        const time = TimeUtils.convertHourToMinutes(this.queryDTO.time);

        const classes = await getRepository(Classe)
            .createQueryBuilder()
            .innerJoinAndSelect('Classe.user', 'User')
            .innerJoinAndSelect('Classe.subject', 'Subject')
            .where('Subject.id = :subject', {
                subject: `${this.queryDTO.subject}`,
            })
            .andWhere(
                dq => {
                    const subQuery = dq
                        .subQuery()
                        .select('schedule.class_id')
                        .from(Schedule, 'schedule')
                        .innerJoin('schedule.classe', 'Classe')
                        .where('schedule.week_day = :week_day')
                        .andWhere('schedule.from <= :from')
                        .andWhere('schedule.to > :to')
                        .getQuery();

                    return `EXISTS ${subQuery}`;
                },
                {
                    week_day: Number(this.queryDTO.week_day),
                    from: time,
                    to: time,
                },
            )
            .getMany();

        return classes;
    }
}
