import './UserCard.scss'
const UserCard = ({ info, mocked }) => {
  const { firstName, lastName, age } = info
  return (
    <div className='card'>
      <div className='card-info'>
        <h2 className='card-firstName'>{firstName}</h2>
        <div className='card-lastName'>{lastName}</div>
        <div className='card-age'>{age}</div>
        <p>{mocked ? 'Mocked-data' : 'Api call'}</p>
      </div>
    </div>
  )
}
export default UserCard
