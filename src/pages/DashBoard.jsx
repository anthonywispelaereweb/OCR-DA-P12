import { useParams } from "react-router-dom";
import { useGetData } from "./../Hooks/useGetData";
import { useDelayedLoading } from "./../Hooks/useDelayedLoading";
import usePageTitle from "./../Hooks/usePageTitle";
import { useNavigate } from "react-router";
import Loading from "./../components/Loading";
import DailyActivityChart from "./../components/Charts/DailyActivityChart";
import AverageSessionsChart from "./../components/Charts/AverageSessionsChart";
import NutritionCard from "./../components/NutritionCard";
import PerformanceChart  from "./../components/Charts/PerformanceChart";
import ScoreChart from "./../components/Charts/ScoreChart";

function DashBoard({ useMockData, redirectError = false }) {
  usePageTitle("DashBoard - SportSee");
  const navigate = useNavigate();
  const { id } = useParams();
  const userId = /^\d+$/.test(id) ? Number(id) : 0;

  // Fetch the User data
  const { isLoading, hasError, data, codeStatus } = useGetData(userId, useMockData);

  // Control the loading component display based on loading duration
  const showLoading = useDelayedLoading(isLoading, 1200, 1200);

  // Show the loading component
  if (showLoading) {
    return <Loading />;
  }

  // Handle invalid user ID
  if (!userId || codeStatus === "404") {
    navigate("/error/404");
    return null;
  }

  // Handle error fetching data
  if (hasError) {
    navigate(`/dashBoard-mocked-error/${userId}`, { replace: true });
    return null;
  }

  // Display profile if data is loaded without errors
  if (!isLoading && !hasError) {
    return (
      <>
        <header>
          {redirectError && (
            <p className="text-lg text-red-500">
              Une erreur s'est produite lors de la récupération des données.
            </p>
          )}

          <h1 className="mb-8 text-5xl font-medium">
            Bonjour{" "}
            <span className="text-primary">
              {data.userMainData.userInfos.firstName}
            </span>
          </h1>
          <p className="text-lg">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </header>
        <section className="mt-12 flex flex-col gap-8 xl:flex-row">
          <div className="grid flex-1 grid-cols-3 grid-rows-[300px_263px] gap-7">
            <div className="col-span-3">
              <DailyActivityChart data={data.activityData.sessions} />
            </div>
            <div>
              <AverageSessionsChart data={data.averageSessionData.sessions} />
            </div>
            <div>
              <PerformanceChart data={data.performanceData} />
            </div>
            <div>
              <ScoreChart scorePercentage={data.userMainData.scorePercentage} />
            </div>
          </div>
          <div className="flex justify-between gap-7 xl:w-[258px] xl:flex-col">
            <NutritionCard
              type="calorieCount"
              value={data.userMainData.keyData.calorieCount}
            />
            <NutritionCard
              type="proteinCount"
              value={data.userMainData.keyData.proteinCount}
            />
            <NutritionCard
              type="carbohydrateCount"
              value={data.userMainData.keyData.carbohydrateCount}
            />
            <NutritionCard
              type="lipidCount"
              value={data.userMainData.keyData.lipidCount}
            />
          </div>
        </section>
      </>
    );
  }
}

export default DashBoard;
