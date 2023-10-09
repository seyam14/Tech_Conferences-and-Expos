import { useEffect, useState } from "react";
import SpeakerCard from "../SpeakerCard/SpeakerCard";



const SpeakersFeature = () => {
  const [Speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetch("Speaker.Json")
      .then((res) => res.json())
      .then((data) => setSpeakers(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl p-14 mb-5 font-bold">Speakers</h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {Speakers.map((Speaker) => (
          <SpeakerCard key={Speaker.id} Speaker={Speaker}></SpeakerCard>
        ))}
      </div>
    </div>
  );
};
export default SpeakersFeature;