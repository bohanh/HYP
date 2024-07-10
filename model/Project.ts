export class Project {
    id: number;
    name: string;
    description: string;
    longDes: string;
    leader: number;
    role: string;

    constructor(id: number, name: string, description: string = "", longDes: string = "", leader: number = 0, role: string = "") {
        this.id = id;
        this.name = name;
        this.description = description;
        this.longDes = longDes;
        this.leader = leader;
        this.role = role;
    }
}