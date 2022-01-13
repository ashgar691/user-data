import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { UserService } from './services/user.service';
import { User } from './interfaces/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-data';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  users$!: Observable<User[]>;
  constructor(private observer: BreakpointObserver, private userService: UserService) { }

  selectUser(user: User) {
    this.userService.addSelectedUser(user);
    
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.close();
        }
      });
  }

  ngOnInit() {
    this.users$ = this.userService.getAllUsers();
  }


  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
}
