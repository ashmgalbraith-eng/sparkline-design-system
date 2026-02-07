import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sparkline-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Tooltip.component.html',
  styleUrls: ['./Tooltip.css'],
})
export class TooltipComponent {
  @Input() variant: 'plain' | 'rich' = 'plain';
  @Input() text = 'Tooltip';
  @Input() headline = 'This is a headline.';
  @Input() bodyText = 'Tooltip text that is very long and can wrap to two lines.';
  @Input() linkText = 'This is a text link';
  @Input() linkUrl = '#';
  @Input() showHeadline = true;
  @Input() showBodyText = true;
  @Input() showTextLink = true;

  get classes(): string {
    const base = 'sparkline-tooltip';
    return [base, `${base}--${this.variant}`].join(' ');
  }
}
