import { getRepository } from 'typeorm';
import Subject from '../../entities/Subject';

export type SubjectDTO = Pick<Subject, 'subject'>;

export default class CreateConnectionService {
    constructor(private subjectDTO: SubjectDTO) {}

    async execute() {
        const subjectRepo = getRepository(Subject);

        const subjectExits = await subjectRepo.findOne({
            subject: this.subjectDTO.subject,
        });

        if (subjectExits)
            throw new Error(`Subject ${this.subjectDTO.subject} exists!`);

        const subject = subjectRepo.create({
            subject: this.subjectDTO.subject,
        });

        await subjectRepo.save(subject);

        return subject;
    }
}
