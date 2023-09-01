import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private db: AngularFireDatabase) {}

  createData(contact: any): Observable<any>{
    return new Observable<any>(observer => {
      this.db.list('/contact').push(contact).then(
        res => {
          observer.next(res);
        }
      ).catch(
        err => {
          observer.error(err);
        }
      )
    });
  }
}