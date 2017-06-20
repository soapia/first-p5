// this is how you comment
// functions are like actions, they make stuff happen

//here we'll define a function to set up out canvas
function setup() {
    
    // here, we have to call the canvas, 800 wide and 600 tall
    createCanvas(800,600)
    
}

// variables in javascript are defined using var x = value
var position = 100
var speed = 3
// let's make a loop to make the bike and make it goooooo
function draw() {
    // let's get rid of that streak
    clear ()
    // here, we make the background have a colour. 100 is grey
    background(100)
    // the place you put the fill designates which item will be what colour, the js reads the code in the order you put it
    fill(256)
    // rectangle that's 100 from the left, 100 from the top, 150 wide, and 95 tall (with curves that have a radius of 20)
    rect(position, 100, 150, 60, 20)
     // oh look!! a string!! that designates colour!
    fill("lightblue")
    // ellipse that's 100 from the left, 150 from the top, 75 wide, and 75 tall
    ellipse(position, 150, 75, 75)
    ellipse(position + 150, 150, 75, 75)
    // let's animate this bike. ++ is the same as plus 1
    position = position + speed
    // now we need conditional statements to make it go back anmd forth, not leaving the screen
    if (position>800) {
        speed = (speed * -1) - 1
        
    }
    if (position<0) {
        speed = (speed * -1) + 1
    }
    textSize(40)
    // concatenationnn
    text("position: " + position, 15, 40)
    
    text("speed: " + speed, 15, 80)
    
}