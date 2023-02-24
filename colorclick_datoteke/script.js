var sb = document.getElementById("btn");
var cl = [];
var rl = [];
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d", {desynchronized: true, alpha: false });
var lc;
var playing = false;
var yr = 4;
var br = 4;
var gr = 4;
var rr = 4;
var sd;
var fd;
let name;
h1 = document.createElement("h1");

function end() {
    fd = performance.now();
    fd -= sd;
    fd /= 1000;
    result = fd.toFixed(3);
    h1.innerText = result;
    h1.style.marginTop = "15vh";
    h1.style.color = "grey";
    h1.style.visibility = "visible";
    document.body.appendChild(h1);
    canvas.style.visibility = "hidden";
    sb.style.visibility = "visible";
    cl = [];
    rl = [];
}

function start() {
    h1.style.visibility = "hidden";
    canvas.style.visibility = "visible";
    document.getElementById("rs").style.visibility = "visible";
    yr = 4;
    br = 4;
    gr = 4;
    rr = 4;
    sd = performance.now();
    sb.style.visibility = "hidden";
    gen(cl);
    gen(rl);
    dg();
    playing = true;
    setInterval(check, 1);
}

function gen(a) {
    for (let i = 0; i < 4; i++) {
        while (a.length < i+1) {
            let rn = Math.floor(Math.random() * 4);
            if (!a.includes(rn)) {
                a.push(rn);
            }
        }
    }
}

function dg() {
    ctx.fillStyle = "green";
    ctx.fillRect(rl[0] * 100, cl[0] * 100, 100, 100);
    ctx.fillRect(rl[1] * 100, cl[1] * 100, 100, 100);
    ctx.fillRect(rl[2] * 100, cl[2] * 100, 100, 100);
    ctx.fillRect(rl[3] * 100, cl[3] * 100, 100, 100);
    ctx.fillStyle = "blue";
    ctx.fillRect(rl[0] * 100, cl[1] * 100, 100, 100);
    ctx.fillRect(rl[1] * 100, cl[2] * 100, 100, 100);
    ctx.fillRect(rl[2] * 100, cl[3] * 100, 100, 100);
    ctx.fillRect(rl[3] * 100, cl[0] * 100, 100, 100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(rl[0] * 100, cl[2] * 100, 100, 100);
    ctx.fillRect(rl[1] * 100, cl[3] * 100, 100, 100);
    ctx.fillRect(rl[2] * 100, cl[0] * 100, 100, 100);
    ctx.fillRect(rl[3] * 100, cl[1] * 100, 100, 100);
    ctx.fillStyle = "red";
    ctx.fillRect(rl[0] * 100, cl[3] * 100, 100, 100);
    ctx.fillRect(rl[1] * 100, cl[0] * 100, 100, 100);
    ctx.fillRect(rl[2] * 100, cl[1] * 100, 100, 100);
    ctx.fillRect(rl[3] * 100, cl[2] * 100, 100, 100);
}

function check() {
    if (playing) {
        if (br == 0) {
            lc = undefined;
            br = -1;
        }
        if (yr == 0) {
            lc = undefined;
            yr = -1;
        }
        if (gr == 0) {
            lc = undefined;
            gr = -1;
        }
        if (rr == 0) {
            lc = undefined;
            rr = -1;
        }
        if (br == -1 && yr == -1 && rr == -1 && gr == -1) {
                end();
                playing = false;
        }
    }
}
function pick(event) {
    var x = event.layerX;
    var y = event.layerY;
    var pixel = ctx.getImageData(x, y, 1, 1);
    var data = pixel.data;
  
      const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
      return rgba;
  }

  canvas.addEventListener('mousedown', function(event) {
      if (playing) {
        let color = pick(event);
        if (lc == undefined) {
            if (color != "rgba(12, 13, 15, 1)") {
                lc = color;
                ctx.fillStyle = "#0c0d0f";
                ctx.fillRect(Math.floor(event.layerX/100) * 100, Math.floor(event.layerY/100) * 100, 100, 100);
            }
        }
        if (lc != color) {
            return;
        }
        if (lc == "rgba(255, 255, 0, 1)" && color == lc) {
            yr--;
            ctx.fillStyle = "#0c0d0f";
            ctx.fillRect(Math.floor(event.layerX/100) * 100, Math.floor(event.layerY/100) * 100, 100, 100);
            let hs = new Audio("https://cdn.discordapp.com/attachments/752386243966533652/924543276218978314/mixkit-message-pop-alert-2354_1-AudioTrimmer.com.mp3");
            hs.play();
        } else if (lc == "rgba(255, 0, 0, 1)" && color == lc) {
            rr--;
            ctx.fillStyle = "#0c0d0f";
            ctx.fillRect(Math.floor(event.layerX/100) * 100, Math.floor(event.layerY/100) * 100, 100, 100);
            let hs = new Audio("https://cdn.discordapp.com/attachments/752386243966533652/924543276218978314/mixkit-message-pop-alert-2354_1-AudioTrimmer.com.mp3");
            hs.play();
        } else if (lc == "rgba(0, 128, 0, 1)" && color == lc) {
            gr--;
            ctx.fillStyle = "#0c0d0f";
            ctx.fillRect(Math.floor(event.layerX/100) * 100, Math.floor(event.layerY/100) * 100, 100, 100);
            let hs = new Audio("https://cdn.discordapp.com/attachments/752386243966533652/924543276218978314/mixkit-message-pop-alert-2354_1-AudioTrimmer.com.mp3");
            hs.play();
        } else if (lc == "rgba(0, 0, 255, 1)" && color == lc) {
            br--;
            ctx.fillStyle = "#0c0d0f";
            ctx.fillRect(Math.floor(event.layerX/100) * 100, Math.floor(event.layerY/100) * 100, 100, 100);
            let hs = new Audio("https://cdn.discordapp.com/attachments/752386243966533652/924543276218978314/mixkit-message-pop-alert-2354_1-AudioTrimmer.com.mp3");
            hs.play();
        }
      } 
    });

    window.addEventListener('keydown', function(event) {
        if (event.keyCode == 27) {
            if (!playing) {
                start();
            } else {
                cl = [];
                rl = [];
                yr = 4;
                br = 4;
                gr = 4;
                rr = 4;
                sd = performance.now();
                gen(cl);
                gen(rl);
                dg();
                lc = undefined;
            }
        }
    });
