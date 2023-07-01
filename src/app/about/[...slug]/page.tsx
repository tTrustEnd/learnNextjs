export default function Page({ params }: { params: { slug: string } }) {
    return <div>My ...slug: {params.slug}</div>
  }