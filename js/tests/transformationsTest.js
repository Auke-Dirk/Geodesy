requirejs(["../math/transformations/transform"],
function   (Transform) 
{
	var t = new Transform();
	var V_wgs84 = $V([53.1234, 6.1234, 2.1234]);
	
	// Vector V_wgs84 represents latitude,longitude,altitude 
	
	var V_chartesian = t.geographic2cartesian(V_wgs84, t.A_ETRS, t.INV_F_ETRS);	
	
	// Vector V_chartesian:
	// 0: 3813819.8003780674
	// 1: 409155.207460406
	// 2: 5078798.029616828
});

requirejs(["../math/transformations/transform"],
function   (Transform) 
{
	var t = new Transform();
	var V_chartesian = $V( [3813819.8003780674, 409155.207460406, 5078798.029616828]);
	
	// Vector V_chartesian is a vector in cartesian space (x,y,z)
	
	var V_wgs = t.cartesian2geographic(V_chartesian, t.A_ETRS, t.INV_F_ETRS);	
	
	// Vector V_wgs:
	// 0: 53.12339996967809
	// 1: 6.123399996513334
	// 2: 2.1234000036492944
});
requirejs(["../math/transformations/transform"],
function   (Transform) 
{
	var t = new Transform();
	var M_wgs84 = $M([
		[53.1234, 6.1234, 2.1234],
		[53.2345, 6.2345, 2.2345]] );
	
	var M_ecef = t.geodetic2ecef(M_wgs84); 
	// short for t.geodetic2ecef(M_wgs84, t.A_ETRS, t.INV_F_ETRS)
	
	// Matrix M_ecef:
	// r1 : 3813819.8003780674, 409155.207460406, 5078798.029616828
	// r2 : 3803180.1122391876, 415474.7943871767, 5086208.251386095]	
});


requirejs(["../math/transformations/transform"],
function   (Transform) 
{
	var t = new Transform();
	var location = $V([53.1234, 6.1234, 2.1234]);
		
	var R_rotation =  t.ecef2enu_rotation(location);
	
	//can also be called without altitude values
	//  R_rotation = t.ecef2enu_rotation( $V([53.1234, 6.1234]) );
	
	// Matrix R_rotation:
	// r1: -0.10667015702363872, 0.9942944622195943,  0
	// r2: -0.7953657775836861, -0.08532863815482322, 0.600093578835286
	// r3:  0.5966697222494625,  0.06401207628323728, 0.7999298073210289
});


