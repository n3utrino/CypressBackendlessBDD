import {Component, OnInit} from '@angular/core';
import {catchError} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-terminauswahl',
  templateUrl: './terminauswahl.component.html',
  styleUrls: ['./terminauswahl.component.scss']
})
export class TerminauswahlComponent implements OnInit {

  public meldung = ""

  public termine: any[] = [];
  public selectedId: number = -1;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.httpClient
      .get("dtvifa/slots", {responseType: "json"})
      .pipe(
        catchError(this.handleError("dtvIfaNA"))
      )
      .subscribe((response) => {
        this.termine = response as any[];
      });
  }

  public weiter() {
    this.httpClient
      .get("dtvifa/buchen/" + this.selectedId, {})
      .pipe(
        catchError(this.handleError("dtvIfaNA"))
      )
      .subscribe((response) => {
        this.router.navigateByUrl("bestaetigung")
      });

  }

  public nextWeek() {

    this.httpClient
      .get("dtvifa/week/next", {})
      .pipe(
        catchError(this.handleError("dtvIfaNA"))
      )
      .subscribe((response) => {
        console.log("Dingdong.")
      });

  }

  public select(id: number) {
    this.selectedId = id;
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
        } else if (error.status == 400 || error.status == 401) {
          const errorResp = error as HttpErrorResponse;
          console.log(error);
          this.meldung = errorResp.error.text;
        }

      }
      return throwError(
        'Something bad happened; please try again later.');
    };
  }
}
