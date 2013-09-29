var getRand = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

var newMainChar = function(jobsArray, quirksArray) {
  var job = getRand(crazyJobsArray);
  var quirk = getRand(crazyQuirksArray);
  return "Your main character is " + job + " who " + quirk + ".";
};

var newSecondaryChar = function(quirksArray) {
  var quirk = getRand(crazyQuirksArray);
  return "The sidekick " + quirk + ".";
}

$( document ).ready(function() {
  $('div.main-character').html(newMainChar);
  $('div.secondary-character').html(newSecondaryChar);
});

$( "#main-character-refresh" ).bind("click", function() {
  $('div.main-character').html(newMainChar);
});

$( "#secondary-character-refresh" ).bind("click", function() {
  $('div.secondary-character').html(newSecondaryChar);
});



var crazyQuirksArray = [
  "is paraplegic",
  "is obsessive-compulsive",
  "is a Tourette's syndrome sufferer",
  "is agoraphobic",
  "is a habitual knuckle-cracker",
  "is a gum chewer",
  "is deaf",
  "is blind",
  "has poor peripheral vision",
  "has face-blindness",
  "is highly susceptible to seasickness",
  "has vertigo",
  "gets debilitating migraines",
  "has colitis",
  "used to be a drug dealer",
  "used to be prostitute",
  "used to be nun or priest",
  "never shuts up about being an atheist",
  "is from a small town",
  "is from the big city",
  "is double-jointed",
  "is a white person with dreadlocks",
  "is a knitter",
  "owns five cats",
  "was recently widowed",
  "is an avid gardener",
  "breeds show dogs",
  "can't climb stairs",
  "is a foreign accent syndrome sufferer",
  "doesn't have facebook",
  "still wears clothes from high school",
  "is an alcoholic",
  "is an illegal immigrant",
  "is obsessed with a local sports team",
  "had a child who died",
  "accidentally caused the death of a child",
  "is a hobby taxidermist",
  "can't ride a bike",
  "has a fear of tunnels",
  "can't drive a car",
  "hates elevators",
  "is a bodybuilder",
  "is married to the sea",
  "has ram's legs",
  "is exceedingly posh",
  "is bulimic",
  "is an amateur gymnast",
  "is secretly an alien",
  "has a vestigial tail",
  "has extra toes",
  "has a third nipple",
  "wears an eyepatch",
  "wears a monocle",
  "lost a foot to a shark",
  "recovered from rabies",
  "is an NFL referee",
  "is a hoarder",
  "is a brony and it's eating him up inside",
  "furry",
  "got LASIK but it didn't take",
  "got lost in a corn maze as a child",
  "longboards everywhere",
  "is a homebrew enthusiast",
  "is a secret zombie",
  "crochets granny square afghans that no one wants",
  "has an MFA",
  "eats the same meal for lunch every day",
  "believes his beard gives him power",
  "has a handlebar mustache",
  "has attached earlobes",
  "has an outie bellybutton",
  "is missing the little finger on her left hand",
  "lost his thumb in fireworks accident",
  "refuses to eat vegetables",
  "is a surfer",
  "is a Heisman trophy winner",
  "won a showcase showdown on The Price is Right",
  "inherited millions from long-lost relative",
  "is actually a duke",
  "is obsessed with the antikythera mechanism",
  "is halfway through translating the Voynich manuscript",
  "doesn't recycle",
  "never changes his oil",
  "has no body hair",
  "falsely believes himself to be color blind",
  "is color blind",
  "is an insomniac",
  "can only turn right",
  "stutters",
  "is a pyromaniac",
  "is a serial dieter",
  "is a compulsive liar",
  "has a poor sense of direction",
  "is very tall",
  "distrusts banks",
  "only pays for things in bitcoin",
  "insists on using gold",
  "is a secret vampire",
  "isn't really gay",
  "isn't really straight",
  "is afraid of the dark",
  "sunburns easily",
  "has crushing consumer debt",
  "has a weird laugh",
  "suffers from the Capgras delusion",
  "sees ghosts",
  "naps frequently",
  "has had hiccups for the last seven years",
  "is obsessed with litter",
  "is a pescatarian",
  "is a vegan",
  "has celiac disease",
  "has a dairy allergy",
  "has a peanut allergy",
  "is a nail biter",
  "always knows which way is north",
  "has perfect pitch",
  "is a Goth",
  "is an oxycontin addict",
  "travels through time",
  "is a former astronaut",
  "is a karate expert",
  "is a compulsve gambler",
  "is homesick",
  "cans her own food",
  "cans his own food",
  "is a little person",
  "has type 2 diabetes",
  "believes himself to be a werewolf",
  "suffers from impostor syndrome",
  "is secretly pining for a coworker",
  "has ADHD",
  "is psychic",
  "grinds her teeth",
  "has bad teeth",
  "is racist",
  "is sexist",
  "is homophobic",
  "has a pet squirrel",
  "uses a helper monkey",
  "has narcolepsy",
  "is a hobbyist alpaca farmer",
  "aspires to be a stand-up comic",
  "has been taking improv classes for the last five years",
  "is mute",
  "has a hunchback",
  "is a demon",
  "used to be an exorcist",
  "is secretly heir to the throne",
  "has webbed toes",
  "has severe body odor",
  "is extremely patriotic",
  "is a pothead",
  "is a grammar scold who constantly quotes Strunk and White",
  "is a drag queen",
  "is afraid of turkeys",
  "makes all her own clothes",
  "is in arranged marriage",
  "was a mail order bride",
  "is a hypochondriac",
  "has an Imelda-Marcos-esque shoe collection",
  "smells like apples",
  "believes himself to be Ray Liotta",
  "does not floss",
  "isn't sure whether unicorns are real or not",
  "is a young-earth creationist",
  "is a cryptozoologist",
  "used to belong to a cult",
  "is actually Canadian",
  "has an ear wax problem",
  "has a porn addiction",
  "is a Francophile",
  "is a communist",
  "has thin lips",
  "has stubby fingers",
  "has arachnophobia",
  "is a chess grand master",
  "is a valley girl",
  "has a photographic memory",
  "has a transplanted arm with a mind of its own",
  "loves musical theater",
  "is a kleptomaniac",
  "can teleport",
  "is immortal",
  "carries Magic 8-ball and consults it regularly",
  "keeps backyard chickens",
  "is afraid of heights",
  "is a nudist",
  "is in witness protection",
  "is an albino",
  "believes insurance is a form of gambling",
  "writes angry letters to the editor",
  "sleepwalks",
  "considers rockabilly to be the apex of pop music",
  "has cystic fibrosis",
  "has sickle-cell anemia",
  "is a model train enthusiast",
  "is completely hairless",
  "refuses to use cell phone",
  "is a conspiracy theorist",
  "is clumsy",
  "is rude",
  "wears stupid hats",
  "is a doomsday prepper",
  "used to be fat",
  "has a 132 pound scrotum",
  "is pregnant and so is her teen",
  "is a Juggalo",
  "is an otherkin",
  "is a Civil War reenactor",
  "has a bee allergy"
]

var crazyJobsArray = [
 "an able seaman",
 "an account collector",
 "an accounting specialist",
 "an adjustment clerk",
 "an administrative assistant",
 "an administrative law judge",
 "an administrative service manager",
 "an admiralty lawyer",
 "an adult literacy and remedial education teacher",
 "an advertising account executive",
 "an advertising agency coordinator",
 "an aeronautical and aerospace engineer",
 "an aerospace engineering technician",
 "an agricultural crop farm manager",
 "an agricultural engineer",
 "an agricultural equipment operator",
 "an agricultural inspector",
 "an agricultural product sorter",
 "an agricultural sciences professor",
 "an agricultural technician",
 "an air crew member",
 "an air crew officer",
 "an air traffic controller",
 "an aircraft assembler",
 "an aircraft body and bonded structure repairer",
 "an aircraft cargo handling supervisor",
 "an aircraft examiner",
 "an aircraft launch and recovery officer",
 "an aircraft launch and recovery specialist",
 "an aircraft mechanic",
 "an airfield operations specialist",
 "an airline flight attendant",
 "an airline flight control administrator",
 "an airline flight operations administrator",
 "an airline flight reservations administrator",
 "an airport administrator",
 "an airport design engineer",
 "an alcohol and drug abuse assistance coordinator",
 "an alumni relations coordinator",
 "an ambulance driver",
 "an amusement park and recreation attendant",
 "an anesthesiologist",
 "an animal breeder",
 "an animal control worker",
 "an animal husbandry worker supervisor",
 "an animal groomer",
 "an animal kennel supervisor",
 "an animal scientist",
 "an animal trainer",
 "an animation cartoonist",
 "an answering service operator",
 "an anthropology and archeology professor",
 "an anti-terrorism intelligence agent",
 "an appeals referee",
 "an fish farmer",
 "an aquarium curator",
 "an architecture professor",
 "an area, ethnic, and cultural studies professor",
 "an armored assault vehicle crew member",
 "an armored assault vehicle officer",
 "an art appraiser",
 "an art director",
 "an art restorer",
 "an art therapist",
 "an art, drama, and music professor",
 "an artillery and missile crew member",
 "an artillery and missile officer",
 "an athletes' business manager",
 "an athletic coach",
 "an athletic director",
 "an athletic trainer",
 "an ATM machine servicer",
 "an atmospheric and space scientist",
 "an audio-visual collections specialist",
 "an audiovisual production specialist",
 "an automobile mechanic",
 "an automotive body repairer",
 "an automotive engineer",
 "an automotive glass installer",
 "an avionics technician",
 "a bellhop",
 "a baker ",
 "a ballistics expert",
 "a bank manager",
 "a bank examiner",
 "a bank teller",
 "a benefits manager",
 "a bicycle mechanic",
 "a billing specialist",
 "a bindery machine set-up operator",
 "a bindery machine tender",
 "a biological technician",
 "a biology professor",
 "a biomedical engineer",
 "a biomedical equipment technician",
 "a boat builder",
 "a book editor",
 "a border patrol agent",
 "a bridge and lock tender",
 "a broadcast news analyst",
 "a broadcast technician",
 "a broker's floor representative",
 "a brokerage clerk",
 "a budget accountant",
 "a budget analyst",
 "a building inspector",
 "a building maintenance mechanic",
 "a bulldozer operator",
 "a bus and truck mechanics",
 "a busboy",
 "a busgirl",
 "a school bus driver",
 "a city bus driver",
 "a business professor",
 "a business service specialist",
 "a cabinet maker",
 "a summer camp director",
 "a caption writer",
 "a cardiologist",
 "a cardiopulmonary technologist",
 "a career counselor",
 "a cargo and freight agents",
 "a carpenter's assistant",
 "a carpet installer",
 "a cartographer",
 "a cartoonist",
 "a casino cage worker",
 "a casino cashier",
 "a casino dealer",
 "a casino floor person",
 "a casino manager",
 "a casino pit boss",
 "a casino slot machine mechanic",
 "a casino surveillance officer",
 "a casting director",
 "a catering administrator",
 "a ceiling tile installer",
 "a cement mason",
 "a ceramic engineer",
 "a certified public accountant",
 "a prison chaplain",
 "a military chaplain",
 "a hospital chaplain",
 "a chemical engineer",
 "a chemical equipment operator",
 "a chemical plant operator",
 "a chemical technicians",
 "a chemistry professor",
 "a chief financial officer",
 "a child care center administrator",
 "a child care worker",
 "a child life specialist",
 "a child support investigator",
 "a child support services worker",
 "a city planning aide",
 "a civil drafter",
 "a civil engineer",
 "a civil engineering technician",
 "a minister",
 "a imam",
 "a rabbi",
 "a priest",
 "a clinical dietitian",
 "a clinical psychologist",
 "a clinical sociologist",
 "a coatroom attendant", 
 "a dressing room attendant",
 "a college professor",
 "a commercial designer",
 "a commercial diver",
 "a commercial fisherman",
 "a communication equipment mechanic",
 "a communications professor",
 "a community health nurse",
 "a community organization worker",
 "a community welfare worker",
 "a compensation administrator",
 "a compensation specialist",
 "a compliance officer",
 "a computer aided design technician",
 "a computer and information scientist",
 "a computer and information systems managers",
 "a computer applications engineer",
 "a computer controlled machine tool operator",
 "a computer customer support specialist",
 "a computer hardware technician",
 "a computer operator",
 "a computer programmer",
 "a computer science professor",
 "a computer security specialist",
 "a computer software engineer",
 "a computer software technician",
 "a computer systems engineer",
 "a congressional aide",
 "a conservation scientist",
 "a construction driller",
 "a construction laborer",
 "a construction manager",
 "a construction trades supervisor",
 "a contract administrator",
 "a contract specialist",
 "a military control center specialist",
 "a controller",
 "a cafeteria cook",
 "a fast food cook",
 "a private household cook",
 "a restaurant cook",
 "a short order cook",
 "a copy writer",
 "a corporation lawyer",
 "a correction officer",
 "a correspondence clerk",
 "a cosmetologist",
 "a hair stylist",
 "a cost accountant",
 "a cost analysis engineer",
 "a cost estimator",
 "a costume attendant",
 "a counseling psychologist",
 "a counter and rental clerk",
 "a county or city auditor",
 "a couriers and messenger",
 "a court administrator",
 "a court clerk",
 "a court reporter",
 "a craft artist",
 "a crane operator",
 "a credit adjuster",
 "a credit analyst",
 "a credit reporter",
 "a criminal investigator",
 "a criminal justice professor",
 "a criminal lawyer",
 "a crop workers supervisor",
 "a crossing guard",
 "a custom tailor",
 "a electric company customer service representative",
 "a customer service supervisor",
 "a customs inspector",
 "a cutting machine operators",
 "a dairy technologist",
 "a database administrator",
 "a deaf students teacher",
 "a delivery driver",
 "a demonstrators and product promoter",
 "a dental/orthodontic office administrator",
 "a dental assistant",
 "a dental hygienist",
 "a dental laboratory technician",
 "a dentist",
 "a dermatologist",
 "a desktop publishing specialist",
 "a developmental psychologist",
 "a die cutter operator",
 "a dietetic technician",
 "a dietitian and nutritionist",
 "a directory assistance operator",
 "a disabled students teacher",
 "a disk jockey",
 "a safety vehicle dispatcher",
 "a door to door salesmen",
 "a dry wall installer",
 "an economics professor",
 "an editorial writer for newspapers & magazines",
 "an education and training administrator",
 "an education professor",
 "an educational administrator",
 "an educational psychologist",
 "an educational resource coordinator",
 "an educational therapist",
 "an EEG technician",
 "an electric meter installer",
 "an electric motor mechanic",
 "an electrical and electronic inspector",
 "an electrical drafter",
 "an electrical engineer",
 "an electrical parts reconditioner",
 "an electrical technician",
 "an electro-mechanical technician",
 "an electromechanical equipment assembler",
 "an electronic drafter",
 "an electronics engineer",
 "an electronics technician",
 "an elementary school principal",
 "an elementary school teacher",
 "an elevator mechanic",
 "an emergency medical technician",
 "an employee benefits analyst",
 "an employee training instructor",
 "an employment administrator",
 "an employment and placement specialist",
 "an engine and machine assemblers",
 "an engineering managers",
 "an engineering professor",
 "an language and literature professor",
 "an environmental compliance inspector",
 "an environmental disease analyst",
 "an environmental engineer",
 "an environmental planner",
 "an environmental research analyst",
 "an environmental science technician",
 "an environmental science professsor",
 "an environmental technician",
 "an equal opportunity representative",
 "an engraver",
 "an excavating machine operator",
 "an excavating supervisor",
 "an executive secretary",
 "an exercise physiologist",
 "an exhibit artist",
 "an exhibit designer",
 "an experimental psychologist",
 "an explosives worker",
 "an export agent",
 "a fabric and apparel patternmaker",
 "a facilities planner",
 "a factory layout engineer",
 "a family caseworker",
 "a family practitioner",
 "a farm equipment mechanic",
 "a farm hand",
 "a farm labor contractor",
 "a farm manager",
 "a farm products purchasing agent",
 "a farmer",
 "a rancher",
 "a fashion artist",
 "a fashion coordinator",
 "a fashion designer",
 "a fashion model",
 "a fence installer",
 "a field contractor",
 "a field health officer",
 "a file clerk",
 "a film editor",
 "a film laboratory technician",
 "a finance manager",
 "a financial aid counselor",
 "a financial analyst",
 "a financial examiner",
 "a financial planner",
 "a financial services sales agent",
 "a fine artist",
 "a fire inspector",
 "a fire investigator",
 "a fire prevention engineer",
 "a fire protection engineer",
 "a fish and game warden",
 "a fish hatchery specialist",
 "a fishery worker supervisor",
 "a fitness trainer",
 "a flight engineer",
 "a floral designer",
 "a food and drug inspector",
 "a food batchmaker",
 "a food preparation worker",
 "a food science technician",
 "a food technologist",
 "a foreign exchange trader",
 "a foreign language interpreter",
 "a foreign language teacher",
 "a foreign language translator",
 "a foreign service officer",
 "a foreign service peacekeeping specialist",
 "a foreign student adviser",
 "a forensic science technicians",
 "a forensics psychologist",
 "a forest and conservation technician",
 "a forest engineer",
 "a forest fire prevention supervisor",
 "a forest fire inspector",
 "a forestry and conservation professor",
 "a forging machine operator",
 "a forklift and industrial truck operator",
 "a fraud investigator",
 "a freight and stock handler",
 "a fund raiser",
 "a funds development administrator",
 "a funeral director",
 "a furniture designer",
 "a furniture finisher",
 "a game runner",
 "a gas plant operator",
 "a general and operations manager",
 "a general farmworker",
 "a general internist",
 "a geography professor",
 "a geological data technician",
 "a geological technician ",
 "a glass blower",
 "a gluing machine operator",
 "a golf course superintendent",
 "a government budget analyst",
 "a government property inspector",
 "a government service executive",
 "a graduate teaching assistant",
 "a graphic designer",
 "a greenhouse and nursery manager",
 "a gynecologist",
 "a hand and portable tool mechanic",
 "a hand sewer",
 "a harbor master",
 "a harbor, lake & waterways police",
 "a hardwood floor finisher",
 "a hazardous materials removal worker",
 "a hazardous waste management analyst",
 "a health care facilities inspector",
 "a health case manager",
 "a health educator",
 "a health psychologist",
 "a hearing officer",
 "a heating, a/c, refrigeration technician",
 "a heavy equipment mechanic",
 "a high school administrator",
 "a high school guidance counselor",
 "a high school teacher",
 "a highway maintenance worker",
 "a highway patrol pilot",
 "a historic site administrator",
 "a historical archivist",
 "a history professor",
 "a home appliance installer",
 "a home appliance repairer",
 "a home economics teacher",
 "a home economist",
 "a home entertainment system installer",
 "a home health aide",
 "a home health technician",
 "a horticultural worker supervisor",
 "a horticulture therapist",
 "a vineyard horticulturist",
 "a hospital administrator",
 "a hospital nurse",
 "a host/hostess",
 "a hotel and motel desk clerk",
 "a hotel convention/events coordinator",
 "a hotel manager",
 "a housekeeping supervisor",
 "a human factors psychologist",
 "a human resources management advisor",
 "a human resources management consultant",
 "a hydraulic engineer",
 "an immigration inspector",
 "an industrial air pollution analyst",
 "an industrial arts teacher",
 "an industrial designer",
 "an industrial engineer",
 "an industrial engineering technician",
 "an industrial health engineer",
 "an industrial hygienist",
 "an industrial machinery mechanics",
 "an industrial relations analyst",
 "an industrial relations specialist",
 "an industrial therapist",
 "an industrial waste inspector",
 "an industrial-organizational psychologist",
 "an infantry officer",
 "an instructional coordinator",
 "an instructor, police-canine services",
 "an instrument technician",
 "an insulation installer",
 "an insurance adjuster",
 "an insurance agent",
 "an auto insurance appraiser",
 "an insurance claim examiner",
 "an insurance claims adjuster",
 "a government intelligence specialist",
 "an interior designer",
 "an internal auditor",
 "an interpreter for the hearing impaired",
 "an irradiated-fuel handler",
 "an irrigation engineer",
 "an IT administrator",
 "a janitorial supervisor",
 "a job analyst",
 "a job development specialist",
 "a job printer",
 "a kindergarten teacher",
 "a labor relations advisor",
 "a land surveyor",
 "a landscape architect",
 "a landscape contractor",
 "a lathe operator",
 "a law clerk",
 "a law professor",
 "a legal assistant",
 "a legal secretary",
 "a legislative assistant",
 "a library assistant",
 "a library consultant",
 "a library science professor",
 "a library technician",
 "a license clerk",
 "a licensed practical nurse",
 "a livestock commission agent",
 "a loan counselor",
 "a loan officer",
 "a locomotive engineer",
 "a log grader",
 "a logging tractor operator",
 "a logging worker supervisor",
 "a machine feeders and offbearer",
 "a mail clerk",
 "a mail machine operator",
 "a maintenance supervisor",
 "a theatrical makeup artist",
 "a management consultant (analyst)",
 "a nail technician",
 "a manual arts therapist",
 "a mapping technician",
 "a marina boat charter administrator",
 "a marine and aquatic biologist",
 "a marine architect",
 "a marine cargo surveyor",
 "a marine drafter",
 "a marine engineer",
 "a marine surveyor",
 "a port engineer",
 "a market research analyst",
 "a marketing manager",
 "a marking clerk",
 "a marriage and family therapist",
 "a massage therapist",
 "a materials engineer",
 "a materials inspector",
 "a materials scientist",
 "a math professor",
 "a mathematical technician",
 "a meat packer",
 "a butcher",
 "a mechanical drafter",
 "a mechanical engineer",
 "a mechanical engineering technician",
 "a mechanical inspector",
 "a medical administrative assistant",
 "a medical and public health social worker",
 "a medical and scientific illustrator",
 "a medical appliance technician",
 "a medical assistant",
 "a medical equipment preparer",
 "a medical examiner",
 "a medical insurance claims analyst",
 "a medical laboratory technician",
 "a medical photographer",
 "a medical records administrator",
 "a medical records technician",
 "a medical secretary",
 "a medical technologist",
 "a medical transcriptionist",
 "a mental health counselor",
 "a special education teacher",
 "a merchandise displayer",
 "a metal casting machine operator",
 "a metal fabricator",
 "a middle school principal",
 "a middle school guidance counselor",
 "a middle school teacher",
 "a military analyst",
 "a military officer",
 "a military-enlisted personnel",
 "a mill worker",
 "a mine cutting machine operator",
 "a mine inspector",
 "a mining engineer",
 "a mining machine operator",
 "a mining shovel machine operator",
 "a missing persons investigator",
 "a missionary worker",
 "a model maker",
 "a motion picture director",
 "a motion picture projectionist",
 "a motor vehicle inspector",
 "a motorboat mechanic",
 "a motorcycle mechanic",
 "a municipal fire fighting supervisor",
 "a museum curator",
 "a museum technicians and conservator",
 "a music arrangers and orchestrator",
 "a music director",
 "a music teacher",
 "a music therapist",
 "a musical instrument tuner",
 "a narcotics investigator",
 "a new accounts clerk",
 "a newspaper editor",
 "a newspaper/magazines writer",
 "a non-retail sales supervisor",
 "a nuclear engineer",
 "a nuclear equipment operation technician",
 "a nuclear fuels research engineer",
 "a nuclear medicine technologist",
 "a nuclear monitoring technician",
 "a nuclear power reactor operator",
 "a nuclear technicians",
 "a numerical tool programmer",
 "a nurse practitioner",
 "a nurse's aide",
 "a nursery workers",
 "a nursing professor",
 "an obstetrician",
 "an occupational analyst",
 "an occupational physician",
 "an occupational safety & health inspector",
 "an occupational therapist",
 "an occupational therapy assistant",
 "an oceanographic assistant",
 "an office clerk",
 "an office machine mechanic",
 "an office supervisor",
 "an offset press operator",
 "an operating engineer",
 "an operations management analyst",
 "an ophthalmic laboratory technician",
 "an ophthalmologist",
 "an oral and maxillofacial surgeon",
 "an order clerk",
 "an order filler",
 "an ordinary seaman",
 "an ornamental-metalwork designer",
 "an orthodontic assistant",
 "an orthodontic laboratory technician",
 "an orthodontist ",
 "an outdoor education teacher",
 "an overhead door installer",
 "a package designer",
 "a packaging machine operator",
 "a packer/packagers",
 "a painter",
 "a park naturalist",
 "a parking enforcement officer",
 "a parking lot attendant",
 "a parole officer",
 "a parts salesperson",
 "a patent agent",
 "a patent lawyer",
 "a pathologist",
 "a payroll and timekeeping clerk",
 "a pbx installer and repairer",
 "a peace corps worker",
 "a pediatric dentist",
 "a pediatrician",
 "a personal service supervisor",
 "a personnel administrator",
 "a personnel assistant",
 "a personnel recruiter",
 "a pest control worker",
 "a pesticide handler",
 "a petroleum engineer",
 "a petroleum geologist",
 "a petroleum laboratory assistant",
 "a petroleum refinery operator",
 "a petroleum technician",
 "a pharmacy aide",
 "a pharmacy technician",
 "a philosophy and religion professor",
 "a photo-optics technician",
 "a photoengraver",
 "a photogrammetric engineer",
 "a photographic equipment mechanic",
 "a photographic process worker",
 "a physical education instructor",
 "a physical therapist",
 "a physical therapist aide",
 "a physical therapy assistant",
 "a physician's assistant",
 "a physician's office nurse",
 "a physics professor",
 "a commercial airline pilot",
 "a plant breeder",
 "a plant manager",
 "a plasterer/stucco mason",
 "a plastic surgeon",
 "a platemaker",
 "a plumber",
 "a poet",
 "a lyricist",
 "a police and detectives supervisor",
 "a police artist",
 "a police identification and records officers",
 "a police officer",
 "a political science professor",
 "a political scientist",
 "a postal service clerk",
 "a postal service mail carrier",
 "a postal service mail sorter",
 "a postmaster/mail superintendent",
 "a power plant operator",
 "a power-line installer and mechanic",
 "a precision devices inspector and tester",
 "a preschool administrator",
 "a preschool teacher",
 "a pressing machine operator",
 "a pressure vessel inspector",
 "a printing/graphic arts reproduction technician",
 "a printmaker",
 "a private detective/investigator",
 "a private nurse",
 "a private sector executive",
 "a probate lawyer",
 "a probation officer",
 "a procurement clerk",
 "a product planner",
 "a product safety engineer",
 "a production planner",
 "a production, planning, and expediting clerk",
 "a professional sports scout",
 "a proofreader",
 "a property accountant",
 "a property assessor",
 "a property manager",
 "a props and lighting technician",
 "a prosthetic technician",
 "a psychiatric aide",
 "a psychiatric technician",
 "a psychiatrist",
 "a psychology professor",
 "a public health service officer",
 "a public relations manager",
 "a public relations specialist",
 "a public transportation inspector",
 "a publications editor",
 "a purchasing agent",
 "a purchasing manager",
 "a quality control inspector",
 "a quality control technician",
 "a quarry worker",
 "a radar and sonar technician",
 "a radiation protection engineer",
 "a radiation therapist",
 "a television announcer",
 "a news commentator",
 "a newscaster",
 "a producer",
 "a television showrunner",
 "a sports announcer",
 "a television station administrator",
 "a talk show host",
 "a radio mechanic",
 "a radio operator",
 "a radiologic technician",
 "a radiologic technologist",
 "a radiologist",
 "a rail yard engineer",
 "a railroad conductor",
 "a railroad engineer",
 "a railroad inspector",
 "a range manager",
 "a real estate appraiser",
 "a real estate assessor",
 "a real estate broker",
 "a real estate lawyer",
 "a real estate sales agent",
 "a recreation leader",
 "a recreational protective service worker",
 "a recreational therapist",
 "a recreational vehicle mechanic",
 "a umpire",
 "a refuse and recyclable material collector",
 "a registrar administrator",
 "a reliability engineer",
 "a religious institution education coordinator",
 "a reservation ticket agent",
 "a residence counselor",
 "a resource recovery engineer",
 "a resource teacher",
 "a respiratory care technician",
 "a respiratory therapist",
 "a respiratory therapy technician",
 "a restaurant food coordinator",
 "a restaurant manager",
 "a retail buyer",
 "a retail customer service representative",
 "a retail inventory control analyst",
 "a retail sales department supervisor",
 "a retail salesperson",
 "a retail store manager",
 "a revenue agent",
 "a safety inspector",
 "a sales engineer",
 "a sales floor stock clerk",
 "a sales manager",
 "a sales promoter",
 "a sanitary engineer",
 "a sawing machine operator",
 "a scanner operator",
 "a school nurse",
 "a school plant consultant",
 "a school psychologist",
 "a scientific linguist",
 "a scientific photographer",
 "a screen printing machine operator",
 "a screenwriter",
 "a script editor",
 "a securities broker",
 "a security and fire alarm systems installer",
 "a security guard",
 "a self-enrichment education teacher",
 "a septic tank and sewer servicer",
 "a service station attendant",
 "a set designer",
 "a set illustrator",
 "a sewing machine operator",
 "a sheet metal worker",
 "a ship carpenters and joiner",
 "a ship engineer",
 "a ship master",
 "a ship mate",
 "a ship pilot",
 "a shipping, receiving, and traffic clerk",
 "a shoe machine operator",
 "a signal switch repairer",
 "a skin care specialist",
 "a small engine mechanic",
 "a social and community service manager",
 "a social and human service assistant",
 "a social psychologist",
 "a social science research assistant",
 "a social service volunteer",
 "a social welfare administrator",
 "a social work professor",
 "a social worker",
 "a sociology professor",
 "a soil conservation technician",
 "a soil conservationist",
 "a soil engineer",
 "a soil scientist",
 "a solar energy systems designer",
 "a solid waste disposal administrator",
 "a sound engineering technician",
 "a special education administrator",
 "a special forces",
 "a special forces officer",
 "a speech pathologist",
 "a speech writer",
 "a sport psychologist",
 "a sports/entertainment agent",
 "a sports agent",
 "a sports events business manager",
 "a sports physician",
 "a sportswriter",
 "a stained glass artist",
 "a standards engineer",
 "a statement clerk",
 "a stationary engineer",
 "a statistical assistant",
 "a steel worker",
 "a storage and distribution manager",
 "a stress analyst engineer",
 "a structural drafter",
 "a structural engineer",
 "a student admissions administrator",
 "a student affairs administrator",
 "a student financial aid administrator",
 "a substance abuse counselor",
 "a subway and streetcar conductor",
 "a surgeon",
 "a surgical technician/technologist",
 "a survey researcher",
 "a surveying technician",
 "a switchboard operator",
 "a systems accountant",
 "a systems analyst, data processing",
 "a tax accountant",
 "a tax auditor",
 "a tax collector",
 "a tax examiner",
 "a tax lawyer",
 "a tax preparer",
 "a taxi driver",
 "a chauffeur",
 "a teacher of the blind",
 "a teachers aide",
 "a team assembler",
 "a technical & scientific publications editor",
 "a technical director/manager",
 "a technical illustrator",
 "a technical publications writer",
 "a technological espionage intelligence agent",
 "a telecommunications line installer and repairer",
 "a telecommunications maintenance worker",
 "a telecommunications technician",
 "a telephone station installer",
 "a textile bleaching and dyeing machine operator",
 "a textile cutting machine operator",
 "a textile designer",
 "a tile and marble setter",
 "a title examiner",
 "a title searcher",
 "a tool and machine designer",
 "a tool and die maker",
 "a tool grinder/filer/sharpener",
 "a tour guide",
 "a town clerk",
 "a traffic administrator",
 "a traffic agent",
 "a traffic technician",
 "a transit and railroad police",
 "a transportation attendant",
 "a transportation systems design engineer",
 "a travel agent",
 "a travel clerk",
 "a travel counselor",
 "a travel writer",
 "a treasurer",
 "a treatment plant operator",
 "a tree trimmer/pruner",
 "a truck driver, light duty",
 "a truck driver, long distance",
 "an ultrasound technologist",
 "an unemployment inspector",
 "an urban and regional planner",
 "an usher",
 "a utility meter reader",
 "a vending machine mechanic",
 "a veterinarian",
 "a veterinarian technician",
 "a veterinary assistant",
 "a video engineer",
 "a vocational education instructor",
 "a vocational rehabilitation counselor",
 "a voice pathologist",
 "a waiter/waitress",
 "a warehouse stock clerk",
 "a watch repairer",
 "a water pollution control inspector",
 "a weather observer",
 "a web art director",
 "a weigher/measurer",
 "a welder",
 "a welfare eligibility worker/interviewer",
 "a wholesale buyer",
 "a wildlife biologist",
 "a wildlife control agent",
 "a window treatment specialist",
 "a woodworking machine operator",
 "a word processing specialist",
 "a writer/author",
 "a zoo veterinarian",
 "a zoologist"
 ]

