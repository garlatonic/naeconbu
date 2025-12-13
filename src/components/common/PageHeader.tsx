export default function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <section
      className={"bg-bg-sub border-border flex items-center justify-center border-b px-15 py-16"}
    >
      <div className={"flex w-full max-w-400 flex-col gap-4"}>
        <h2 className={"text-4xl font-bold"}>{title}</h2>
        <p className={"text-text-sub text-base"}>{description}</p>
      </div>
    </section>
  );
}
