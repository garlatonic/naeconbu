export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* TODO: 왼쪽 이미지 */}
      <div className="bg-point-main flex-1"></div>
      <div className="bg-bg-main flex flex-1 justify-center p-20">{children}</div>
    </div>
  );
}
