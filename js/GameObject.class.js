//GameObject

//Constructors
function GameObject(texturePath, position) {
	this.texturePath = texturePath;
	this.position = position;
	this.visible = true;
	this.scale = 1.0;
	this.originalPosition = position;
	this.texture = new Image();
	this.rectangle = Rectangle.Empty;
}

//Instance Methods
GameObject.prototype.LoadContent = function()
{
	this.texture.src = this.texturePath;
	this.rectangle.X = this.position.X;
	this.rectangle.Y = this.position.Y;
	this.rectangle.Width = this.texture.width;
	this.rectangle.Height = this.texture.height;
};

GameObject.prototype.Update = function()
{
	this.rectangle.X = this.position.X;
	this.rectangle.Y = this.position.Y;
	this.CustomUpdate();
};

GameObject.prototype.CustomUpdate = function()
{
};

GameObject.prototype.Draw = function(c)
{
	c.drawImage(this.texture, this.position.X, this.position.Y, this.rectangle.Width, this.rectangle.Height);
};

GameObject.prototype.Reset = function()
{
	this.position = this.originalPosition;
};