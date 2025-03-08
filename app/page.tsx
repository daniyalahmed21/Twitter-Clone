import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="px-4  pt-4 flex items-center justify-around border-b-[1px] text-textGray border-borderGray">
        <Link href="/" className="pb-4 border-b-4 flex items-center border-iconBlue rounded-sm">For you</Link>
        <Link href="/" className="pb-4 border-b-4 flex items-center border-iconBlue rounded-sm">Following</Link>
      </div>
      <Share/>
      <Feed/>
    </div>
  );
}
