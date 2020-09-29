import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { GroupCellRenderer } from 'ag-grid-community';
import { Subscription } from 'rxjs/internal/Subscription';
import { timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Detail } from './detail.model';
import { Detailget } from './detailget.model';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class ServiceService {
  detail: Detail;
  detailGet: Detailget[];

  SO_ID: string;
  ITEM_GROUP_ID: string;
  SUMMARY_ITEM_ID: string;
  ITEM_ID: string;
  JOB_ID: string;
  LOCATION_ID: string;
  STORE_ID: string;
  myGrid;
  orderList: any;
  isShipped: number;
  isAllocateQtyValid = true;
  isDeallocateQtyValid = true;

  invokeDiv2ComponentFunction = new EventEmitter();
  subsVar: Subscription;

  invokeDiv2ComponentFunction2 = new EventEmitter();
  subsVar2: Subscription;

  invokeDiv1ComponentFunction = new EventEmitter();
  subsVar3: Subscription;

  constructor(private http: HttpClient) {}

  onDiv1ComponentButtonClick() {
    this.invokeDiv2ComponentFunction.emit();
  }

  onDiv1ComponentButton2Click() {
    this.invokeDiv2ComponentFunction2.emit();
  }

  onDiv2CellValuChange() {
    this.invokeDiv1ComponentFunction.emit();
  }

  getDropdownData() {
    return this.http
      .post(environment.apiURL + 'GetDropDownValue', {})
      .toPromise();
  }

  getJobOnOrder(SO_ID) {
    return this.http
      .post(environment.apiURL + 'GetDropDownValue', {
        p_controltype: 'job',
        p_orderID: SO_ID,
      })
      .toPromise();
  }

  // getItemOnOrder(SO_ID) {
  //   return this.http
  //     .post(environment.apiURL + 'GetDropDownValue', {
  //       p_controltype: 'item',
  //       p_orderID: SO_ID,

  //     })
  //     .toPromise();
  // }

  getSummaryItemOnItemGroup(SO_ID, ITEM_GROUP_ID) {
    return this.http
      .post(environment.apiURL + 'GetDropDownValue', {
        p_controltype: 'SUMMARY_ITEM',
        p_itemgrptypeID: ITEM_GROUP_ID,
        p_orderID: SO_ID,
      })
      .toPromise();
  }

  getItemOnSummaryItem(SO_ID, SUMMARY_ITEM_ID) {
    console.log(SUMMARY_ITEM_ID);
    return this.http
      .post(environment.apiURL + 'GetDropDownValue', {
        p_controltype: 'ITEM',
        p_summary_itemID: SUMMARY_ITEM_ID,
        p_orderID: SO_ID,
      })
      .toPromise();
  }

  getStoreOnLoc(LOCATION_ID) {
    return this.http
      .post(environment.apiURL + 'GetDropDownValue', {
        p_controltype: 'STORE',
        p_locationID: LOCATION_ID,
      })
      .toPromise();
  }

  getOrder() {
    return this.http
      .post(environment.apiURL + 'GetDropDownValue', {
        p_controltype: 'order',
      })
      .toPromise();
  }

  getGrid(
    SO_ID,
    ITEM_GROUP_ID,
    SUMMARY_ITEM_ID,
    ITEM_ID,
    JOB_ID,
    LOCATION_ID,
    STORE_ID,
    isShipped
  ) {
    return this.http
      .post(environment.apiURL + 'GetValue', {
        p_orderID: SO_ID,
        p_itemGroupID: ITEM_GROUP_ID,
        p_summaryItemID: SUMMARY_ITEM_ID,
        p_itemID: ITEM_ID,
        p_jobID: JOB_ID,
        p_locationID: LOCATION_ID,
        p_storeID: STORE_ID,
        p_IsShipped: isShipped,
      })
      .toPromise();
  }

  postData(body) {
    // body = JSON.stringify(body);
    return this.http
      .post(environment.apiURL + 'SaveValue', { datum: body })
      .toPromise();
  }
}
