requirejs(['../datums/models/ModelGeodeticENU',"../math/transformations/transform"],
function   (Model, Transform) 
{
	var t = new Transform();

	// Define a reference point in geodetic space
	var V_wgs = $V([53.1234, 6.1234, 2.1234]);
			
	// Create the model with $V as reference (center) coordinate
	var m = new Model(V_wgs,t.A_ETRS, t.INV_F_ETRS);
});


requirejs(['../datums/models/ModelGeodeticENU',"../math/transformations/transform"],
function   (Model, Transform) 
{
	var t = new Transform();
	
	// Define a reference point in geodetic space
	var V_wgs = $V([53.1234, 6.1234, 2.1234]);
	
	// Create the model with $V as reference (center) coordinate
	var m = new Model(V_wgs,t.A_ETRS, t.INV_F_ETRS);
	
	// Create A square in East North Up system, units are meters. 
	var M_square_enu = $M([[1 , 1, 0],[1, -1, 0],[-1, -1, 0],[-1, 1, 0]]);
	
	// Transform this square in our reference geodetic system
	var M_square_geodetic = m.geodetic(M_square_enu);
	
	// M_square_geodetic:
	// r1: 53,123408985643	6,12341493748818	2,12340016011149
	// r2: 53,123391014355	6,12341493748195	2,12340016011149
	// r3: 53,123391014355	6,12338506251805	2,12340016011149
	// r4: 53,123408985643	6,12338506251182	2,12340016011149
			
});

requirejs(['../datums/models/ModelGeodeticENU',"../math/transformations/transform"],
function   (Model, Transform) 
{
	var t = new Transform();
	
	// Define a reference point in geodetic space
	var V_wgs = $V([53.1234, 6.1234, 2.1234]);
	
	// Create the mdoel with $V as reference (center) coordinate
	var m = new Model(V_wgs,t.A_ETRS, t.INV_F_ETRS);
	
	// Create A square in East North Up system, units are meters. 
	var M_square_enu = $M([[1 , 1, 0],[1, -1, 0],[-1, -1, 0],[-1, 1, 0]]);
	
	// Transform this square in our reference geodetic system
	var M_square_geodetic = m.geodetic(M_square_enu);
			
	// Matrix M_square_geodetic:
	// r1: 53,123408985643	6,12341493748818	2,12340016011149
	// r2: 53,123391014355	6,12341493748195	2,12340016011149
	// r3: 53,123391014355	6,12338506251805	2,12340016011149
	// r4: 53,123408985643	6,12338506251182	2,12340016011149
			
	// Retransform geodetic to enu
	var M_square_enu_retransfomered = m.enu(M_square_geodetic);
	
	// Matrix M_square_enu_retransfomered:
	// r1:	 0.9997665829726351,  0.996625515650067,  3.6625351085284308e-9
	// r2:   0.9997665828190088, -1.0033744844022046, 1.1620132633893832e-9
	// r3:	-1.0002334173993923, -1.0033744831218756, 1.3657878716877292e-9
	// r4:  -1.0002334172872347,  0.9966255156258064, 3.680734994571111e-9
	
	// wich approximates our initial M_square_enu
		
});
