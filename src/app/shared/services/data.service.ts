import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IClass, IApiResponse, IUserMember, IMemberMembership } from '../interfaces';
import { throwError } from 'rxjs';
import { AppConfigService } from '../../app-config.service';


@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(
        private http: HttpClient, 
        private configService: AppConfigService) { 
    }

    getBookedClasses(): Observable<IApiResponse<IClass[]>> {
        var endpoint = '/api/Classes/booked';
        return this.http.get<IApiResponse<IClass[]>>(this.configService.settings.apiUrl + endpoint)
            .pipe(catchError(this.handleError));
    }

    getMemberMemberships(): Observable<IApiResponse<IMemberMembership[]>> {
        var endpoint = '/api/memberships/member';
        return this.http.get<IApiResponse<IMemberMembership[]>>(this.configService.settings.apiUrl + endpoint)
            .pipe(catchError(this.handleError));
    }

    getUsers(): Observable<IApiResponse<IUserMember[]>> {
        var endpoint = '/api/members';
        return this.http.get<IApiResponse<IUserMember[]>>(this.configService.settings.apiUrl + endpoint)
            .pipe(catchError(this.handleError));
    }

   
    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return throwError( new Error(errMessage) )
        }
        return throwError(error || 'Server error');
    }
}