import Card from '@/components/Card'
import Modal from '@/components/Modal'
import Header from '@/components/Header'
import data from './MOCK_DATA.json'

export interface DataType{
  id: number,
  author: string,
  title: string,
  content: string,
  date: string
}

const DATA: DataType[] = data;

export default function Home() {
  return (
    <>
      <Header />
      <div className="card-container">
        {
          DATA.map((item, i) => {
            return <Card
              key={i}
              {...item}
            />;
          })
        }
      </div>
      <Modal />
    </>
  )
}
