import { Component, OnInit } from '@angular/core';
import { AuthnService } from 'src/app/services/authn.service';
import { ApiService } from './../../services/api.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { AuthService } from './../../services/auth.service';
import { AppStoreService } from 'src/app/app-store.service';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.scss']
})
export class AppDashboardComponent implements OnInit {
  public users: any[] = [];
  public role: string = '';
  public fullName: string = '';

  constructor(
    private authn: AuthnService,
    private api: ApiService,
    private auth: AuthService,
    private userStore: UserStoreService,
    private apps: AppStoreService
  ) {}

  ngOnInit(): void {
    // this.api.getUsers().subscribe(res => {
    //   this.users = res;
    // });

    // this.userStore.getFullNameFromStore().subscribe(val => {
    //   const fullNameFromToken = this.auth.getfullNameFromToken();
    //   this.fullName = val || fullNameFromToken || '';
    // });

    // this.userStore.getRoleFromStore().subscribe(val => {
    //   const roleFromToken = this.auth.getRoleFromToken();
    //   this.role = val || roleFromToken || '';
    // });
  }

  logout(){
    this.authn.signOut();
  }
}
