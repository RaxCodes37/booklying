export default function Hero() {
  return (
    <div className="flex flex-col items-center mt-10" id="hero">
      <h1 className="text-3xl sm:text-4xl font-bold">
        Welcome to <span className="underline">Booklying</span>
      </h1>

      <p className="italic mt-5">
        "Where the <span>style</span> never{" "}
        <span>stops</span>"
      </p>

      <button className="mt-20">Book Here</button>
    </div>
  );
}
