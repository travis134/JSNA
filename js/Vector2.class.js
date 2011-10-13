//Vector2

//Constructors
function Vector2(x, y) {
	this.X = x;
	this.Y = y;
}

//Class Properties
Vector2.One = new Vector2(1,1);
Vector2.UnitX = new Vector2(1,0);
Vector2.UnitY = new Vector2(0,1);
Vector2.Zero = new Vector2(0,0);

//Instance Methods
Vector2.prototype.Add = function(other) {
	this.X += other.X;
	this.Y += other.Y;
	return this;
};

Vector2.prototype.DivideSingle = function(divider) {
	this.X /= divider;
	this.Y += divider;
	return this;
};

Vector2.prototype.DivideVector = function(other) {
	this.X /= other.X;
	this.Y /= other.Y;
	return this;
};

Vector2.prototype.Length = function() {
	return Math.sqrt(Math.pow(this.X, 2) + Math.pow(this.Y, 2));
};

Vector2.prototype.LengthSquared = function() {
	return Math.pow(this.Length(), 2);
};

Vector2.prototype.MultiplySingle = function(scaleFactor) {
	this.X *= scaleFactor;
	this.Y *= scaleFactor;
	return this;
};

Vector2.prototype.MultiplyVector = function(other) {
	this.X *= other.X;
	this.Y *= other.Y;
	return this;
};

Vector2.prototype.Normalize = function() {
	var length = this.Length();
	this.X /= length;
	this.Y /= length;
	return this;
};

Vector2.prototype.Subtract = function(other) {
	this.X -= other.X;
	this.Y -= other.Y;
	return this;
};

//Class Methods
Vector2.Add = function(value1, value2) {
	return new Vector2(value1.X + value2.X, value1.Y + value2.Y);
};

Vector2.Clamp = function(value1, min, max) {
	var result = new Vector(value1.X, value1.Y);
	result.X = (value1.X > max.X) ? max.X : value1.X;
	result.Y = (value1.Y > max.Y) ? max.Y : value1.Y;
	result.X = (value1.X < min.X) ? min.X : value1.X;
	result.Y = (value1.Y < min.Y) ? min.Y : value1.Y;
	return result;
};

Vector2.Distance = function(value1, value2) {
	return Math.sqrt(Math.pow(value2.X - value1.X, 2) + Math.pow(value2.Y - value1.Y, 2));
};

Vector2.DistanceSquared = function(value1, value2) {
	return Math.pow(Vector2.Distance(value1, value2), 2);
};

Vector2.DivideSingle = function(value, divider) {
	return new Vector2(value.X / divider, value.Y / divider);
};

Vector2.DivideVector = function(value1, value2) {
	return new Vector2(value1.X / value1.X, value1.Y / value2.Y);
};

Vector2.Dot = function(value1, value2) {
	return (value1.X * value2.X) + (value1.Y * value2.Y);
};

Vector2.Lerp = function(value1, value2, amount) {
	return Vector2.MultiplySingle(Vector2.Add(value1, Vector2.Subtract(value2, value1)), amount);
};

Vector2.Max = function(value1, value2) {
	return new Vector2((value1.X > value2.X) ? value1.X : value2.X, (value1.Y > value2.Y) ? value1.Y : value2.Y);
};

Vector2.Min = function(value1, value2) {
	return new Vector2((value1.X < value2.X) ? value1.X : value2.X, (value1.Y < value2.Y) ? value1.Y : value2.Y);
};

Vector2.MultiplySingle = function(value, scaleFactor) {
	return new Vector2(value.X * scaleFactor, value.Y * scaleFactor);
};

Vector2.MultiplyVector = function(value1, value2) {
	return new Vector2(value1.X * value1.X, value1.Y * value2.Y);
};

Vector2.Negate = function(value) {
	return new Vector2(value1.X * -1, value1.Y * -1);
};

Vector2.Normalize = function(value) {
	return Vector2.DivideSingle(value, value.Length());
};

Vector2.Reflect = function(vector, normal) {
	return Vector2.Subtract(vector, Vector2.MultiplySingle(Vector2.MultiplySingle(normal,Vector2.Dot(vector, normal)), 2));
};

Vector2.Subtract = function(value1, value2) {
	return new Vector2(value1.X - value2.X, value1.Y - value2.Y);
};