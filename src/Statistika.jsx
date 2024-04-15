const Card = (props) => {
  return (
    <div className="bg-slate-200 h-[200px] flex flex-col items-center justify-center">
      <h3 className="text-xl font-bold">{props.card.count}+</h3>
      <div className="w-full h-[1px] bg-gray-400 my-4" />
      <p className="text-[20px]">{props.card.title}</p>
    </div>
  );
};

const Statistika = () => {
  const data = [
    { id: 1, count: 1500, title: "Otkazilgan tadbirlar" },
    { id: 2, count: 1400, title: "Yangi tadbirlar" },
    { id: 3, count: 1300, title: "Eski tadbirlar" },
    { id: 4, count: 1200, title: "Yoq tadbirlar" },
  ];
  return (
    <div className="mt-[50px]">
      <h2 className="text-2xl font-bold mb-[30px]">Statistika</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {data.map((item) => {
          return <Card key={item.id} card={item} />;
        })}
      </div>
    </div>
  );
};
export default Statistika;
