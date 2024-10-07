import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone:true, 
  imports:[
    CommonModule,
    RouterLink
  ],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit, OnDestroy {
  isGameStarted = false;
  score = 0;
  highScore = 0;
  targetPosition = { x: 50, y: 50 };
  timeLeft = 10;
  timerInterval: any;
  gameOver = false;

  ngOnInit() {
    const savedScore = localStorage.getItem('clickGameHighScore');
    if (savedScore) {
      this.highScore = parseInt(savedScore);
    }
  }

  startGame() {
    this.isGameStarted = true;
    this.gameOver = false;
    this.score = 0;
    this.timeLeft = 10;
    this.moveTarget();
    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.endGame();
      }
    }, 1000);
  }

  endGame() {
    clearInterval(this.timerInterval);
    this.isGameStarted = false;
    this.gameOver = true;
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('clickGameHighScore', this.score.toString());
    }
  }

  moveTarget() {
    this.targetPosition = {
      x: Math.floor(Math.random() * 90) + 5,
      y: Math.floor(Math.random() * 90) + 5
    };
  }

  onTargetClick() {
    if (this.isGameStarted) {
      this.score++;
      this.moveTarget();
    }
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
}