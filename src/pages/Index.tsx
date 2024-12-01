import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-racing-black to-racing-gray">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="max-w-4xl text-center">
            <h1 className="animate-fade-down text-4xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl">
              Welcome to PushBike
              <span className="text-racing-red">GP</span>
            </h1>
            <p className="animate-fade-up mt-6 text-lg text-gray-200 sm:text-xl">
              Experience the thrill of balance bike racing at its finest
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                to="/events"
                className="gradient-btn group inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white"
              >
                Upcoming Events
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-white">Latest News</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="glass card-hover group rounded-lg p-4"
              >
                <div className="aspect-video overflow-hidden rounded-md bg-muted">
                  <img
                    src={`https://source.unsplash.com/random/800x600?bike&${i}`}
                    alt="News"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-400">November 24, 2023</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    Championship Race Highlights
                  </h3>
                  <p className="mt-2 line-clamp-2 text-gray-300">
                    Experience the excitement of the latest championship race with our
                    comprehensive coverage and analysis.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings Preview */}
      <section className="glass-dark py-16">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-white">Top Riders</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="glass card-hover rounded-lg p-4"
              >
                <div className="aspect-square overflow-hidden rounded-full">
                  <img
                    src={`https://source.unsplash.com/random/400x400?portrait&${i}`}
                    alt={`Rider ${i}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-white">Rider Name</h3>
                  <p className="text-sm text-gray-400">Points: {100 - i * 10}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;