import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  //   console.log(serviceCenters);
  const position = [23.68, 90.35];
  const mapRef = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    // console.log(location)
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase()),
    );
    if (district) {
      const coordinate = [district.latitude, district.longitude];
      // console.log(coordinate, district)
      mapRef.current.flyTo(coordinate, 12);
    }
  };
  return (
    <div className="mb-30">
      <div>
        <h2 className="text-3xl font-bold text-secondary mb-10">
          We are available in 64 Districts!
        </h2>
        <form onSubmit={handleSearch}>
          <label className="input rounded-3xl border-none outline-none">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              name="location"
              className="grow"
              placeholder="Search here"
            />
          </label>
          <button className="rounded-3xl bg-primary py-2 px-4 font-bold">
            Search
          </button>
        </form>
      </div>
      <div className="h-180">
        <h2 className="text-2xl font-bold text-secondary my-10">
          We deliver almost all over Bangladesh
        </h2>
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-full"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker position={[center.latitude, center.longitude]} key={index}>
              <Popup>
                <strong>{center.district}</strong>
                <p>Serivece Area: {center.covered_area.join(", ")}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
