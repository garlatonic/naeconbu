import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export const metadata = {
  title: "내콘부",
  description: "티켓",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
