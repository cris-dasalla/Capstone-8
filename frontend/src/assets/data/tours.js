import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Calle Crisologo",
    city: "Vigan",
    address: 'Somewhere',
    price: 499,
    maxGroupSize: 10,
    desc: "ajsbfaksnflcas",
    reviews: [
      {
        name: "Cris Dasalla",
        rating: 4.6,
      },
      {
        name: "Cris Dasalla",
        rating: 5.0,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Nacpan Beach",
    city: "El Nido",
    address: 'Somewhere',
    price: 499,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Cris Dasalla",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Tubbataha Reef",
    city: "Palawan",
    address: 'Somewhere',
    price: 499,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Cris Dasalla",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Mayon Volcano, Albay",
    city: "Bicol",
    address: 'Somewhere',
    price: 499,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Cris Dasalla",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Intramuros | Fort Santiago",
    city: "Manila",
    address: 'Somewhere',
    price: 499,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Cris Dasalla",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Taal Volcano and Lake",
    city: "Tagaytay",
    address: 'Somewhere',
    price: 499,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Cris Dasalla",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Kawasan Falls",
    city: "Cebu",
    address: 'Somewhere',
    price: 499,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [ ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Kayangan Lake, Coron",
    city: "Palawan",
    address: 'Somewhere',
    price: 499,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [ ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
