import { useRouter } from "next/router";

// our-domail.com/news/something-important

function DetailPage() {
  const router = useRouter();
  console.log(router.query.newsId);
  // send request to the backendAPI
  // to fetch the news item width neswId
  return <h1>The Detail Page</h1>;
}

export default DetailPage;
