define( 
[
"math/trigonometry/Trigonometry",
],
function(Trigonometry)
{	
return function (vector,a, inv_f)
{
	var t = new Trigonometry();

	var x = vector.e(1);
	var y = vector.e(2);
	var z = vector.e(3);
	
    var f   = 1.0/inv_f;
    var ee  = f*(2.0-f);
    var rho = Math.sqrt(x*x+y*y);
    var n =0.0;

    var phi=0;
    var previous;
    var diff=90;
    while (diff > this.DEG_PRECISION)
    {
        previous = phi;
        n        = a/Math.sqrt(1.0-ee * Math.pow(t.sin_deg(phi),2));
        phi      = t.atan_deg(z/rho+n*ee*t.sin_deg(phi)/rho);
        diff     = Math.abs(phi-previous);
    }

    var lambda = t.atan_deg(y/x);
    var h      = rho * t.cos_deg(phi) + z * t.sin_deg(phi) - n * (1.0 - ee * Math.pow(t.sin_deg(phi),2));

	return $V([phi,lambda,h]);
}

});