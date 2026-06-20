import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charleston Mobile Car Detailing",
  description: "Mobile car detailing in Charleston, WV.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
