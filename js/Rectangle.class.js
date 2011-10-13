//Rectangle

//Constructors
function Rectangle(x, y, width, height) {
	this.X = x;
	this.Y = y;
	this.Width = width;
	this.Height = height;
}

//Class Properties
Rectangle.Empty = new Rectangle(0,0,0,0);

//Instance Methods
Rectangle.prototype.Bottom = function() {
	return this.Y + this.Height;
};

Rectangle.prototype.Center = function() {
	return new Point((this.X + this.Width) / 2, (this.Y + this.Height) / 2);
};

Rectangle.prototype.ContainsPoint = function(point) {
	return (point.X >= this.Left() && point.X <= this.Right() && point.Y >= this.Top() && point.Y <= this.Bottom());
};

Rectangle.prototype.ContainsRectangle = function(other) {
	return (other.Left() >= this.Left() && other.Right() <= this.Right() && other.Top() >= this.Top() && other.Bottom() <= this.Bottom());
};

Rectangle.prototype.Inflate = function(horizontalAmount, verticalAmount) {
	this.X -= horizontalAmount;
	this.Width += hotizontalAmount;
	this.Y -= verticalAmount;
	this.Height += verticalAmount;
	return this;
};

Rectangle.prototype.Intersects = function(other) {
	return (this.Left() <= other.Right() && this.Right() >= other.Left() && this.Top() <= other.Bottom() && this.Bottom() >= other.Top());
};

Rectangle.prototype.IsEmpty = function() {
	return (this.X == 0 && this.Y == 0 && this.Width == 0 && this.Height == 0);
};

Rectangle.prototype.Left = function() {
	return this.X;
};

Rectangle.prototype.Location = function() {
	return new Point(this.X, this.Y);
};

Rectangle.prototype.Right = function() {
	return this.X + this.Width;
};

Rectangle.prototype.Top = function() {
	return this.Y;
};

//Class Methods
Rectangle.Intersect = function(value1, value2) {
	//NotImplemented
};
