var NIC = 4,
	GORA = 3,
	LEWO = 2,
	DOL = 1,
	PRAWO = 11,
	Pacman = {};
	
	
	Pacman.FPS = 30;
	
	Pacman.duch = function(gra, mapa, kolor){
	
		var pozycja = null,
			kierunek = null,
			zjadalne = null,
			zjedzone = null,
			odpowiedni = null;
			
		function Wspolrzedne(kierunek, obecny){
			
			var predkosc = Wrazliwy() ? 1 : Schowany() ? 4 : 2, //Jeżeli wrażliwy to dół, jeżeli nie, to czy schowany jak tak to nic, a jeżeli to nie to lewo
				xPredkosc = (kierunek === LEWO && -predkosc || 	kierunek === PRAWO && predkosc || 0),
				yPredkosc = (kierunek === DOL && predkosc || kierunek === GORA && -predkosc || 0);
				
				
			return
			
		};
	};
	
	
	
		