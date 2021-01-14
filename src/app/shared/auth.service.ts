import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
import {map} from 'rxjs/operators';
import {Customer} from '../models/customer';
import {Router} from '@angular/router';
import Swal from 'sweetalert2'






@Injectable({
    providedIn: 'root'
})

export class AuthService{
    endpoint: any = "http://localhost:2000";
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    datacustomer = {}
    constructor(
        private http:HttpClient,
        private router: Router
        ) { }
 

        // login

        login(customer: Customer){
            return this.http.post<any>(`${this.endpoint}/customers/login`, customer).subscribe((complete)=>{
          
                
                 {
                    console.log(complete)
                    localStorage.setItem('access_token', complete.access_token)


                    this.getProfile(complete.customer).subscribe((res:any)=>{
                        this.datacustomer  = res.customer;
                        this.router.navigate(['profile/'+complete.customer]) 
                    }
                     )
                     Swal.fire({
                    title: "Login Success",
                    text: "Udah login, lanjut Update Profile",
                    icon:"success",
                })
                }
  
              
            }, error=>{
                Swal.fire('OMG...Error', error.error.message, 'error')
            })

        }

        get loginsave(): boolean{
            let token = localStorage.getItem('access_token');
            return (token !==null) ? true : false
        }

        // register

        signUp(customer: Customer){
            return this.http.post<any>(`${this.endpoint}/customers/register`, customer).subscribe((res:any)=>{
                // console.log("respons", res);
                Swal.fire({
                    title: "Login Success",
                    text: "Mantap, sudah register. Silahkan Login",
                    icon:"success",
                })
                this.router.navigate(['login'])
                
            }, error=>{
                Swal.fire('OMG...Error', error.error.message, 'error')
            })
            
        }

        // profile

        getProfile(_id): Observable<any>{
            let api = `${this.endpoint}/customers/modify/${_id}`;
            return this.http.get(api,{
                headers: this.headers
            }).pipe(
                map((res: Response)=>{
                    return res || {}
                }, Swal.fire({
                    title: "Login Success",
                    text: "Mantap, Data di update. Happy Shooping",
                    icon:"success",
                })),
                
                catchError(this.handleError)
                
                
            )
        }

        // LOGOUT

        logout(){
            let hapusToken = localStorage.removeItem('access_token');
            if(hapusToken==null){
                this.router.navigate(['home'])
            }
        }








        handleError(error:HttpErrorResponse){
            let message = '';

            if(error.error instanceof ErrorEvent){
                message =error.error.message
                
            }else{
                message = `Error code: ${error.status} \n Pesan Error: ${error.message}`;
            }
            return throwError(message);
            
      }
}