import React, { useEffect, useMemo, useState } from "react";
import {
  FaStar,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaWifi,
  FaTv,
  FaUserFriends,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";
import { MdFreeCancellation } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { roomsData } from "./RoomData";

// ---------------- HELPERS ----------------

const getNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 0;
  const diff = new Date(checkOut) - new Date(checkIn);
  return diff > 0 ? diff / (1000 * 60 * 60 * 24) : 0;
};

// ---------------- ROOM CARD ----------------

const RoomCard = React.memo(({ room, checkIn, checkOut }) => {
  const navigate = useNavigate();
  const nights = useMemo(
    () => getNights(checkIn, checkOut),
    [checkIn, checkOut]
  );
  const total = nights * room.pricePerNight;

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition border overflow-hidden">
      <div className="relative h-52">
        <img
          src={room.images?.[0]}
          alt={room.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />

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
          <FaWifi /> <FaTv />
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
            onClick={() =>
              navigate(
                `/rooms/${room.id}?checkIn=${checkIn}&checkOut=${checkOut}`
              )
            }
            className="px-5 py-2 rounded-xl font-semibold bg-blue-600 hover:bg-blue-700 text-white"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
});

// ---------------- MAIN PAGE ----------------

const RoomBookingPage = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  // --------- DEBOUNCE SEARCH ----------
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search);
      setVisibleCount(6); // reset visible cards when searching
    }, 300);

    return () => clearTimeout(t);
  }, [search]);

  // --------- FILTER ROOMS ----------
  const filteredRooms = useMemo(() => {
    return roomsData.filter((r) =>
      `${r.name} ${r.area} ${r.city}`
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* SEARCH BAR */}
      <div className="max-w-7xl mx-auto mb-6">
        <h1 className="text-3xl font-bold">Book Rooms by Day</h1>

        <div className="mt-5 bg-white p-4 rounded-xl shadow grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 md:col-span-2">
            <FaSearch />
            <input
              placeholder="Search hotel, area, city"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>

          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
        </div>
      </div>

      {/* ROOMS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.slice(0, visibleCount).map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            checkIn={checkIn}
            checkOut={checkOut}
          />
        ))}

        {visibleCount < filteredRooms.length && (
          <div className="col-span-full text-center mt-8">
            <button
              onClick={() => setVisibleCount((v) => v + 6)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomBookingPage;
