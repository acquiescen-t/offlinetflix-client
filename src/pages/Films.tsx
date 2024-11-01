import Card from "../components/Card";
import { Film } from "../model/Film";

function Films() {
  var films = Film.GenerateFilms();

  return (
    <>
      <div className="container pt-5">
        <div className="row g-5">
          <div className="col-3">
            <Card popover={true} film={films[0]}></Card>
          </div>
          <div className="col-3">
            <Card popover={true} film={films[1]}></Card>
          </div>
          <div className="col-3">
            <Card popover={true} film={films[2]}></Card>
          </div>
          <div className="col-3">
            <Card popover={true} film={films[3]}></Card>
          </div>
          <div className="col-3">
            <Card popover={true} film={films[4]}></Card>
          </div>
          <div className="col-3">
            <Card popover={true} film={films[5]}></Card>
          </div>
          <div className="col-3">
            <Card popover={true} film={films[6]}></Card>
          </div>
          <div className="col-3">
            <Card popover={true} film={films[7]}></Card>
          </div>
          <div className="col-3">
            <Card popover={true} film={films[8]}></Card>
          </div>
          <div className="col-3">
            <Card popover={true} film={films[9]}></Card>
          </div>
          <div className="col-3">
            <Card popover={true} film={films[10]}></Card>
          </div>
          <div className="col-3">
            <Card popover={true} film={films[11]}></Card>
          </div>
          <div className="col-3">
            <Card popover={true} film={films[12]}></Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Films;
