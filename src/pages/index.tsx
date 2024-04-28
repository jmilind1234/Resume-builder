import { Inter } from "next/font/google";
import {
  IntroDetails,
  JobDetails,
  ProfileHeader,
} from "@/styles/resumeComponentStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ProfileHeader>
        <IntroDetails>
          <button id="edit-intro">EDIT</button>
          <h2 id="name_heading">Milind D Jain</h2>
          <p id="profession">Software Developer</p>
          <p id="workplace"> at Birlasoft</p>
        </IntroDetails>
        <hr style={{ width: "90%" }}></hr>
        <JobDetails>
          <div id="personalDetails">
            <p>Udaipur, INDIA</p>
            <p>jmilind1234@gmail.com</p>
            <p>9588982284</p>
          </div>
          <div id="vertical-seperator"></div>
          <div id="professionalDetails">
            <p>1 Year 11 Months</p>
            <p>₹ 4,60,000</p>
            <p>3 Months notice period</p>
          </div>
        </JobDetails>
      </ProfileHeader>
    </>
  );
}
