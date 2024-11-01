import BrowseFilms from "../components/BrowseFilms";
import BrowseGenres from "../components/BrowseGenres";
import BrowseStars from "../components/BrowseStars";
import Hero from "../components/Hero";

const Index = () => {
  return (
    <>
      <Hero></Hero>
      <BrowseFilms></BrowseFilms>
      <BrowseGenres></BrowseGenres>
      <BrowseStars></BrowseStars>
    </>
  );
};

export default Index;
