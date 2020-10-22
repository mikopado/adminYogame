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

export interface IUserMember {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    address: string,
    dob: Date,
    city: string,
    createdAt: Date
}

export interface IMember {
    id: string,
    email: string,
    name: string,
    address: string,
    dob: string,
    registeredAt: string
}

export interface IMemberMembership{
    id: string,
    userId: string,
    createdAt: Date,
    membershipType: MembershipType,
    classType: ClassType,
    price: number,
    expirationTime: Date
}

export interface IMembership{
    id: string,
    userId: string,
    membership: string,
    price: number,
    enroll: string,
    expire: string
  }

  export interface IBookedClass{
    id: string,
    userId: string,
    class: string,
    teacher: string,
    date: string,
    timeslot: string,
    room: string,
    bookedAt: string
  }

  
  export interface IUser{
    id: string,
    email: string,
    
  }

export interface IApiResponse<T>{
    result: T,
    statusCode: number,
    message: string
}

