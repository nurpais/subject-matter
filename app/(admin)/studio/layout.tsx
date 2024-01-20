export const metadata = {
  title: 'SM | Sanity Studio',
  description: 'Studio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
