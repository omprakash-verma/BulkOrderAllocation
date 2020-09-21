import { Component, OnInit } from '@angular/core';
import { Detail } from 'src/app/shared/detail.model';
import { Detailget } from 'src/app/shared/detailget.model';
import { Item } from 'src/app/shared/item.model';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'detail',
  templateUrl: './division2.component.html',
  styleUrls: ['./division2.component.scss'],
})
export class Division2Component implements OnInit {
  constructor(private service: ServiceService) {}
  detailGet: Detailget[];
  detail: Detail;

  columnDefs = [
    {
      headerName: 'Job ID',
      field: 'jobId',
      sortable: true,
      filter: true,
      hide: true,
    },
    {
      headerName: 'Job No',
      field: 'jobNo',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      resizable: true,
    },
    {
      headerName: 'Item ID',
      field: 'itemId',
      sortable: true,
      filter: true,
      hide: true,
    },

    {
      headerName: 'Item',
      field: 'itemName',
      sortable: true,
      filter: true,
      resizable: true,
    },

    {
      headerName: 'UOM ID',
      field: 'uomId',
      sortable: true,
      filter: true,
      hide: true,
    },
    {
      headerName: 'UOM',
      field: 'UOM',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'Location Id',
      field: 'LocationId',
      sortable: true,
      filter: true,
      hide: true,
    },
    {
      headerName: 'Store',
      field: 'StoreName',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Free Stock',
      field: 'FREE_STOCK',
      sortable: true,
      filter: true,
    },
    { headerName: 'Item Qty', field: 'OrderQty', sortable: true, filter: true },
    {
      headerName: 'Allocated Qty',
      field: 'allocatedQty',
      sortable: true,
      filter: true,
    },

    {
      headerName: 'Consume Qty',
      field: 'USED_QTY',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'Extra Qty',
      field: 'EXTRA_QTY',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'To Be Allocated Qty',
      field: 'ToBeAllocatedQTY',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'Allocate Qty',
      field: 'CURRENT_ALLOCATE_QTY',
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,
    },
    {
      headerName: 'Deallocate Qty',
      field: 'CURRENT_DEALLOCATE_QTY',
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,
    },
    {
      headerName: 'Issue Qty',
      field: 'issue_qty',
      sortable: true,
      filter: true,
      resizable: true,
    },

    {
      headerName: 'EDITNOTALLOWED',
      field: 'EDITNOTALLOWED',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'OrderID',
      field: 'OrderID',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'CurrentAllocateQty',
      field: 'CurrentAllocateQty',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'IsWipItm',
      field: 'IsWipItm',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'UomDecPlaces',
      field: 'UomDecPlaces',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'BaseUomId',
      field: 'BaseUomId',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'BaseUom',
      field: 'BaseUom',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'BaseUom',
      field: 'BaseUom',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'BaseUomDecPlaces',
      field: 'BaseUomDecPlaces',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'OrderId',
      field: 'OrderId',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    // {
    //   headerName: 'OrderQty',
    //   field: 'OrderQty',
    //   sortable: true,
    //   filter: true,
    //   resizable: true,
    //   hide: true,
    // },
    {
      headerName: 'AvalStock',
      field: 'AvalStock',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'TOTAL_ALLOCATED',
      field: 'TOTAL_ALLOCATED',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'RequiredQty',
      field: 'RequiredQty',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'RequiredQty1',
      field: 'RequiredQty1',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    // {
    //   headerName: 'CURRENT_ALLOCATE_QTY',
    //   field: 'CURRENT_ALLOCATE_QTY',
    //   sortable: true,
    //   filter: true,
    //   resizable: true,
    //   hide: true,
    // },
    {
      headerName: 'RequiredQty',
      field: 'RequiredQty',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    // {
    //   headerName: 'CURRENT_DEALLOCATE_QTY',
    //   field: 'CURRENT_DEALLOCATE_QTY',
    //   sortable: true,
    //   filter: true,
    //   resizable: true,
    //   hide: true,
    // },
    // {
    //   headerName: 'USED_QTY',
    //   field: 'USED_QTY',
    //   sortable: true,
    //   filter: true,
    //   resizable: true,
    //   hide: true,
    // },
    {
      headerName: 'NO_OF_LOTS',
      field: 'NO_OF_LOTS',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'FREE_STOCK_LOT',
      field: 'FREE_STOCK_LOT',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'ALLOCATED_LOT_STOCK',
      field: 'ALLOCATED_LOT_STOCK',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'ALLOW_SINGLE_VENDORLOT',
      field: 'ALLOW_SINGLE_VENDORLOT',
      sortable: true,
      filter: true,
      resizable: true,
      hide: true,
    },
  ];

  rowData;

  ngOnInit(): void {
    if (this.service.subsVar == undefined) {
      this.service.subsVar = this.service.invokeDiv2ComponentFunction.subscribe(
        (name: string) => {
          this.getGridData(
            this.service.SO_ID,
            this.service.ITEM_ID,
            this.service.JOB_ID,
            this.service.LOCATION_ID,
            this.service.STORE_ID
          );
        }
      );
    }

    if (this.service.subsVar2 == undefined) {
      this.service.subsVar2 = this.service.invokeDiv2ComponentFunction2.subscribe(
        () => {
          this.getSelectedRows(this.service.myGrid);
        }
      );
    }
  }

  async getGridData(SO_ID, ITEM_ID, JOB_ID, LOCATION_ID, STORE_ID) {
    const data = await this.service.getGrid(
      SO_ID,
      ITEM_ID,
      JOB_ID,
      LOCATION_ID,
      STORE_ID
    );
    if (data['result'] == 'no data') {
      alert(data['usrMsg']);
    } else {
      this.rowData = data['result'];
    }
  }

  getSelectedRows(myGrid) {
    console.log('Hello');
    let selectedNodes = myGrid.getSelectedNodes();
    let selectedData = selectedNodes.map((node) => node.data);
    let data = { data: { datum: selectedData } };
    console.log(`${JSON.stringify(data)}`);
    this.service.postData(`${JSON.stringify(data)}`).then();
  }

  onGridReady(myGrid) {
    console.log('yo');
    this.service.myGrid = myGrid.api;
  }
}
