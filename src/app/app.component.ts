import { Component, OnInit } from '@angular/core';
import { ServiceService } from './shared/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private service: ServiceService) {}

  isAllocateQtyValid: boolean;
  isDeallocateQtyValid: boolean;

  ngOnInit() {
    this.isAllocateQtyValid = this.service.isAllocateQtyValid;
    this.isDeallocateQtyValid = this.service.isDeallocateQtyValid;
  }
}
