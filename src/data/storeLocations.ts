export interface StoreLocation {
  id: string;
  name: string;
  area: 'NAGA' | 'PARTIDO' | 'RINCONADA' | 'ALBAY';
  address: string;
  coordinates: [number, number]; // [latitude, longitude]
  contactNumber: string;
  businessHours: string;
  email?: string;
  manager?: string;
  services: string[];
  image?: string;
}

export const storeLocations: StoreLocation[] = [
  // Naga Area
  {
    id: 'bmc',
    name: 'Pizza Haus BMC',
    area: 'NAGA',
    address: 'BMC, Naga City',
    coordinates: [13.6234, 123.1945],
    contactNumber: '0916-348-2693',
    businessHours: '8:00 AM - 9:00 PM',
    email: 'pizzahaus.bmc@gmail.com',
    services: ['Dine-in', 'Takeout', 'Delivery'],
    image: '/stores/bmc.jpg'
  },
  {
    id: 'panganiban',
    name: 'Pizza Haus Panganiban',
    area: 'NAGA',
    address: 'Panganiban Drive, Naga City',
    coordinates: [13.6288, 123.1991],
    contactNumber: '0916-348-2694',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout', 'Delivery']
  },
  {
    id: 'tabuco',
    name: 'Pizza Haus Tabuco',
    area: 'NAGA',
    address: 'Tabuco, Naga City',
    coordinates: [13.6198, 123.1875],
    contactNumber: '0916-348-2695',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout']
  },
  {
    id: 'cbd',
    name: 'Pizza Haus CBD',
    area: 'NAGA',
    address: 'Central Business District, Naga City',
    coordinates: [13.6192, 123.1889],
    contactNumber: '0916-348-2696',
    businessHours: '8:00 AM - 10:00 PM',
    services: ['Dine-in', 'Takeout', 'Delivery']
  },
  {
    id: 'magsaysay',
    name: 'Pizza Haus Magsaysay',
    area: 'NAGA',
    address: 'Magsaysay Avenue, Naga City',
    coordinates: [13.6271, 123.1944],
    contactNumber: '0916-348-2697',
    businessHours: '8:00 AM - 10:00 PM',
    services: ['Dine-in', 'Takeout', 'Delivery']
  },
  {
    id: 'bagumbayan',
    name: 'Pizza Haus Bagumbayan',
    area: 'NAGA',
    address: 'Bagumbayan, Naga City',
    coordinates: [13.6215, 123.1956],
    contactNumber: '0916-348-2698',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout']
  },
  {
    id: 'centro',
    name: 'Pizza Haus Centro',
    area: 'NAGA',
    address: 'Centro, Naga City',
    coordinates: [13.6177, 123.1901],
    contactNumber: '0916-348-2699',
    businessHours: '8:00 AM - 10:00 PM',
    services: ['Dine-in', 'Takeout', 'Delivery']
  },
  {
    id: 'robinsons',
    name: 'Pizza Haus Robinsons Place Naga',
    area: 'NAGA',
    address: 'Robinsons Place, Naga City',
    coordinates: [13.6225, 123.1935],
    contactNumber: '0916-348-2700',
    businessHours: '10:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout']
  },
  {
    id: 'sm-naga',
    name: 'Pizza Haus SM City Naga',
    area: 'NAGA',
    address: 'SM City, Naga City',
    coordinates: [13.6280, 123.1827],
    contactNumber: '0916-348-2701',
    businessHours: '10:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout']
  },
  {
    id: 'yashano',
    name: 'Pizza Haus Yashano',
    area: 'NAGA',
    address: 'Yashano Mall, Naga City',
    coordinates: [13.6203, 123.1912],
    contactNumber: '0916-348-2702',
    businessHours: '10:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout']
  },
  {
    id: 'lcc',
    name: 'Pizza Haus LCC CBD Terminal 2',
    area: 'NAGA',
    address: 'LCC CBD Terminal 2, Naga City',
    coordinates: [13.6187, 123.1865],
    contactNumber: '0916-348-2703',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Takeout', 'Delivery']
  },

  // Partido Area
  {
    id: 'ocampo',
    name: 'Pizza Haus Ocampo',
    area: 'PARTIDO',
    address: 'Ocampo, Camarines Sur',
    coordinates: [13.5593, 123.3765],
    contactNumber: '0916-348-2704',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout']
  },
  {
    id: 'tigaon',
    name: 'Pizza Haus Tigaon',
    area: 'PARTIDO',
    address: 'Tigaon, Camarines Sur',
    coordinates: [13.6284, 123.5089],
    contactNumber: '0916-348-2705',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout', 'Delivery']
  },
  {
    id: 'goa-1',
    name: 'Pizza Haus Goa 1',
    area: 'PARTIDO',
    address: 'Goa, Camarines Sur',
    coordinates: [13.7003, 123.5036],
    contactNumber: '0916-348-2706',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout', 'Delivery']
  },
  {
    id: 'goa-2',
    name: 'Pizza Haus Goa 2',
    area: 'PARTIDO',
    address: 'Goa, Camarines Sur',
    coordinates: [13.7012, 123.5042],
    contactNumber: '0916-348-2707',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout']
  },
  {
    id: 'lagonoy',
    name: 'Pizza Haus Lagonoy',
    area: 'PARTIDO',
    address: 'Lagonoy, Camarines Sur',
    coordinates: [13.7331, 123.5331],
    contactNumber: '0916-348-2708',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout']
  },
  {
    id: 'pili',
    name: 'Pizza Haus Pili',
    area: 'PARTIDO',
    address: 'Pili, Camarines Sur',
    coordinates: [13.5829, 123.2829],
    contactNumber: '0916-348-2709',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout', 'Delivery']
  },
  {
    id: 'calabanga',
    name: 'Pizza Haus Calabanga',
    area: 'PARTIDO',
    address: 'Calabanga, Camarines Sur',
    coordinates: [13.7117, 123.2233],
    contactNumber: '0916-348-2710',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout']
  },

  // Rinconada Area
  {
    id: 'bula',
    name: 'Pizza Haus Bula',
    area: 'RINCONADA',
    address: 'Bula, Camarines Sur',
    coordinates: [13.4703, 123.2851],
    contactNumber: '0916-348-2711',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout']
  },
  {
    id: 'baao',
    name: 'Pizza Haus Baao',
    area: 'RINCONADA',
    address: 'Baao, Camarines Sur',
    coordinates: [13.4536, 123.3656],
    contactNumber: '0916-348-2712',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout', 'Delivery']
  },
  {
    id: 'iriga',
    name: 'Pizza Haus Iriga',
    area: 'RINCONADA',
    address: 'Iriga City, Camarines Sur',
    coordinates: [13.4324, 123.4112],
    contactNumber: '0916-348-2713',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout', 'Delivery']
  },
  {
    id: 'nabua',
    name: 'Pizza Haus Nabua',
    area: 'RINCONADA',
    address: 'Nabua, Camarines Sur',
    coordinates: [13.4108, 123.3767],
    contactNumber: '0916-348-2714',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout']
  },
  {
    id: 'nabua-sto-domingo',
    name: 'Pizza Haus Nabua Sto. Domingo',
    area: 'RINCONADA',
    address: 'Sto. Domingo, Nabua, Camarines Sur',
    coordinates: [13.4115, 123.3772],
    contactNumber: '0916-348-2715',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout']
  },

  // Albay Area
  {
    id: 'polangui',
    name: 'Pizza Haus Polangui',
    area: 'ALBAY',
    address: 'Polangui, Albay',
    coordinates: [13.2922, 123.4855],
    contactNumber: '0916-348-2716',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout', 'Delivery']
  },
  {
    id: 'tabaco-city',
    name: 'Pizza Haus Tabaco City',
    area: 'ALBAY',
    address: 'Tabaco City, Albay',
    coordinates: [13.3596, 123.7315],
    contactNumber: '0916-348-2717',
    businessHours: '8:00 AM - 9:00 PM',
    services: ['Dine-in', 'Takeout', 'Delivery']
  }
];

export const areaColors = {
  NAGA: '#FF6B6B',
  PARTIDO: '#4ECDC4',
  RINCONADA: '#9B59B6',
  ALBAY: '#F1C40F'
}; 