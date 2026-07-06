const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getPassengerDashboard() {
  await delay(700);

  return {
    greeting: 'Good Morning',
    passengerName: 'Passenger',

    availability: {
      taxis: 18,
      queue: 6,
      lastTaxi: '21:45',
      alerts: 2,
    },

    news: [
      {
        id: 1,
        title: 'No transport announcements available.',
      },
    ],
  };
}