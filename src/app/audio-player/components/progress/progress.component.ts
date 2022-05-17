import {
  Component,
  DoCheck,
  Input, OnInit
} from '@angular/core';
import { AudioPlayerService } from '../../audio-player.service';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit, DoCheck {

  @Input() currentTime: any = '00:00';

  @Input() maxRange: number = 1;
  @Input() trackDuration: any = '00:00';
  @Input() rangeValue: number = 0;


  time!: any;

  constructor(private audioService: AudioPlayerService) { }

  ngOnInit(): void {

  }



  ngDoCheck(): void {

    // console.log(this.trackDuration)
      if (!this.trackDuration ) {
        this.trackDuration = '00:00'
        // console.log(this.trackDuration)
      } else {
        this.trackDuration = this.audioService.convertedDuration;
        // console.log(this.trackDuration)
      }

      this.rangeValue = this.audioService.currentTime;

      this.currentTime = this.audioService.convertDuration(this.audioService.currentTime)

      // console.log(this.audioService.currentTime)

      if (!this.audioService.durationInSeconds) return;

      this.maxRange = this.audioService.durationInSeconds;

  }



  // timer() {
  //   this.audioService.convertDuration(this.audioService.currentTime)
  // }

  onChange(val: any) {
    this.rangeValue = val;

  }

  drawProgressTrack() {
    return `linear-gradient(270.05deg, rgba(126, 85, 179, 0) ${ 100 - ((100 / this.maxRange) * this.rangeValue) }%, #A769C4 0%, #A769C4 99.44%), #494D77`
  }

}


