import { Task } from "./app.task";

export interface User {
    email: string;
    firstName: string;
    lastName: string;
    fullName: string;
    password: string;
    confirmPassword: string;
    tasks?: Task[];
}