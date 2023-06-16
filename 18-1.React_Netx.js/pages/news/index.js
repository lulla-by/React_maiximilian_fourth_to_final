import { Fragment } from "react";
import Link from 'next/link'


// our domain.com/news

function NewsPage() {
  return (
    <Fragment>
      <h1>the news page</h1>
      <ul>
        <Link href="/news/nextjs">
          <li>NextJS</li>
        </Link>
        <Link href="/news/something">
          <li>something</li>
        </Link>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
