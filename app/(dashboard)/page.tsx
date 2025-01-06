"use client";
import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";
import BoardList from "./_components/board-list";
import { useSearchParams } from "next/navigation";

const DashBoardPage = () => {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();

  // Convert `null` values to `undefined`
  const query = {
    search: searchParams.get("search") || undefined,
    favourites: searchParams.get("favourites") || undefined,
  };

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={query} />
      )}
    </div>
  );
};

export default DashBoardPage;
