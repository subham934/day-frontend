API Calling ka Poora Flow — Chapter 20
Ye project RAWG Games API use karta hai aur data flow kuch is tarah hai:

api.js → gameLoader.jsx → AppRouter.jsx → Home.jsx

🔧 1. api.js — Axios Instance (Foundation)
js
import axios from "axios";
export const api = axios.create({
  baseURL: `https://api.rawg.io/api/`,
});
a). Yahan ek reusable Axios instance banayi gayi hai.
b). baseURL set kar diya — matlab ab hume har baar poora URL nahi likhna, sirf /games jaisa endpoint likho toh kaam chalega.
c). Ye instance api naam se export hoti hai, aur poore project mein use hoti hai.

📡 2. gameLoader.jsx — API Call karta hai
js
export const gameLoader = async () => {
  try {
    const res = await api.get("/games", {
      params: {
        key: import.meta.env.VITE_API_KEY,  // .env se API key
      },
    });
    return res;  // ✅ Response return karo
  } catch (error) {
    console.log(error);
    return error;
  }
};
Ye ek async function (loader) hai jo RAWG API se games ka data fetch karta hai.
api.get("/games") → full URL banega: https://api.rawg.io/api/games
params: { key: ... } → API Key query string mein automatically lagti hai: ?key=YOUR_KEY
Ye useEffect nahi use karta! Kyunki React Router ka Loader Pattern use ho raha hai (neeche explain).
🗺️ 3. AppRouter.jsx — Loader ko Route se connect karta hai
jsx
{
  index: true,        // "/" route
  element: <Home />,  // Ye component render hoga
  loader: gameLoader, // ✅ Home render hone SE PEHLE ye function chalega
}
loader: gameLoader — yahi sabse important line hai!
Jab bhi user / route pe jaata hai, React Router pehle gameLoader function ko call karta hai.
Data aa jaane ke baad hi <Home /> component render hota hai.
hydrateFallbackElement: <p>Loading...</p> → jab tak data aa raha hai, Loading dikhata hai.
💡 Ye traditional pattern nahi hai jahan component render hone ke baad useEffect mein API call hoti. Yahan Router hi API call manage karta hai!

🏠 4. Home.jsx — Data use karta hai
jsx
import { useLoaderData } from "react-router";
const Home = () => {
  const { data } = useLoaderData(); // ✅ Loader ka return value yahan milta hai
  return (
    <div>
      {data.results.map((game) => (
        <Cards key={game.id} game={game} />
      ))}
    </div>
  );
};
useLoaderData() → React Router ka hook hai jo loader function ka return value deta hai.
Loader ne res return kiya tha → Axios response ka structure hota hai { data: { results: [...] } }.
Isliye useLoaderData() se { data } destructure kiya, aur phir data.results se games ki list mili.
Koi useState, useEffect, ya loading state manage nahi karni — Router ne sab handle kar liya!
🔄 Complete Flow Summary
User visits "/"
      ↓
AppRouter dekhta hai: "is route ka loader hai?"
      ↓ (haan! gameLoader hai)
gameLoader() call hota hai
      ↓
api.get("/games?key=...") → RAWG API se data fetch
      ↓
Response return hota hai
      ↓
<Home /> render hota hai
      ↓
useLoaderData() se data milta hai
      ↓
data.results.map() → <Cards /> render hote hain 🎮
⚡ Traditional vs Loader Pattern
Traditional (useEffect)	Loader Pattern (React Router)
API call kab?	Component render ke baad	Component render se pehle
Loading state?	Manually manage karo	Router handle karta hai
Code kahan?	Component ke andar	Alag loader function mein
Hook	useEffect + useState	useLoaderData()
Loader pattern cleaner, faster aur maintainable hai! 🚀

7:52 PM
