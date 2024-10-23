const Banner = () => {
  return (
    <div className="mt-12">
      <div
        className="hero rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/K9HqXXm/Rectangle-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-20 "></div>
        <div className="hero-content text-white ">
          <div className="text-center p-32">
            <h1 className="mb-6 mt-5 text-5xl font-bold">
              Discover an exceptional cooking <br /> class tailored for you!
            </h1>
            <p className="mb-6">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding <br /> problems to become an
              exceptionally well world-class Programmer.
            </p>
            <button className="btn rounded-full px-8 mr-8 bg-primary border-none">
              Explore Now
            </button>
            <button
              className="btn rounded-full bg-transparent text-white px-8 py-4 hover:bg-primary
             hover:text-black  hover:border-none"
            >
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
