import { Component, OnInit } from "@angular/core";
import { MYBOOKS } from "../mybooks";

@Component({
  selector: "app-sayanwal",
  templateUrl: "./sayanwal.component.html",
  styleUrls: ["./sayanwal.component.css"]
})
export class SayanwalComponent implements OnInit {
  constructor() {}

  mybooks = MYBOOKS;
  ngAfterViewInit() {
    var divs = document.getElementById("bookdetails");
    var divi = document.getElementById("bookimage");

    divs.innerHTML =
      "<ul> <li>Book Name: " +
      this.mybooks[0].bkname +
      "</li>" +
      "<li>Book Author: " +
      this.mybooks[0].bkauthor +
      "</li>" +
      "<li>Book Genre: " +
      this.mybooks[0].bkgenre +
      "</li>" +
      "<li>Published Year: " +
      this.mybooks[0].pubyear +
      "</li></ul>";

    divi.innerHTML =
      '<img src="' + this.mybooks[0].picture + '" height = "250px"/>';
    /* end for */
  }

  onClickMe(index) {
    var divs = document.getElementById("bookdetails");
    var divi = document.getElementById("bookimage");
    divs.innerHTML =
      "<ul> <li>Book Name: " +
      this.mybooks[index].bkname +
      "</li>" +
      "<li>Book Author: " +
      this.mybooks[index].bkauthor +
      "</li>" +
      "<li>Book Genre: " +
      this.mybooks[index].bkgenre +
      "</li>" +
      "<li>Published Year: " +
      this.mybooks[index].pubyear +
      "</li></ul>";

    divi.innerHTML =
      '<img src="' + this.mybooks[index].picture + '" height = "250px"/>';
  }

  ngOnInit() {}
}
