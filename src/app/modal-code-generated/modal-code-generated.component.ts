import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HighlightLoader, HighlightAutoResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-modal-code-generated',
  templateUrl: './modal-code-generated.component.html',
  styleUrls: ['./modal-code-generated.component.css'],
})
export class ModalCodeGeneratedComponent implements OnInit {
  response: HighlightAutoResult = null!;
  codes = `function myFunction() {
    document.getElementById("demo1").innerHTML = "Test 1!";
    document.getElementById("demo2").innerHTML = "Test 2!";
  }`;
  codeGenerated:string = null!
  constructor(@Inject(MAT_DIALOG_DATA) public code:string,
  private hljsLoader: HighlightLoader){
    this.codeGenerated = code
  }
  onHighlight(e: HighlightAutoResult) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      secondBest: '{...}',
      value: '{...}',
    };
  }
  ngOnInit(): void {
  }

}
