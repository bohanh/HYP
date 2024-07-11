import {PrismaClient} from "@prisma/client";
import {Person} from "~/model/Person"
import {Socials} from "~/model/Socials";

export class PersonService {
    prisma = new PrismaClient();

    async addPerson(person: Person): Promise<void> {
        await this.prisma.person.create({
            data: {
                id: person.id,
                name: person.name,
                description: person.description,
                linkedin: person.socials.linkedin,
                twitter: person.socials.twitter,
                instagram: person.socials.instagram,
                facebook: person.socials.facebook,
            }
        });
        for (const experience of person.experiences) {
            await this.prisma.experience.create({
                data: {
                    personId: person.id,
                    experience: experience,
                }
            })
        }
    }

    async getPerson(id: number): Promise<Person> {
        const person = (await this.prisma.person.findFirst({
            where: {id: {equals: id}}
        }))!;

        const experiences: string[] = (await this.prisma.experience.findMany({
            where: {personId: {equals: id}},
            select: {experience: true}
        })).map(dict => dict['experience']);

        const projects: number[] = (await this.prisma.project.findMany({
            where: {leaderId: {equals: id}},
            select: {id: true}
        })).map(dict => dict['id']);

        const services: number[] = (await this.prisma.testimonial.findMany({
            where: {
                personId: {equals: id},
                role: {equals: 'Leader'}
            },
            select: {serviceId: true}
        })).map(dict => dict['serviceId']);

        return this.assignPeople(person, experiences, projects, services);
    }

    async getPeople(): Promise<Person[]> {
        const ids: number[] = (await this.prisma.person.findMany({
            select: {id: true}
        })).map(dict => dict['id']);
        let retPeople: Person[] = [];
        for (const id of ids) {
            retPeople.push(await this.getPerson(id));
        }
        return retPeople;
    }

    assignPeople(person: {
        id: number,
        name: string,
        description: string,
        linkedin: string,
        twitter: string,
        instagram: string,
        facebook: string
    }, experiences: string[], projects: number[], services: number[]): Person {
        const socials: Socials = new Socials(person.linkedin, person.twitter, person.instagram, person.facebook);
        return new Person(person.id, person.name, person.description, socials, experiences, projects, services);
    }
}