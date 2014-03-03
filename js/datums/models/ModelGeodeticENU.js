define(
	['math/transformations/transform'],

function(Transform) 
{
		var ModelGeodeticENU = function (GR,a, inv_f) 
		{
			this.transform = new Transform();
			this.geodetic_reference = GR;
			this.a = a;
			this.inv_f = inv_f;
						
			this.R = this.transform.ecef2enu_rotation(this.geodetic_reference);
		}
		
		ModelGeodeticENU.prototype.geodetic = function(enu)
		{
			var R_ecef = this.transform.geodetic2ecef($M([this.geodetic_reference.elements]),this.a, this.inv_f);
			return  this.transform.ecef2geo(this.transform.enu2ecef(enu,R_ecef,this.R), this.a, this.inv_f);
		}
		
		ModelGeodeticENU.prototype.enu = function(geodetic)
		{
			var ecef 		= this.transform.geodetic2ecef(geodetic);
            var ref_ecef 	= this.transform.geodetic2ecef($M([this.geodetic_reference.elements]));

            return this.transform.ecef2enu(ecef,ref_ecef, this.R);
		}
		
		
		return ModelGeodeticENU;
});

