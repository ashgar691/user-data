import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-deatails',
  templateUrl: './user-deatails.component.html',
  styleUrls: ['./user-deatails.component.scss']
})
export class UserDeatailsComponent implements OnInit {

  @Input() userObj!:User;
  
  constructor(private user: UserService) { }

  ngOnInit(): void {
  }

}
