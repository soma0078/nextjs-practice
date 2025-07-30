export default function HeroSection() {
  return (
    <section className="items-center justify-center *:text-center flex flex-col">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold ">Lorem ipsum dolor sit amet.</h2>
        <p className="whitespace-pre-line text-lg">
          {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. \nExpedita reprehenderit exercitationem commodi voluptatibus, in placeat? \nEos dicta temporibus perferendis commodi!`}
        </p>
      </div>
    </section>
  );
}
