define( [],
function()
{
	/*
	* Data, Reference, Rotatino
	*/
	return function(D,Ref, Rot)
	{
		var M = D.multiply(Rot);

		for (var row = 0; row != M.dimensions().rows; ++row)
		{	
			M.elements[row][0] += Ref.e(1,1);
			M.elements[row][1] += Ref.e(1,2);
			M.elements[row][2] += Ref.e(1,3);
		}
		
		return M;		
	}
});
