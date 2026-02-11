import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sparkline-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Checkbox.component.html',
  styleUrls: ['./Checkbox.css'],
})
export class CheckboxComponent implements AfterViewInit, OnChanges {
  @Input() label?: string;
  @Input() checked = false;
  @Input() disabled = false;
  @Input() indeterminate = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  @ViewChild('checkboxInput') checkboxInput!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    this.updateIndeterminate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['indeterminate'] && this.checkboxInput) {
      this.updateIndeterminate();
    }
  }

  private updateIndeterminate(): void {
    if (this.checkboxInput) {
      this.checkboxInput.nativeElement.indeterminate = this.indeterminate;
    }
  }

  onChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checkedChange.emit(input.checked);
  }
}
