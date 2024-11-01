import cillianmurphy from "../assets/stars/cillian-murphy.jpg";
import danedehaan from "../assets/stars/dane-dehaan.jpg";
import emilybaldoni from "../assets/stars/emily-baldoni.jpg";
import emilyblunt from "../assets/stars/emily-blunt.jpg";
import jasonisaacs from "../assets/stars/jason-isaacs.jpg";
import johnkrasinski from "../assets/stars/john-krasinski.jpg";
import kimkapsu from "../assets/stars/kim-kap-su.jpg";
import keanureeves from "../assets/stars/keanu-reeves.jpg";
import leonardodicaprio from "../assets/stars/leonardo-dicaprio.jpg";
import limsoojung from "../assets/stars/lim-soo-jung.jpg";
import maurysterling from "../assets/stars/maury-sterling.jpg";
import miagoth from "../assets/stars/mia-goth.jpg";
import millicentsimmonds from "../assets/stars/millicent-simmonds.jpg";
import nicholasbrendon from "../assets/stars/nicholas-brendon.jpg";
import stephanlang from "../assets/stars/stephen-lang.jpg";
import yumjungah from "../assets/stars/yum-jung-ah.jpg";

export class Star {
  name: string;
  imageUrl: string;

  constructor(name: string, imageUrl: string) {
    this.name = name;
    this.imageUrl = imageUrl;
  }

  public static GenerateStars(): Star[] {
    var stars = [
      new Star("Cillian Murphy", cillianmurphy),
      new Star("John Krasinski", johnkrasinski),
      new Star("Emily Blunt", emilyblunt),
      new Star("Millicent Simmonds", millicentsimmonds),
      new Star("Dane DeHaan", danedehaan),
      new Star("Mia Goth", miagoth),
      new Star("Jason Isaacs", jasonisaacs),
      new Star("Keanu Reeves", keanureeves),
      new Star("Leonard DiCaprio", leonardodicaprio),
      new Star("Emily Baldoni", emilybaldoni),
      new Star("Maury Sterling", maurysterling),
      new Star("Nicholas Brendon", nicholasbrendon),
      new Star("Stephen Lang", stephanlang),
      new Star("Kim Kap-Su", kimkapsu),
      new Star("Lim Soo-Jung", limsoojung),
      new Star("Yum Jung-Ah", yumjungah),
    ];

    return stars;
  }
}
