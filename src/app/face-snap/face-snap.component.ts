import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  id!: number;
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  isSnaped!: boolean;
  buttonText!: string;
  snaped!: string;
  notSnaped!: string;

  constructor(
    private faceSnapService: FaceSnapsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isSnaped = false;
    this.snaped = 'Oops, un snap !';
    this.notSnaped = 'Oh, snap !';
    this.buttonText = this.notSnaped;
  }

  onAddSnap() {
    if (this.isSnaped === false) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.isSnaped = true;
      this.buttonText = this.snaped;
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.isSnaped = false;
      this.buttonText = this.notSnaped;
    }
  }

  onViewFaceSnap() {
    console.log(this);
    this.router.navigateByUrl('facesnaps/' + this.faceSnap.id);
  }
}
