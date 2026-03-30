import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const serviceCenters = useLoaderData();
  const { user } = useAuth();
  const regionsDuplicate = serviceCenters.map((s) => s.region);
  const regions = [...new Set(regionsDuplicate)];
  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    // console.log(districts);
    return districts;
  };
  const { register, handleSubmit, control, reset } = useForm();
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const recieverRegion = useWatch({ control, name: "recieverRegion" });
  const axiosSecure = useAxiosSecure();
  const handleSendParcel = (data) => {
    reset();
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.recieverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        cost = isSameDistrict ? 110 : 150;
        cost += isSameDistrict
          ? (parcelWeight - 3) * 40
          : (parcelWeight - 3) * 40 + 40;
      }
    }
    console.log("cost", cost);
    Swal.fire({
      title: "Agree with our price?",
      text: `You have to pay ${cost}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => console.log(res.data));
        Swal.fire({
          title: "Parcel order confirmed!",
          text: "You will get an email soon!",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="bg-white rounded-2xl p-10">
      <form onSubmit={handleSubmit(handleSendParcel)}>
        <h2 className="text-4xl font-bold text-secondary">Send A Parcel</h2>
        <p className="text-2xl font-semibold my-5 text-secondary">
          Enter your parcel details
        </p>
        <hr className="my-8" />
        {/* radio btn */}
        <div className="space-x-5">
          <label className="label">
            <input
              type="radio"
              value="document"
              {...register("parcelType")}
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              value="non-document"
              {...register("parcelType")}
              className="radio"
            />
            Non-Document
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <fieldset className="fieldset">
            <label className="label block font-medium">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              placeholder="Parcel Name"
              className="px-4 py-2 rounded border w-full"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label block font-medium">
              Parcel Weight (KG)
            </label>
            <input
              type="number"
              {...register("parcelWeight")}
              placeholder="Parcel Weight (KG)"
              className="px-4 py-2 rounded border w-full"
            />
          </fieldset>
        </div>
        <hr className="my-8" />
        {/* two column */}
        <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
          {/* Sender Details */}
          <fieldset className="fieldset">
            <h4 className="text-xl font-semibold text-secondary">
              Sender Details
            </h4>
            <label className="label block font-medium">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              defaultValue={user?.displayName}
              placeholder="Sender Name"
              className="px-4 py-2 rounded border w-full"
            />
            <label className="label block font-medium">Sender Email</label>
            <input
              type="email"
              {...register("senderEmail")}
              defaultValue={user?.email}
              placeholder="Sender Email"
              className="px-4 py-2 rounded border w-full"
            />
            {/* Sender Region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Region</legend>
              <select
                {...register("senderRegion")}
                defaultValue={"Pick a Region"}
                className="select w-full"
              >
                <option disabled={true}>Pick a Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <span className="label">Optional</span>
            </fieldset>
            {/* Sender District */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue={"Pick a District"}
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtsByRegion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <span className="label">Optional</span>
            </fieldset>
            <label className="label block font-medium">Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              placeholder="Address"
              className="px-4 py-2 rounded border w-full"
            />
            <label className="label block font-medium">Sender Phone No.</label>
            <input
              type="tel"
              {...register("senderPhone")}
              placeholder="Sender Phone No."
              className="px-4 py-2 rounded border w-full"
            />
            <label className="label block font-medium">
              Pickup Instruction
            </label>
            <input
              type="text"
              {...register("pickupInstruction")}
              placeholder="Pickup Instruction"
              className="px-4 py-2 rounded border w-full"
            />
          </fieldset>
          {/* Reciever Details */}
          <fieldset className="fieldset">
            <h4 className="text-xl font-semibold text-secondary">
              Reciever Details
            </h4>
            <label className="label block font-medium">Reciever Name</label>
            <input
              type="text"
              {...register("recieverName")}
              placeholder="Reciever Name"
              className="px-4 py-2 rounded border w-full"
            />
            <label className="label block font-medium">Reciever Email</label>
            <input
              type="email"
              {...register("recieverEmail")}
              placeholder="Reciever Email"
              className="px-4 py-2 rounded border w-full"
            />
            {/* Reciever Region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Region</legend>
              <select
                {...register("recieverRegion")}
                defaultValue={"Pick a Region"}
                className="select w-full"
              >
                <option disabled={true}>Pick a Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <span className="label">Optional</span>
            </fieldset>
            {/* Reciever District */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">District</legend>
              <select
                {...register("recieverDistrict")}
                defaultValue={"Pick a District"}
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtsByRegion(recieverRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <span className="label">Optional</span>
            </fieldset>
            <label className="label block font-medium">Address</label>
            <input
              type="text"
              {...register("recieverAddress")}
              placeholder="Address"
              className="px-4 py-2 rounded border w-full"
            />
            <label className="label block font-medium">
              Reciever Phone No.
            </label>
            <input
              type="tel"
              {...register("recieverPhone")}
              placeholder="Reciever Phone No."
              className="px-4 py-2 rounded border w-full"
            />
            <label className="label block font-medium">
              Pickup Instruction
            </label>
            <input
              type="text"
              {...register("pickupInstruction")}
              placeholder="Pickup Instruction"
              className="px-4 py-2 rounded border w-full"
            />
          </fieldset>
        </div>
        <input type="submit" className="btn btn-primary text-black" />
      </form>
    </div>
  );
};

export default SendParcel;
