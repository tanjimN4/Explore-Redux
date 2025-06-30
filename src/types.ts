export interface ITask {
    id: string;
    title: string;
    description?: string;
    duDate?: string;
    isCompleted: boolean;
    priority: "High" | "Medium" | "Low";
}
