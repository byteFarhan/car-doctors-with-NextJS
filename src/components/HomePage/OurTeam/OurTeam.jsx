// import { useEffect, useState } from "react";
import SectionIntro from "@/components/SectionIntro/SectionIntro";
import TeamMember from "./TeamMember";
import { getTeamData } from "@/lib/getTeamData";

const OurTeam = async () => {
  const teamData = await getTeamData();
  return (
    <section id="outTeam" className="my-40">
      <SectionIntro
        sectionCategory="Team"
        sectionTitle="Meet Our Team"
        sectionDescription="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamData &&
          teamData?.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
      </div>
    </section>
  );
};

export default OurTeam;
