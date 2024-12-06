import PageContainer from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Dashboard : Overview",
};

export default function page() {
  return (
    <PageContainer scrollable>
      <div className="space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Dashboard Sample
          </h2>
          <div className="hidden items-center space-x-2 md:flex">
            <Button>Download</Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
