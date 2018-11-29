import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './containers/nav/nav.component';
import { CheckboxDocComponent } from './containers/checkbox-doc/checkbox-doc.component';
import { InputsDocComponent } from './containers/inputs-doc/inputs-doc.component';
import { ButtonsDocComponent } from './containers/buttons-doc/buttons-doc.component';
import { SelectDocComponent } from './containers/select-doc/select-doc.component';
import { RadioButtonsDocComponent } from './containers/radio-buttons-doc/radio-buttons-doc.component';
import { TextareaDocComponent } from './containers/textarea-doc/textarea-doc.component';
import { GettingStartedComponent } from './containers/getting-started/getting-started.component';
import { CategoriesType } from './models/CategoriesType';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'docs/getting-started' },
  {
    path: 'docs/getting-started',
    component: GettingStartedComponent,
    data: {
      selectedCategory: CategoriesType.GettingStatred,
    },
  },
  {
    path: 'docs/components',
    data: {
      selectedCategory: CategoriesType.Components,
    },
    children: [
      {
        path: 'checkbox',
        component: CheckboxDocComponent,
      },
      {
        path: 'input',
        component: InputsDocComponent,
        data: {
          title: 'input!',
        },
      },
      {
        path: 'button',
        component: ButtonsDocComponent,
      },
      {
        path: 'select',
        component: SelectDocComponent,
      },
      {
        path: 'radio-buttons',
        component: RadioButtonsDocComponent,
      },
      {
        path: 'textarea',
        component: TextareaDocComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'input',
      },
    ],
  },
  {
    path: 'docs/content',
    data: {
      selectedCategory: CategoriesType.Content,
    },
    children: [
      {
        path: 'card',
        component: InputsDocComponent,
        data: {
          title: 'input!',
        },
      },
      {
        path: 'hero',
        component: ButtonsDocComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'card',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const componentsList = [
  NavComponent,
  InputsDocComponent,
  ButtonsDocComponent,
  GettingStartedComponent,
];
