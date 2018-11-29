import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule, componentsList } from './app.routing';
import { reducer } from './state/index';
import { SelectDocComponent } from './containers/select-doc/select-doc.component';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';
import { CheckboxDocComponent } from './containers/checkbox-doc/checkbox-doc.component';
import { RadioButtonsDocComponent } from './containers/radio-buttons-doc/radio-buttons-doc.component';
import { TextareaDocComponent } from './containers/textarea-doc/textarea-doc.component';
import { GettingStartedComponent } from './containers/getting-started/getting-started.component';
import { FilterComponent } from './containers/getting-started/filter/filter.component';
import { FormGroupComponent } from './containers/getting-started/form-group/form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    componentsList,
    SelectDocComponent,
    CustomDropdownComponent,
    CheckboxDocComponent,
    RadioButtonsDocComponent,
    TextareaDocComponent,
    GettingStartedComponent,
    FilterComponent,
    FormGroupComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
