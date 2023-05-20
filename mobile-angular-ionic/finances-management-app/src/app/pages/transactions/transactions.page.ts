import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable, tap } from 'rxjs';
import { TransactionFilters } from 'src/app/enums/transactionFilters';
import { Transaction } from 'src/app/models/transaction';
import { TransactionCategory } from 'src/app/models/transactionCategory';
import { TransactionsService } from 'src/app/shared/services/transactions/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  transactionFilters = TransactionFilters;
  transactionFiltersValues = Object.keys(this.transactionFilters);
  selectedFilter: TransactionFilters = TransactionFilters.All;
  transactions$: Observable<Transaction[]> =
    this.transactionsService.fetchTransactions(this.selectedFilter);
  totalCategories = 0;
  categories$: Observable<TransactionCategory[]> = this.transactionsService
    .fetchCategories()
    .pipe(
      tap((val) => {
        this.totalCategories = val.length;
        this.showAllCategoriesButton = val.length > this.maxCategories;
      })
    );
  maxCategories: number = 5;
  showAllCategories: boolean = false;
  showAllText: string = 'Show All';
  showAllCategoriesButton = false;

  selectFilter(filter: TransactionFilters) {
    this.selectedFilter = filter;
    this.transactions$ = this.transactionsService.fetchTransactions(
      this.selectedFilter
    );
  }
  constructor(
    public transactionsService: TransactionsService,
    private navCtrl: NavController
  ) {}
  ngOnInit(): void {}

  openCategoryModal(category?: TransactionCategory) {
    this.navCtrl.navigateForward('/category');
    // if (category) {
    //   this.dialog.open(CategoryModalComponent, {
    //     data: { category: { ...category } },
    //   });
    //   return;
    // }
    // this.dialog.open(CategoryModalComponent);
  }

  showAllCateogires() {
    if (this.showAllCategories) {
      this.maxCategories = 5;
      this.showAllText = 'Show All';
    } else {
      this.maxCategories = Infinity;
      this.showAllText = 'Hide';
    }
    this.showAllCategories = !this.showAllCategories;
  }

  getMoreTransactions() {
    // this.transactionsService.getMoreTransactions();
  }

  openModal() {
    // this.dialog.open(TransactionModalComponent, {
    //   panelClass: 'transaction-dialog',
    // });
  }
}
