class Ground extends Box{
	constructor(x,y,w,h){
		this.x = x;
		this.y = y;
		 this.width = w;
		 this.height = h
		 this.body.isStatic  =true;
	}
	show() {
		fill("red");
		rect(this.x,this.y,this.w,this.height);
	
	}
}
