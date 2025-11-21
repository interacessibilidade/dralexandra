
import { MentoriaHero } from "@/components/MentoriaHero";
import { MentoriaIntro } from "@/components/MentoriaIntro";
import { MentoriaContent } from "@/components/MentoriaContent";
import { MentoriaTargetAudience } from "@/components/MentoriaTargetAudience";
import { MentoriaEligibleProfessionals } from "@/components/MentoriaEligibleProfessionals";
import { MentoriaBenefits } from "@/components/MentoriaBenefits";
import { MentoriaCTA } from "@/components/MentoriaCTA";

const Mentoria = () => {
  return (
    <div>
      <MentoriaHero />
      <MentoriaIntro />
      <MentoriaContent />
      <MentoriaTargetAudience />
      <MentoriaEligibleProfessionals />
      <MentoriaBenefits />
      <MentoriaCTA />
    </div>
  );
};

export default Mentoria;
