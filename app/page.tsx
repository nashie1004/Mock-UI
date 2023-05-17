import Card from '@/components/Card'
import Modal from '@/components/Modal'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
      <Modal />
    </>
  )
}
