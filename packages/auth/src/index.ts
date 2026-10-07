/**
 * Firebase Authentication
 * 
 * Central authentication system for the Marcos Dresbach monorepo.
 * Provides login, registration, password recovery, email verification,
 * and session management for all applications (public, member, admin).
 * 
 * Uses Firebase Authentication as the central identity provider.
 * Firebase UID is the primary identity, mapped to Neon PostgreSQL profiles.
 */

import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
  signOut,
  NextAuthContext,
  User as FirebaseUser
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

// Types
export interface FirebaseUserProfile {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
  emailVerified: boolean
  createdAt: string
  updatedAt: string
  // Custom fields
  role?: string
  module?: string
  phone?: string
}

export interface AuthState {
  user: FirebaseUserProfile | null
  loading: boolean
  error: string | null
}

// Authentication methods
export const authApi = {
  // Login
  login: async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      const userProfile = await getUserProfile(result.user.uid)
      return { success: true, user: userProfile }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  },

  // Registro
  register: async (name: string, email: string, password: string, phone?: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      
      // Update profile with display name
      await updateProfile(result.user, {
        displayName: name,
        photoURL: undefined
      })
      
      // Create user profile in Firestore
      await createUserProfile({
        uid: result.user.uid,
        email: result.user.email,
        displayName: name,
        phone,
        role: 'member', // Default role
        module: 'member-portal',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
      
      // Send email verification
      await sendEmailVerification(result.user)
      
      return { success: true, user: await getUserProfile(result.user.uid) }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  },

  // Password recovery
  resetPassword: async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email)
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  },

  // Email verification
  sendEmailVerification: async () => {
    try {
      await sendEmailVerification(auth.currentUser!)
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  },

  // Logout
  logout: async () => {
    try {
      await signOut(auth)
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  },

  // Auth state observer
  onAuthStateChanged: (callback: (user: FirebaseUserProfile | null) => void) => {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        const profile = await getUserProfile(user.uid)
        callback(profile)
      } else {
        callback(null)
      }
    })
  },

  // Get current user
  getCurrentUser: async (): Promise<FirebaseUserProfile | null> => {
    const user = auth.currentUser
    if (user) {
      return await getUserProfile(user.uid)
    }
    return null
  }
}

// Helper functions
const userDocRef = (uid: string) => doc(db, 'users', uid)

const createUserProfile = async (profile: FirebaseUserProfile) => {
  const ref = userDocRef(profile.uid)
  await setDoc(ref, {
    ...profile,
    createdAt: profile.createdAt,
    updatedAt: new Date().toISOString()
  }, { merge: true })
}

const getUserProfile = async (uid: string): Promise<FirebaseUserProfile> => {
  const ref = userDocRef(uid)
  const snap = await getDoc(ref)
  
  if (snap.exists()) {
    const data = snap.data() as FirebaseUserProfile
    return {
      uid,
      email: data.email,
      displayName: data.displayName,
      photoURL: data.photoURL,
      emailVerified: data.emailVerified || false,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      role: data.role,
      module: data.module,
      phone: data.phone
    }
  }
  
  // Create default profile if doesn't exist
  await createUserProfile({
    uid,
    email: auth.currentUser?.email,
    displayName: auth.currentUser?.displayName,
    photoURL: auth.currentUser?.photoURL,
    emailVerified: auth.currentUser?.emailVerified || false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    role: 'member',
    module: 'member-portal'
  })
  
  return {
    uid,
    email: auth.currentUser?.email,
    displayName: auth.currentUser?.displayName,
    photoURL: auth.currentUser?.photoURL,
    emailVerified: auth.currentUser?.emailVerified || false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    role: 'member',
    module: 'member-portal'
  }
}

// Export auth state
export const { Provider, Context } = (() => {
  let state: AuthState = {
    user: null,
    loading: true,
    error: null
  }

  return {
    Provider: ({ children }: { children: React.ReactNode }) => {
      // Initialize auth state
      // This would be used with React context
      return children
    },
    Context: {} as React.Context<AuthState>
  }
})()

export default auth