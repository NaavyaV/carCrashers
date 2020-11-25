class Truck{
    constructor(x, y, width, height, speed, image){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.image = image;
        this.img;
    }


    changeImage(image) {
        this.image = image;
    }

    display(){
        
        imageMode(CENTER)
        this.img = image(this.image, this.x, this.y, this.width, this.height);
        this.y -= this.speed;
    
        if(this.y < (displayHeight - truckDelay)){

            this.img = image(this.image, this.x, this.y, this.width, this.height);
        }
    }
}