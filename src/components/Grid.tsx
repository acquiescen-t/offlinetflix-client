import Card from "./Card";
import poster from "../../src/assets/poster.jpg";
import poster2 from "../../src/assets/poster2.jpg";
import poster3 from "../../src/assets/poster3.jpg";
import poster4 from "../../src/assets/poster4.jpg";
import poster5 from "../../src/assets/poster5.jpg";
import poster6 from "../../src/assets/poster6.jpg";
import poster7 from "../../src/assets/poster7.jpg";

interface Props {
  theme: "dark" | "light";
  setTheme: (item: string) => void;
}

const Grid = ({ theme, setTheme }: Props) => {
  return (
    <>
      <div className={"overflow-hidden m-5 " + theme}>
        <div className="row g-5">
          <div className="col-2">
            <Card
              posterUrl={poster}
              title="A Cure for Wellness"
              year={2006}
              theme={theme}
            ></Card>
          </div>
          <div className="col-2">
            <Card
              posterUrl={poster2}
              title="A Quiet Place"
              year={2018}
              theme={theme}
            ></Card>
          </div>
          <div className="col-2">
            <Card
              posterUrl={poster3}
              title="A Quiet Place Part II"
              year={2020}
              theme={theme}
            ></Card>
          </div>
          <div className="col-2">
            <Card
              posterUrl={poster4}
              title="A Tale of Two Sisters"
              year={2003}
              theme={theme}
            ></Card>
          </div>
          <div className="col-2">
            <Card
              posterUrl={poster5}
              title="Coherence"
              year={2013}
              theme={theme}
            ></Card>
          </div>
          <div className="col-2">
            <Card
              posterUrl={poster6}
              title="Dark Water"
              year={2002}
              theme={theme}
            ></Card>
          </div>
          <div className="col-2">
            <Card
              posterUrl={poster7}
              title="Don't Breathe 2"
              year={2021}
              theme={theme}
            ></Card>
          </div>
        </div>
      </div>
    </>
  );
};

const Grid2 = () => {
  return (
    <>
      <div className="container overflow-hidden">
        <div className="row g-3">
          <div className="col">
            <p>
              <div className="card h-100">
                <img
                  src={poster}
                  className="card-img-top rounded mx-auto d-block"
                  alt="..."
                />
                <div className="card-body">
                  <a href="#" className="card-title">
                    A Cure for Wellness
                  </a>
                  <p className="card-text">
                    An ambitious young executive is sent to retrieve his
                    company's CEO from an idyllic but mysterious "wellness
                    center" at a remote location in the Swiss Alps, but soon
                    suspects that the spa's treatments are not what they seem.
                  </p>
                </div>
              </div>
            </p>
          </div>
          <div className="col">
            <p>
              <div className="card h-100">
                <img
                  src={poster2}
                  className="card-img-top rounded mx-auto d-block"
                  alt="..."
                />
                <div className="card-body">
                  <a href="#" className="card-title">
                    A Quiet Place
                  </a>
                  <p className="card-text">
                    A family struggles for survival in a world invaded by alien
                    creatures with ultra-sensitive hearing.
                  </p>
                </div>
              </div>
            </p>
          </div>
          <div className="col">
            <p>
              <div className="card h-100">
                <img
                  src={poster3}
                  className="card-img-top rounded mx-auto d-block"
                  alt="..."
                />
                <div className="card-body">
                  <a href="#" className="card-title">
                    A Quiet Place Part II
                  </a>
                  <p className="card-text">
                    Following the events at home, the Abbott family now face the
                    terrors of the outside world. Forced to venture into the
                    unknown, they realize the creatures that hunt by sound are
                    not the only threats lurking beyond the sand path.
                  </p>
                </div>
              </div>
            </p>
          </div>
          <div className="col">
            <p>
              <div className="card h-100">
                <img
                  src={poster4}
                  className="card-img-top rounded mx-auto d-block img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <a href="#" className="card-title">
                    A Tale of Two Sisters
                  </a>
                  <p className="card-text">
                    After being institutionalized in a mental hospital, Su-mi
                    reunites with her sister, Su-yeon, and they return to live
                    at their country home. But strange events plague the house,
                    leading to surprising revelations and a shocking conclusion.
                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
