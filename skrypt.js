var NONE = 4,
	UP = 3,
	LEFT = 2,
	DOWN = 1,
	RIGHT = 11,
	Pacman = {};
	
	
	Pacman.FPS = 30;
	
	Pacman.ghost = function(game, map, colour){
	
		var position = null,
			direction = null,
			eatable = null,
			eaten = null,
			due = null;
			
		function getNewCoord(dir, current){
			
			var speed = isVulnerable() ? 1 : isHidden() ? 4 : 2, //Jeżeli isVulnerable to dOWN, jeżeli nie, to czy isHidden jak tak to NONE, a jeżeli to nie to LEFT
				xSpeed = (dir === LEFT && -speed || 	dir === RIGHT && speed || 0),
				ySpeed = (dir === DOWN && speed || dir === UP && -speed || 0);
				
				
			return{
            		    "x": addBounded(current.x, xSpeed),
            		    "y": addBounded(current.y, ySpeed)
        		};
			
		};
	};
	
	function addBounded(x1, x2) { 
        var rem    = x1 % 10, 
            result = rem + x2;
        if (rem !== 0 && result > 10) {
            return x1 + (10 - rem);
        } else if(rem > 0 && result < 0) { 
            return x1 - rem;
        }
        return x1 + x2;
    	};
    
	function isVunerable() { 
	    return eatable !== null;
	};

	function isDangerous() {
	    return eaten === null;
	};

	function isHidden() { 
	    return eatable === null && eaten !== null;
	};

	function getRandomDirection() {
	    var moves = (direction === LEFT || direction === RIGHT) 
		? [UP, DOWN] : [LEFT, RIGHT];
	    return moves[Math.floor(Math.random() * 2)];
	};

	function reset() {
	    eaten = null;
	    eatable = null;
	    position = {"x": 90, "y": 80};
	    direction = getRandomDirection();
	    due = getRandomDirection();
	};

	function onWholeSquare(x) {
	    return x % 10 === 0;
	};

	function oppositeDirection(dir) { 
	    return dir === LEFT && RIGHT ||
		dir === RIGHT && LEFT ||
		dir === UP && DOWN || UP;
	};
	
		
