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
import { useNavigate, useSearchParams } from "react-router-dom";
import { roomsData } from "../data/RoomData";

const getNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 0;
  const diff = new Date(checkOut) - new Date(checkIn);
  return diff > 0 ? diff / (1000 * 60 * 60 * 24) : 0;
};

const RoomCard = React.memo(({ room, checkIn, checkOut }) => {
  const navigate = useNavigate();
  const nights = useMemo(
    () => getNights(checkIn, checkOut),
    [checkIn, checkOut]
  );
  const total = nights * room.pricePerNight;

  return (
    <div className="group overflow-hidden rounded-[1.75rem] border border-[#d7e7e4] bg-white shadow-[0_14px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_rgba(13,92,99,0.14)]">
      <div className="relative h-52">
        <img
          src={room.images?.[0]}
          alt={room.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {room.verified && (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-[#cfe9de] bg-[#edf8f2] px-3 py-1 text-xs font-semibold text-[#13876f]">
            <FaCheckCircle /> Verified
          </span>
        )}

        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-sm font-semibold text-slate-800 backdrop-blur-sm">
          <FaStar className="text-yellow-400" /> {room.rating}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-black tracking-tight text-slate-900">{room.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-slate-600">
              <FaMapMarkerAlt /> {room.area}, {room.city}
            </p>
          </div>
          <span className="rounded-full border border-[#e7deca] bg-[#fbf5e6] px-3 py-1 text-xs font-semibold text-[#8a6720]">
            {room.roomType}
          </span>
        </div>

        <div className="mt-2 flex items-center gap-4 text-sm text-slate-700">
          <span className="flex items-center gap-1 rounded-full bg-[#f8fbfb] px-3 py-1.5">
            <FaUserFriends /> {room.maxGuests} Guests
          </span>
        </div>

        <div className="mt-4 flex gap-3 text-slate-600">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef8f7]">
            <FaWifi className="text-[#0d5c63]" />
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8fbfb]">
            <FaTv className="text-[#1b7f8e]" />
          </span>
        </div>

        {room.freeCancellation && (
          <p className="mt-3 flex items-center gap-1 text-sm font-medium text-[#13876f]">
            <MdFreeCancellation /> Free Cancellation
          </p>
        )}

        <div className="mt-5 flex items-center justify-between border-t border-[#e6efed] pt-4">
          <div>
            <p className="text-2xl font-black tracking-tight text-slate-900">₹{room.pricePerNight}</p>
            <p className="text-xs text-slate-500">per night</p>

            {nights > 0 && (
              <p className="mt-1 text-sm text-slate-600">
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
            className="rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:from-[#09454a] hover:to-[#166774]"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
});

const RoomBookingPage = () => {
  const [searchParams] = useSearchParams();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const querySearch = searchParams.get("search") || "";
    const queryCheckIn = searchParams.get("checkIn") || "";
    const queryCheckOut = searchParams.get("checkOut") || "";

    setSearch(querySearch);
    setDebouncedSearch(querySearch);
    setCheckIn(queryCheckIn);
    setCheckOut(queryCheckOut);
  }, [searchParams]);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search);
      setVisibleCount(6);
    }, 300);

    return () => clearTimeout(t);
  }, [search]);

  const filteredRooms = useMemo(() => {
    return roomsData.filter((r) =>
      `${r.name} ${r.area} ${r.city}`
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f4f6] via-white to-[#f8fbfb] px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[2rem] border border-[#d7e7e4] bg-gradient-to-br from-white to-[#eef8f7] px-6 py-10 shadow-[0_22px_55px_rgba(13,92,99,0.08)] sm:px-8 lg:px-10">
          <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-[#d9f3ef] opacity-60 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#f6e8bf] opacity-40 blur-3xl" />

          <div className="relative text-center">
            <span className="inline-flex items-center rounded-full border border-[#b9ddda] bg-[#e6f4f3] px-4 py-2 text-sm font-semibold text-[#0d5c63]">
              Room Discovery
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Find the Right
              <span className="block bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-transparent">
                Room for Your Stay
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              Explore verified rooms, compare amenities and pricing, and choose the stay that fits your hostel or PG requirements with confidence.
            </p>
          </div>
        </section>

        <section className="relative z-10 mt-8 px-2 sm:px-4">
          <div className="rounded-[2rem] border border-[#d7e7e4] bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-[2.2fr_1fr_1fr]">
              <label className="relative rounded-2xl border border-[#d7e7e4] bg-[#f8fbfb] px-5 py-4">
                <span className="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-slate-500">
                  Where to
                </span>
                <div className="flex items-center gap-3">
                  <FaSearch className="text-[#0d5c63]" />
                  <input
                    placeholder="e.g. - Area, Landmark or Property Name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-transparent text-lg font-semibold text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </label>

              <label className="relative rounded-2xl border border-[#d7e7e4] bg-[#f8fbfb] px-5 py-4">
                <span className="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-slate-500">
                  Check-in
                </span>
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-[#0d5c63]" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent text-lg font-semibold text-slate-700 outline-none"
                  />
                </div>
              </label>

              <label className="relative rounded-2xl border border-[#d7e7e4] bg-[#f8fbfb] px-5 py-4">
                <span className="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-slate-500">
                  Check-out
                </span>
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-[#0d5c63]" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-transparent text-lg font-semibold text-slate-700 outline-none"
                  />
                </div>
              </label>

            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] px-10 py-3 text-lg font-black tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:from-[#09454a] hover:to-[#166774]"
              >
                SEARCH
              </button>
            </div>
          </div>
        </section>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">
            {filteredRooms.length} room{filteredRooms.length === 1 ? "" : "s"} available
          </p>
        </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              className="rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:from-[#09454a] hover:to-[#166774]"
            >
              Load More
            </button>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default RoomBookingPage;
