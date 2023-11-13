export interface Task {
    id: number;
    name: string;
    description: string;
    lessonId: number;
}

export interface CompletedTask extends Task {
    mark: number
}