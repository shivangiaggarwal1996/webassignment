import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch/batch.service'
import {batch} from '../batch/batchtsconfig'
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

  batchList:batch[]
  constructor(private batchApi:BatchService)
  {
      this.batchApi.getBatchData().subscribe((event:any)=>
    {
      this.batchList=event
    })
  }

}
