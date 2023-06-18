import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HighlightAutoResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-modal-helper',
  templateUrl: './modal-helper.component.html',
  styleUrls: ['./modal-helper.component.css']
})
export class ModalHelperComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age'];
  response: HighlightAutoResult = null!;
  jsonCodeInsert = 
  "    {\n" +
  "        \"id\":1,\n" +
  "        \"name\":\"John Doe\",\n" +
  "        \"age\": 25\n" +
  "    }"
  jsonCodeMultipleInsert = "[\n" +
  "        {\n" +
  "            \"id\":1,\n" +
  "            \"name\":\"Jane Doe\",\n" +
  "            \"age\": 40\n" +
  "        },\n" +
  "        {\n" +
  "            \"id\":2,\n" +
  "            \"name\":\"John Doe\",\n" +
  "            \"age\": 40\n" +
  "        }\n" +
  "    ]"
  jsonCodeUpdateExample = 
  "    {\n" +
  "        \"name\":\"NOME ATUALIZADO\"\n" +
  "    }"
  ELEMENT_DATA = [
    {id: 1, name: 'Jane Doe', age: 40},
    {id: 2, name: 'John Doe', age: 40},
    {id: 3, name: 'laxmi', age: 24},
  ];
  firstTable = new MatTableDataSource(this.ELEMENT_DATA);
  ELEMENT_DATA_AFTER_UPDATE = [
    {id: 1, name: 'NOME ATUALIZADO', age: 40},
    {id: 2, name: 'NOME ATUALIZADO', age: 40},
    {id: 3, name: 'laxmi', age: 24},
  ];
  secondTable = new MatTableDataSource(this.ELEMENT_DATA_AFTER_UPDATE);
  urlSingleInsert = "https://endereco-deploy/exec?actionRequest=singleInsertOnXPTO"
  urlMultipleInsert= "https://endereco-deploy/exec?actionRequest=multipleInsertOnXPTO"
  urlDeleteOneSingleParameter = "https://endereco-deploy/exec?actionRequest=deleteOne&name=johnDoe"
  urlDeleteOne = "https://endereco-deploy/exec?actionRequest=deleteOne&name=johnDoe&age=25"
  urlUpdateByQuery = "https://endereco-deploy/exec?actionRequest=updateByquery&age=40"
  constructor() { }

  ngOnInit(): void {
  }
  onHighlight(e: HighlightAutoResult) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      secondBest: '{...}',
      value: '{...}',
    };
  }
}
