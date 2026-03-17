export default function Hero({ data }: any) {
  return (
    <section className="hero">
      <h1>{data.title}</h1>
    </section>
  );
}