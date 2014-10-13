//Константы
var stabilitrons = [
	{
		name: "D811",
		Umin: 10,
		Umax: 13.5,
		Imin: 3,
		Imax: 23,
		Rmin: 3.4,
		Rmax: 9,
		Tmin: 30,
		Tmax: 120,
		alpha: 0.052,
		dependencies: [
			{
				oY: "Rст., Ом",
				oX: "T, ⁰С",
				description: "График зависимости Rcт. от T.",
				valuesY: [6.5, 6.7, 6.9, 7.2, 8.0],
				valuesX: [-60, -30, 0, 30, 60],
				condition: "Iст. = 5мА",
				pace: 5
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",				
				valuesY: [null, 14.0, 8.4, 5.5, 4.1, 3.2, null],
				valuesX: [0, 1, 5, 10, 15, 20, 25],
				condition: "T = +25 ⁰С",
				pace: 1	
			},
			{
				oY: "α, %/⁰С",
				oX: "Iст., мА",
				description: "График зависимости α от Iст.",				
				valuesY: [null, 7.0, 7.2, 7.4, 7.6, 7.8, null],
				valuesX: [0, 2.5, 5, 10, 15, 20, 25],
				condition: "T = -60 ... +30 ⁰С",
				pace: 1		
			},
			{
				oY: "α, %/⁰С",
				oX: "Iст., мА",
				description: "График зависимости α от I.",			
				valuesY: [null, 0.054, 0.051, 0.048, 0.045, 0.042, null],
				valuesX: [0, 2.9, 5, 10, 15, 20, 25],
				condition: "T = +30 ... +125 ⁰С",
				pace: 1			
			}
		],
	},
	{
		name: "D814A",
		Umin: 7,
		Umax: 9.5,
		Imin: 3,
		Imax: 40,
		Rmin: 1.5,
		Rmax: 3.8,
		Tmin: 30,
		Tmax: 120,
		alpha: 0.052,
		dependencies: [
			{
				oY: "α, %/⁰С",
				oX: "Iст., мА",
				description: "График зависимости α от Iст.",				
				valuesY: [null, 0.052, 0.0522, 0.0524, 0.0526, 0.0528, 0.053, null],
				valuesX: [0, 3, 4, 6, 8, 10, 12, 14],
				condition: "T = -60 ... +30 ⁰С",	
				pace: 1	
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",
				valuesY: [null, 5.2, 2.9, 2.0, 1.5, 1.1, 1.0, null],
				valuesX: [0, 2, 5, 10, 15, 20, 25, 30],
				condition: "T = +25",
				pace: 1
			},
			{
				oY: "Rст., Ом",
				oX: "T, ⁰С",
				description: "График зависимости Rcт. от T.",				
				valuesY: [ 2.1, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9],
				valuesX: [-60, -30, 0, 30, 60, 90, 120],
				condition: "",
				pace: 5	
			}
		],
	},
	{
		name: "D814D",
		Umin: 11.5,
		Umax: 15.5,
		Imin: 3,
		Imax: 24,
		Rmin: 4.2,
		Rmax: 8.4,
		Tmin: 30,
		Tmax: 120,
		alpha: 0.0745,
		dependencies: [
			{
				oY: "α, %/⁰С",
				oX: "Iст., мА",
				description: "График зависимости α от Iст.",
				valuesY: [null, 0.0745, 0.075, 0.076, 0.077, null],
				valuesX: [0, 3, 4, 6, 8, 10],
				condition: "",
				pace: 1
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",				
				valuesY: [null, 15.0, 10.4, 7.0, 5.0, 4.1, null],
				valuesX: [0, 2.5, 5, 10, 15, 20, 25],
				condition: "T = +25",
				pace: 1	
			},
			{
				oY: "Rcm, Om",
				oX: "T, ⁰С",
				description: "График зависимости Rcm. от T.",				
				valuesY: [6.6, 7.2, 7.8, 8.3, 9.0],
				valuesX: [-60, -30, 0, 30, 60],
				condition: "",
				pace: 5		
			}
		],
	},
	{
		name: "KC133A",
		Umin: 2.6,
		Umax: 3.7,
		Imin: 3,
		Imax: 81,
		Rmin: 23,
		Rmax: 126,
		Tmin: 30,
		Tmax: 120,
		alpha: 0.01,
		dependencies: [
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",
				valuesY: [null, 144, 94, 60, 43, null],
				valuesX: [0, 2.5, 5.0, 7.5, 10, 12.5],
				condition: "T = -60 ⁰С",
				pace: 1
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",				
				valuesY: [null, 129, 85, 64, 56, null],
				valuesX: [0, 2.8, 5.0, 7.5, 10.0, 12.5],
				condition: "T = +25 ⁰С",
				pace: 1	
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт от Iст.",				
				valuesY: [null, 115, 79, 59, 44, null],
				valuesX: [0, 2.7, 5.0, 7.5, 10, 12.5],
				condition: "T = +125 ⁰С",
				pace: 1		
			},
			{
				oY: "α, %/⁰С",
				oX: "Iст., мА",
				description: "График зависимости α от Iст.",			
				valuesY: [0.01, 0.00, -0.01, -0.02],
				valuesX: [5, 10, 15, 18],
				condition: "T = -60 ... + 125 ⁰С",
				pace: 1			
			}
		],
	},
	{
		name: "KC156A",
		Umin: 4.7,
		Umax: 6.6,
		Imin: 3,
		Imax: 55,
		Rmin: 18,
		Rmax: 70,
		Tmin: 30,
		Tmax: 120,
		alpha: 0.01,
		dependencies: [
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",
				valuesY: [null, 60, 35, 19, 16, null],
				valuesX: [0, 2.5, 5.0, 7.5, 10, 12.5],
				condition: "T = -60 ⁰С",
				pace: 1
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",				
				valuesY: [null, 83, 50, 28, 22, null],
				valuesX: [0, 2.8, 5.0, 7.5, 10, 12.5],
				condition: "T = +25 ⁰С",
				pace: 1	
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",				
				valuesY: [null, 108, 69, 38, 25, null],
				valuesX: [0, 2.6, 5.0, 7.5, 10.0, 12.5],
				condition: "T = +125 ⁰С",
				pace: 1		
			},
			{
				oY: "α, %/⁰С",
				oX: "Iст., мА",
				description: "График зависимости α от I.",			
				valuesY: [0.01, 0, -0.01, -0.014],
				valuesX: [5.0, 10.0, 15.0, 20.0],
				condition: "T = -60 ... + 125 ⁰С",
				pace: 1			
			}
		],
	},
	{
		name: "KC168A",
		Umin: 5.6,
		Umax: 8,
		Imin: 3,
		Imax: 45,
		Rmin: 12,
		Rmax: 23,
		Tmin: 30,
		Tmax: 120,
		alpha: 0.01,
		dependencies: [
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",
				valuesY: [null, 14, 12, 10, 9, null],
				valuesX: [0, 2.5, 5.0, 7.5, 10, 12.5],
				condition: "T = -60 ⁰С",
				pace: 1
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",				
				valuesY: [null, 23, 16, 13, 11, null],
				valuesX: [0, 2.5, 5.0, 7.5, 10, 12.5],
				condition: "T = +25 ⁰С",	
				pace: 1
			},
			{
				oY: "Rст., Ом",
				oX: "Iст., мА",
				description: "График зависимости Rcт. от Iст.",				
				valuesY: [null, 24, 19, 14, 12, null],
				valuesX: [0, 2.7, 5.0, 7.5, 10, 12.5],
				condition: "T = +125 ⁰С",		
				pace: 1
			},
			{
				oY: "α, %/⁰С",
				oX: "Iст., мА",
				description: "График зависимости α от I.",			
				valuesY: [0.01, 0, -0.009],
				valuesX: [5.0, 10, 15],
				condition: "T = -60 ... + 125 ⁰С",
				pace: 1			
			}
		],
	}
];