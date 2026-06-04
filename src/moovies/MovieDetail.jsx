import { useParams, NavLink, Outlet } from "react-router";

const movies = [
  {
    id: 1,
    title: "ინცეფშენი",
    year: 2010,
    director: "კრისტოფერ ნოლანი",
    summary: "სიზმრებში შეღწევის ოსტატი ცდილობს იდეის 'ჩანერგვას'.",
    reviews: ["ვიზუალურად გენიალურია", "ბოლომდე გონებას ტვირთავს"],
    specs: { genre: "Sci-Fi", duration: 148, rating: 8.8 },
  },
  {
    id: 2,
    title: "მატრიცა",
    year: 1999,
    director: "ვაჩოვსკები",
    summary: "ნეო აღმოაჩენს, რომ რეალობა სიმულაციაა.",
    reviews: ["ჟანრი შეცვალა", "წითელი თუ ლურჯი აბი?"],
    specs: { genre: "Sci-Fi", duration: 136, rating: 8.7 },
  },
  {
    id: 3,
    title: "ინტერსტელარი",
    year: 2014,
    director: "კრისტოფერ ნოლანი",
    summary: "ასტრონავტები ეძებენ კაცობრიობის ახალ სახლს.",
    reviews: ["მუსიკა ჯადოა", "ცრემლი მომივიდა"],
    specs: { genre: "Sci-Fi", duration: 169, rating: 8.6 },
  },
];

export default function MovieDetail() {
  const { id } = useParams();

  function findMovie(id) {
    return movies.find((m) => m.id == id);
  }
  const movie = findMovie(id);

  return (
    <div>
      <nav className=" gap-10 flex flex-col ">
        <NavLink to="" className="border-2 border-amber-500">
          აღწერა
        </NavLink>
        <NavLink to="reviews" className="border-2 border-amber-500">
          მიმოხილვები
        </NavLink>
        <NavLink to="specs" className="border-2 border-amber-500">
          მახასიათებლები
        </NavLink>
      </nav>

      {/* აქ ჩაირენდერება აქტიური ჩანართი (child როუტი).
          movie-ს context-ით გადავცემთ child-ებს, რომ ხელახლა არ მოძებნონ. */}
      <Outlet context={movie} />
    </div>
  );
}
