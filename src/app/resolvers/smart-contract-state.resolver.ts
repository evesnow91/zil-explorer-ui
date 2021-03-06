import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ZilliqaService } from '@zilliqa/core';
import { Observable } from 'rxjs';

@Injectable()
export class SmartContractStateResolver implements Resolve<any> {
  public constructor(
    private readonly $zilliqa: ZilliqaService
  ) {}

  /** @implements Resolve */
  public resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.$zilliqa.getSmartContractState(route.params.address);
  }
}
