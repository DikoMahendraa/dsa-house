import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      icon: (
        <Image
          alt="icon-mobile-development-1"
          src="/icons/card-mobile-app.svg"
          width={25}
          height={25}
          className="w-8 h-8"
        />
      ),
      title: "Web App Development",
      description:
        "We build high-performance websites applications that deliver seamless user experiences across all devices. Our team ensures your digital product is not only visually appealing but also fast, responsive, and intuitive. We develop solutions that enhance engagement and drive growth.",
    },
    {
      icon: (
        <Image
          alt="icon-mobile-development-1"
          src="/icons/card-mobile-app.svg"
          width={25}
          height={25}
          className="w-8 h-8"
        />
      ),
      title: "User Interface Design",
      description:
        "A great product is built on a great user experience. Our design experts create intuitive, aesthetically pleasing interfaces that ensure smooth interactions and high user engagement. We focus on usability, accessibility, and consistency to enhance user satisfaction.",
    },
    {
      icon: (
        <Image
          alt="icon-mobile-development-1"
          src="/icons/card-mobile-app.svg"
          width={25}
          height={25}
          className="w-8 h-8"
        />
      ),
      title: "Mobile App Development",
      description:
        "We build high-performance websites applications that deliver seamless user experiences across all devices. Our team ensures your digital product is not only visually appealing but also fast, responsive, and intuitive. We develop solutions that enhance engagement and drive growth",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative shadow-lg cursor-pointer hover:shadow-primary-100 text-white hover:bg-primary-300 hover:text-dark-100 rounded-2xl bg-white/5 p-16 backdrop-blur-lg transition-all duration-300 hover:bg-white/10"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-200/20 text-teal-200">
              {service.icon}
            </div>
            <h3 className="mb-3 text-4xl font-semibold">{service.title}</h3>
            <p className="text-base leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
