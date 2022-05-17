import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';
import { Component, Input, OnInit } from '@angular/core';
import { AudioPlayerService } from '../../audio-player.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  currentTime!: any;

  @Input() rangeValue: number = 0;

  constructor(private audioService: AudioPlayerService) { }




  ngOnInit(): void {
    this.Sour()
    this.rangeValue = 27;
  }


Sour() {

  
  this.currentTime = this.audioService.currentTime
  console.log(this.currentTime)
}

  onChange(val: any) {
    this.rangeValue = val;

    console.log(this.rangeValue)
  }

  drawProgressTrack() {
    return `linear-gradient(270.05deg, rgba(126, 85, 179, 0) ${ 100 - this.rangeValue }%, #A769C4 0%, #A769C4 99.44%), #494D77`
  }

}
