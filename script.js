//This is Created by @sudo_uwu



class Spark{
    constructor(angle){
        this.angle = angle;
        this.r = 1;
        this.x = width/2;
        this.y = height/2;
        this.alpha = 250;
        if(random(1)<0.2){
            this.text = "🌝" //emoji or a name.
        } else {
            this.text = "UR MOM" //emoji or name.
        }
    }
        show(){
            push()
            textSize(30)
            translate(this.x, this.y)
            rotate(this.angle)
            fill(225,225,225, this.alpha)
            text(this.text,0,0)
            pop()
        }
        move(){
        this.r+=0.05;
            let dx = Math.abs(this.r*Math.cos(this.angle*PI/180))
            let dy = Math.abs(this.r*Math.sin(this.angle*PI/180))
            //line(width/2,height/2,this.x,this.y)
            if(this.angle <= 90){
                this.x += dx;
                this.y += dy;
            } else if(this.angle <=180 && this.angle>= 90){
                this.x -= dx;
                this.y += dy;
            } else if(this.angle <= 270 && this.angle >= 180){
                this.x -= dx;
                this.y -= dy;
            } else if(this.angle <= 360 && this.angle >= 270){
                this.x += dx;
                this.y -= dy;
                //console.log(dx,dy)
                //point(this.x, this.y)
            }
            
            //console.log(dx,dy)
        }
        fade(){
            this.alpha-=2;
            return this.alpha;
        }
    }
    
    let counter =0;
    let sparks = [];
    
    function setup(){
        createCanvas(innerWidth,innerHeight);
        sparks.push(new Spark(300))
        //frameRate(10)
    }
    function draw(){
        background(60)
        angleMode(DEGREES)
       if(random(1)<0.15){
       sparks.push(new Spark(random(360)))
           //sparks.push(new Spark(random(270,360)))
       }
        for(spark of sparks){
            spark.show()
            spark.move()
            spark.fade()
            if(spark.fade() <= 0){
                sparks.splice(0, 1)
                //console.log("spiced")
            }
        }
        
        counter++;
    }