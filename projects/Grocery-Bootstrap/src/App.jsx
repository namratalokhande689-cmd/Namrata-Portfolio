import HeroFullSlide from "./Components/HeroFullSlide";
import NavbarComponent from "./Components/NavbarComponent";
import Cards from "./Components/Cards";
import CategoriesPopularProducts from "./Components/CategoriesPopularProducts";
import LifeStyles from "./Components/LifeStyles";
import SpecialProducts from "./Components/SpecialProducts";
import RecipesCards from "./Components/RecipesCards";
import Download from "./Components/Download";
import FooterSection from "./Components/FooterSection";

function App() {

  return (
    <>
     <NavbarComponent/>
     <main className="page-content">
        <HeroFullSlide/>
        <Cards/>
        <CategoriesPopularProducts/>
        <LifeStyles />
        <SpecialProducts />
        <RecipesCards />
        <Download />
        <FooterSection />
      </main>
     
    </>
  )
}

export default App;
