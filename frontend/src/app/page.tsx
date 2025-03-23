import { ConnectDB } from "@/lib/dbConnect";

export default async function Home() {
  await ConnectDB();
  return (
    <div>
      <h1>hello world</h1>

    </div>
  );
}
