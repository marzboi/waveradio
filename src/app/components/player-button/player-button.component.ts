import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-player-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button
    class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-2"
  >
    {{ label() }}
  </button>`,
  styleUrl: './player-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerButtonComponent {
  label = input.required<string>();
}
