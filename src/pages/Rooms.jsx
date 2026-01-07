import React, { useMemo, useState } from "react";
import {
  FaStar,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaWifi,
  FaSnowflake,
  FaTv,
  FaUserFriends,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";
import { MdFreeCancellation } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { roomsData } from "./RoomData";


/* -------------------- DATA -------------------- */

const rooms = roomsData

/* -------------------- UTILS -------------------- */

const getNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 0;
  const diff = new Date(checkOut) - new Date(checkIn);
  return diff > 0 ? diff / (1000 * 60 * 60 * 24) : 0;
};

/* -------------------- CARD -------------------- */

const RoomCard = ({ room, checkIn, checkOut }) => {
  const nights = getNights(checkIn, checkOut);
  const total = nights * room.pricePerNight;
  const navigate = useNavigate();


  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition border overflow-hidden">
      <div className="relative h-52">
        <img src={room.images[0]} alt={room.name} className="w-full h-full object-cover" />

        {room.verified && (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <FaCheckCircle /> Verified
          </span>
        )}

        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
          <FaStar className="text-yellow-400" /> {room.rating}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg">{room.name}</h3>
        <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
          <FaMapMarkerAlt /> {room.area}, {room.city}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-700 mt-2">
          <span className="flex items-center gap-1">
            <FaUserFriends /> {room.maxGuests} Guests
          </span>
          <span>{room.roomType}</span>
        </div>

        <div className="flex gap-3 mt-3 text-gray-600">
          <FaWifi /> <FaSnowflake /> <FaTv />
        </div>

        {room.freeCancellation && (
          <p className="mt-2 text-green-600 text-sm flex items-center gap-1">
            <MdFreeCancellation /> Free Cancellation
          </p>
        )}

        <div className="mt-4 pt-4 border-t flex justify-between items-center">
          <div>
            <p className="text-xl font-bold">₹{room.pricePerNight}</p>
            <p className="text-xs text-gray-500">per night</p>
            {nights > 0 && (
              <p className="text-sm mt-1">
                {nights} nights · <strong>₹{total}</strong>
              </p>
            )}
          </div>

          <button

            onClick={() => navigate(`/rooms/${room.id}?checkIn=${checkIn}&checkOut=${checkOut}`)}
            className={`px-5 py-2 rounded-xl font-semibold ${!nights
                ? "bg-gray-300 "
                : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
          >
            More info
          </button>

        </div>
      </div>
    </div>
  );
};

/* -------------------- PAGE -------------------- */

const RoomBookingPage = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(3000);
  const [guests, setGuests] = useState(1);
  const [onlyFreeCancel, setOnlyFreeCancel] = useState(false);
  const [sort, setSort] = useState("price");

  const filteredRooms = useMemo(() => {
    let data = rooms.filter((r) =>
      `${r.name} ${r.area} ${r.city}`.toLowerCase().includes(search.toLowerCase())
    );

    data = data.filter(
      (r) => r.pricePerNight <= maxPrice && r.maxGuests >= guests
    );

    if (onlyFreeCancel) {
      data = data.filter((r) => r.freeCancellation);
    }

    if (sort === "price") data.sort((a, b) => a.pricePerNight - b.pricePerNight);
    if (sort === "rating") data.sort((a, b) => b.rating - a.rating);

    return data;
  }, [search, maxPrice, guests, onlyFreeCancel, sort]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-7xl mx-auto mb-6">
        <h1 className="text-3xl font-bold">Book Rooms by Day</h1>
        {/* <p className="text-gray-600">OYO-style room booking · Pay per night</p> */}

        {/* Search & Dates */}
        <div className="mt-5 bg-white p-4 rounded-xl shadow grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="flex items-center gap-2 md:col-span-2">
            <FaSearch className="text-gray-500" />
            <input
              placeholder="Search hotel, area, city"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>

          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>

          <select value={sort} onChange={(e) => setSort(e.target.value)} className="border rounded-lg px-2">
            <option value="price">Sort by Price</option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>

        {/* Filters */}
        <div className="mt-4 bg-white p-4 rounded-xl shadow flex flex-wrap gap-6 items-center">
          <div>
            <label className="text-sm font-semibold">Max Price: ₹{maxPrice}</label>
            <input
              type="range"
              min="1000"
              max="3000"
              step="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-40 block"
            />
          </div>

          <div>
            <label className="text-sm font-semibold mr-2">Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className=" rounded-lg "
            >
              {[1, 2, 3, 4].map((g) => (
                <option key={g} value={g} className="px-2">
                  {g} +
                </option>
              ))}
            </select>
          </div>

          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              checked={onlyFreeCancel}
              onChange={(e) => setOnlyFreeCancel(e.target.checked)}
            />
            Free Cancellation
          </label>
        </div>
      </div>

      {/* Listings */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            checkIn={checkIn}
            checkOut={checkOut}
          />
        ))}
      </div>

      {filteredRooms.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No rooms found. Try adjusting filters.
        </p>
      )}
    </div>
  );
};

export default RoomBookingPage;
