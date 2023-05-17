import Card from '@/components/Card'
import Modal from '@/components/Modal'

export default function Home() {
  return (
    <>
      <div className="header">
        <h2>News Articles</h2>
        <div className="header-options">
          <button>Publish</button>
          <button>Delete</button>
          <input type="text" placeholder='Search..' />
        </div>
      </div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
      <Modal />
    </>
  )
}
