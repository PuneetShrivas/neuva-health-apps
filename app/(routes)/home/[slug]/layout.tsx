import CommonQuestions from "@/core/components/home/CommonQuestions";
import CTACards from '@/core/components/home/CTACards';
import HowThisMedicineWorks from '@/core/components/home/HowThisMedicineWorks';
import { SlugHeader } from "@/core/components/home/slug-header";
import TakeFirstStep from "@/core/components/home/TakeFirstStep";
import TrustedByMen from "@/core/components/home/TrustedByMen";
import { Separator } from "@/core/components/ui/separator";

interface HomeSlugLayoutProps {
  params: Promise<{
    slug: string;
  }>;
  children: React.ReactNode;
}

export default async function HomeSlugLayout({
  params,
  children,
}: HomeSlugLayoutProps) {
  const { slug } = await params;

  return (
    <div className="flex flex-col overflow-x-hidden">
      <SlugHeader slug={slug} />
      {children}
      {/* <Separator /> */}
      <HowThisMedicineWorks
      id="how-this-medicine-works"
      className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto"
      />
      <TrustedByMen
      id="trusted-by-men"
      className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto"
      />
      <CommonQuestions
      id="common-questions"
      className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto"
      />
      <CTACards
      id="cta-cards"
      className="p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto"
      />
      <TakeFirstStep
      id="take-first-step"
      className="p-20 w-full px-4 md:px-10 mx-auto"
      />
      <Separator />
    </div>
  );
}
