/**
 * Created by surayezrahman on 10/8/17.
 */

// Code starts here
// YouTube ref: https://www.youtube.com/watch?v=aKYlikFAV4k
// Code owner: The Coding Train


var rows = 5;
var cols = 5;
var grid = new Array(cols);
var openSet = [];
var closedSet = [];
var start;
var end;
var w, h;


function Spot(i,j){
    // This is a constructor
    this.x = i;
    this.y = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    
    this.show = function () {
        fill(255);
        stroke(0);

        rect(this.x * w, this.y * h, w, h);

    }
}

function setup(){

    //This function is setting up the plot, I think

    createCanvas(400,400);
    console.log('A*');

    w = width/cols;
    h = height/rows;

    // Making a 2D array
    for(var i=0; i < cols; i++){
        grid[i] = new Array(rows);
    }

    for(i=0;i<cols;i++){
        for(j=0;j<rows;j++){
            grid[i][j] = new Spot(i,j);
        }
    }

    start = grid[0][0];
    end = grid[cols-1][rows-1];

    openSet.push(start);

    console.log(grid);

}

function draw(){

    if(openSet.length > 0){
        //Keep going
    }else {
        //No solution
    }

    background(0);

    for(i=0; i<cols;i++){
        for(j=0;j<rows;j++){
            grid[i][j].show();
        }
    }

}