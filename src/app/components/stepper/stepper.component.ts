import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

export type StepState = 'pending' | 'active' | 'completed' | 'error';
export type StepperOrientation = 'horizontal' | 'vertical';

export interface StepperStep {
  label: string;
  description?: string;
  state?: StepState;
}

@Component({
  selector: 'sp-stepper',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  @Input() steps: StepperStep[] = [];
  @Input() activeStep = 0;
  @Input() orientation: StepperOrientation = 'horizontal';

  getStepState(index: number): StepState {
    const step = this.steps[index];
    if (step?.state) return step.state;
    if (index < this.activeStep) return 'completed';
    if (index === this.activeStep) return 'active';
    return 'pending';
  }

  getStepIcon(state: StepState): string | null {
    if (state === 'completed') return 'check-circle-outline';
    if (state === 'error') return 'alert-circle-outline';
    return null;
  }

  isLast(index: number): boolean {
    return index === this.steps.length - 1;
  }
}
