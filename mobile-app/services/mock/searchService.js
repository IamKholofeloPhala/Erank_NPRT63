const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const destinations = [
  {
    id: '1',
    name: 'Kimberley CBD',
    taxis: 18,
    queue: 6,
    lastTaxi: '21:45',
  },
  {
    id: '2',
    name: 'Galeshewe',
    taxis: 12,
    queue: 4,
    lastTaxi: '21:30',
  },
  {
    id: '3',
    name: 'Roodepan',
    taxis: 9,
    queue: 2,
    lastTaxi: '20:45',
  },
  {
    id: '4',
    name: 'Cassandra',
    taxis: 7,
    queue: 3,
    lastTaxi: '20:30',
  },
  {
    id: '5',
    name: 'Greenpoint',
    taxis: 5,
    queue: 1,
    lastTaxi: '20:00',
  },
];

export async function searchDestinations(searchText = '') {
  await delay(500);

  const query = searchText.trim().toLowerCase();

  if (!query) {
    return destinations;
  }

  return destinations.filter((item) =>
    item.name.toLowerCase().includes(query)
  );
}

export async function getPopularDestinations() {
  await delay(300);

  return destinations.slice(0, 3);
}