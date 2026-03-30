import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaWifi,
  FaClock,
  FaArrowLeft,
  FaCalendarAlt,
  FaUserFriends,
  FaShieldAlt,
} from "react-icons/fa";
import { MdFreeCancellation } from "react-icons/md";
import { roomsData } from "../data/RoomData";

const getNights = (inDate, outDate) => {
  if (!inDate || !outDate) return 1;
  const diff = new Date(outDate) - new Date(inDate);
  const nights = diff / (1000 * 60 * 60 * 24);
  return nights > 0 ? nights : 1;
};

const RoomDetailsPage = () => {
  const { roomId } = useParams();
  const [searchParams] = useSearchParams();
  const [activeImage, setActiveImage] = useState(0);
  const [checkIn, setCheckIn] = useState(searchParams.get("checkIn") || "");
  const [checkOut, setCheckOut] = useState(searchParams.get("checkOut") || "");

  const room = roomsData.find((r) => r.id === roomId);
  if (!room) return <p className="p-10">Room not found</p>;

  const nights = getNights(checkIn, checkOut);
  const total = nights * room.pricePerNight;

  useEffect(() => {
    setActiveImage(0);
  }, [roomId]);

  useEffect(() => {
    if (!room?.images?.length || room.images.length === 1) return undefined;

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % room.images.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [room]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f4f6] via-white to-[#f8fbfb] px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 rounded-full border border-[#d7e7e4] bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-[#b9ddda] hover:text-[#0d5c63]"
          >
            <FaArrowLeft />
            Back to Rooms
          </Link>
        </div>

        <div className="mb-6 rounded-[2rem] border border-[#d7e7e4] bg-gradient-to-br from-white to-[#f8fbfb] p-6 shadow-[0_24px_60px_rgba(13,92,99,0.08)] md:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <div>
              <span className="mb-3 inline-block rounded-full border border-[#b9ddda] bg-[#e6f4f3] px-4 py-1.5 text-sm font-semibold text-[#0d5c63]">
                {room.roomType}
              </span>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">{room.name}</h1>
              <div className="my-4 flex items-center gap-4">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#0d5c63] to-transparent"></div>
                <span className="bg-gradient-to-r from-[#0d5c63] to-[#c79a3b] bg-clip-text text-2xl font-light text-transparent">·</span>
                <div className="h-1 w-12 rounded-full bg-gradient-to-l from-[#9dd9d2] to-transparent"></div>
              </div>
              <p className="mt-1 flex items-center gap-1 text-slate-600">
                <FaMapMarkerAlt /> {room.area}, {room.city}
              </p>
            </div>

            <div className="rounded-2xl border border-[#d7e7e4] bg-white px-5 py-4 text-left shadow-sm md:min-w-[180px] md:text-right">
              <p className="text-3xl font-black tracking-tight text-slate-900">₹{room.pricePerNight}</p>
              <p className="text-sm text-slate-500">per night</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <span className="flex items-center gap-2 rounded-full border border-[#e7deca] bg-[#fbf5e6] px-3 py-2 font-medium text-slate-700">
              <FaStar className="text-yellow-400" /> {room.rating} ({room.reviews} reviews)
            </span>
            <span className="flex items-center gap-2 rounded-full border border-[#d7e7e4] bg-white px-3 py-2 font-medium text-slate-700">
              <FaUserFriends className="text-[#0d5c63]" /> Up to {room.maxGuests} guests
            </span>
            {room.verified && (
              <span className="flex items-center gap-2 rounded-full border border-[#cfe9de] bg-[#f4fbf7] px-3 py-2 font-medium text-[#13876f]">
                <FaCheckCircle /> Verified
              </span>
            )}
            {room.freeCancellation && (
              <span className="flex items-center gap-2 rounded-full border border-[#cfe9de] bg-[#f4fbf7] px-3 py-2 font-medium text-[#13876f]">
                <MdFreeCancellation /> Free Cancellation
              </span>
            )}
          </div>
        </div>

        <div className="mb-6 overflow-hidden rounded-[2rem] border border-[#d7e7e4] bg-white shadow-sm">
          <div className="relative">
            <img
              src={room.images?.[activeImage]}
              alt={`${room.name} view ${activeImage + 1}`}
              className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[400px]"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-5 py-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white/90">
                  Gallery Image {activeImage + 1} / {room.images.length}
                </p>
                <div className="flex items-center gap-2">
                  {room.images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeImage
                          ? "w-8 bg-white"
                          : "w-2.5 bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Show room image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <section className="rounded-2xl border border-[#d7e7e4] bg-white p-6 shadow-lg">
              <h3 className="mb-3 text-2xl font-black tracking-tight text-slate-900">About this room</h3>
              <p className="leading-7 text-slate-700">{room.description}</p>
            </section>

            <section className="rounded-2xl border border-[#d7e7e4] bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-black tracking-tight text-slate-900">Amenities</h3>
              <div className="grid grid-cols-1 gap-3 text-slate-700 sm:grid-cols-2">
                {room.amenities.map((a) => (
                  <span key={a} className="flex items-center gap-3 rounded-xl border border-[#d7e7e4] bg-[#f8fbfb] px-4 py-3 transition-colors hover:bg-[#eef8f7]">
                    <FaWifi className="text-[#0d5c63]" /> {a}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[#d7e7e4] bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-black tracking-tight text-slate-900">House Rules</h3>
              <ul className="space-y-3 text-slate-700">
                {room.houseRules.map((r) => (
                  <li key={r} className="flex items-start gap-3 rounded-xl border border-[#e7deca] bg-[#fbfaf6] px-4 py-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#c79a3b]" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="sticky top-24 h-fit rounded-[1.75rem] border border-[#d7e7e4] bg-gradient-to-br from-white via-[#fdfefe] to-[#eef8f7] p-6 shadow-[0_24px_60px_rgba(13,92,99,0.12)]">
            <div className="rounded-2xl border border-[#d7e7e4] bg-white p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1b7f8e]">
                Reserve This Room
              </p>
              <div className="mt-3 flex items-end justify-between gap-3">
                <div>
                  <p className="text-3xl font-black tracking-tight text-slate-900">₹{room.pricePerNight}</p>
                  <p className="text-sm text-slate-500">per night</p>
                </div>
                <span className="rounded-full border border-[#cfe9de] bg-[#edf8f2] px-3 py-1 text-xs font-semibold text-[#13876f]">
                  Instant confirmation
                </span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1">
              <label className="rounded-2xl border border-[#d7e7e4] bg-white px-4 py-4">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <FaCalendarAlt className="text-[#0d5c63]" /> Check-in
                </span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-lg font-bold text-slate-800 outline-none"
                />
              </label>

              <label className="rounded-2xl border border-[#d7e7e4] bg-white px-4 py-4">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <FaCalendarAlt className="text-[#c79a3b]" /> Check-out
                </span>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || undefined}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-lg font-bold text-slate-800 outline-none"
                />
              </label>
            </div>

            <div className="mt-5 rounded-2xl border border-[#d7e7e4] bg-white p-5">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <FaClock className="text-[#0d5c63]" /> Standard check-in
                </span>
                <span className="font-semibold text-slate-800">{room.checkIn}</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <FaClock className="text-[#0d5c63]" /> Standard check-out
                </span>
                <span className="font-semibold text-slate-800">{room.checkOut}</span>
              </div>
              <div className="mt-4 border-t border-[#e6efed] pt-4">
                <div className="mb-2 flex justify-between text-sm text-slate-600">
                  <span>₹{room.pricePerNight} x {nights} night{nights > 1 ? "s" : ""}</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Taxes & service fee</span>
                  <span>Included</span>
                </div>
                <div className="mt-4 flex justify-between border-t border-[#e6efed] pt-4 text-lg font-black tracking-tight text-slate-900">
                  <span>Total payable</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-[#cfe9de] bg-[#f4fbf7] p-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#13876f] shadow-sm">
                  <FaShieldAlt />
                </span>
                <div>
                  <p className="font-bold text-slate-900">Flexible and secure booking</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Verified property, clear policies, and quick confirmation once you continue.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] py-3.5 text-base font-semibold text-white transition-colors hover:from-[#09454a] hover:to-[#166774]">
              Book This Room
            </button>

            <button className="mt-3 w-full rounded-xl border border-[#b9ddda] bg-white py-3 font-semibold text-[#0d5c63] transition-colors hover:bg-[#eef8f7]">
              Request Property Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
