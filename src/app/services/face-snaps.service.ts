// importation de la classe Injectable
import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

// le décorateur injectable permet de déclarer la classe comme un service
// on configuration à la racine du projet pour être sûr qu'il n'y a qu'une seule instance
@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  // pas de méthode ngOnInit dans un service,
  // alors on déclare et on isntancie dans la même expression
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Jean Edmond',
      description: 'Petite visite du Louvre',
      createdDate: new Date(),
      snaps: 8,
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/11/22/19/19/louvre-5767708_960_720.jpg',
      location: 'Paris',
    },
    {
      id: 2,
      title: 'Jean Judes',
      description: 'Un excellent week end au Mont Saint-Michel',
      createdDate: new Date(),
      snaps: 8,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/11/16/17/12/normandy-1046056_960_720.jpg',
      location: 'Bretagne',
    },
    {
      id: 3,
      title: 'Emma de la Villardière',
      description: 'Randonnée de la mort qui tue !',
      createdDate: new Date(),
      snaps: 8,
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/11/22/22/21/adventure-1850912_960_720.jpg',
    },
    {
      id: 4,
      title: 'Jean Jacques Rousseau',
      description: 'Week end tranquiloui en Alsace',
      createdDate: new Date(),
      snaps: 12,
      imageUrl:
        'https://cdn.pixabay.com/photo/2022/06/18/21/40/strasbourg-7270721_960_720.jpg',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getSnapById(id: number): FaceSnap {
    const faceSnap = this.faceSnaps.find((item) => item.id === id);
    if (faceSnap) {
      return faceSnap;
    } else {
      throw new Error('FaceSnap non trouvé !');
    }
  }

  // utilisation d'un type personnalisé (literals) pour limiter les arguments acceptés;
  // le type est ainsi limité et la méthode n'accepte pas n'importe quel string
  snapFaceSnapById(id: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getSnapById(id);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
