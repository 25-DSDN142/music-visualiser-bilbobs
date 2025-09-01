function setup() {
colorMode(HSB);
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(1);

let showEye = false;
let delayTime = 67000;
let cellSize = 250;

let scale_factor = 1; // adjust this to scale the main eye ball


let cx = cellSize / 2;
let cy = cellSize / 3;

let base = cellSize
 
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
  fill(115,20,64); 
ellipse(cx, (cy + (cy*1/4*scale_factor)), scale_factor*67.5, scale_factor*60);


fill(0); //black pupil
ellipse(cx, (cy + (cy*1/4*scale_factor)), scale_factor*40, scale_factor*40);

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
vertex(cx + (cx*-2.3/5 * scale_factor), cy + (cy* -1.1/4 * scale_factor));
vertex(
  cx + (base * -0.15 * scale_factor),
  cy + (base * -1/2 * scale_factor)
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
stroke(1); 

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
fill(60)
beginShape();
vertex(0, 260)
curveVertex(0,170);
curveVertex(20,200);
curveVertex(33, 210+(drum*0.2));
curveVertex(40,190);
curveVertex(50, 110);
curveVertex(100, 135+(drum*0.1));
curveVertex(120, 120);
curveVertex(150, 150);
curveVertex(170,170);
curveVertex(180, 200+(drum*0.3));
curveVertex(200,145);
curveVertex(220,138);
curveVertex(250,120);

vertex(250, 250)


endShape(CLOSE);

}

