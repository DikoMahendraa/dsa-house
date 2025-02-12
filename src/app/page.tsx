import JumbotronPrimary from "@/components/jumbotron-primary";
import Navbar from "@/components/navbar";
import OnlyForYou from "@/components/only-for-you";
import ScaleSmart from "@/components/scale-smart";

export default function Home() {
  return (
    <section className="bg-dark-100">
      <Navbar />
      <JumbotronPrimary />
      <OnlyForYou />
      <ScaleSmart />

      <section className="bg-gradient-to-t bg-dark-100 py-20">
        <section className="text-center flex flex-col items-center">
          <h1 className="text-6xl max-w-[780px] font-semibold text-white">
            Custom Digital Solutions for Your Business
          </h1>
          <p className="text-gray-300 mt-6 max-w-[636px] px-8">
            We offer a full spectrum of software development services to help
            your business thrive in the digital era
          </p>
        </section>
      </section>
    </section>
  );
}
