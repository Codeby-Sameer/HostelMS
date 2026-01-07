import { useParams, useSearchParams } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaUserFriends,
  FaWifi,
  FaSnowflake,
  FaTv,
  FaClock,
} from "react-icons/fa";
import { MdFreeCancellation } from "react-icons/md";
import { roomsData } from "./RoomData";

const getNights = (inDate, outDate) => {
  if (!inDate || !outDate) return 1;
  const diff = new Date(outDate) - new Date(inDate);
  return diff / (1000 * 60 * 60 * 24);
};

const RoomDetailsPage = () => {
  const { roomId } = useParams();
  const [searchParams] = useSearchParams();
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");

  const room = roomsData.find((r) => r.id === roomId);
  if (!room) return <p className="p-10">Room not found</p>;

  const nights = getNights(checkIn, checkOut);
  const total = nights * room.pricePerNight;

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl overflow-hidden mb-6">
          {room.images.map((img, i) => (
            <img key={i} src={img} className="h-64 w-full object-cover" />
          ))}
        </div>

        {/* Header */}
        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-bold">{room.name}</h1>
              <p className="text-gray-600 flex items-center gap-1 mt-1">
                <FaMapMarkerAlt /> {room.area}, {room.city}
              </p>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold">₹{room.pricePerNight}</p>
              <p className="text-sm text-gray-500">per night</p>
            </div>
          </div>

          <div className="flex gap-4 mt-3 text-sm">
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-400" /> {room.rating} ({room.reviews} reviews)
            </span>
            {room.verified && (
              <span className="text-green-600 flex items-center gap-1">
                <FaCheckCircle /> Verified
              </span>
            )}
            {room.freeCancellation && (
              <span className="text-green-600 flex items-center gap-1">
                <MdFreeCancellation /> Free Cancellation
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Left */}
          <div className="md:col-span-2 space-y-6">
            <section className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-2">About this room</h3>
              <p className="text-gray-700">{room.description}</p>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-3">Amenities</h3>
              <div className="grid grid-cols-2 gap-3 text-gray-700">
                {room.amenities.map((a) => (
                  <span key={a} className="flex items-center gap-2">
                    <FaWifi /> {a}
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-3">House Rules</h3>
              <ul className="list-disc ml-5 text-gray-700">
                {room.houseRules.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Booking Box */}
          <div className="bg-white p-6 rounded-2xl shadow sticky top-24 h-fit">
            <h3 className="font-bold text-lg mb-3">Your Booking</h3>

            <p className="text-sm flex items-center gap-1">
              <FaClock /> Check-in: {room.checkIn}
            </p>
            <p className="text-sm flex items-center gap-1">
              <FaClock /> Check-out: {room.checkOut}
            </p>

            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>{nights} nights</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
              Continue to Payment
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
