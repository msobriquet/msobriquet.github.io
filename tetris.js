
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.rect(20,40,50,50);
            ctx.fillStyle = "#FF0000";
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
            ctx.fillStyle = "green";
            ctx.fill();
            ctx.closePath();

            
let fruit = "blueberry";
console.log(fruit);

// let canvas = document.getElementById("gameScreen");
// let ctx = canvas.getContext('2d');

// ctx.fillRect(20, 20, 100, 100);
