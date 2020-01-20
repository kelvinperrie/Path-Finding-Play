var pageinfo = [{
		"id": "mainEntrance",
		"name": "Main Entrance",
		"joins": [{
				"linkToId": "asbFoyerReception",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.0707471060476,
				"lng": 174.05519433212493
			}, {
				"lat": -39.07079395962843,
				"lng": 174.05523322415564
			}, {
				"lat": -39.070758559148004,
				"lng": 174.05530698490355
			}, {
				"lat": -39.070712746735204,
				"lng": 174.05526675176833
			}
		]
	}, {
		"id": "asbFoyerReception",
		"name": "Main Entrance Foyer/Reception",
		"joins": [{
				"linkToId": "mainEntrance",
				"coordinates": "undefined"
			}, {
				"linkToId": "theatre",
				"coordinates": "undefined"
			}, {
				"linkToId": "pacu2",
				"coordinates": "undefined"
			}, {
				"linkToId": "asbStairsLift",
				"coordinates": "undefined"
			}, {
				"linkToId": "clinicalServicesStairsLift",
				"coordinates": "undefined"
			}, {
				"linkToId": "mainCorridor1L1",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.07077102935876,
				"lng": 174.05524398400598
			}, {
				"lat": -39.07090846639444,
				"lng": 174.05495296432787
			}, {
				"lat": -39.07097406124894,
				"lng": 174.05500258519464
			}, {
				"lat": -39.07088764261836,
				"lng": 174.05519838645273
			}, {
				"lat": -39.07097406124894,
				"lng": 174.05528019382768
			}, {
				"lat": -39.07093137254103,
				"lng": 174.0553727300387
			}
		]
	}, {
		"id": "theatre",
		"name": "Theatre",
		"joins": [{
				"linkToId": "asbFoyerReception",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.071271840298,
				"lng": 174.05443261577898
			}, {
				"lat": -39.07098239074991,
				"lng": 174.05500929071718
			}, {
				"lat": -39.07090950758308,
				"lng": 174.05495296432787
			}, {
				"lat": -39.07087202478227,
				"lng": 174.05471961214357
			}, {
				"lat": -39.07108442705702,
				"lng": 174.0542730243426
			}
		]
	}, {
		"id": "pacu2",
		"name": "Pacu 2",
		"joins": [{
				"linkToId": "asbFoyerReception",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.070529532799405,
				"lng": 174.05442599402818
			}, {
				"lat": -39.07087208487332,
				"lng": 174.0547196959153
			}, {
				"lat": -39.07091060886273,
				"lng": 174.0549530480996
			}, {
				"lat": -39.07086479654863,
				"lng": 174.05504960762414
			}, {
				"lat": -39.07040771296809,
				"lng": 174.05466739283952
			}
		]
	}, {
		"id": "asbStairsLift",
		"name": "ASB Lifts",
		"joins": [{
				"linkToId": "asbFoyerReception",
				"coordinates": "undefined"
			}, {
				"linkToId": "asbFoyerL2",
				"coordinates": "undefined"
			}, {
				"linkToId": "asbFoyerL3",
				"coordinates": "undefined"
			}, {
				"linkToId": "asbFoyerL4",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.070797024801166,
				"lng": 174.05506348056846
			}, {
				"lat": -39.07084075477999,
				"lng": 174.05509969039016
			}, {
				"lat": -39.070910514452024,
				"lng": 174.05495485110336
			}, {
				"lat": -39.070866784516426,
				"lng": 174.05491998238617
			}
		]
	},{
		"id": "clinicalServicesStairsLift",
		"name": "Clinical Services Stairs/Lifts",
		"joins": [{
				"linkToId": "asbFoyerReception",
				"coordinates": "undefined"
			}, {
				"linkToId": "asbFoyerL2",
				"coordinates": "undefined"
			}, {
				"linkToId": "asbFoyerL3",
				"coordinates": "undefined"
			}, {
				"linkToId": "asbFoyerL4",
				"coordinates": "undefined"
			}
		]
	}, {
		"id": "asbFoyerL2",
		"name": "ASB Level 2 foyer",
		"joins": [{
				"linkToId": "asbStairsLift",
				"coordinates": "undefined"
			}, {
				"linkToId": "clinicalServicesStairsLift",
				"coordinates": "undefined"
			}, {
				"linkToId": "mainCorridor1L2",
				"coordinates": "undefined"
			}, {
				"linkToId": "w2A",
				"coordinates": "undefined"
			}, {
				"linkToId": "w2B",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.07077102935876,
				"lng": 174.05524398400598
			}, {
				"lat": -39.07090846639444,
				"lng": 174.05495296432787
			}, {
				"lat": -39.07097406124894,
				"lng": 174.05500258519464
			}, {
				"lat": -39.07088764261836,
				"lng": 174.05519838645273
			}, {
				"lat": -39.07097406124894,
				"lng": 174.05528019382768
			}, {
				"lat": -39.07093137254103,
				"lng": 174.0553727300387
			}
		]
	}, {
		"id": "asbFoyerL3",
		"name": "ASB Level 3 foyer",
		"joins": [{
				"linkToId": "asbStairsLift"
			}, {
				"linkToId": "clinicalServicesStairsLift",
				"coordinates": "undefined"
			}, {
				"linkToId": "mainCorridor1L3"
			}
		],
		"coordinates": [{
				"lat": -39.07077102935876,
				"lng": 174.05524398400598
			}, {
				"lat": -39.07090846639444,
				"lng": 174.05495296432787
			}, {
				"lat": -39.07097406124894,
				"lng": 174.05500258519464
			}, {
				"lat": -39.07088764261836,
				"lng": 174.05519838645273
			}, {
				"lat": -39.07097406124894,
				"lng": 174.05528019382768
			}, {
				"lat": -39.07093137254103,
				"lng": 174.0553727300387
			}
		]
	}, {
		"id": "asbFoyerL4",
		"name": "ASB Level 4 foyer",
		"joins": [{
				"linkToId": "asbStairsLift"
			}, {
				"linkToId": "clinicalServicesStairsLift",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.07077102935876,
				"lng": 174.05524398400598
			}, {
				"lat": -39.07090846639444,
				"lng": 174.05495296432787
			}, {
				"lat": -39.07097406124894,
				"lng": 174.05500258519464
			}, {
				"lat": -39.07088764261836,
				"lng": 174.05519838645273
			}, {
				"lat": -39.07097406124894,
				"lng": 174.05528019382768
			}, {
				"lat": -39.07093137254103,
				"lng": 174.0553727300387
			}
		]
	}, {
		"id": "w2A",
		"name": "Ward 2A",
		"joins": [{
				"linkToId": "asbFoyerL2"
			}
		],
		"coordinates": [{
				"lat": -39.071271840298,
				"lng": 174.05443261577898
			}, {
				"lat": -39.07098239074991,
				"lng": 174.05500929071718
			}, {
				"lat": -39.07090950758308,
				"lng": 174.05495296432787
			}, {
				"lat": -39.07087202478227,
				"lng": 174.05471961214357
			}, {
				"lat": -39.07108442705702,
				"lng": 174.0542730243426
			}
		]
	}, {
		"id": "w2B",
		"name": "Ward 2B",
		"joins": [{
				"linkToId": "asbFoyerL2"
			}
		],
		"coordinates": [{
				"lat": -39.070529532799405,
				"lng": 174.05442599402818
			}, {
				"lat": -39.07087208487332,
				"lng": 174.0547196959153
			}, {
				"lat": -39.07091060886273,
				"lng": 174.0549530480996
			}, {
				"lat": -39.07086479654863,
				"lng": 174.05504960762414
			}, {
				"lat": -39.07040771296809,
				"lng": 174.05466739283952
			}
		]
	}, {
		"id": "mainCorridor1L2",
		"name": "L2 corridor between ASB and Specialist Services",
		"joins": [{
				"linkToId": "asbFoyerL2",
				"coordinates": "undefined"
			}, {
				"linkToId": "specialServicesMainCorridorIntersection",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.07094418886042,
				"lng": 174.0552476221625
			}, {
				"lat": -39.07143875148623,
				"lng": 174.0556405657832
			}, {
				"lat": -39.07145957509971,
				"lng": 174.05559228602093
			}, {
				"lat": -39.07096293024417,
				"lng": 174.05520470681827
			}
		]
	}, {
		"id": "specialServicesMainCorridorIntersection",
		"name": "Intersection of Specialist Services and main corridor",
		"joins": [{
				"linkToId": "mainCorridor1L2",
				"coordinates": "undefined"
			}, {
				"linkToId": "mainCorridor2L2",
				"coordinates": "undefined"
			}, {
				"linkToId": "specialServicesLiftsStairs",
				"coordinates": "undefined"
			}, {
				"linkToId": "occupationalTherapy",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.07146291712123,
				"lng": 174.05559446468135
			}, {
				"lat": -39.07144105232796,
				"lng": 174.05564274444362
			}, {
				"lat": -39.071516017305264,
				"lng": 174.05570309414645
			}, {
				"lat": -39.07153788207531,
				"lng": 174.05564676775714
			}, {
				"lat": -39.071565993912564,
				"lng": 174.05558910026332
			}, {
				"lat": -39.071531634998856,
				"lng": 174.05555825485965
			}, {
				"lat": -39.07150248196803,
				"lng": 174.0556212867715
			}
		]
	}, {
		"id": "specialServicesLiftsStairs",
		"name": "Specialist Services Lifts/Stairs",
		"joins": [{
				"linkToId": "specialServicesMainCorridorIntersection",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.07146179436413,
				"lng": 174.05558916796403
			}, {
				"lat": -39.071539882857486,
				"lng": 174.05564683545785
			}, {
				"lat": -39.07156487115711,
				"lng": 174.05559319127755
			}, {
				"lat": -39.07148678269141,
				"lng": 174.0555315004702
			}
		]
	}, {
		"id": "occupationalTherapy",
		"name": "Occupational Therapy",
		"joins": [{
				"linkToId": "specialServicesMainCorridorIntersection",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.07161276537332,
				"lng": 174.05562403668122
			}, {
				"lat": -39.071779353698304,
				"lng": 174.05528071392732
			}, {
				"lat": -39.071537800498774,
				"lng": 174.05509295929627
			}, {
				"lat": -39.0713795410577,
				"lng": 174.05543494094567
			}
		]
	}, {
		"id": "mainCorridor2L2",
		"name": "L2 corridor between Specialist Services and Outpatients",
		"joins": [{
				"linkToId": "specialServicesMainCorridorIntersection",
				"coordinates": "undefined"
			}, {
				"linkToId": "orthotics",
				"coordinates": "undefined"
			}, {
				"linkToId": "chapel",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.07192928285458,
				"lng": 174.05581313241677
			}, {
				"lat": -39.07191574759661,
				"lng": 174.05586811770158
			}, {
				"lat": -39.071513853369304,
				"lng": 174.05570047963815
			}, {
				"lat": -39.07153675931941,
				"lng": 174.05564683545785
			}
		]
	}, {
		"id": "orthotics",
		"name": "Orthotics",
		"joins": [{
				"linkToId": "mainCorridor2L2",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.07167093442878,
				"lng": 174.05570225659054
			}, {
				"lat": -39.071786505025756,
				"lng": 174.05531065407436
			}, {
				"lat": -39.07196454584535,
				"lng": 174.05540050807636
			}, {
				"lat": -39.071854181413606,
				"lng": 174.05577869954746
			}
		]
	}, {
		"id": "chapel",
		"name": "Chapel",
		"joins": [{
				"linkToId": "mainCorridor2L2",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.0716429595364,
				"lng": 174.05575546492295
			}, {
				"lat": -39.071595065340674,
				"lng": 174.05593114961343
			}, {
				"lat": -39.07174499488847,
				"lng": 174.05600491036134
			}, {
				"lat": -39.07179913603578,
				"lng": 174.0558184968348
			}
		]
	}, {
		"id": "mainCorridor1L3",
		"name": "L3 corridor between ASB and HR/Education Center",
		"joins": [{
				"linkToId": "asbFoyerL3"
			}, {
				"linkToId": "hrMainCorridorIntersection"
			}, {
				"linkToId": "labCare"
			}
		],
		"coordinates": [{
				"lat": -39.07094418886042,
				"lng": 174.0552476221625
			}, {
				"lat": -39.07143875148623,
				"lng": 174.0556405657832
			}, {
				"lat": -39.07145957509971,
				"lng": 174.05559228602093
			}, {
				"lat": -39.07096293024417,
				"lng": 174.05520470681827
			}
		]
	}, {
		"id": "hrMainCorridorIntersection",
		"name": "Intersection of HR and main corridor",
		"joins": [{
				"linkToId": "mainCorridor1L3",
				"coordinates": "undefined"
			}, {
				"linkToId": "hrLiftsStairs",
				"coordinates": "undefined"
			}, {
				"linkToId": "humanResources",
				"coordinates": "undefined"
			}, {
				"linkToId": "educationCenter",
				"coordinates": "undefined"
			}, {
				"linkToId": "library",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.07143784720886,
				"lng": 174.0556387888308
			}, {
				"lat": -39.0714586708226,
				"lng": 174.05559050906854
			}, {
				"lat": -39.07153363578119,
				"lng": 174.05564683545785
			}, {
				"lat": -39.07151281218957,
				"lng": 174.05570047963815
			}
		]
	}, {
		"id": "labCare",
		"name": "LabCare",
		"joins": [{
				"linkToId": "mainCorridor1L3",
				"coordinates": "undefined"
			}
		],
		"coordinates": [{
				"lat": -39.071438032669995,
				"lng": 174.05564197172356
			}, {
				"lat": -39.07129330838515,
				"lng": 174.0559544490738
			}, {
				"lat": -39.071020517919024,
				"lng": 174.05574926008416
			}, {
				"lat": -39.071174613426415,
				"lng": 174.0554314183159
			}
		]
	}, {
		"id": "hrLiftsStairs",
		"name": "HR Lifts/Stairs",
		"joins": [{
				"linkToId": "hrMainCorridorIntersection"
			}, {
				"linkToId": "kitchenMainCorridorIntersection"
			}
		]
	}, {
		"id": "humanResources",
		"name": "Human Resources",
		"joins": [{
				"linkToId": "hrMainCorridorIntersection"
			}
		]
	}, {
		"id": "library",
		"name": "Library",
		"joins": [{
				"linkToId": "hrMainCorridorIntersection"
			}
		]
	}, {
		"id": "educationCenter",
		"name": "Education Center",
		"joins": [{
				"linkToId": "hrMainCorridorIntersection"
			}
		]
	}, {
		"id": "mainCorridor1L1",
		"name": "L1 corridor between ASB and Kitchen",
		"joins": [{
				"linkToId": "asbFoyerReception"
			}, {
				"linkToId": "kitchenMainCorridorIntersection"
			}, {
				"linkToId": "cafe"
			}, {
				"linkToId": "emergencyDepartment"
			}
		],
		"coordinates": [{
				"lat": -39.07094418886042,
				"lng": 174.0552476221625
			}, {
				"lat": -39.07143875148623,
				"lng": 174.0556405657832
			}, {
				"lat": -39.07145957509971,
				"lng": 174.05559228602093
			}, {
				"lat": -39.07096293024417,
				"lng": 174.05520470681827
			}
		]
	}, {
		"id": "cafe",
		"name": "Cafe",
		"joins": [{
				"linkToId": "mainCorridor1L1"
			}
		]
	}, {
		"id": "emergencyDepartment",
		"name": "EmergencyDepartment",
		"joins": [{
				"linkToId": "mainCorridor1L1"
			}
		]
	}, {
		"id": "kitchenMainCorridorIntersection",
		"name": "Intersection between Kitchen and main corridor",
		"joins": [{
				"linkToId": "hrLiftsStairs"
			}, {
				"linkToId": "mainCorridor1L1"
			}, {
				"linkToId": "mainCorridor2L1"
			}, {
				"linkToId": "kitchen"
			}
		]
	}, {
		"id": "kitchen",
		"name": "Kitchen",
		"joins": [{
				"linkToId": "kitchenMainCorridorIntersection"
			}
		]
	}, {
		"id": "mainCorridor2L1",
		"name": "L1 corridor between Kitchen and Mortuary",
		"joins": [{
				"linkToId": "kitchenMainCorridorIntersection"
			}, {
				"linkToId": "dieticians"
			}, {
				"linkToId": "stores"
			}, {
				"linkToId": "mortuary"
			}
		]
	}, {
		"id": "dieticians",
		"name": "Dieticians",
		"joins": [{
				"linkToId": "mainCorridor2L1"
			}
		]
	}, {
		"id": "stores",
		"name": "Stores",
		"joins": [{
				"linkToId": "mainCorridor2L1"
			}
		]
	}, {
		"id": "mortuary",
		"name": "Mortuary",
		"joins": [{
				"linkToId": "mainCorridor2L1"
			}
		]
	}
]
