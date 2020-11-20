import {Component, OnInit} from '@angular/core';
import {store} from "../store";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bestaetigung',
  templateUrl: './bestaetigung.component.html',
  styleUrls: ['./bestaetigung.component.scss']
})
export class BestaetigungComponent implements OnInit {


  public noPilot = false;

  constructor(private activeRoute: ActivatedRoute) {
  }

  public customer: { title: string, nachname: string } = {title: "Herr", nachname: "Meier"};

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((map) => {
      const noPilot = map.get("noPilot") as string;
      this.noPilot = noPilot === "1"

    });
    this.customer = store.context;
  }

}
