import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [AsyncPipe],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  user: Observable<Users | undefined>;

  constructor(){
    this.user = this.usersService.getUserById(
      this.route.snapshot.paramMap.get("id")
    );
  }

  myFunc(){
    console.log(this.route.snapshot.paramMap.get("id"))
  }
}
