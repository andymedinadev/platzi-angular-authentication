import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [NgClass, FontAwesomeModule, NgIf],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() loading = false;
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'success' | 'danger' | 'primary' | 'light' | 'sky' =
    'primary';

  faSpinner = faSpinner;

  private readonly mapColors = {
    success: this.createColorClasses('success'),
    primary: this.createColorClasses('primary'),
    danger: this.createColorClasses('danger'),
    sky: this.createColorClasses('sky'),
    light: this.createColorClasses('light', true),
  };

  private createColorClasses(color: string, isLight?: boolean) {
    return {
      [`bg-${color}-700`]: true,
      [`hover:bg-${color}-800`]: true,
      [`focus:ring-${color}-300`]: true,
      [`text-${isLight ? 'gray-700' : 'white'}`]: true,
    };
  }

  get colors() {
    return this.mapColors[this.color] || {};
  }
}
