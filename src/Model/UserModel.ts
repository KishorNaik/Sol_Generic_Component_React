export type Nullable<T>=T | null

export interface UserModel{
    UserId?:Nullable<number>
    FirstName?:string;
    LastName?:string
}