'use client'

import './globals.css'
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'

export default function RootLayout({ children }) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <html lang="en">
      <body>
        <nav>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/test-iq'>Test IQ</a>
              </li>
              <li>
                <a href='/allenamenti'>Allenamenti</a>
              </li>
              {!user && (
                <>
                  <li>
                    <a href='/login'>Login</a>
                  </li>
                  <li>
                    <a href='/register'>Register</a>
                  </li>
                </>
              )}
              {user && <li>
                <a href='#' onClick={() => auth.signOut()}>Logout</a>
              </li>}
            </ul>
          </nav>
          <div>
            {user ? (
              <p>Utente loggato: {user.email}</p>
            ) : (
              <p>Utente non loggato</p>
            )}
          </div>
          {children}
      </body>
    </html>
  )
}
