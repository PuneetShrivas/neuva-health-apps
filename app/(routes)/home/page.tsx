import CommonQuestions from "@/core/components/home/CommonQuestions";
import ExpertMedicalTeam from "@/core/components/home/ExpertMedicalTeam";
import HeroCards from "@/core/components/home/HeroCards";
import HeroText from "@/core/components/home/HeroText";
import JourneyBetterHealth from "@/core/components/home/JourneyBetterHealth";
import PrivacyMatters from "@/core/components/home/PrivacyMatters";
import QualityTreatment from "@/core/components/home/QualityTreatment";
import TakeFirstStep from "@/core/components/home/TakeFirstStep";
import TrustedByMen from "@/core/components/home/TrustedByMen";
import { Separator } from "@/core/components/ui/separator";

import { createClient } from '@/app/lib/server';
export default async function HomePage() {
  const supabase = await createClient()
  
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
      // redirect('/auth/login')
    }
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex flex-col pb-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto">
        <HeroText />
        <HeroCards />
      </div>
      <div className="items-center">
      <div className="flex flex-col gap-4 md:gap-8 text-center w-full items-center">
                  <div className="text-4xl md:text-6xl font-semibold tracking-tight">
                    <h1>Your Journey to</h1>
                    <h1>Better Health</h1>
                  </div>
                  <div className=" text-base md:text-lg px-4 md:px-36 font-extralight max-w-screen-md">
                  Our comprehensive care approach guides you from initial consultation to ongoing treatment, with physician support at every stage of your wellness journey.
                  </div>
                </div>
                </div>
                
      <JourneyBetterHealth className="w-full mx-auto" />
      {/* <SolutionsEveryNeed /> */}
      <ExpertMedicalTeam id={"about-neuva-health"} className="p-10 md:p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
      <QualityTreatment className="p-10 md:p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
      <PrivacyMatters className="p-10 md:p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
      {/* <Separator /> */}
      <TrustedByMen className="p-10 md:p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
      <CommonQuestions className="p-10 md:p-20 max-w-screen-xl w-full px-4 md:px-10 mx-auto" />
      <TakeFirstStep className="p-10 md:p-20 w-full px-4 md:px-10 mx-auto" />
      <Separator />
    </div>
  );
}
