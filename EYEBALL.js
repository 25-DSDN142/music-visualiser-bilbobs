//variables for background eye
let ccx = 125
let ccy = 150
//variables for big eye
let cy = -200
let cx = 125
// variables for left and right cloud
let cloudx= 0 
let cloudxx= 0 

function setup() {colorMode(HSB);}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(34,13,32);

let show_Bg_Eye = true //background eye statement
let showEye = false; //big eye statement
let cellSize = 250;
let two_scale_factor = 0.2+(other*0.001); // scale for the background eye
let scale_factor = 0.8+(other*0.002); // scale for the big eye
let base = cellSize

console.log(counter) 

//map for background eye drop and raising back up
if (counter > 3500 && counter< 5000) { // between these times is when all of this occurs
show_Bg_Eye = true;
  if (counter <= 4000) {
  ccy= map(counter, 3500, 4000, 150, 300); }// eye drops
 else { ccy = map(counter, 4000, 5000, 300, 150); } //eye raises back to normal
}

//background eye drawing
if (show_Bg_Eye) {

//largest circle of light
noStroke();
fill(255,238,173, 20-(bass*0.09));
ellipse(ccx, ccy, 145+(vocal*0.2)*two_scale_factor, 145+(vocal*0.2)*two_scale_factor);

//middle circle of light
noStroke();
fill(255,238,173, 20-(drum*0.09));
ellipse(ccx, ccy, 100+(drum*0.2)*two_scale_factor, 100+(drum*0.2)*two_scale_factor);

//smallest circle of light
noStroke();
fill(96, 68, 52);
ellipse(ccx, ccy, 60+(bass*0.2)*two_scale_factor, 60+(bass*0.2)*two_scale_factor);

//EYEBALL
noStroke();
// white eye
fill(255); 
  ellipse(ccx, ccy, two_scale_factor*110, two_scale_factor*130); 

// eye colour. statements
  fill(242, 101, 41); 
ellipse(ccx, (ccy + (base*1/10*two_scale_factor)), two_scale_factor*67.5, two_scale_factor*60);


fill(34,13,32); //black pupil
ellipse(ccx, (ccy + (base*1/10*two_scale_factor)), two_scale_factor*40, two_scale_factor*40);

//EYELID

//eyelid colour statements

  fill(255,204,0);
beginShape();
  vertex(0, 0); 
  vertex(
    ccx + (base * -1/4 * two_scale_factor), 
    ccy + (base *  0  * two_scale_factor)
  );
  bezierVertex(
    ccx + (base * -1/4 * two_scale_factor), 
    ccy + (base * -7/20 * two_scale_factor), 
    ccx + (base *  1/4 * two_scale_factor), 
    ccy + (base * -7/20 * two_scale_factor), 
    ccx + (base *  1/4 * two_scale_factor), 
    ccy + (base *  0  * two_scale_factor)
  );
vertex(
  ccx + (base *  1/4 * two_scale_factor), 
  ccy + (base *  0  * two_scale_factor)
);
bezierVertex(
    ccx + (base * 1/4 * two_scale_factor), 
    ccy + (base * 3/20 * two_scale_factor), 
    ccx + (base *  -1/4 * two_scale_factor), 
    ccy + (base * 3/20 * two_scale_factor), 
    ccx + (base *  -1/4 * two_scale_factor), 
    ccy + (base *  0  * two_scale_factor)
  );
  endShape(CLOSE);

//EYELID SHADOW

fill(0, 0, 0, 40) // slightly transparent shadow 
beginShape(); 
vertex(ccx + (base*-2/8 * two_scale_factor), ccy + (base* -1.9/12 * two_scale_factor));
vertex(
  ccx + (base * -0.1 * two_scale_factor),
  ccy + (base * -1/4 * two_scale_factor)
);
bezierVertex(
  ccx + (base * 1/4 * two_scale_factor),
  ccy + (base * -1.1/4 * two_scale_factor),
  ccx + (base * -1/10 * two_scale_factor),
  ccy + (base * -2/5 * two_scale_factor),
  ccx + (base * -2/25 * two_scale_factor),
  ccy + (base * 0 * two_scale_factor)
);
bezierVertex(
  ccx + (base * -2/25 * two_scale_factor),
  ccy + (base * 3/20 * two_scale_factor),
  ccx + (base * -1/4 * two_scale_factor),
  ccy + (base * 1/20 * two_scale_factor),
  ccx + (base * -1.3/5 * two_scale_factor),
  ccy + (base * 0 * two_scale_factor),
)
endShape(CLOSE);

//SHADOW COVER UP - unseen cover up fo the shadow on the eyelid
noFill();
stroke(96, 68, 52); 

strokeWeight(16*two_scale_factor);
let shadowCover_two = two_scale_factor*1.12
beginShape();
  vertex(
    ccx + (base * -1/4 * shadowCover_two), 
    ccy + (base *  0  * shadowCover_two)
  );
  bezierVertex(
    ccx + (base * -1/4 * shadowCover_two), 
    ccy + (base * -7/20 * shadowCover_two), 
    ccx + (base *  1/4 * shadowCover_two), 
    ccy + (base * -7/20 * shadowCover_two), 
    ccx + (base *  1/4 * shadowCover_two), 
    ccy + (base *  0  * shadowCover_two)
  );
vertex(
  ccx + (base *  1/4 * shadowCover_two), 
  ccy + (base *  0  * shadowCover_two)
);
endShape();
}

noStroke(); 
fill(21,38,21); // green water/river
beginShape();
vertex(0, 176.5);
vertex(250, 176.5);
vertex(250, 250);
vertex(0, 250);
endShape(CLOSE);


noStroke();
fill(167,127,49) //yellow mountain tip
beginShape();
curveVertex(100, 143);//9
curveVertex(77,105);//10
curveVertex(62.5, 90-(bass*0.1)); //1
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

fill(34,13,32, 50);// shadow on top of the orange and yellow mountain
beginShape();
vertex(0, 80);
curveVertex(15,105); //3
curveVertex(25, 106.5);//4
curveVertex(45, 117)//12
curveVertex(63, 133);//13
curveVertex(82, 165);//14
vertex(89,179);//15
vertex(94,195);
vertex(0, 195);
vertex(0, 185)
endShape(CLOSE);

fill(167,127,49); //yellow right mountain
beginShape();
curveVertex(120, 176.6);
curveVertex(137, 168.96);
curveVertex(155.5, 155.5);
curveVertex(172.8, 136.3);
curveVertex(188, 122);
curveVertex(193.9, 111);
curveVertex(210, 78.3-(drum*0.1));//f
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

fill(34,13,32, 50); //shadow in between the yellow mountain and red mountain on the right
beginShape();
curveVertex(250, 87.9);//h
curveVertex(250, 107);//i
curveVertex(225.4, 114.8);//j
curveVertex(202, 140);//k
curveVertex(195,145);//l
curveVertex(190,145); //m
curveVertex(185.16, 155);//n
curveVertex(175.5, 160);//o
curveVertex(138, 180.32);
curveVertex(183, 180.2);
curveVertex(250, 185.8);
endShape(CLOSE);


 
if (counter > 3500 && counter< 5000) { //map funcitions for the big eye lowering
showEye = true;
  if (counter <= 4000) {
  cy= map(counter, 3500, 4000, -200, 25); //eye lowers between times
} else if(counter >4000 && counter< 4200) { //eye stops for 200 count
 cy= map(counter, 4000, 4200, 25, 25) }
else { cy = map(counter, 4200, 5000, 25, -200); //eye rises back up
}
}

if (showEye) {

noStroke(); //big light ray around big eye
fill(255,238,173, 20);
ellipse(cx, cy, 290+(vocal*0.2), 290+(vocal*0.2));

noStroke(); //mid light ray around big eye
fill(255,238,173, 20);
ellipse(cx, cy, 240+(drum*0.2), 200+(drum*0.2));

noStroke();//small light ray around big eye
fill(96, 68, 52);
ellipse(cx, cy, 145+(bass*0.2), 140+(bass*0.2));

//EYEBALL
noStroke();
// white eye
fill(255); 
  ellipse(cx, cy, scale_factor*110, scale_factor*130); 

// eye colour. statements
  fill(242, 101, 41); 
ellipse(cx, (cy + (base*1/10*scale_factor)), scale_factor*67.5, scale_factor*60);


fill(34,13,32); //black pupil
ellipse(cx, (cy + (base*1/10*scale_factor)), scale_factor*40, scale_factor*40);

//EYELID

//eyelid colour statements

  fill(255,204,0);

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
stroke(96, 68, 52); 

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
fill(167,127,49, 70); //left light on river
beginShape();
curveVertex(0, 190);
curveVertex(89,200);
curveVertex(111.4, 205);
curveVertex(134.4+(bass*0.2), 211.2);
curveVertex(115.2, 220.8);
curveVertex(92.16, 230.4);
curveVertex(53.8, 263);
curveVertex(38.4, 250);
vertex(37, 250);
vertex(0, 250);
endShape(CLOSE);

 noStroke();
fill(111,40,40); //left red mountain
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

fill(167,127,49, 70); //right green river light
beginShape();
curveVertex(153, 184.32);
curveVertex(188, 190.2);
vertex(250, 195.8);
vertex(250,250);
vertex(150, 270);
vertex(200+(bass*0.2), 215);
curveVertex(161.3, 192);
endShape(CLOSE);


fill(111,40,40); //right red mountain
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


//map function for cloud on the left to seperate
if (counter > 3500 && counter< 5000) { 
  if (counter <= 4000) { // cloud to move left
  cloudxx= map(counter, 3500, 4000, 0, -100);
} else { cloudxx = map(counter, 4200, 5000, -100, 0); //cloud comes back 
}
}
//map function for cloud on the right to seperate
if (counter > 3500 && counter< 5000) { //
  if (counter <= 4000) { //cloud movers right
  cloudx= map(counter, 3500, 4000, 0, 100);
} else { cloudx = map(counter, 4200, 5000, 100, 0); //cloud comes back
}
}

fill(200, 200, 200, 120*(vocal*0.02)) //cloud on the right further down
beginShape();
curveVertex(260+(cloudx), 11);
curveVertex(215+(cloudx),11.5);
curveVertex(170.4+(cloudx)+(vocal*0.2),14);
curveVertex(186.2+(cloudx)+(bass*0.2),25);
curveVertex(150+(cloudx)+(drum*0.2),35);
curveVertex(195.8+(cloudx)+(bass*0.2),46);
curveVertex(201.6+(cloudx),58);
curveVertex(238+(cloudx),61.4);
curveVertex(260+(cloudx),63);
endShape(CLOSE);

fill(200, 200, 200, 120*(bass*0.009)) //cloud on the right further up
beginShape();
curveVertex(270+(cloudx), 21);
curveVertex(225+(cloudx),21.5);
curveVertex(180.4+(cloudx)+(vocal*0.2),24);
curveVertex(196.2+(cloudx)+(bass*0.2),35);
curveVertex(160+(cloudx)+(drum*0.2),45);
curveVertex(205.8+(cloudx)+(bass*0.2),56);
curveVertex(211.6+(cloudx),68);
curveVertex(248+(cloudx),71.4);
curveVertex(270+(cloudx),73);
endShape(CLOSE);

fill(200, 200, 200, 120*(bass*0.008)) //cloud on the left further down
beginShape();
curveVertex(0+(cloudxx), 14);
curveVertex(21.1+(cloudxx), 15);
curveVertex(57+(cloudxx)+(bass*0.2),20);
curveVertex(50+(cloudxx)-(drum*0.2),32.6);
curveVertex(80+(cloudxx)+(vocal*0.2),42.2);
curveVertex(42+(cloudxx)-(bass*0.2),55);
curveVertex(60+(cloudxx),65);
curveVertex(-20+(cloudxx),70);
endShape(CLOSE);

fill(200, 200, 200, 120*(vocal*0.02)) //cloud on the right further up
beginShape();
curveVertex(0+(cloudxx), 24);
curveVertex(21.1+(cloudxx), 25);
curveVertex(47+(cloudxx)+(bass*0.2),30);
curveVertex(60+(cloudxx)-(drum*0.2),42.6);
curveVertex(90+(cloudxx)+(vocal*0.2),52.2);
curveVertex(52+(cloudxx)-(bass*0.2),65);
curveVertex(70+(cloudxx),75);
curveVertex(-20+(cloudxx),80);
endShape(CLOSE);

}
