import type { Metadata } from "next";
import RecruitContent from "./RecruitContent";

export const metadata: Metadata = {
  title: "OrvaIt Recruit — AI-Powered Candidate Assessment Platform",
  description: "Stop reading CVs that don't match reality. Screen candidates with proctored, timed assessments and get scored reports instantly. Built for Sri Lankan companies.",
};

export default function RecruitPage() {
  return <RecruitContent />;
}
