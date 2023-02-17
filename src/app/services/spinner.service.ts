import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showSpinner() {
    this.isLoading$.next(true);
  }

  hideSpinner() {
    this.isLoading$.next(false);
  }
}
