import BlockButton from "@repo/ui/src/BlockButton.tsx";
import MainBanner from "@repo/ui/src/MainBanner.tsx";

export default function Page(): JSX.Element {
  const slides = [
    // {
    //   imageUrl:
    //     "https://res.cloudinary.com/dwat1o60y/image/upload/e_contrast:99/e_brightness:2/q_auto:best/c_scale,h_800,w_1200/firetur/bc-tour/xgyl6b6nwmqawgs6fwxh.jpg",
    //   title:
    //     "¡Explora Oxapampa con Confianza! 🌿 - Tours únicos y guiados por expertos locales. 🏞️✨",
    // },
    // {
    //   imageUrl:
    //     "https://res.cloudinary.com/dwat1o60y/image/upload/firetur/bc-tour/lycdj8e3ax5xz5froepw.jpg",
    //   title:
    //     "Aventuras Personalizadas para Ti 🚵‍♂️ - Descubre la naturaleza y cultura de Oxapampa. 🌄",
    // },
    {
      imageUrl:
        "https://res.cloudinary.com/dwat1o60y/image/upload/v1717642810/firetur/bc-tour/j5hkrucb1qpyy4vnsr0o.jpg",
      title:
        "Tu Viaje, Nuestra Pasión 🌟 - Garantizamos seguridad y experiencias inolvidables. 🌺 ",
    },
  ];

  return (
    <main className="w-full h-screen bg-slate-500">
      {/* https://www.figma.com/design/T068H1N1b4B9rofuQtiJxD/Travel-%26-Tour-Booking-Website-(Community)?node-id=0-1797&t=FuaiCHRlds7JUsxC-0 */}
      <MainBanner content={slides} />
      <h2>Web testing</h2>

      <BlockButton />
    </main>
  );
}
