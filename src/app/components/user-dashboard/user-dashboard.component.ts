import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { UserDeatailsComponent } from '../user-deatails/user-deatails.component';

export interface UserTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  user$!: Observable<any>;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.user$ = this.userService.selectedUser$;

  }

}
