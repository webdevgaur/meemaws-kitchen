import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private db: AngularFirestore) { }

  createComment(comment: Post) {
    const commentData = JSON.parse(JSON.stringify(comment));
    return this.db.collection('comments').add(commentData); 
  }

}
