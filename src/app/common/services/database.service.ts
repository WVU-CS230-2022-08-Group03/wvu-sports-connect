import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'

@Injectable({
    providedIn: 'root'
})

export class DatabaseService {
    
    constructor(private afdbclient: AngularFireDatabase) { }
    
    getListHandle<T>(a: string) {
        return this.afdbclient.list<T>(a).valueChanges();
    }
    
    addEntries<T>(a: string, list: T[]) {
        for (var object of list) {
            this.afdbclient.list<T>(a).push(object);
        }
    }
}
