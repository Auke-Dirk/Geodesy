
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
		var M = matrix.dup();
		var dim = M.dimensions();
		
		if (dim.cols != 3)
			alert("Error at geodetic2eced");
		
		for (var row = 0; row != dim.rows; ++row)
		{
			// Obtain vector in ecef
			var ecef = this.cartesian2geographic(M.row(row +1),a_etrs,inv_f_etrs);
			M.elements[row][0] = ecef.e(1);
			M.elements[row][1] = ecef.e(2);
			M.elements[row][2] = ecef.e(3);
		}
		
		return M;
	}
});

