import { Component, OnInit,Injector } from '@angular/core';
import { AppComponentBase } from 'src/app/helpers/AppComponentBase';
// constructor(injector: Injector) {super(injector);}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {super(injector);}

  ngOnInit(): void {
  }

}
