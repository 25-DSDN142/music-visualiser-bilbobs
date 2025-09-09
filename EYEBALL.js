let cy = -100
let cx = 125
let ty = 100
let lowering = false;
function setup() {
colorMode(HSB);
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(34,13,32);

let showEye = false;
let delayTime = 2500; 
let cellSize = 250;
let scale_factor = 0.8+(vocal*0.002); // adjust this to scale the main eye ball
let base = cellSize

noStroke(); 
fill(21,38,21); // water
beginShape();
vertex(0, 175);
vertex(250, 175);
vertex(250, 250);
vertex(0, 250);
endShape(CLOSE);

noStroke();
fill(167,127,49) //yellow mountain tip
beginShape();
curveVertex(100, 143);//9
curveVertex(77,105);//10
curveVertex(62.5, 90); //1
curveVertex(31,106); //2
curveVertex(10,105); //3
curveVertex(20, 111.5);//4
curveVertex(39,119);//5
curveVertex(62.5, 121);//6
curveVertex(77, 131);//7
curveVertex(93, 138);//8
curveVertex(100, 143);//9
endShape(CLOSE);

fill(146,78,41); //orange mountain base
beginShape();
curveVertex(20, 111.5);//4
curveVertex(39,119);//5
curveVertex(62.5, 121);//6
curveVertex(77, 131);//7
curveVertex(93, 138);//8
curveVertex(100, 143);//9
curveVertex(108, 155);//20
curveVertex(115, 175);//22
vertex(120, 190);//24
curveVertex(98, 190);//25
vertex(84,189);//15
curveVertex(77, 175);//14
curveVertex(58, 143);//13
curveVertex(40, 127)//12
endShape(CLOSE);

fill(167,127,49); //yellow right mountain
beginShape();
curveVertex(120, 176.6);
curveVertex(137, 168.96);
curveVertex(155.5, 155.5);
curveVertex(172.8, 136.3);
curveVertex(188, 122);
curveVertex(193.9, 111);
curveVertex(210, 78.3);//f
curveVertex(232.7, 92.16);//g
curveVertex(250, 97.9);//h
curveVertex(250, 117);//i
curveVertex(230.4, 124.8);//j
curveVertex(211.2, 150);//k
curveVertex(201.6,155);//l
curveVertex(197.8,160.3); //m
curveVertex(190.16, 175);//n
curveVertex(180.5, 176);//o
endShape(CLOSE);





console.log(counter)
 
if (counter > 100 && counter< 1500) { //range of time this animation is happening
  //first phase
  if (lowering == false){//if lowering = false
    //eye rises
    if (cy < 40) {
      cy = cy+0.4;
    }

    showEye = true;
   //mountains lower
    if (ty < 320) {
      ty = ty+0.42
    }
  }

  if (counter > 800){
    lowering = true;
  }


  //if lowering = true
  if (lowering == true){
    //second phase
    if (cy < 300) {
      cy = cy-0.4;
    }

    showEye = true;
    //mountains lower
    if (ty > 100) {
      ty = ty-0.42
    }
}

}


if (showEye) {

noStroke();
fill(255, 0, 0, 20);
ellipse(cx, cy, 170+(drum*0.2), 170+(drum*0.2));

noStroke();
fill(54, 16, 31);
ellipse(cx, cy, 135+(bass*0.2), 135+(bass*0.2));

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
fill(111,40,40);
beginShape();
vertex(0, 90);
curveVertex(10,105); //3
curveVertex(20, 111.5);//4
curveVertex(40, 127)//12
curveVertex(58, 143);//13
curveVertex(77, 175);//14
vertex(84,189);//15
vertex(89,205);
vertex(0, 205);
vertex(0, 195)
endShape(CLOSE);


fill(111,40,40);
beginShape();
curveVertex(250, 97.9);//h
curveVertex(250, 117);//i
curveVertex(230.4, 124.8);//j
curveVertex(207, 150);//k
curveVertex(200,155);//l
curveVertex(195,155); //m
curveVertex(190.16, 165);//n
curveVertex(180.5, 170);//o
curveVertex(153, 184.32);
curveVertex(188, 190.2);
curveVertex(250, 195.8);
endShape(CLOSE);

}

