function setup() {
colorMode(HSB);
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(255);


noStroke(); 
strokeWeight(4);
fill(drum, 220, 200);

for (let d= 0; d<250; d+= 25){

triangle(d, 250, d+10, drum*5, d+50, 250 )
}

noStroke(); 
strokeWeight(4);
fill(drum, 20, 100);

for (let d= 0; d<250; d+= 50){

triangle(d-50, 250, d+10, drum*5, d+50, 250 )
}

noStroke(); 
strokeWeight(4);
fill(drum, 220, 200);

for (let e= 0; e<250; e+= 50){

ellipse(125, 1*e, bass )
}

noStroke(); 
strokeWeight(4);
fill(drum, 20, 100);

for (let e= 0; e<250; e+= 50){

ellipse(125, 1*e, bass-10, vocal-30 )
}




}

