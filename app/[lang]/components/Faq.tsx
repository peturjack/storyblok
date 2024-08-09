type faqProps = {
  data: {
    title: string;
    faq_cards: [
      {
        title_question: string;
        subtitle_answer: string;
      }
    ];
  };
};

const Faq = ({ data }: faqProps) => {
  const { title, faq_cards } = data;
  return (
    <section className="px-52 bg-zinc-950 pt-20 pb-36">
      <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        {faq_cards.map((f) => (
          <div key={f.title_question} className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full px-5 rounded-2xl py-5 bg-neutral-800">
              <h3 className="text-2xl text-gray-400 pb-2">
                {f.title_question}
              </h3>
              <p className="text-xl leading-normal">{f.subtitle_answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
