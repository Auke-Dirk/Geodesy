
/*
* http://en.wikipedia.org/wiki/Geodetic_datum#Earth-centred_earth-fixed_.28ECEF_or_ECF.29_coordinates
*
*/


define( 
[],
function()
{	
	return function (matrix,a_etrs, inv_f_etrs)
	{
	
		if(typeof(a_etrs) === 'undefined') a_etrs = this.A_ETRS;
		if(typeof(inv_f_etrs) ==='undefined') inv_f_etrs = this.INV_F_ETRS;
	
		var M = matrix.dup();
		var dim = M.dimensions();
		
		if (dim.cols != 3)
			alert("Error at ecef2geodetic");
		
		for (var row = 1; row != dim.rows + 1; ++row)
		{
			// Obtain vector in ecef
			var geo = this.geographic2cartesian(M.row(row),a_etrs,inv_f_etrs);
			M.elements[row - 1][0] = geo.e(1);
			M.elements[row - 1][1] = geo.e(2);
			M.elements[row - 1][2] = geo.e(3);
		}
		
		return M;
	}
});

