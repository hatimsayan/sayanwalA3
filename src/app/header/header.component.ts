import { Component, OnInit } from "@angular/core";
import { Sayanwal } from "../sayanwal";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  mydetails: Sayanwal = {
    sid: 991503538,
    name: "Hatim",
    login: "sayanwal",
    campus: "Trafalgar",
    astitle: "Assignment3"
  };

  ngOnInit() {}
}
