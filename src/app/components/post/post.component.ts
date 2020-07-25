import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post;
  photo;
  get id() {
    return this.route.snapshot.params.id;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: ServiceService
  ) { }

  ngOnInit(): void {
    console.log(this.id);
    this.getPost();
  }

  delete() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.deletePost();
        this.router.navigate(['/posts']);
      }
    });
  }

  getPost() {
    this.serviceService.getPostById(this.id)
    .subscribe(response => {
      this.post = response;
    });
    this.getPhoto();
  }

  getPhoto(){
    this.serviceService.getPhoto(this.id)
    .subscribe((response: any) => {
      this.photo = response.url;
    });
  }

  deletePost(){
    this.serviceService.deletePost(5000)
    .subscribe((response: any) => {
      console.log(response);
      Swal.fire(
        'Deleted!',
        'Your Post has been deleted.',
        'success'
      );
    });
  }

}
