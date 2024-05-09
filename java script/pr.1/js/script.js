

function distance(){
    let meter=parseInt(document.getElementById('inp-meter').value);
    let feet=meter*3.28;
    document.getElementById('op-feet').innerHTML='feet is:'+feet;
}

function feet(){
    let feet=parseInt(document.getElementById('imp-feet').value);
    let meter=feet*30.48;
    document.getElementById('op-meter').innerHTML='meter is:'+meter;
}

function km(){
    let meter=parseInt(document.getElementById('imp-meter').value);
    let km=meter/1000;
    document.getElementById('op-km').innerHTML='km is:'+km;
}

function meter(){
    let km=parseInt(document.getElementById('py-km').value);
    let feet=km*3281;
    document.getElementById('po-feet').innerHTML='feet is:'+feet;
}


function china(){
    let india=parseInt(document.getElementById('vp-in').value);
    let china=india*0.086;
    document.getElementById('pv-china').innerHTML='china rupees :'+china;
}

function japan(){
    let india=parseInt(document.getElementById('vr-in').value);
    let japan=india*1.85;
    document.getElementById('rv-japan').innerHTML='japan rupees :'+japan;
}

function aus(){
    let india=parseInt(document.getElementById('pr-in').value);
    let aus=india*0.182;
    document.getElementById('rp-aus').innerHTML='aus rupees :'+aus;
}

function russia(){
    let india=parseInt(document.getElementById('ip-in').value);
    let russian=india*1.10;
    document.getElementById('io-russia').innerHTML='russia rupees :'+russian;
}