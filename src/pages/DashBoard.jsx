const DashBoard = () => {
  const name = 'Thomas'
  return (
    <div className="app-content">
      <p className="dashboard-hello">
        Bonjour 
        <span className="dashboard-username">{name}</span>
      </p>
      <p className="dashboard-accompanying">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
export default DashBoard;