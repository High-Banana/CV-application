// eslint-disable-next-line react/prop-types
export default function CVPage({ fullName, emailAddress, phoneNumber, address }) {
  return (
    <div className="bg-white col-start-2 min-h-[700px] my-[115px] mx-[50px] sticky top-0">
      <h1>{fullName}</h1>
      <h1>{emailAddress}</h1>
      <h1>{phoneNumber}</h1>
      <h1>{address}</h1>
    </div>
  );
}
