import { AuthService } from './../../services/auth.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { UserStoreService } from 'src/app/services/user-store.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public users:any = [];
  public role!:string;

  public FirstName : string = "";
  constructor(private api : ApiService, private auth: AuthService, private userStore: UserStoreService) { }

  ngOnInit() {
    this.api.getUsers()
    .subscribe(res=>{
    this.users = res;
    });

    this.userStore['getFirstNameFromStore']()
    .subscribe((val: any)=>{
      const FirstNameFromToken = this.auth.getFirstNameFromToken();
      this.FirstName = val || FirstNameFromToken
    });

    this.userStore.getRoleFromStore()
    .subscribe(val=>{
      const roleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleFromToken;
    })
  }

  logout(){
    this.auth.signOut();
  }

}