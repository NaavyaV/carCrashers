class Fuel{
    constructor(x, y, width, height, speed, image){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.image = image;
    }

    display(){
        
        imageMode(CENTER)
        image(this.image, this.x, this.y, this.width, this.height);
        this.y += this.speed;
        
    }
}