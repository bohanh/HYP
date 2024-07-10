import {Socials} from "~/model/Socials";

export class Person {
    id: number;
    name: string;
    description: string;
    socials: Socials;
    experiences: string[];
    projects: number[];
    services: number[];

    constructor(id: number, name: string, description: string="", socials: Socials=new Socials(), experiences: string[] = [], projects: number[] = [], services: number[] = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.socials = socials;
        this.experiences = experiences;
        this.projects = projects;
        this.services = services;
    }

    addExperience(exp: string): void {
        this.experiences.push(exp);
    }

    addProject(p: number): void {
        this.projects.push(p);
    }

    addService(s: number): void {
        this.services.push(s);
    }
}