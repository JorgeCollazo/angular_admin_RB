import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-lottie-anim',
  templateUrl: './lottie-anim.component.html',
  styleUrls: ['./lottie-anim.component.scss']
})
export class LottieAnimComponent {

  options: AnimationOptions = {
    path: '/assets/lotties/animation_1.json'
  };

   onAnimate(animationItem: AnimationItem): void {
  }

}
