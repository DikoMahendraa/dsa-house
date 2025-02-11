import JumbotronPrimary from "@/components/jumbotron-primary";
import Navbar from "@/components/navbar";
import OnlyForYou from "@/components/only-for-you";

export default function Home() {
  return (
    <section className="bg-dark-100">
      <Navbar />
      <JumbotronPrimary />
      <OnlyForYou />
    </section>
  );
}
