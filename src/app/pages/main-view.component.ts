import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PlayerComponent } from '../components/player/player.component';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainViewComponent {}
