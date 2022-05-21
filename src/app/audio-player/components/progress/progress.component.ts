import {
  Component,
  DoCheck,
  Input, OnInit
} from '@angular/core';
import { AudioPlayerService } from '../../audio-player.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit, DoCheck {

  @Input() currentTime: any = '00:00';
  @Input() maxRange: number = 30;
  @Input() trackDuration: any = '00:00';
  @Input() rangeValue: number = 0;

  constructor(private audioService: AudioPlayerService) { }

  ngOnInit(): void {}

  ngDoCheck(): void {
      if (!this.trackDuration ) {
        this.trackDuration = '00:00'
      } else {
        this.trackDuration = this.audioService.convertedDuration;
      }

      this.rangeValue = this.audioService.currentTime;

      if (!this.audioService.durationInSeconds) return;

      this.maxRange = this.audioService.durationInSeconds;
  }

  onChange(val: any) {
    console.log(this.audioService.player.ended)
    if (this.audioService.currentTime === 0 || this.audioService.state === 'play') {
      this.audioService.getTime(val)
      this.audioService.player.currentTime = val;
    } else {
      this.audioService.getTime(val)
      this.audioService.playMusic(val)
    }
  }

  drawProgressTrack() {
    return `linear-gradient(270.05deg, rgba(126, 85, 179, 0) ${ 100 - ((100 / this.maxRange) * this.rangeValue) }%, #A769C4 0%, #A769C4 99.44%), #494D77`
  }
}
