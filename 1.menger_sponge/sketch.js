// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for this video: https://youtu.be/LG8ZK-rRkXo
// Converted to ES6 by Mehedi Abdullah

let a = 0;

let sponge = [];

function setup() {
    createCanvas( 987, 610, WEBGL );

    // An array of Box objects
    // Star with one
    let b = new Box( 0, 0, 0, 200 );
    sponge.push( b );
}

function mousePressed() {
    // Generate the next set of boxes
    let next = [];
    for ( let i = 0; i < sponge.length; i++ ) {
        let b = sponge[ i ];
        let newBoxes = b.generate();
        next = next.concat( newBoxes );
    }
    sponge = next;
}

function draw() {
    background( 51 );
    rotateX( a );
    rotateY( a * 0.4 );
    rotateZ( a * 0.1 );
    // Show what you've got!
    for ( let i = 0; i < sponge.length; i++ ) {
        sponge[ i ].show();
    }
    a += 0.01;
}
