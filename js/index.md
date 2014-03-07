#  Geodesy

####  Classes

## Transform ModelGeodeticENU

####  Methods

Constructor geodetic enu

### Constructs ModelGeodeticENU

    
    
    requirejs(['datums/models/ModelGeodeticENU',"math/transformations/transform"],
    function   (Model, Transform) 
    {
    	var t = new Transform();
    
    	// Define a reference point in geodetic space
    	var V_wgs = $V([53.1234, 6.1234, 2.1234]);
    			
    	// Create the model with $V as reference (center) coordinate
    	var m = new Model(V_wgs,t.A_ETRS, t.INV_F_ETRS);
    });
    

### Transforms a matrix of ENU coordinates to Geodetic coordiantes.

    
    
    requirejs(['datums/models/ModelGeodeticENU',"math/transformations/transform"],
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
    

### Transforms a matrix of Geodetic coordinates to ENU coordiantes.

    
    
    requirejs(['datums/models/ModelGeodeticENU',"math/transformations/transform"],
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ####  Methods 
    
    	
    geographic2cartesian
    cartesian2geographic
    geographic2ecef
    ecef2enu_rotation
    ecef2enu
    enu2ecef
    
    
    
    
    
    	
    		
    
    
    ### Transform coordinates from geographic to cartesian.
    
    
    
    
    
    requirejs(["math/transformations/transform"],
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
    

### Transform coordinates from cartesian to geographic.

    
    
    requirejs(["math/transformations/transform"],
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
    

### Transform coordinates from geographic to ECEF.

###### Possible to provide with two additional arguments, respectively the
semi-major axis (a), and flatting (f). If a and f are not provided defaults
from the Transform class (GRS 80) will be used.

    
    
    requirejs(["math/transformations/transform"],
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
    

### Provides the rotation matrix needed for the ECEF to ENU conversion.

    
    
    requirejs(['datums/models/ModelGeodeticENU',"math/transformations/transform"],
    function   (Model, Transform) 
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
    

### ECEF to ENU coordinate transformation.

    
    
    

### ENU to ECEF coordinate transformation.

    
    
    

