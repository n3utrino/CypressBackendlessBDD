import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-fehlerseite',
  templateUrl: './fehlerseite.component.html',
  styleUrls: ['./fehlerseite.component.scss']
})
export class FehlerseiteComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
  }

  private meldungen: { [key: string]: string } = {
    "sucheNA": "Tut uns leid Filialsuche nicht verfügbar, rufen Sie an.",
    "dtvIfaNA": "Tut uns leid DtvIfa nicht verfügbar, rufen Sie an."
  };

  private message = "";

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((map) => {
      const msg = map.get("msg") as string;
      if (msg) {
        this.message = this.meldungen[msg];
      }

    });
  }

  public showMessage(): string {
    return this.message;
  }

}
