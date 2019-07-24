import { Component, OnInit } from "@angular/core";
import { Sayanwal } from "../sayanwal";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  constructor() {}

  myDetails: Sayanwal = {
    sid: 991503538,
    name: "Hatim",
    login: "sayanwal",
    campus: "Trafalgar",
    astitle: "Assignment3"
  };

  ngOnInit() {}
}
