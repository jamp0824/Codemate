import Layout from "../components/shared/Layout";
import sortedYoutubeData from "../data/sortedYoutubeData.json";
import ContentsLayout from "../components/shared/ContentsLayout";
import SubscriptionCard from "../components/subscription/SubscriptionCard";

import "moment/locale/ko";
import moment from "moment";

function Subscription() {
  const time1 = moment("2021-09-10T08:00:33");
  const time2 = moment("2021-09-24T08:00:33");
  const time3 = moment("2021-09-24T09:50:33");

  console.log("time1과의 차이 : ", time1.fromNow());
  console.log("time2과의 차이 : ", time2.fromNow());
  console.log("time3과의 차이 : ", time3.fromNow());
  return (
    <Layout activeMenu="subscription">
      <ContentsLayout>
        {sortedYoutubeData["data"].map(function (data, index) {
          return (
            <SubscriptionCard data={data} key={`subscription-card-${index}`} />
          );
        })}
      </ContentsLayout>
    </Layout>
  );
}

export default Subscription;
