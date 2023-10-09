import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private  auth:AngularFireAuth) { }
  login({username,password}: {username:string, password:string}){
   return from(this.auth.signInWithEmailAndPassword(username,password))
  }
}
