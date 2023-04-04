import swimmer from "../resources/images/swimmer.avif";
import dress from "../resources/images/dress.avif";
import mtBike from "../resources/images/mt-bike.avif";

export const cardData = [
  {
    image: swimmer,
    imageTag: "Sold Out".toUpperCase(),
    ratingStar: "★",
    rating: "5.0 (6)•USA",
    cardText: "Life lessons with Katie Zaferes",
    cardPrice: "From $136",
    id: 1,
    isOn: true,
  },
  {
    image: dress,
    imageTag: "Online".toUpperCase(),
    ratingStar: "★",
    rating: "5.0 (30)•USA",
    cardText: "Learn still/portrait photography",
    cardPrice: "From $125",
    id: 2,
    isOn: true,
  },
  {
    image: mtBike,
    ratingStar: "★",
    rating: "4.8 (2)•USA",
    cardText: "Group Mountain Bike Trail Rides",
    cardPrice: "From $50",
    id: 3,
    isOn: true,
  },
];
