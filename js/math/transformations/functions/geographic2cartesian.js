define( 
[
"math/trigonometry/Trigonometry",
],
function(Trigonometry)
{	
return function (vector, a, inv_f)
{
	var phi = vector.e(1);
	var lambda = vector.e(2);
	var	h = vector.e(3);
	
	var tr = new Trigonometry();
	var f  = 1.0/inv_f;
	var ee = f*(2.0-f);
	
	var n  = a/Math.sqrt(1.0-ee * Math.pow(tr.sin_deg(phi),2));	
	x = (n+h)*tr.cos_deg(phi)*tr.cos_deg(lambda);
	y = (n+h)*tr.cos_deg(phi)*tr.sin_deg(lambda);
	z = (n*(1.0-ee)+h)*tr.sin_deg(phi);
	
	return $V([x,y,z]);
	
}
});