import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useAuth } from '../contexts/AuthContext';

export function useUserData() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    async function fetchUserData() {
      if (!currentUser) {
        setLoading(false);
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, 'user', currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          setError('User data not found');
        }
      } catch (err) {
        setError('Failed to fetch user data: ' + err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [currentUser]);

  return { userData, loading, error };
}
