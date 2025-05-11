import GardeningServicePage from "@/components/garden/GardeningServicePage";
import MultiStepForm from "@/components/step-form/multi-step-form";

const HomePage = () => {
  return (
    <div className="container mx-auto  bg-white min-h-screen">
     <div className="my-4">
     <div className="flex items-center gap-2 mb-10">
        <div className="h-10 w-10 bg-orange-500 rounded-md flex items-center justify-center text-white font-bold text-xl">
          H
        </div>
        <h1 className="text-xl font-medium">Hovenierslokaal</h1>
      </div>
     </div>
     <section>
      {/* <GardeningServicePage  /> */}
      <MultiStepForm />
     </section>
    <section>
      
    </section>
    </div>
  );
};

export default HomePage;
