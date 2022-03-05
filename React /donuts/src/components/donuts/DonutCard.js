import { Link } from 'react-router-dom'

function DonutCard({ title, imgAlt, img, description, id }) {
  return (
    <div>
      <Link to={`/donuts/${id}`}>
        <div>{title}</div>
        <img src={`http://localhost:3000/${img}`} alt={imgAlt} />
      </Link>
      {/* {console.log(imgAlt)} */}
      {/* <div>{description}</div> */}
    </div>
  )
}

export default DonutCard
