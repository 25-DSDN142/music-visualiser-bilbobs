let cy = 300
let cx = 125
let ty = 100
function setup() {
colorMode(HSB);
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(34,13,32);

let showEye = false;
let delayTime = 65500; 
let cellSize = 250;
let scale_factor = 1+(vocal*0.002); // adjust this to scale the main eye ball
let base = cellSize


 
if (millis() > delayTime) {
if (cy > 125) {
cy = cy-0.4;}
showEye = true;
if (ty < 320) {
ty = ty+0.42
}
}


if (showEye) {

noStroke();
fill(48, 15, 28, 170);
ellipse(cx, cy, 220+(drum*0.2), 220+(drum*0.2));

noStroke();
fill(54, 16, 31);
ellipse(cx, cy, 175+(bass*0.2), 175+(bass*0.2));

//EYEBALL
noStroke();
// white eye
fill(255); 
  ellipse(cx, cy, scale_factor*110, scale_factor*130); 

// eye colour. statements
  fill(115,20,64); 
ellipse(cx, (cy + (base*1/10*scale_factor)), scale_factor*67.5, scale_factor*60);


fill(34,13,32); //black pupil
ellipse(cx, (cy + (base*1/10*scale_factor)), scale_factor*40, scale_factor*40);

//EYELID

//eyelid colour statements

  fill(110,55,31);

//eyelid shape itself
  beginShape();
  vertex(0, 0); 
  vertex(
    cx + (base * -1/4 * scale_factor), 
    cy + (base *  0  * scale_factor)
  );
  bezierVertex(
    cx + (base * -1/4 * scale_factor), 
    cy + (base * -7/20 * scale_factor), 
    cx + (base *  1/4 * scale_factor), 
    cy + (base * -7/20 * scale_factor), 
    cx + (base *  1/4 * scale_factor), 
    cy + (base *  0  * scale_factor)
  );
vertex(
  cx + (base *  1/4 * scale_factor), 
  cy + (base *  0  * scale_factor)
);
bezierVertex(
    cx + (base * 1/4 * scale_factor), 
    cy + (base * 3/20 * scale_factor), 
    cx + (base *  -1/4 * scale_factor), 
    cy + (base * 3/20 * scale_factor), 
    cx + (base *  -1/4 * scale_factor), 
    cy + (base *  0  * scale_factor)
  );
  endShape(CLOSE);

//EYELID SHADOW

fill(0, 0, 0, 40) // slightly transparent shadow 
beginShape(); 
vertex(cx + (base*-2/8 * scale_factor), cy + (base* -1.9/12 * scale_factor));
vertex(
  cx + (base * -0.1 * scale_factor),
  cy + (base * -1/4 * scale_factor)
);
bezierVertex(
  cx + (base * 1/4 * scale_factor),
  cy + (base * -1.1/4 * scale_factor),
  cx + (base * -1/10 * scale_factor),
  cy + (base * -2/5 * scale_factor),
  cx + (base * -2/25 * scale_factor),
  cy + (base * 0 * scale_factor)
);
bezierVertex(
  cx + (base * -2/25 * scale_factor),
  cy + (base * 3/20 * scale_factor),
  cx + (base * -1/4 * scale_factor),
  cy + (base * 1/20 * scale_factor),
  cx + (base * -1.3/5 * scale_factor),
  cy + (base * 0 * scale_factor),
)
endShape(CLOSE);

//SHADOW COVER UP - unseen cover up fo the shadow on the eyelid
noFill();
stroke(54, 16, 31); 

strokeWeight(16*scale_factor);
let shadowCover = scale_factor*1.12
beginShape();
  vertex(
    cx + (base * -1/4 * shadowCover), 
    cy + (base *  0  * shadowCover)
  );
  bezierVertex(
    cx + (base * -1/4 * shadowCover), 
    cy + (base * -7/20 * shadowCover), 
    cx + (base *  1/4 * shadowCover), 
    cy + (base * -7/20 * shadowCover), 
    cx + (base *  1/4 * shadowCover), 
    cy + (base *  0  * shadowCover)
  );
vertex(
  cx + (base *  1/4 * shadowCover), 
  cy + (base *  0  * shadowCover)
);
endShape();

}
noStroke();
fill(146,78,41);
beginShape();
vertex(0,ty+150);
vertex(0, ty+50);
curveVertex(0, ty+(vocal*0.4));
curveVertex(50, ty+70-(drum*0.2));
curveVertex(90, ty+(bass*0.3));
curveVertex(140, ty+110-(vocal*0.2));
curveVertex(170, ty+40+(vocal*0.3));
curveVertex(210, ty+80-(drum*0.2));
curveVertex(250, ty-20-(bass*0.4));
vertex(250,ty+150);
endShape(CLOSE);

noStroke();
fill(167,127,49)
beginShape();
vertex(0, ty+160)
curveVertex(0,ty+70+(drum*0.2));
curveVertex(33, ty+110-(vocal*0.13));
curveVertex(50, ty+10-(bass*0.1));
curveVertex(100, ty+35+(drum*0.2));
curveVertex(120, ty+20+(vocal*0.1));
curveVertex(170,ty+70+(vocal*0.2));
curveVertex(180, ty+100+(drum*0.2));
curveVertex(200,ty+45-(drum*0.2));
curveVertex(220,ty+38+(bass*0.2));
curveVertex(250,ty+20+(vocal*0.3));

vertex(250, ty+150)


endShape(CLOSE);

}

