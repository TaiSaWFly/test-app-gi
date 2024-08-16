import { Metadata } from "next";
import { FC } from "react";
import RepositoryPage from "@/components/pages/RepositoryPage/RepositoryPage";

export const metadata: Metadata = {
  title: "Repository",
};

const Repository: FC = () => <RepositoryPage />;

export default Repository;
