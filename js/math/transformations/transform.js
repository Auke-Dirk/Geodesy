define(
	[ 
	"matrix", 
	"math/transformations/functions/geographic2cartesian", //verified
	"math/transformations/functions/geodetic2ecef", // verified
	"math/transformations/functions/ecef2enu_rotation", // verified
	"math/transformations/functions/enu2ecf",
	"math/transformations/functions/cartesian2geographic",
	"math/transformations/functions/ecef2geo",
	"math/transformations/functions/ecef2enu"
	
	],

function(
	matrix,
	geographic2cartesian,
	geodetic2ecef,
	ecef2enu_rotation,
	enu2ecef,
	cartesian2geographic,
	ecef2geo,
	ecef2enu
	) 
{
		var Transform = function () {}
		
		/* Constants */
		Transform.prototype.Version 		= 1.0;
		
		/* Geodetic constants */
		Transform.prototype.A_ETRS       	= 6378137;
		Transform.prototype.INV_F_ETRS   	= 298.257222101;
		
		/* Precision parameters for iterations (respectively in meters and degrees) */
		Transform.prototype.PRECISION     = 0.0001;
		Transform.prototype.DEG_PRECISION =     0.0000000009000000000000001;//0.0001/40e6*360;
		
			
		/* Transfomations */
		Transform.prototype.geographic2cartesian = geographic2cartesian;
		Transform.prototype.cartesian2geographic = cartesian2geographic;
		Transform.prototype.geodetic2ecef  = geodetic2ecef;
		Transform.prototype.ecef2enu_rotation = ecef2enu_rotation;
		Transform.prototype.enu2ecef = enu2ecef;
		Transform.prototype.ecef2geo = ecef2geo;
		Transform.prototype.ecef2enu = ecef2enu;
		
	return Transform;
});

