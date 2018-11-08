import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { ClassList } from '@zilliqa/core';
import { LoadingService } from '@zilliqa/foundation';
import { merge } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class')
  public readonly classList: ClassList = new ClassList([
    'mat-app-background',
    'mat-typography'
  ]);

  public constructor(
    private readonly $router: Router,

    private readonly $loading: LoadingService
  ) {}

  /** @implements OnInit */
  public ngOnInit(): void {
    this.$loading.register(
      this.$router.events.pipe(filter((event) => event instanceof NavigationStart)),

      merge(
        this.$router.events.pipe(filter((event) => event instanceof NavigationEnd)),
        this.$router.events.pipe(filter((event) => event instanceof NavigationCancel)),
        this.$router.events.pipe(filter((event) => event instanceof NavigationError))
      )
    );
  }
}
