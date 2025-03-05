export interface user {
    userId: number;
    fistName:string;
    lastName: string;
    email: string;
    recovery_phone: string;
    username:string;
    password: string; 
    active: boolean; 
}

export interface UserCredentials {
    username: string;
    password: string;
}