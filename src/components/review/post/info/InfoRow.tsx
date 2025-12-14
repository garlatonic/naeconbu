interface InfoRow {
  label: string;
  value: string;
}

export default function InfoRow({ label, value }: InfoRow) {
  return (
    <div className="flex flex-1 flex-col gap-1">
      <span className="text-text-sub">{label}</span>
      <p>{value}</p>
    </div>
  );
}
