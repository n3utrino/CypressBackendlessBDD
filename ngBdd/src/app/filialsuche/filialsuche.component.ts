import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
  selector: 'app-filialsuche',
  templateUrl: './filialsuche.component.html',
  styleUrls: ['./filialsuche.component.scss']
})
export class FilialsucheComponent implements OnInit {

  public filialen: any[] = [{name: "City", pilot: true}];
  public selectedFiliale: any = this.filialen[0];

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient
      .get("filiale/12", {})
      .pipe(
        catchError(this.handleError("sucheNA"))
      )
      .subscribe((response) => {
        this.filialen = response as any[];
      });

  }

  private handleError(fehlerKey: string) {
    return (error: any, caught: any) => {

      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
        if (error.status > 499) {
          this.router.navigateByUrl("/fehlerseite?msg=" + fehlerKey);
        }

      }
      return throwError(
        'Something bad happened; please try again later.');
    };
  }

  public select(filiale: any) {
    this.selectedFiliale = filiale;
  }

  public onWeiter() {
    if (!this.selectedFiliale.pilot) {
      this.router.navigateByUrl("/bestaetigung?noPilot=1");
    } else {
      this.router.navigateByUrl("/terminauswahl");
    }
  }

}
