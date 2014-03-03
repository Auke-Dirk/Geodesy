/*
	Description: ecef to enu rotation matrix
*/
define( 
[
"math/trigonometry/Trigonometry",
],
function(Trigonometry)
{

	return function(geodetic_location_vector)
	{
		var tr = new Trigonometry();
		var phi = geodetic_location_vector.e(1);
		var lambda = geodetic_location_vector.e(2);
		
		return $M([
		
		[-1 * tr.sin_deg(lambda)					, tr.cos_deg(lambda)						,	0.0],		
		[-1 * tr.sin_deg(phi) * tr.cos_deg(lambda)	, -1 * tr.sin_deg(phi) * tr.sin_deg(lambda)	, tr.cos_deg(phi)],
		[tr.cos_deg(phi) * tr.cos_deg(lambda), 	tr.cos_deg(phi) * tr.sin_deg(lambda), tr.sin_deg(phi)]
		]);
	}
});
