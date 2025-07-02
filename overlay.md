<!-- ok it needs to be like homes-
    
1. changing fonts text
- which fonts
-js to animate?
2. moving roof to house
-make a gif or js?
3. opening door upon hover
- door asset?
5. running gif
6. background img
- fill to overflow
 -->

<!DOCTYPE html>

<html>
    <head>
        <!-- <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />

        <title>writinghome</title>

        <link rel="icon" href="styles/assets/spider.gif" type="image/x-icon" /> -->

        <style>
            .container{ 
                position: relative;
            }
            #background {
                background-color: rgb(97, 165, 183);
                position: absolute;

            }
            #overlay {
                position: absolute;
                color: aliceblue;
            }
            html, body {
                width:  100%;
                height: 100%;
                margin: 0;
                padding: 0;
                overflow: auto;
                background-image: url(styles/assets/IMG_8356.GIF);
                background-size: cover;
                background-position: bottom;
                background-repeat: no-repeat;
            }
            p {
                background-color: aliceblue;
                position: absolute;
                width: 30px;
                height: 30px;
            }

            h1 {
                transform: scaleX(0.5);
                font-size: 120px;
            }

            #door {
                height: 100px;
                width: 100px;
                margin-left: 1500px;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <!-- <canvas id="background" ></canvas> -->
            <div id="overlay">
                <div id="image-link">
                    <h1>
                        RUN
                    </h1>
                    <a href="homepost.html">
                        <img id="door" src="styles/assets/door.JPG">
                    </a>
    
                </div>
            </div>
        </div>
<!-- 
        <script>
            const canvas = document.getElementById('background');
            const ctx = canvas.getContext("2d");

            ctx.canvas.width  = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
            

            function gradient() {
                const gradient = ctx.createLinearGradient(0,0,0, 500);
                gradient.addColorStop(0, "black")
                gradient.addColorStop(0.8, "#2929a3")
                ctx.fillStyle = gradient;
                ctx.fillRect(0,0,10000,10000)
            }
            gradient();

            function redirect() {
                
            }

            

        </script> -->

        <footer id="footer-sec"></footer>
    </body>
</html>