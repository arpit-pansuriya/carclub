import Image from "next/image";
import Hero from "@/components/Hero";
import { CustomFilter, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();
  console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero></Hero>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar></SearchBar>
          <div className="home__filter-container">
            <CustomFilter title="fuel"></CustomFilter>
            <CustomFilter title="year"></CustomFilter>
          </div>
        </div>

        {isDataEmpty ? (
          <section>We Have Cars</section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Opps No Results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
