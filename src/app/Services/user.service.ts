import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import firebase from 'firebase';
import { AngularFireStorage } from '@angular/fire/storage'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

//import { User } from '../Models/class';

export interface UserID{
  fullname:string;
  email:string;
  uid:string;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
	private user:UserID;
  firebaseconfig :any =
  {
    apiKey: "AIzaSyBFcC6ytRxzLBHfQOKjgtbQYWsirhH6Xec",
    authDomain :"startup-7944e.firebase.com",
    projectId:"startup-7944e"
  };


	constructor(
	private auth: AngularFireAuth,
    private afStorage: AngularFireStorage,
    private afDB: AngularFireDatabase,
	) {
	}

	setUser(user:UserID){
		return this.user=user;
	}

	getUserUID():string{
		return this.user.uid;
	}
	loginFireauth(value){
		return new Promise<any> ((resolve,reject)=>{
			firebase.auth().signInWithEmailAndPassword(value.email,value.password)
			res=> resolve(res)
			error=>reject(error)
		})
	}

	// Currentuser(uid: string): Observable<UserID> {
	// 		return this.usersCollection.doc<UserID>(uid).valueChanges();
	//  }
	// getUsers(): Observable<User[]> {
	// 	return this.usersCollection.valueChanges();
	// }

	// getQuery(): Observable<DocumentChangeAction<User>[]> {
	// 	return this.usersCollection.snapshotChanges();
	// }

	// getUser(uid: string): Observable<User> {
	// 	return this.usersCollection.doc<User>(uid).valueChanges();
	// }
}
