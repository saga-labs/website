const image =
  "https://raw.githubusercontent.com/saga-labs/saga-gpt/main/public/assets/app.png";
const image_new =
  "https://images.unsplash.com/photo-1684139517679-032b7213ad2e?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// const image_test = "https://images.unsplash.com/photo-1669465716237-9cb999b47773?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// Intefaces & Types
import { Feature } from "@/interfaces/feature";

export const Featured = ({ feature }: { feature: Feature }) => {
  return (
    <section
      className="overflow-hidden bg-blend-difference h-screen bg-cover bg-top bg-no-repeat bg-gradient-to-r from-indigo-300 to-purple-400 flex items-end"
      style={{
        backgroundImage: `url(${feature.image})`,
      }}
    >
      <div className="p-8 md:pb-24 lg:px-16 lg:pb-32">
        <div className="text-left">
          <h2 className="text-lg font-bold text-highlight">Featured</h2>
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            {feature.title}
          </h2>
          <p className="hidden max-w-xl text-white/90 md:mt-6 md:block md:text-sm md:leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>

      {/** Image attribution */}
      <span className="absolute bottom-2 right-2 text-sm font-light text-gray-800">
        Photo by{" "}
        <a className="underline" href="https://unsplash.com/@maxberg">
          Maxim Berg
        </a>
      </span>
    </section>
  );
};
