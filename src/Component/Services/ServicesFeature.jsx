import { useEffect, useState } from "react";
import ServiceCard from "../Service/ServiceCard";


const ServicesFeature = () => {
  const [Services, setServices] = useState([]);
  // this is not the best way to load show all data
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("Services.Json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl p-14 mb-5">Services: {Services.length}</h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {Services.slice(0, dataLength).map((Service) => (
          <ServiceCard key={Service.id} Service={Service}></ServiceCard>
        ))}
      </div>
      <div className={dataLength === Services.length ? "hidden" : ""}>
        <button
          onClick={() => setDataLength(Services.length)}
          className="btn btn-primary"
        >
          Show All Services
        </button>
      </div>
    </div>
  );
};
export default ServicesFeature;