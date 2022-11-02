import '../styles/globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <title>TBD</title>
        <meta name="description" content="TBD" />
        <link rel="icon" href="../../public/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
