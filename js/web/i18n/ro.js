/*
 * **************************************************************************************
 *
 * Dateiname:                 ro.js
 * Projekt:                   foe-chrome
 *
 * erstellt von:              Daniel Siekiera <daniel.siekiera@gmail.com>
 * erstellt am:	              17.12.19, 22:44 Uhr
 * zuletzt bearbeitet:       17.12.19, 22:18 Uhr
 *
 * Copyright © 2019
 *
 * **************************************************************************************
 */

let i18n = {
	"Local" : "ro-RO",
	"DateTime" : "D/M/YY h:mm:ss a",

	"Boxes" : {
		"OwnpartCalculator" : {
			"Title": "Co-payment calculator",
			"HelpLink": "https://foe-rechner.de/extension/index#Eigenanteilsrechner",
            "Step": "Nivel",
            "OldLevel": "Nivel anterior",
			"PatronPart": "Total donații",
			"OwnPart": "Contribuție proprie",
            "LGTotalFP": "Total PF nivel",
            "OwnPartRemaining": "Rest",
			"Done": "Depus",
			"BPs": "BP",
			"Meds": "Med",
			"Ext": "Ext",
			"Arc": "Arc",
			"Order": "Ordinea",
			"Deposit": "Depozit",
			"CopyValues": "Copiază valorile",
			"Note": "Notă",
			"YourName": "Numele tău",
			"IndividualName": "individual Lb name",
			"OutputScheme": "Output scheme",
            "Auto": "Auto",
            "Place": "Locul",
            "Levels": "Niveluri",
            "NoPlaceSafe": "Nici un loc nu este asigurat"
		},

		"Calculator": {
			"Title": "Cost calculator",
			"HelpLink": "https://foe-rechner.de/extension/index#Kostenrechner",
			"Step": "Step ",
			"AvailableFP": "Available Forgepoints",
			"ArcBonus": "Arc bonus",
			"Earnings": "Earnings",
			"Rate": "Rate",
			"Up2LevelUp": "Until leveling",
			"FP": "FP",
			"Save": "Save",
			"Commitment": "Costs",
			"Profit": "Profit",
			"LevelWarning": "ATTENTION! Leveling the GB!",
			"NoFPorMedsAvailable": "No FPs or BPs available",
			"LGNotOpen": "The next level is currently not unlocked",
			"LGNotConnected": "The building is not connected to a street",
			"ActiveRecurringQuest": "Active recurring quest:",
			"Done": "done"
		},

		"LGOverviewBox": {
			"Title": "Possible deposits",
			"Tooltip": {
				"FoundNew": "found new",
				"FoundAgain": "recognized",
				"NoPayment": "so far no deposit",
			},
			"Building": "Building",
			"Level": "Level",
			"PayedTotal": "Payed / Total",
			"Rate": "Rate",
			"Profit": "Profit",
			"NothingToGet": "<strong>__player__</strong> has nothing to fetch"
		},

		"StrategyPoints" : {
			"Title" : "FP - Productions",
			"TotalFPs": "Total FPs from all buildings: ",
			"Amount": "Number",
			"FPBar" : "FP-Stock: "
		},

		"Productions" : {
			"Title" : "Production overview",
			"SearchInput": "Search building...",
			"Total" : "Total: ",
			"ModeGroups": "Groups",
			"ModeSingle": "Single",
			"Happiness": "Happiness",
			"AdjacentBuildings": "Adjacent buildings",
			"Headings" : {
				"number" : "Number",
				"amount" : "Amount",
				"earning" : "Earning",
				"greatbuilding" : "Legendary buildings",
				"production" : "Production building",
				"random_production" : "Random productions",
				"residential": "Event buildings",
				"decoration": "Dekorations",
				"street": "Streets",
				"goods": "Goods buildings",
				"culture": "Cultural buildings",
				"main_building": "Town hall",
				"boost": "Boost",
				"all" : "All"
			}
		},

		"Neighbors" : {
			"Title" : "Productions of ",
			"ReadyProductions" : "Finished productions",
			"OngoingProductions" : "Ongoing productions"
		},

		"Outpost" : {
			"Title" : "Goods of the outpost",
			"TitleShort" : "Goods overview - ",
			"TitleBuildings" : "Building",
			"TitleFree" : "Free",
			"DescRequired" : "Required",
			"DescInStock" : "Available",
			"DescStillMissing" : "<span style='color:#29b206'>Excess</span> / <span style='color:#ef1616'>Is missing</span>",
			"ExpansionsSum" : "Expansions", // TODO: check translation
			"nextTile" : "next Expansion", // TODO: check translation
			"tileNotPlanned" : "off", // TODO: check translation
			"infoLine" : "__runNumber__. run, Bonus x4 Chance: __chanceX4__%", // TODO: check translation
        },

        "Technologies": {
            "Title": "Research cost for",
            "Resource": "Resource",
            "DescRequired": "Required",
            "DescInStock": "Available",
			"DescStillMissing": "<span style='color:#29b206'>Excess</span> / <span style='color:#ef1616'>Is missing</span>",
			"NoTechs": "You have reached the end of this era",
            "Eras": {
                1: "Stone Age",
                2: "Bronze Age",
                3: "Iron Age",
                4: "Early Middle Age",
                5: "High Middle Age",
                6: "Late Middle Age",
                7: "Colonial Age",
                8: "Industrial Age",
                9: "Progressive Era",
                10: "Modern Era",
                11: "PostModern Era",
                12: "Contemporary Era",
                13: "Tomorrow Era",
                14: "Future Era",
                15: "Arctic Future",
                16: "Oceanic Future",
                17: "Virtual Future",
                18: "Space Age Mars",
                19: "Space Age Ceres"
            }
        },

        "Campagne": {
            "Title": "Conquest costs for ",
            "Reward": "Total Reward ",
            "AlreadyDone": " already conquered!",
            "Resource": "Resource",
            "DescRequired": "Required",
            "DescInStock": "Available",
            "DescStillMissing": "<span style='color:#29b206'>Excess</span> / <span style='color:#ef1616'>Is missing</span>",
        },

        "Negotiation": {
            "Title": "Negotiation helper",
            "WrongGoods": "Wrong goods selected, please finish manually",
            "TryEnd": "No more tries",
            "Canceled": "Negotiation has been canceled",
            "Success": "Success",
            "Chance": "Chance",
			"Person": "Person",
			"Average": "Ø Amount",
			"Costs": "Costs:",
			"Round": "Round",
			"Stock": "Stock:",
			"GoodsLow": "ATTENTION: Good stock is low",
			"GoodsCritical": "ATTENTION: Good stock is critical",
			"DragDrop": "You can rearrange the icons of the average display yourself using drag & drop to determine the order from the first attempt.",
			"TableLoadError": "Error loading the negotiation table"
        },

		"Settings" : {
			"Title" : "Settings",
			"Active" : "Active",
			"Inactive" : "Inactive",
		},

		"Infobox" : {
			"Title" : "Infobox",
			"Filter" : "Filter",
			"FilterGex" : "GEX",
			"FilterAuction" : "Auction",
			"FilterLevel" : "Level-Up",
			"FilterMessage" : "Message",
			"FilterTrade" : "Trade",
			"ResetBox" : "Reset Box",
			"Messages" : {
				"GEX" : "<strong>__player__</strong> has just received __points__ points in the GEX.",
				"LevelUp" : "__player__'s __building__ building has just reached level __level__.<br>You took <strong>__rank__th</strong> place.",
				"Auction" : "'<strong>__player__</strong> has just offered __amount__ coins.",
				"Trade" : "<strong>__player__</strong> accepted your Offer.<br>You got __needValue__ __need__ for __offerValue__ __offer__",
				"MsgBuilding" : "__building__ - Level __level__"
			}
		},

		"Units" : {
			"Title": "Army overview",
			"NextUnitsIn": "The next __count__ units will arrive in <span class=\"alca-countdown\"></span> at __harvest__ Uhr",
			"ReadyToLoot": "Ready to loot!",
			"Proportionally": "Proportionally",
			"Quantity": "Quantity",
			"Unit": "Unit",
			"Status": "Status",
			"Attack": "Attack",
			"Defend": "Defense",
			"NotFilled": "not filled",
			"Bind": "Bound",
			"Unbind": "Unbound"
		},
		
		"CityMap": {
			"Title": "Submit data",
			"Desc1": "To be able to plan your city we need to transfer your data to foe-rechner.de",
			"Desc2": "<button class='btn-default' id='submit-data' onclick='CityMap.SubmitData()'>Submit</button>",
			"SubmitSuccess": "Data was transfered successfully... Now visit "
		}
	},

	"Menu" : {
		"Productions" : {
			"Title" : "Production overview",
			"Desc" : "Displays the current number of all productions."
		},
		"Calculator" : {
			"Title" : "Cost calculator",
			"Desc" : "Calculates all seats for you and calculates snipeable FPs",
			"Warning": "Disabled: Open another player's LG first!"
		},
		"OwnpartCalculator" : {
			"Title" : "Co-payment calculator",
			"Desc" : "Create payment plan, calculate external seats and copy values",
			"Warning": "Disabled: Open one of your Legendary Buildings first!"
        },
        "Technologies": {
            "Title": "Technologies",
            "Desc": "Calculate cost for research",
            "Warning": "Disabled: Open the research menu first!"
        },
        "Campagne": {
            "Title": "Campaign",
            "Desc": "Overview of the resources required",
        	"Warning" : "Disabled: Visit a province first!"
		},
        "Negotiation": {
            "Title": "Negotiation helper",
			"Desc": "Make precise proposals for negotiations",
			"Warning": "Disabled: Start a negotiation first!"
        },
		"Settings" : {
			"Title" : "Settings",
			"Desc" : "Here are some little settings"
		},
		"Chat" : {
			"Title" : "Guild live chat",
			"Desc" : "Talk in real time with everyone"
		},
		"Unit" : {
			"Title" : "Armies",
			"Desc": "All your armies at a glance",
			"Warning": "Open 1x your \"Army Organization\" <br>Button \"U\""
		},
		"Forum" : {
			"Title" : "Forum",
			"Desc" : "You have a question? You annoying something? Or just to talk ..."
		},
		"Ask" : {
			"Title" : "Question / Answer",
			"Desc" : "You do not know how something works?<br>Take a look!"
		},
		"Bugs" : {
			"Title" : "Mistakes / Wishes",
			"Desc" : "Something is not how it should or you have an idea?"
		},
		"OutP" : {
			"Title" : "Outpost",
            "Desc": "Overview of the required resources",
            "DescWarningOutpostData": "<em id='outPW' class='tooltip-error'>Disabled: Start an outpost and reload the game (F5)",
			"DescWarningBuildings" : "<em id='outPW' class='tooltip-error'>Disabled: check out the outpost first!<br></em>Overview of the required resources"
		},
		"Info" : {
			"Title" : "Info Box",
			"Desc" : "Shows you all the things that happen in the \"background\"<br><em>Fills up with info ...</em>"
		}
	},

	"Settings" : {
		"Version": {
			"Title" : "Version",
			"DescDebug" : "Chrome Extension <strong class='text-danger'>BETA</strong> Version",
			"Desc" : "Chrome Extension Version"
		},
		"GlobalSend": {
			"Title" : "Transmission to foe-rechner.de",
			"Desc" : "If you want to track data with your guild, activate this point. <br> For a self-sufficient extension simply disable."
		},
		"SendTavernInfo": {
			"Title" : "Motivation activity",
			"Desc" : "Should the motivation activities be transferred when the events are called?"
		},
		"SendGEXInfo": {
			"Title" : "GEX evaluations",
			"Desc" : "When clicking in the GEX on placements or rankings the data transmitted"
		},
		"SendGildMemberLGInfo": {
			"Title" : "Lb data of other guild members",
			"Desc" : "When visiting other guild members, all Lb data will be sent to foe-rechner.de when Global activates."
		},
		"ShowNeighborsGoods": {
			"Title" : "Neighborhood harvest",
			"Desc" : "During the visit show what is currently produced"
		},
		"SendInvestigations": {
			"Title" : "FP investment",
			"Desc" : "Entering the 'Town Hall'> 'News'> 'Legendary Buildings' will transmit the Fp investments"
		},
		"ShowTavernBadge": {
			"Title" : "Show tavernas badge",
			"Desc" : "As soon as the extra move in the tavern is activated, a globally movable counter appears."
		},
		"PreScanLGList": {
			"Title" : "Preliminary scan of the LG overview",
			"Desc" : "Scans the overview list of the neighbor when opening and determines possibly fillable LGs. <br> <u> Note: </u> Since the final seats are only transmitted when opening a LG, the result may differ. The scan is saved, however."
		},
		"AutomaticNegotiation": {
			"Title" : "Negotiation helper",
			"Desc" : "Should the assistant open automatically with a negotiation and close when canceled?"
		},
		"ResetBoxPositions": {
			"Title" : "Box coordinates",
			"Desc" : "Should all box coordinates be reset?",
			"Button" : "Delete!"
		},
		"ChangeLanguage": {
			"Title" : "Change language",
			"Desc" : "Which language, instead of the recognized one, should be used?",
			"Dropdown": {
				"de": "Deutsch",
				"en": "English",
				"fr": "Français",
				"es": "Español",
				"ru": "Русский"
			}
		}
	},

	"Eras": {
		"NoAge": "Without Age",
		"StoneAge": "Stone Age",
		"BronzeAge": "Bronze Age",
		"IronAge": "Iron Age",
		"EarlyMiddleAge": "Early Middle Ages",
		"HighMiddleAge": "High Middle Ages",
		"LateMiddleAge": "Late Middle Ages",
		"ColonialAge": "colonial era",
		"IndustrialAge": "Industrial Age",
		"ProgressiveEra": "turn of the century",
		"ModernEra": "Modernity",
		"PostModernEra": "Postmodernism",
		"ContemporaryEra": "Present",
		"TomorrowEra": "Tomorrow",
		"FutureEra": "Future",
		"ArcticFuture": "Arctic Future",
		"OceanicFuture": "Oceanic Future",
		"VirtualFuture": "Virtual Future",
		"SpaceAgeMars": "Space: Mars"
	},

	"API" : {
		"UpdateSuccess" : "Update performed",
		"GEXPlayer" : "GEX placements of members have been updated",
		"GEXChampionship" : "The GEX guild placement has been updated",
		"LGInvest" : "Your LG investments have been transferred",
		"LGGildMember" : "__player__'s Legendary buildings have been submitted"
	}
};
