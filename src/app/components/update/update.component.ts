import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  post ;
  get id() {
    return this.route.snapshot.params.id;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: ServiceService
  ) { }
  ngOnInit(): void {
    this.getPost();

  }

  getPost() {
    this.serviceService.getPostById(this.id)
    .subscribe(response => {
      this.post = response;
    });
  }

  update() {
    this.serviceService.updatePost(this.id, this.post)
    .subscribe(response => {
      console.log(response);
      Swal.fire(
        'Update Successful!',
        `Your Post number ${this.id} has been updated.`,
        'success'
      );
    });
  }


}
