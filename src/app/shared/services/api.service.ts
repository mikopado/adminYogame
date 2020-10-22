import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {  map } from 'rxjs/operators';
import {  ClassType, MembershipType, IMembership, IBookedClass, ClassLevel, IMember } from '../interfaces';
import { DataService } from './data.service';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    memberships$ = new BehaviorSubject<IMembership[]>(null);
    bookedClasses$ = new BehaviorSubject<IBookedClass[]>(null);
    users$ = new BehaviorSubject<IMember[]>(null);

    constructor(
        private dataService: DataService) { 
    }

    getMemberships(){
        return this.dataService.getMemberMemberships()
            .pipe(
                map(m => m.result
                    .sort((a, b) => (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any))
                    .map(
                    mm => ({
                        id: mm.id,
                        userId: mm.userId,
                        membership: ClassType[mm.classType].concat(' ', MembershipType[mm.membershipType]),
                        price: mm.price,
                        enroll: new Date(mm.createdAt).toDateString(),
                        expire: new Date(mm.expirationTime).toDateString()
                    } as IMembership)
                ))
            )
    }

    getBookedClasses(){
        return this.dataService.getBookedClasses()
            .pipe(                
                map(c => c.result
                    .sort((a, b) => (new Date(b.bookedAt) as any) - (new Date(a.bookedAt) as any))
                    .map(
                    cl => ({
                        id: cl.id,
                        userId: cl.userId,
                        class: ClassType[cl.type].concat(' ', ClassLevel[cl.level]),
                        teacher: cl.teacher.firstName.concat(' ', cl.teacher.lastName),
                        date: new Date(cl.date).toDateString(),
                        timeslot: cl.startingTime.concat('-', cl.endingTime),
                        room: cl.room,
                        bookedAt: new Date(cl.bookedAt).toDateString()
                    } as IBookedClass)
                ))
            )
    }

    getUsers(){
        return this.dataService.getUsers()
            .pipe(
                map(u => u.result
                    .sort((a, b) => (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any))
                    .map(
                    us => ({
                        id: us.id,
                        email: us.email,
                        name: us.firstName.concat(' ', us.lastName),
                        address: us.address.concat(', ', us.city),
                        dob: new Date(us.dob).toDateString(),
                        registeredAt: new Date(us.createdAt).toDateString()                      
                    } as IMember)
                ))
            )
    }
}