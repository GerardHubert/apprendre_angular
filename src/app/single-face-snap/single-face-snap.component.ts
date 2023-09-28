import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

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
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    /**
     * snapshot = capture d'une variable, ici le parametre de l'url
     * qu'on récupère grâce à la classe ActivatedRoute
     */

    //le '+' devant la valeur permet de changer le type string (type de la route) en number (typage fixé de l'id)
    const id: number = +this.activatedRoute.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getSnapById(id);
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
}
