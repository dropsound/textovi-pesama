import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const Preview = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp({
        // Add your Firebase configuration options here
      });
    }

    // Get a reference to your database
    const db = firebase.database().ref('/path/to/data');

    // Attach a listener for the 'value' event
    db.on('value', snapshot => {
      setData(snapshot.val());
    });

    // Detach the listener when the component unmounts
    return () => {
      db.off();
    };
  }, []);

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Preview;