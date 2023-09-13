type Props = {
  params: {
    searchTerm: string
  }
}

export default function Page({ params: { searchTerm }}: Props) {
  return (
    <div>Page</div>
  )
}