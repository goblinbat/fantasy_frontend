import { Component, OnInit, Inject } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css']
})
export class viewModal implements OnInit {
  postId
  data
  story = false
  campaign = false
  creature = false
  
  constructor (private route: ActivatedRoute, private posst: PostService, private _location: Location) {}

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get("id");
    this.posst.getPost(this.postId).subscribe(res => {
      this.data = res; 
      console.log(this.data)
      if (this.data.type === 'campaign') {
        this.story = false;
        this.campaign = true;
        this.creature = false;
      } else if (this.data.type === 'story') {
        this.story = true;
        this.campaign = false;
        this.creature = false;
      } else {
        this.story = false;
        this.campaign = false;
        this.creature = true;
      };
    });
  };

  goBack() {
    this._location.back()
  }

  editPost() {
    console.log('edit the post')
  }

}
