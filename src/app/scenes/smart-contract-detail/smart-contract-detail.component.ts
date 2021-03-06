import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'brace/theme/tomorrow';
import './scilla-mode';

@Component({
  selector: 'app-smart-contract-detail',
  templateUrl: './smart-contract-detail.component.html',
  styleUrls: ['./smart-contract-detail.component.scss']
})
export class SmartContractDetailComponent {
  public address: string = this.$activatedRoute.snapshot.params.address;

  public smartContract: any[] = [
    ...this.$activatedRoute.snapshot.data.smartContractInit,
    ...this.$activatedRoute.snapshot.data.smartContractState
  ];

  public smartContractCode: any = this.$activatedRoute.snapshot.data.smartContractCode;

  public smartContractColumns: string[] = [
    'vname',
    'type',
    'value'
  ];

  public constructor(
    private readonly $activatedRoute: ActivatedRoute
  ) {}
}
