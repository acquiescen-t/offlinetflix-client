import Card from "./Card";
import poster from "../../src/assets/poster.jpg";
import poster2 from "../../src/assets/poster2.jpg";
import poster3 from "../../src/assets/poster3.jpg";
import poster4 from "../../src/assets/poster4.jpg";
import poster5 from "../../src/assets/poster5.jpg";
import poster6 from "../../src/assets/poster6.jpg";
import poster7 from "../../src/assets/poster7.jpg";
import poster8 from "../../src/assets/poster8.jpg";
import poster9 from "../../src/assets/poster9.jpg";
import poster10 from "../../src/assets/poster10.jpg";
import poster11 from "../../src/assets/poster11.jpg";
import poster12 from "../../src/assets/poster12.jpg";
import poster13 from "../../src/assets/poster13.jpg";

const Grid = () => {
  return (
    <>
      <div className="container">
        <div className="row g-5">
          <div className="col-3">
            <Card
              posterUrl={poster}
              title="A Cure for Wellness"
              year={2006}
              genreList={[
                "Psychological Horror",
                "Psychological Thriller",
                "Drama",
                "Fantasy",
                "Horror",
                "Mystery",
                "Science Fiction",
                "Thriller",
              ]}
              starList={[
                "Dane DeHaan",
                "Jason Isaacs",
                "Mia Goth",
                "Ivo Nandi",
              ]}
              synopsis="An ambitious young executive is sent to retrieve his company's CEO from an idyllic but mysterious 'wellness center' at a remote location in the Swiss Alps, but soon suspects that the spa's treatments are not what they seem."
            ></Card>
          </div>
          <div className="col-3">
            <Card
              posterUrl={poster2}
              title="A Quiet Place"
              year={2018}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
          <div className="col-3">
            <Card
              posterUrl={poster3}
              title="A Quiet Place Part II"
              year={2020}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
          <div className="col-3">
            <Card
              posterUrl={poster4}
              title="A Tale of Two Sisters"
              year={2003}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
          <div className="col-3">
            <Card
              posterUrl={poster5}
              title="Coherence"
              year={2013}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
          <div className="col-3">
            <Card
              posterUrl={poster6}
              title="Dark Water"
              year={2002}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
          <div className="col-3">
            <Card
              posterUrl={poster7}
              title="Don't Breathe 2"
              year={2021}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
          <div className="col-3">
            <Card
              posterUrl={poster8}
              title="Flash Point"
              year={2007}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
          <div className="col-3">
            <Card
              posterUrl={poster9}
              title="Get Out"
              year={2017}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
          <div className="col-3">
            <Card
              posterUrl={poster10}
              title="Gonjiam - Haunted Asylum"
              year={2018}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
          <div className="col-3">
            <Card
              posterUrl={poster11}
              title="Inception"
              year={2010}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
          <div className="col-3">
            <Card
              posterUrl={poster12}
              title="John Wick Chapter 3 - Parabellum"
              year={2019}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
          <div className="col-3">
            <Card
              posterUrl={poster13}
              title="Malignant"
              year={2021}
              genreList={[]}
              starList={[]}
              synopsis=""
            ></Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
