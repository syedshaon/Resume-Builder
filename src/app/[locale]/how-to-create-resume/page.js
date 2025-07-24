// export const revalidate = 60;
export const dynamic = "force-dynamic";

import PageClient from "./PageClient";

export default function PageWrapper({ params }) {
  return <PageClient params={params} />;
}
