import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PlayerButtonComponent } from '../player-button/player-button.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, PlayerButtonComponent],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent {}
