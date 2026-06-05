import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sp-switch',
  standalone: true,
  imports: [],
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent {
  @Input() checked = false;
  @Input() disabled = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  toggle(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
    }
  }
}
