import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Detailget } from 'src/app/shared/detailget.model';
import { Item } from 'src/app/shared/item.model';
import { Job } from 'src/app/shared/job.model';
import { Order } from 'src/app/shared/order.model';
import { ServiceService } from 'src/app/shared/service.service';
import { Store } from 'src/app/shared/store.model';
import { Location } from 'src/app/shared/location.model';
declare var $: any;

@Component({
  selector: 'master',
  templateUrl: './division1.component.html',
  styleUrls: ['./division1.component.scss'],
})
export class Division1Component implements OnInit {
  constructor(private service: ServiceService) {}

  orderList: Order[];
  itemList: Item[];
  jobList: Job[];
  itemGroupList: Item[];
  summaryItemList: Item[];
  locationList: Location[];
  storeList: any;
  detailGet: Detailget[];

  SO_ID: string;
  ITEM_ID: string;
  JOB_ID: string;
  LOCATION_ID: string;
  STORE_ID: string;
  ITEM_GROUP_ID: string;
  SUMMARY_ITEM_ID: string;
  isShipped;
  isValid = true;
  isAllocateQtyValid: boolean;
  isDeallocateQtyValid: boolean;

  ngOnInit(): void {
    this.initialData();
    this.isAllocateQtyValid = this.service.isAllocateQtyValid;
    this.isDeallocateQtyValid = this.service.isDeallocateQtyValid;
    if (this.service.subsVar3 == undefined) {
      this.service.subsVar3 = this.service.invokeDiv1ComponentFunction.subscribe(
        () => {
          this.onCellValueChange();
        }
      );
    }
  }

  onCellValueChange() {
    console.log('Cell value change');
    this.isAllocateQtyValid = this.service.isAllocateQtyValid;
    this.isDeallocateQtyValid = this.service.isDeallocateQtyValid;
  }

  initialData() {
    this.service.getDropdownData().then((data) => {
      this.orderList = data['order'];
      this.jobList = data['job'];
      this.itemGroupList = data['ItmGroups'];
      this.locationList = data['location'];
      this.storeList = data['store'];
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      }, 1);
    });
  }

  onOrderChange(SO_ID) {
    this.service.getJobOnOrder(SO_ID).then((data) => {
      this.jobList = data['job'];
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      }, 1);
    });
  }

  onItemGroupChange(SO_ID, ITEM_GROUP_ID) {
    this.service
      .getSummaryItemOnItemGroup(SO_ID, ITEM_GROUP_ID)
      .then((data) => {
        this.summaryItemList = data['SummaryList'];
        setTimeout(() => {
          $('.selectpicker').selectpicker('refresh');
        }, 1);
      });
  }

  onSummaryItemChange(SO_ID, SUMMARY_ITEM_ID) {
    console.log(SUMMARY_ITEM_ID);
    this.service.getItemOnSummaryItem(SO_ID, SUMMARY_ITEM_ID).then((data) => {
      this.itemList = data['result'];
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      }, 1);
    });
  }

  validateForm() {
    this.isValid = true;
    if (
      this.service.SO_ID == undefined &&
      this.service.ITEM_ID == undefined &&
      this.service.JOB_ID == undefined
    ) {
      this.isValid = false;
    }
    return this.isValid;
  }

  //Problem Here
  // onLocationChange(LOCATION_ID) {
  //   this.service
  //     .getStoreOnLoc(LOCATION_ID)
  //     .then((data) => (this.storeList = data['result']));
  //   console.log(this.storeList);
  // }

  onSubmit() {
    console.log(this.SO_ID);
    this.isShipped = this.isShipped ? 1 : 0;
    this.service.SO_ID = this.SO_ID;
    this.service.ITEM_ID = this.ITEM_ID;
    this.service.JOB_ID = this.JOB_ID;
    this.service.LOCATION_ID = this.LOCATION_ID;
    this.service.STORE_ID = this.STORE_ID;
    this.service.isShipped = this.isShipped;
    console.log(this.isValid);
    if (this.validateForm()) {
      this.service.onDiv1ComponentButtonClick();
    }
    console.log(this.isValid);
  }

  onProceed() {
    this.service.onDiv1ComponentButton2Click();
  }
}
