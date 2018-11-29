import {
  AfterViewInit,
  Component,
  OnDestroy,
  ElementRef,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { isUndefined } from 'util';

import { Subscription, fromEvent } from 'rxjs';
import { SelectOption } from '../../models/select-option';

interface SelectedOptions {
  [key: string]: SelectOption;
}

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent
  implements AfterViewInit, OnInit, OnDestroy {
  @Input()
  id: string;
  @Input()
  isDisabled: boolean;
  @Input()
  options: SelectOption[];
  @Input()
  selectedMode: string;
  @Input()
  selectedOptionsList: SelectOption[];
  @Output()
  selectOption = new EventEmitter();

  @ViewChild('dropdownToggle')
  dropdownToggle: ElementRef;
  @ViewChild('customDropdown')
  customDropdown: ElementRef;

  selectedOption: SelectOption;

  mouseClick$: Subscription;
  mouseClickCustomDropdwonEl$: Subscription;

  constructor() {}

  selectMode = {
    default: 'selectDefault',
    multiple: 'selectMultiple'
  };

  get selectedOptions(): SelectedOptions {
    if (this.selectedMode === this.selectMode.default) {
      return null;
    }
    const selectedOptions = {};

    this.selectedOptionsList.forEach(option => {
      return (selectedOptions[option.value] = option);
    });

    return selectedOptions;
  }

  closeDropdown() {
    this.dropdownToggle.nativeElement.checked = false;
  }

  onSelect(option) {
    this.selectedOption = option;
  }

  ngOnInit() {
    const dropdownToggle = this.dropdownToggle.nativeElement;
    const id =
      dropdownToggle.offsetLeft +
      dropdownToggle.offsetTop +
      Math.ceil(Math.random() * 1000);

    if (isUndefined(this.id)) {
      this.id = `dropdown-toggle-${id}`;
    }

    this.selectedOption = this.options[0];
  }

  ngAfterViewInit() {
    this.mouseClick$ = fromEvent(document, 'click').subscribe(
      (event: MouseEvent) => {
        if (this.isDisabled) {
          return;
        }

        // EventTarget missing 'id'(?) so using any instead
        const target: any = event.target;

        if (target.id !== this.id) {
          this.closeDropdown();
        }
      }
    );

    this.mouseClickCustomDropdwonEl$ = fromEvent(
      this.customDropdown.nativeElement,
      'click'
    ).subscribe((event: MouseEvent) => {
      if (this.isDisabled) {
        return;
      }

      const target: any = event.target;

      event.stopPropagation();
    });
  }

  ngOnDestroy() {
    this.mouseClick$.unsubscribe();
    this.mouseClickCustomDropdwonEl$.unsubscribe();
  }
}
