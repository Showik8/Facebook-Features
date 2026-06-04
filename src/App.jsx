import Movies from "./moovies/Movies";
import MovieSpecs from "./moovies/MovieSpecs";
import MovieDetail from "./moovies/MovieDetail";
import MovieReviews from "./moovies/MovieReviews";

import { Routes, Route, useNavigate } from "react-router-dom";
import LogIn from "./pages/LogIn";
import { useEffect, useState } from "react";
import Profile from "./pages/Profile";
import Info from "./components/Info";
import About from "./components/About";

const users = [
  {
    name: "Shota",
    surname: "Abashidze",
    dob: "08/10/2004",
    gender: "Male",
    email: "user@gmail.com",
    phone: "555112233",
    password: "Password",
    posts: [
      { title: "რალამაზი ამინდია", likes: 100 },
      { title: "მოვიგეთ", likes: 1500 },
      { title: "dzma sheni postebii dzaan magrebia", likes: 200 },
      { title: "მიწისძვრა თქვენც იგრძენით??", likes: 1600 },
    ],
    url: "https://scontent.ftbs1-1.fna.fbcdn.net/v/t39.30808-1/473038297_2020862784993115_2676973278614534533_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=S-kqn4NdVL4Q7kNvwFndEov&_nc_oc=AdqvC_JQpuqVq0JUUiPSUVGQXiRupIHUFvk3ujsBfw6iBz3I6D9R3iR6pqLX6lD43tM&_nc_zt=24&_nc_ht=scontent.ftbs1-1.fna&_nc_gid=kyMCjCvhUoZVi02iwD1MTQ&_nc_ss=7b2a8&oh=00_Af8aTm6UUm0eykuGynjutLyu0SWNWjk_mfscU_Xw_J_duw&oe=6A273146",
  },
  {
    name: "Giorgi",
    surname: "Nakashidze",
    dob: "01/05/2001",
    gender: "Male",
    email: "user2@gmail.com",
    phone: "555112234",
    post: [],
    password: "Password2",
    url: "https://scontent.ftbs1-1.fna.fbcdn.net/v/t39.30808-1/473038297_2020862784993115_2676973278614534533_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=S-kqn4NdVL4Q7kNvwFndEov&_nc_oc=AdqvC_JQpuqVq0JUUiPSUVGQXiRupIHUFvk3ujsBfw6iBz3I6D9R3iR6pqLX6lD43tM&_nc_zt=24&_nc_ht=scontent.ftbs1-1.fna&_nc_gid=kyMCjCvhUoZVi02iwD1MTQ&_nc_ss=7b2a8&oh=00_Af8aTm6UUm0eykuGynjutLyu0SWNWjk_mfscU_Xw_J_duw&oe=6A273146",
  },
];

const App = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const findUser = JSON.parse(localStorage.getItem("user"));

    if (findUser) {
      setUser(findUser);
      navigation("/profile");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LogIn setUser={setUser} users={users} />} />
      {user && (
        <Route path="/profile" element={<Profile user={user} />}>
          <Route path="info" element={<Info setUser={setUser} />} />
          <Route path="friends" element={<h1>Friends</h1>} />
          <Route path="about" element={<About setUser={setUser} />} />
        </Route>
      )}
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetail />}>
        <Route path="reviews" element={<MovieReviews />} />
        <Route path="specs" element={<MovieSpecs />} />
      </Route>
    </Routes>
  );
};

export default App;

// export const phones = [
//   {
//     id: 1,
//     name: "Apple iPhone 17e e-SIM Only | 256GB Soft Pink",
//     price: 1999,
//     oldPrice: 2199,
//     monthlyFrom: 55,
//     badge: "eSIM",
//     image:
//       "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F9632d4a4-a4d7-416e-a4e5-f9470bc1fed8_Thumb.jpeg&w=384&q=50",
//   },
//   {
//     id: 2,
//     name: "Samsung Galaxy S26 S942 5G 12/256GB Sky Blue",
//     price: 2349,
//     oldPrice: 2449,
//     monthlyFrom: 65,
//     badge: "BEST PRICE",
//     image:
//       "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F7b4f1b70-86b6-43f3-aed8-5c8b8797f9ab_Thumb.jpeg&w=384&q=50",
//   },
//   {
//     id: 3,
//     name: "Motorola RAZR 70 5G 8/256GB Pantone Hematite",
//     price: 2299,
//     oldPrice: 2499,
//     monthlyFrom: 63,
//     badge: "BEST PRICE",
//     image:
//       "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fd364d7a1-6133-46a2-b3b7-6283c30042c0_Thumb.png&w=384&q=50",
//   },
//   {
//     id: 4,
//     name: "Google Pixel 10A 5G 8/128GB Obsidian",
//     price: 1699,
//     oldPrice: null,
//     monthlyFrom: 47,
//     badge: "BEST PRICE",
//     image:
//       "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F079146d3-a272-4402-93ad-cdeb5f9518fb_Thumb.jpeg&w=384&q=50",
//   },
//   {
//     id: 5,
//     name: "Samsung Galaxy S25 FE 5G S731B/DS 8/128GB Jet Black",
//     price: 1499,
//     oldPrice: null,
//     monthlyFrom: 41,
//     badge: "BEST PRICE",
//     image:
//       "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Ffecd13a6-b8ff-45ab-8445-89c44b5bea73_Thumb.jpeg&w=384&q=50",
//   },
//   {
//     id: 6,
//     name: "Vivo V70 FE 5G 8/256GB Blue",
//     price: 1129,
//     oldPrice: 1229,
//     monthlyFrom: 31,
//     badge: "BEST PRICE",
//     image:
//       "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F47c8c3e6-e6ba-4eb0-acb3-7eef05cb00aa_Thumb.jpeg&w=384&q=50",
//   },
// ];
