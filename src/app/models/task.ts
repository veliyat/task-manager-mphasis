export class Task {
    id: number;
    title: string;
    completed: boolean;
    date: Date;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.completed = false;
        this.date = new Date();
    }
}
