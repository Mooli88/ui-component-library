import {
  Component,
  OnInit,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { SelectOption } from '../../models/select-option';

@Component({
  selector: 'app-select-doc',
  templateUrl: './select-doc.component.html',
  styleUrls: ['./select-doc.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDocComponent implements OnInit {
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
