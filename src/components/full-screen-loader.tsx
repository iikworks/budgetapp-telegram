import { DotLoader } from "react-spinners";

export default function FullScreenLoader() {
  return <section className="h-screen w-screen -m-4 flex items-center justify-center">
    <DotLoader color="#7c2cc2" />
  </section>;
}
