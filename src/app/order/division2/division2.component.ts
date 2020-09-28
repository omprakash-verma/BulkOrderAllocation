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

  isAllocateQtyValid = true;
  isDeallocateQtyValid = true;

  columnDefs = [
    {
      headerName: 'EDITNOTALLOWED',
      field: 'EDITNOTALLOWED',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'OrderItmID',
      field: 'OrderItmID',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'Job ID',
      field: 'jobId',
      sortable: true,
      hide: true,
    },
    {
      headerName: 'Job No',
      field: 'jobNo',
      sortable: true,
      resizable: true,
      width: '150px',
      cellStyle: { 'font-size': 'x-small' },
      class: 'myField',
      checkboxSelection: true,
    },
    {
      headerName: 'Item ID',
      field: 'itemId',
      sortable: true,
      hide: true,
    },

    {
      headerName: 'Item',
      field: 'itemName',
      sortable: true,
      resizable: true,
      width: '180px',
      class: 'myField',
      cellStyle: { 'font-size': 'x-small' },
    },

    {
      headerName: 'UOM ID',
      field: 'uomId',
      sortable: true,
      hide: true,
    },
    {
      headerName: 'UOM',
      field: 'UOM',
      sortable: true,
      resizable: true,
      width: '90px',
      cellStyle: { 'font-size': 'x-small' },
      class: 'myField',
    },
    {
      headerName: 'Location Id',
      field: 'LocationId',
      sortable: true,
      hide: true,
    },
    {
      headerName: 'Store',
      field: 'StoreName',
      sortable: true,
      width: '220px',
      resizable: true,
      cellStyle: { 'font-size': 'x-small' },
    },
    {
      headerName: 'CurrentAllocateQty',
      field: 'CurrentAllocateQty',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'IsWipItm',
      field: 'IsWipItm',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'UomDecPlaces',
      field: 'UomDecPlaces',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'BaseUomId',
      field: 'BaseUomId',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'BaseUom',
      field: 'BaseUom',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'BaseUomDecPlaces',
      field: 'BaseUomDecPlaces',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'SO_DT_ID',
      field: 'SO_DT_ID',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'OrderQty',
      field: 'OrderQty',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'AvalStock',
      field: 'AvalStock',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'Allocated Qty',
      field: 'allocatedQty',

      width: '100px',
      resizable: true,
      cellStyle: {
        textAlign: 'right',
        'font-size': 'x-small',
      },
    },
    {
      headerName: 'Free Stock',
      field: 'FREE_STOCK',
      sortable: true,
      width: '100px',
      resizable: true,
      cellStyle: {
        textAlign: 'right',
        'font-size': 'x-small',
      },
    },
    {
      headerName: 'TOTAL_ALLOCATED',
      field: 'TOTAL_ALLOCATED',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'To Be Allocated Qty',
      field: 'ToBeAllocatedQTY',
      sortable: true,
      resizable: true,
      width: '100px',
      cellStyle: {
        textAlign: 'right',
        'font-size': 'x-small',
      },
    },
    {
      headerName: 'RequiredQty',
      field: 'RequiredQty',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'RequiredQty1',
      field: 'RequiredQty1',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'Allocate Qty',
      field: 'CURRENT_ALLOCATE_QTY',
      sortable: true,
      resizable: true,
      editable: true,
      width: '100px',
      cellStyle: {
        textAlign: 'right',
        'font-size': 'x-small',
      },
    },
    {
      headerName: 'Deallocate Qty',
      field: 'CURRENT_DEALLOCATE_QTY',
      sortable: true,
      resizable: true,
      editable: true,
      width: '100px',
      cellStyle: {
        textAlign: 'right',
        'font-size': 'x-small',
      },
    },
    {
      headerName: 'Issue Qty',
      field: 'issue_qty',
      sortable: true,
      resizable: true,
      width: '100px',
      cellStyle: {
        textAlign: 'right',
        'font-size': 'x-small',
      },
    },
    {
      headerName: 'Consume Qty',
      field: 'USED_QTY',
      sortable: true,
      resizable: true,
      width: '100px',
      cellStyle: {
        textAlign: 'right',
        'font-size': 'x-small',
      },
    },
    {
      headerName: 'Extra Qty',
      field: 'EXTRA_QTY',
      sortable: true,
      resizable: true,
      width: '100px',
      cellStyle: {
        textAlign: 'right',
        'font-size': 'x-small',
      },
    },
    {
      headerName: 'NO_OF_LOTS',
      field: 'NO_OF_LOTS',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'FREE_STOCK_LOT',
      field: 'FREE_STOCK_LOT',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'ALLOCATED_LOT_STOCK',
      field: 'ALLOCATED_LOT_STOCK',
      sortable: true,
      resizable: true,
      hide: true,
    },
    {
      headerName: 'ALLOW_SINGLE_VENDORLOT',
      field: 'ALLOW_SINGLE_VENDORLOT',
      sortable: true,
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
            this.service.ITEM_GROUP_ID,
            this.service.SUMMARY_ITEM_ID,
            this.service.JOB_ID,
            this.service.LOCATION_ID,
            this.service.STORE_ID,
            this.service.isShipped
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

  async getGridData(
    SO_ID,
    ITEM_GROUP_ID,
    SUMMARY_ITEM_ID,
    ITEM_ID,
    JOB_ID,
    LOCATION_ID,
    STORE_ID,
    isChecked
  ) {
    const data = await this.service.getGrid(
      SO_ID,
      ITEM_ID,
      ITEM_GROUP_ID,
      SUMMARY_ITEM_ID,
      JOB_ID,
      LOCATION_ID,
      STORE_ID,
      isChecked
    );
    if (data['result'] == 'no data') {
      alert('Select Order!');
    } else {
      this.rowData = data['result'];
      console.log(data);
    }
  }

  getSelectedRows(myGrid) {
    let selectedNodes = myGrid.getSelectedNodes();
    let selectedData = selectedNodes.map((node) => node.data);
    if (selectedData.length != 0) {
      let dataVal = `{"data":{"datum": ${JSON.stringify(selectedData)}}}`;
      console.log(dataVal);
      this.service
        .postData(dataVal)
        .then((data) => (this.rowData = data['result']));
      this.getGridData(
        this.service.SO_ID,
        this.service.ITEM_ID,
        this.service.ITEM_GROUP_ID,
        this.service.SUMMARY_ITEM_ID,
        this.service.JOB_ID,
        this.service.LOCATION_ID,
        this.service.STORE_ID,
        this.service.isShipped
      );
    }
  }

  onGridReady(myGrid) {
    this.service.myGrid = myGrid.api;
  }

  flagForAllocateQty = 0;
  flagForDeallocateQty = 0;
  onCellValueChanged(params) {
    if (params.colDef.headerName == 'Allocate Qty') {
      if (
        Number(params.value) > Number(params.data.FREE_STOCK) ||
        Number(params.value) > Number(params.data.ToBeAllocatedQTY)
      ) {
        this.flagForAllocateQty = 1;
        params.node.setDataValue('CURRENT_ALLOCATE_QTY', params.oldValue);
        this.isAllocateQtyValid = false;
        this.service.isAllocateQtyValid = this.isAllocateQtyValid;
      } else {
        if (this.flagForAllocateQty == 0) {
          params.node.setDataValue(
            'allocatedQty',
            Number(params.data.allocatedQty) + Number(params.value)
          );
          params.node.setDataValue(
            'FREE_STOCK',
            Number(params.data.FREE_STOCK) - Number(params.value)
          );
          params.node.setDataValue(
            'ToBeAllocatedQTY',
            Number(params.data.ToBeAllocatedQTY) - Number(params.value)
          );
          this.isAllocateQtyValid = true;
          this.service.isAllocateQtyValid = this.isAllocateQtyValid;
        } else {
          this.flagForAllocateQty = 0;
        }
      }
    } else if (params.colDef.headerName == 'Deallocate Qty') {
      if (Number(params.value) > Number(params.data.allocatedQty)) {
        this.flagForDeallocateQty = 1;
        params.node.setDataValue('CURRENT_DEALLOCATE_QTY', params.oldValue);
        this.isDeallocateQtyValid = false;
        this.service.isDeallocateQtyValid = this.isDeallocateQtyValid;
      } else {
        if (this.flagForDeallocateQty == 0) {
          params.node.setDataValue(
            'allocatedQty',
            params.data.allocatedQty - Number(params.value)
          );
          this.isDeallocateQtyValid = true;
          this.service.isDeallocateQtyValid = this.isDeallocateQtyValid;
        } else {
          this.flagForDeallocateQty = 0;
        }
      }
    }

    this.service.onDiv2CellValuChange();
  }
}
