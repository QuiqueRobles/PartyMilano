import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAut2zIjTH1ruTpKoX4f2bKLWr11geRB8I",
  authDomain: "partymilano-378f6.firebaseapp.com",
  projectId: "partymilano-378f6",
  storageBucket: "partymilano-378f6.appspot.com",
  messagingSenderId: "571200478793",
  appId: "1:571200478793:web:5c8b933d442a1a8592a998"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const clubsData = [
  {
    name: "Armani Privé",
    rating: 4.8,
    attendees: 250,
    image: "https://example.com/armani-prive.jpg",
    price: 30,
    category: "Luxury",
    description: "Experience the epitome of Milan nightlife at Armani Privé.",
    address: "Via Manzoni 31, 20121 Milano",
    openingHours: "23:00 - 04:00",
    dressCode: "Elegant",
    musicGenre: "House, Electronic"
  },
  {
    name: "Just Cavalli",
    rating: 4.6,
    attendees: 200,
    image: "https://example.com/just-cavalli.jpg",
    price: 25,
    category: "Fashion",
    description: "Immerse yourself in the glamorous world of Roberto Cavalli at this trendy nightclub.",
    address: "Via Luigi Camoens, 20121 Milano",
    openingHours: "23:30 - 05:00",
    dressCode: "Smart Casual",
    musicGenre: "Pop, R&B"
  },
  // Add more club data here...
];

async function populateClubs() {
  for (const club of clubsData) {
    try {
      const docRef = await addDoc(collection(db, "clubs"), club);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}

populateClubs().then(() => console.log("Population complete")).catch(console.error);