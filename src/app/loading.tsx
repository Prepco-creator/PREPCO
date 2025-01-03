import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <ClipLoader color="#00ada9" size={50} />
    </div>
  );
}
