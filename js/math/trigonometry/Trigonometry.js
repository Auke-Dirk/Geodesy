define(
	[],

function() 
{
		var Trigonometry = function () {}
	
		Trigonometry.prototype.Version = 1.0;
		Trigonometry.prototype.PI = Math.PI;
		Trigonometry.prototype.RAD_PER_DEG = 0.01745329251; // pi / 180
		Trigonometry.prototype.DEG_PER_RAD = 57.2957795131; // 180 /pi
		
		
		Trigonometry.prototype.radian2degrees = function(radian) 
		{
				return radian * this.DEG_PER_RAD;
		}
		
		Trigonometry.prototype.degrees2radian = function(degrees) 
		{
				return degrees * this.RAD_PER_DEG;
		}
		
		Trigonometry.prototype.cos_deg = function(degrees) 
		{
				return Math.cos(this.degrees2radian(degrees));
		}
		
		Trigonometry.prototype.sin_deg = function(degrees) 
		{
				return Math.sin(this.degrees2radian(degrees));
		}
		
		Trigonometry.prototype.atan_deg = function(degrees)
		{
				return this.radian2degrees(Math.atan(degrees));
		}
		
	return Trigonometry;
});

