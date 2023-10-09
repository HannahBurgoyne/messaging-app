interface Props {
  children: React.ReactNode
}

function Background(props: Props) {
  return (
    <main className="bg-emerald-100 inset-0 flex flex-col min-h-screen">
      {props.children}
    </main>
  )
}

export default Background
