import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-timeline-screen',
  templateUrl: './timeline-screen.component.html',
  styleUrls: ['./timeline-screen.component.css']
})
export class TimelineScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }
  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }
}
