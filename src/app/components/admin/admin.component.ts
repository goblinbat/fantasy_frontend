import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users
  logId
  editable = false
  which = 0
  editName = ''
  editBio = ''

  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
    this.user.getAllUsers().subscribe(res => this.users = res);
    this.logId = Number(localStorage.getItem('userId'));
    if (this.logId !== 1) {
      this.router.navigate(['/splash/explore'])
    }
  }

  makeEditable(use) {
    this.which = use.id;
    this.editName = use.username;
    this.editBio = use.profile;
    this.editable = true
    console.log(this.editName, this.editBio)
  }

  saveChanges(id, name, bio) {
    let edit = { user: {
      username : name,
      profile: bio
    }}
    this.user.editUser(id, edit).subscribe(res => {
      this.cancel();
      window.location.reload()
    })
  }

  cancel() {
    this.editable = false;
    this.which = 0;
  }

  delete(id) {
    this.user.deleteUser(id).subscribe(res => window.location.reload())
  }

}