import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import ListingItem from "../components/ListingItem";
function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();

  }, []);
  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-24 px-3 max-w-6xl mx-auto">
        <h1
          className="text-5xl font-bold text-gray-900  "
          style={{
            textShadow: "2px 2px 4px rgba(128, 128, 128, 0.5)",
          }}
        >
          Move Into Your Dream <span className="text-gray-700">Home</span>
        </h1>

        <div className="text-black font-bold text-s sm:text-m ">
          Shresth Developer is the best place to find your next perfect place to
          live
          <br />
          we have a wide range of properties for you to choose from.
        </div>
        <Link
          to={"/search"}
          className="text-white text-xs sm:text-sm font-bold hover:underline"
        >
          let's get started..
        </Link>
      </div>
      {/* swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2500 }}
        //loop={true}
      >
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
           <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listings */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
          {/* Offers Section */}
          {offerListings.length > 0 && (
          <div className=" flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-slate-900 my-3">
              Recent offers
            </h2>
            <Link
              className="text-sm text-blue-900 hover:underline"
              to={"/search?offer=true"}
            >
              Show more offers
            </Link>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-900 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-900 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
