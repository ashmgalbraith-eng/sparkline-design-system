import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sp-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnChanges {
  @Input() value = 50;
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() disabled = false;
  @Input() showValue = false;

  @Output() valueChange = new EventEmitter<number>();

  fillPercent = 50;

  ngOnChanges(): void {
    this.updateFill();
  }

  updateFill(): void {
    this.fillPercent = ((this.value - this.min) / (this.max - this.min)) * 100;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = Number(input.value);
    this.updateFill();
    this.valueChange.emit(this.value);
  }
}
