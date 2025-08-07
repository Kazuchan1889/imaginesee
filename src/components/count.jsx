import React, { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Years Experiences", end: 3, suffix: "" },
  { label: "Half-crazy Members", end: 10, suffix: "+" },
  { label: "Thanks from Clients", end: 100, suffix: "+" },
  { label: "Cups of Coffee", end: 1000, suffix: "+" },
];

const useIsInViewport = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useIsInViewport(sectionRef);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const intervals = stats.map((stat, index) => {
      const stepTime = 1000 / stat.end;
      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < stat.end) {
            updated[index] += 1;
          }
          return updated;
        });
      }, stepTime);
    });

    return () => intervals.forEach(clearInterval);
  }, [isInView]);

  return (
    <div id="count" ref={sectionRef} className=" text-white py-20 px-4">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold text-yellow-500 tracking-wide">
          WE ARE IN NUMBER
        </h2>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <p className="text-5xl font-bold mb-2">
              {counts[i]}
              {counts[i] >= stat.end && stat.suffix}
            </p>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
