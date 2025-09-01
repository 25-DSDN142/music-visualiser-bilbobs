function setup() {
colorMode(HSB);
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(1);

let showEye = false;
let delayTime = 67000;
let cellSize = 250;

let scale_factor = 1.5; // adjust this to scale the main eye ball
let colourScheme = 0 ; // number 0, 1 or 2

let cx = cellSize / 2;
let cy = cellSize / 2;

let base = cellSize;
 

if (millis() > delayTime) {
showEye = true;
}

if (showEye) {
    
//EYEBALL
noStroke();
// white eye
fill(255); 
  ellipse(cx, cy, scale_factor*110, scale_factor*130); 

// eye colour. statements
if (colourScheme ==0) {
  fill(100,25,45); 
ellipse(cx, (cy + (cy*1/5*scale_factor)), scale_factor*67.5, scale_factor*60);}
  else if(colourScheme ==1) { 
  fill(104,199,202);
  ellipse(cx, (cy + (cy*1/5*scale_factor)), scale_factor*67.5, scale_factor*60);}
  else{ fill(245,190,66)
  ellipse(cx, (cy + (cy*1/5*scale_factor)), scale_factor*67.5, scale_factor*60);}

fill(0); //black pupil
ellipse(cx, (cy + (cy*1/5*scale_factor)), scale_factor*40, scale_factor*40);

//EYELID

//eyelid colour statements
if (colourScheme ==0) {
  fill(115,65,31); }
  else if(colourScheme ==1) { 
  fill(190,41,236);
  }
  else{fill(89,129,24)}

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
vertex(cx + (cx*-2.3/5 * scale_factor), cy + (cy* -1.1/4 * scale_factor));
vertex(
  cx + (base * -0.15 * scale_factor),
  cy + (base * -1/4 * scale_factor)
);
bezierVertex(
  cx + (base * 1/7 * scale_factor),
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
if (colourScheme ==0) {
  stroke(1 ); }
  else if(colourScheme ==1) { 
  stroke(216,150,255);
  }
  else{stroke(201,223,138);}
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


}

