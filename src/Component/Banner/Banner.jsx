import './Banner.css'

const Banner = () => {
    return (
        <div className="hero min-h-screen container" style={{backgroundImage: 'url(https://i.ibb.co/f9CCkrV/fotor-ai-2023100911119.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">The world premier tech expo showcasing the latest innovations in consumer electronics and technology.</p>
    </div>
  </div>
</div>
    );
};

export default Banner;