import {Testimonial} from "~/model/Testimonial";

export class Service {
    id: number;
    name: string;
    description: string;
    longDes: string;
    sections: string[];
    words: string;
    testimonials: Testimonial[];

    constructor(id: number, name: string, description: string = "", longDes: string = "", sections: string[] = [], words: string = "", testimonials: Testimonial[] = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.longDes = longDes;
        this.sections = sections;
        this.words = words;
        this.testimonials = testimonials;
    }
}