import Card from '@/components/Card'

export default function Home() {
  return (
    <>
      <div className="header">
        <h2>News Articles</h2>
        <button>Publish</button>
        <button>Delete</button>
        <input type="text" placeholder='Search..' />
      </div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}
