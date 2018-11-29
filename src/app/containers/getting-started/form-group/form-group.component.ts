import { Component, OnInit } from '@angular/core';
import { SelectOption } from '../../../models/select-option';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  options = [
    {
      label: 'Lorem ipsum dolor si 1',
      value: 1
    },
    {
      label: 'Lorem ipsum dolor si 2',
      value: 2
    },
    {
      label: 'Lorem ipsum dolor si 3',
      value: 3
    },
    {
      label: 'Lorem ipsum dolor si 4',
      value: 4
    }
  ];

  selectedOption: SelectOption;
  selectedOptionsList = [];

  onSelect(option) {
    if (option.type === 'selectDefault') {
      this.selectedOption = option.value;

      return;
    }

    if (option.isSelected) {
      this.addOption(option.value);
    } else {
      this.removeOption(option.value);
    }
  }

  addOption(option) {
    this.selectedOptionsList.push(option);
  }

  removeOption(option) {
    const index = this.selectedOptionsList.indexOf(option);

    this.selectedOptionsList.splice(index, 1);
  }

  constructor() {}

  ngOnInit() {}
}
