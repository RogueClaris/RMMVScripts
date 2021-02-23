 /*:
 * @plugindesc v1.0 Pull a random, walkable position from the current map and return it as an
 * array.
 * @author Rogue Claris
 *
 * @param ReturnWalkablePosCL
 * @type function
 * @desc Returns a two-element array, containing and X and Y coordinate. Access X with [0] and Y with [1].
 *
 * @static
 * @method ReturnWalkablePosCL
 * @return {Array} an x position and a y position
 *
 */

var ReturnWalkablePosCL = function(){
	var found = false;
	var x, y;
	while (!found){
		x = Math.floor(Math.random()*$gameMap.width())
		y = Math.floor(Math.random()*$gameMap.height())
		if ($gameMap.isPassable(x, y, (1 && 2 && 3 && 4))){
			found = true;
		}
	}
	return [x, y]
}