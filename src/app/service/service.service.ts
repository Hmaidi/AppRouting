import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServiceService {

  PhoneRepeater = [{ NomdeProduit: 'note8', PrixProduit: 3000  }, { NomdeProduit: 'note9', PrixProduit: 4000  }];

  constructor( private http: Http) { }
  getData() {
     return this.PhoneRepeater;
    /// return console.log('alpha');
      }
   LoginUser(user) {
      return this.http.post( 'http://localhost:3000/auth/login ' , user);
   }
}
