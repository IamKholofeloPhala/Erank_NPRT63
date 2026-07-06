import { useEffect, useState } from 'react';
import { getPassengerDashboard } from '../services/mock/passengerService';

export default function usePassengerDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadDashboard() {
    try {
      setLoading(true);
      const response = await getPassengerDashboard();
      setData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  return {
    data,
    loading,
    refresh: loadDashboard,
  };
}