import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { UsersService } from '../users-service';
import { Users } from '../users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  private usersService = inject(UsersService);
  usersListFromFetch: Users[] = [];
  usersListFromHttpClient: Observable<Users[]>;
  changeDetectorRef = inject(ChangeDetectorRef);
  backendUrl = "http://localhost:3000"

  constructor(){
    this.usersService.getAllUsersWithFetch().then((usersList: Users[]) =>{
      this.usersListFromFetch = usersList;
      this.changeDetectorRef.markForCheck();
    });
    this.usersListFromHttpClient = this.usersService.getAllUsers();
  }

  printFetchList(){
    this.usersListFromFetch.forEach((element)=>{
      console.log(element);
    })
  }

  printHttpList(){
    this.usersListFromHttpClient.forEach((element) =>{
      console.log(element);
    });
  }
}
