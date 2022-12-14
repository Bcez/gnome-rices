// List of official time zones from:
// http://www.ietf.org/timezones/data/zone.tab

// In approximate increasing longitude.
var availableRegions = [
  'America',
  'Atlantic',
  'Arctic',
  'Africa',
  'Europe',
  'Indian',
  'Asia',
  'Pacific',
  'Australia',
  'Antarctica',
];

// In order of increasing longitude.
// Those not supported by Chrome are commented out.
var availableTimezones = {
  'Africa': [
    'Dakar',
  	'Banjul',
  	'Nouakchott',
  	'Bissau',
  	'Conakry',
  	'Freetown',
  	'El_Aaiun',
  	'Monrovia',
  	'Bamako',
  	'Casablanca',
  	'Ceuta',
  	'Abidjan',
  	'Ouagadougou',
  	'Accra',
  	'Lome',
  	'Niamey',
//  	'Porto-Novo',
  	'Algiers',
  	'Lagos',
  	'Sao_Tome',
  	'Malabo',
  	'Libreville',
  	'Douala',
  	'Tunis',
  	'Tripoli',
  	'Luanda',
  	'Ndjamena',
  	'Brazzaville',
  	'Kinshasa',
  	'Windhoek',
  	'Bangui',
  	'Gaborone',
  	'Lubumbashi',
  	'Maseru',
  	'Johannesburg',
  	'Lusaka',
  	'Bujumbura',
  	'Kigali',
  	'Harare',
  	'Mbabane',
  	'Cairo',
  	'Juba',
  	'Kampala',
  	'Khartoum',
  	'Maputo',
  	'Blantyre',
  	'Nairobi',
  	'Addis_Ababa',
  	'Asmara',
//  	'Dar_es_Salaam',
  	'Djibouti',
  	'Mogadishu',
  ],
  'America': [
    'Adak',
  	'Nome',
  	'Anchorage',
  	'Yakutat',
  	'Dawson',
  	'Sitka',
  	'Whitehorse',
  	'Juneau',
  	'Inuvik',
  	'Metlakatla',
  	'Vancouver',
  	'Dawson_Creek',
  	'Los_Angeles',
  	'Tijuana',
  	'Creston',
  	'Boise',
  	'Santa_Isabel',
  	'Yellowknife',
  	'Edmonton',
  	'Phoenix',
  	'Hermosillo',
  	'Swift_Current',
  	'Mazatlan',
  	'Chihuahua',
  	'Bahia_Banderas',
  	'Cambridge_Bay',
  	'Denver',
  	'Regina',
  	'Ojinaga',
//  	'North_Dakota/Beulah',
//  	'North_Dakota/New_Salem',
//  	'North_Dakota/Center',
  	'Monterrey',
  	'Mexico_City',
  	'Matamoros',
  	'Winnipeg',
  	'Resolute',
  	'Rainy_River',
  	'Rankin_Inlet',
  	'Atikokan',
  	'Guatemala',
  	'Merida',
  	'Thunder_Bay',
  	'El_Salvador',
  	'Nipigon',
  	'Belize',
  	'Chicago',
  	'Menominee',
//  	'Indiana/Vincennes',
//  	'Indiana/Petersburg',
  	'Tegucigalpa',
  	'Cancun',
//  	'Indiana/Tell_City',
//  	'Indiana/Knox',
//  	'Indiana/Winamac',
//  	'Indiana/Marengo',
  	'Managua',
  	'Indiana/Indianapolis',
  	'Kentucky/Louisville',
//  	'Indiana/Vevay',
//  	'Kentucky/Monticello',
  	'Costa_Rica',
  	'Detroit',
  	'Havana',
  	'Cayman',
  	'Guayaquil',
  	'Panama',
  	'Toronto',
  	'Nassau',
  	'Lima',
  	'Jamaica',
  	'Bogota',
  	'New_York',
//  	'Port-au-Prince',
  	'Grand_Turk',
  	'Santiago',
  	'Aruba',
  	'Santo_Domingo',
  	'Eirunepe',
//  	'Argentina/Rio_Gallegos',
  	'Curacao',
  	'Argentina/Mendoza',
  	'Thule',
//  	'Argentina/San_Juan',
  	'Iqaluit',
//  	'Argentina/Ushuaia',
  	'Kralendijk',
  	'La_Paz',
  	'Rio_Branco',
  	'Caracas',
//  	'Argentina/La_Rioja',
//  	'Argentina/San_Luis',
  	'Puerto_Rico',
  	'Argentina/Catamarca',
  	'Pangnirtung',
//  	'Argentina/Salta',
  	'Argentina/Jujuy',
//  	'Argentina/Tucuman',
  	'St_Thomas',
  	'Moncton',
  	'Tortola',
  	'Argentina/Cordoba',
  	'Porto_Velho',
  	'Halifax',
  	'Marigot',
  	'Anguilla',
  	'Lower_Princes',
  	'St_Barthelemy',
  	'St_Kitts',
  	'Montserrat',
  	'Antigua',
  	'Grenada',
  	'Guadeloupe',
//  	'Port_of_Spain',
  	'Dominica',
  	'St_Vincent',
  	'Martinique',
  	'St_Lucia',
  	'Boa_Vista',
  	'Goose_Bay',
  	'Manaus',
  	'Glace_Bay',
  	'Barbados',
  	'Argentina/Buenos_Aires',
  	'Guyana',
  	'Asuncion',
//  	'Blanc-Sablon',
  	'Miquelon',
  	'Montevideo',
  	'Cuiaba',
  	'Paramaribo',
  	'Santarem',
  	'Campo_Grande',
  	'St_Johns',
  	'Cayenne',
  	'Godthab',
  	'Belem',
  	'Araguaina',
  	'Sao_Paulo',
  	'Bahia',
  	'Fortaleza',
  	'Maceio',
  	'Recife',
  	'Noronha',
  	'Scoresbysund',
  	'Danmarkshavn',
  ],
  'Antarctica': [
    'Rothera',
  	'Palmer',
//  	'Troll',
  	'Syowa',
  	'Mawson',
  	'Davis',
  	'Vostok',
  	'Casey',
//  	'DumontDUrville',
  	'Macquarie',
//  	'McMurdo',
  ],
  'Arctic': [
    'Longyearbyen',
  ],
  'Asia': [
    'Nicosia',
  	'Gaza',
  	'Hebron',
  	'Jerusalem',
  	'Beirut',
  	'Amman',
  	'Damascus',
  	'Baghdad',
  	'Yerevan',
  	'Tbilisi',
  	'Aden',
  	'Riyadh',
  	'Kuwait',
  	'Baku',
  	'Aqtau',
  	'Bahrain',
  	'Oral',
  	'Tehran',
  	'Qatar',
  	'Dubai',
  	'Aqtobe',
  	'Ashgabat',
  	'Muscat',
  	'Yekaterinburg',
  	'Qyzylorda',
  	'Samarkand',
  	'Karachi',
  	'Dushanbe',
  	'Kabul',
  	'Tashkent',
  	'Omsk',
  	'Bishkek',
//  	'Kashgar',
  	'Almaty',
  	'Colombo',
  	'Novosibirsk',
  	'Kathmandu',
  	'Novokuznetsk',
  	'Urumqi',
  	'Kolkata',
  	'Thimphu',
  	'Dhaka',
  	'Hovd',
  	'Krasnoyarsk',
  	'Rangoon',
  	'Bangkok',
  	'Kuala_Lumpur',
  	'Vientiane',
  	'Singapore',
  	'Irkutsk',
  	'Phnom_Penh',
//  	'Chongqing',
  	'Ho_Chi_Minh',
  	'Jakarta',
  	'Ulaanbaatar',
  	'Pontianak',
  	'Kuching',
  	'Macau',
  	'Hong_Kong',
  	'Choibalsan',
  	'Brunei',
  	'Makassar',
  	'Manila',
  	'Shanghai',
  	'Taipei',
  	'Dili',
  	'Pyongyang',
//  	'Harbin',
  	'Seoul',
  	'Yakutsk',
  	'Vladivostok',
  	'Khandyga',
  	'Tokyo',
  	'Jayapura',
  	'Sakhalin',
//  	'Ust-Nera',
  	'Magadan',
  	'Kamchatka',
  	'Anadyr',
  ],
  'Atlantic': [
    'Bermuda',
  	'Stanley',
  	'South_Georgia',
  	'Azores',
  	'Cape_Verde',
  	'Reykjavik',
  	'Madeira',
  	'Canary',
  	'Faroe',
  	'St_Helena',
  ],
  'Australia': [
    'Perth',
  	'Eucla',
  	'Darwin',
  	'Adelaide',
  	'Broken_Hill',
  	'Currie',
  	'Melbourne',
  	'Hobart',
  	'Lindeman',
  	'Sydney',
  	'Brisbane',
  	'Lord_Howe',
  ],
  'Europe': [
    'Lisbon',
  	'Dublin',
  	'Gibraltar',
//  	'Isle_of_Man',
  	'Madrid',
  	'Guernsey',
  	'Jersey',
  	'London',
  	'Andorra',
  	'Paris',
  	'Brussels',
  	'Amsterdam',
  	'Luxembourg',
  	'Monaco',
  	'Zurich',
  	'Busingen',
  	'Vaduz',
  	'Oslo',
  	'Vatican',
  	'San_Marino',
  	'Rome',
  	'Copenhagen',
  	'Berlin',
  	'Prague',
  	'Malta',
  	'Ljubljana',
  	'Zagreb',
  	'Vienna',
  	'Bratislava',
  	'Stockholm',
  	'Sarajevo',
  	'Budapest',
  	'Podgorica',
  	'Tirane',
  	'Mariehamn',
  	'Belgrade',
  	'Kaliningrad',
  	'Warsaw',
  	'Skopje',
  	'Uzhgorod',
  	'Sofia',
  	'Athens',
  	'Riga',
  	'Tallinn',
  	'Helsinki',
  	'Vilnius',
  	'Bucharest',
  	'Minsk',
  	'Chisinau',
  	'Istanbul',
  	'Kiev',
  	'Simferopol',
  	'Zaporozhye',
  	'Moscow',
  	'Volgograd',
  	'Samara',
  ],
  'Indian': [
    'Comoro',
  	'Mayotte',
  	'Antananarivo',
  	'Reunion',
  	'Mahe',
  	'Mauritius',
  	'Kerguelen',
  	'Chagos',
  	'Maldives',
  	'Cocos',
  	'Christmas',
  ],
  'Pacific': [
    'Midway',
  	'Chatham',
  	'Wallis',
  	'Tongatapu',
  	'Apia',
  	'Fakaofo',
  	'Enderbury',
  	'Pago_Pago',
  	'Niue',
  	'Johnston',
  	'Rarotonga',
  	'Honolulu',
  	'Kiritimati',
  	'Tahiti',
  	'Marquesas',
  	'Gambier',
  	'Pitcairn',
  	'Easter',
  	'Galapagos',
  	'Palau',
  	'Guam',
  	'Saipan',
  	'Port_Moresby',
  	'Chuuk',
  	'Pohnpei',
  	'Guadalcanal',
  	'Kosrae',
  	'Noumea',
  	'Wake',
  	'Nauru',
  	'Kwajalein',
  	'Norfolk',
  	'Efate',
  	'Majuro',
  	'Tarawa',
  	'Auckland',
  	'Fiji',
  	'Funafuti',
  ],
};

// Maps official timezone (listed in availableTimezones) to timezone name used by Chrome.
// Adapted from base/i18n/timezone.cc.
var timezoneReplacements = {
  "Africa/Asmara": "Africa/Asmera",
  "America/Argentina/Buenos_Aires": "America/Buenos_Aires",
  "America/Argentina/Catamarca": "America/Catamarca",
  "America/Argentina/Cordoba": "America/Cordoba",
  "America/Argentina/Jujuy": "America/Jujuy",
  "America/Argentina/Mendoza": "America/Mendoza",
  "America/Atikokan": "America/Coral_Harbour",
  "America/Indiana/Indianapolis": "America/Indianapolis",
  "America/Kentucky/Louisville": "America/Louisville",
  "Asia/Ho_Chi_Minh": "Asia/Saigon",
  "Asia/Kathmandu": "Asia/Katmandu",
  "Asia/Kolkata": "Asia/Calcutta",
  "Atlantic/Faroe": "Atlantic/Faeroe",
  "Pacific/Chuuk": "Pacific/Truk",
  "Pacific/Pohnpei": "Pacific/Ponape",
};