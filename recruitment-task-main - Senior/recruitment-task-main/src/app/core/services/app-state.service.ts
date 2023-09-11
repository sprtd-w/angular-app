import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostModel } from 'src/app/model/post.model';
import { StateKeysEnum } from '../../model';

interface State {
  [StateKeysEnum.posts]: PostModel[];
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private initialState: State = {
    [StateKeysEnum.posts]: []
  };

  private stateSubject: BehaviorSubject<State> = new BehaviorSubject<State>(this.initialState);
  state$: Observable<State> = this.stateSubject.asObservable();

  constructor() {}

  protected get getData(): State {
    return this.stateSubject.getValue();
  }

  protected setData(propName: string, data: any[]): void {
    this.stateSubject.next({ ...this.stateSubject.getValue(), [propName]: data });
  }
}
