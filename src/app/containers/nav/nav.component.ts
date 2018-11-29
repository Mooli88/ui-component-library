import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../state/index';
import * as actions from '../../state/actions';
import { Category } from '../../models/Category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  $categories: Observable<Category[]> = this.store.select(fromRoot.getCategoriesList);

  $selectedCategory: Observable<number>;

  constructor(private store: Store<fromRoot.State>, private route: Router) {}

  ngOnInit() {
    this.route.events.subscribe(routeEvent => {
      if (routeEvent instanceof RoutesRecognized) {
        const data: number = routeEvent.state.root.firstChild.data.selectedCategory;
        this.onSelectedCategoryChange(data);
      }
      // .pipe(
      //  filter(routeEvent => routeEvent instanceof RoutesRecognized),
      // map((routeEvent: RoutesRecognized) => {
      //   const data: number =
      //     routeEvent.state.root.firstChild.data.selectedCategory;
      //   this.onSelectedCategoryChange(data);
      // });
      // )
    });
  }

  onSelectedCategoryChange(selectedCategory: number) {
    this.store.dispatch(new actions.UpdateSelectedCategory(selectedCategory));
    this.store.dispatch(new actions.UpdateItems(selectedCategory));
  }
}
