import { initializeApp, type FirebaseApp } from 'firebase/app';
import {
	getAuth,
	signOut,
	type User,
	onAuthStateChanged,
	signInWithPopup,
	GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyB-EvNm9Aww4J0TrR_fDONa5SxTOpGiDzE',
	authDomain: 'ee-commerce-3118e.firebaseapp.com',
	projectId: 'ee-commerce-3118e',
	storageBucket: 'ee-commerce-3118e.appspot.com',
	messagingSenderId: '578286485985',
	appId: '1:578286485985:web:fb97df3840d46c9bdbd2a0'
};

export function initFirebase() {
	return initializeApp(firebaseConfig);
}

export function loginWithGoogle(app: FirebaseApp) {
	const auth = getAuth(app);
	signInWithPopup(auth, new GoogleAuthProvider());
}

export async function logoutFirebaseApp(app: FirebaseApp) {
	const auth = getAuth(app);
	signOut(auth);
}

export function onUserAuthStateChanged(
	app: FirebaseApp,
	callback: (auth: User | null) => void
) {
	const auth = getAuth(app);
	onAuthStateChanged(auth, callback);
}
