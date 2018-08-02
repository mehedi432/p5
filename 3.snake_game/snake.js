// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/AaGK-fj-BAM
// Created ES6 by Mehedi Abdullah
class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
  }
  eat( pos ) {
    let d = dist( this.x, this.y, pos.x, pos.y );
    if ( d < 1 ) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }
  dir( x, y ) {
    this.xspeed = x;
    this.yspeed = y;
  }
  death() {
    for ( let i = 0; i < this.tail.length; i++ ) {
      let pos = this.tail[ i ];
      let d = dist( this.x, this.y, pos.x, pos.y );
      if ( d < 1 ) {
        console.log( 'starting over' );
        this.total = 0;
        this.tail = [];
      }
    }
  }
  update() {
    for ( let i = 0; i < this.tail.length - 1; i++ ) {
      this.tail[ i ] = this.tail[i + 1];
    }
    if ( this.total >= 1 ) {
      this.tail[this.total - 1] = createVector( this.x, this.y );
    }

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain( this.x, 0, width - scl );
    this.y = constrain( this.y, 0, height - scl );
  }
  show() {
    fill( 255 );
    for ( let i = 0; i < this.tail.length; i++ ) {
      rect( this.tail[ i ].x, this.tail[ i ].y, scl, scl );
    }
    rect( this.x, this.y, scl, scl );
  }
}
