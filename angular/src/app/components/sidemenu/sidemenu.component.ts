import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Pages } from 'src/app/enums/pages';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from '@auth0/auth0-angular';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  public jwtHelper: JwtHelperService = new JwtHelperService();

  pages = Pages;
  constructor(
    private router: Router,
    private ds: DataService,
    public auth: AuthService
  ) {
    this.ds.getUserSettings().subscribe((val) => {
      if (val && !this.currentPage) {
        this.currentPage = Pages[val.startPage as keyof typeof Pages];
      }
    });
    auth.getAccessTokenSilently().subscribe((token: any) => {
      this.stripeId =
        this.jwtHelper.decodeToken(token)[
          'http://localhost:4200/get_customer_id'
        ];
      console.log(this.stripeId);
    });
  }

  public stripeId = '';

  @Output()
  pageChangeEvent = new EventEmitter<Pages>();
  currentPage: Pages | undefined;

  ngOnInit(): void {}

  changeCurrentPage(page: Pages) {
    this.currentPage = page;
    this.pageChangeEvent.emit(this.currentPage);
  }
  redirectTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
