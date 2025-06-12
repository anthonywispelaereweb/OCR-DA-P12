import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './../assets/mockData/data.js'
import { Link } from 'react-router'
import UserCard from './../components/UserCard'

const InitDashBoard = () => {
  const listId = USER_MAIN_DATA.map((user) => user.id)

  const getInfoUser = (id) => {
    const user = USER_MAIN_DATA.find((user) => user.id === id)
    if (user) return user.userInfos
    return null
  }
  return (
    <>
      <div className='flex flex-col gap-10t'>
        <p className='dashboard-hello'>
          Bonjour
        </p>
        <p>Veuillez choisir un cas : </p>
        <div className='flex flex-wrap items-center gap-10'>
          {listId.map((id) => (
            <Link
              key={'mock' + id}
              to={`/dashBoard-mocked/${id}`}
              className='card-ctn-link'
            >
              <UserCard mocked={true} info={getInfoUser(id)} />

            </Link>
          ))}
          {listId.map((id) => (
            <Link
              key={'noMock' + id}
              to={`/dashBoard/${id}`}
              className='card-ctn-link'
            >
              <UserCard mocked={false} info={getInfoUser(id)} />
            </Link>
          ))}
        </div>  

      </div>
    </>
  )
}
export default InitDashBoard
