export enum MembershipType{
    Month,
    Year,
    Single
}
export interface IClass {
    id: string,
    userId: string,
    type: ClassType,
    level: ClassLevel,
    teacher: ITeacher,
    date: Date,
    startingTime: string,
    endingTime: string,
    room: string,
    bookedAt: Date
}

export enum ClassType{
    Yoga,
    Pilates,
    Combo
}

export enum ClassLevel{
    Beginner,
    Intermediate,
    Advanced
}

export interface ITeacher {
    id: string,
    firstName: string,
    lastName: string
}

export interface IUser {
    id: string,
    email: string,
    createdAt: Date
}

export interface IMemberMembership{
    id: string,
    firstName: string,
    lastName: string,
    address: string,
    dob: Date,
    createdAt: Date,
    membershipType: MembershipType,
    classType: ClassType,
    price: number,
    expirationTime: Date
}

export interface IApiResponse<T>{
    result: T,
    statusCode: number,
    message: string
}

