import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-player-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-button.component.html',
  styleUrls: ['./player-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerButtonComponent {
  // title = input.required<string>();
}
