import WholeName from "./assets/WholeName.png";

import Header from "./Sections/Header";
import About from "./Sections/About";
import MySkillSets from "./Sections/MySkillSets";
import ContactMe from "./Sections/ContactMe";
import Footer from "./Sections/Footer";

import {useEffect, useState, useRef} from "react";

import {initializeApp} from "firebase/app";
import {
  collection,
  getCountFromServer,
  getFirestore,
  addDoc,
} from "firebase/firestore";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  TRAFFIC_INFO_REF,
  VISITORS_COL,
} from "./apikey";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [totalVisitor, setTotalVisitor] = useState(0);
  const aboutRef = useRef();
  const mySkillSetsRef = useRef();
  const contactMeRef = useRef();
  const footerRef = useRef();
  const dataFetchedRef = useRef(false);

  const saveIpInformation = async (countryCode, region, ip, isp) => {
    const currentDate = new Date();

    // Save the ip information from the client in firestore database
    await addDoc(collection(db, TRAFFIC_INFO_REF + VISITORS_COL), {
      ip: ip,
      countryCode: countryCode,
      region: region,
      isp: isp,
      timeStamp: currentDate.toString(),
      userAgent: window.navigator.userAgent,
    });
  };

  const getIpInformation = async () => {
    // Get the ip address of the client
    fetch("https://api.ipify.org/?format=json")
      .then((responseIp) => responseIp.json())
      .then((clientIp) => {
        // Then fetch information about the ip to determine where it come from
        // and the name of its internet service provider.
        fetch(`https://ip-api-lyart.vercel.app/${clientIp.ip}/${Date()}`)
          .then((responseIpInfo) => responseIpInfo.json())
          .then((clientIpInfo) => {
            saveIpInformation(
              clientIpInfo.countryCode,
              clientIpInfo.region,
              clientIpInfo.ip,
              clientIpInfo.isp
            );
          });
      });
  };

  // Get the total number of visits from the website
  const getTotalNumberOfVisitors = async () => {
    const visitorCollection = collection(db, TRAFFIC_INFO_REF + VISITORS_COL);
    const snapshot = await getCountFromServer(visitorCollection);
    setTotalVisitor(snapshot.data().count + 1);
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getIpInformation();
    getTotalNumberOfVisitors();
  }, []);

  return (
    <div className='w-screen'>
      <img src={WholeName} className='absolute mt-56 ml-12 laptop:hidden' />

      <Header
        aboutRef={aboutRef}
        mySkillSetsRef={mySkillSetsRef}
        contactMeRef={contactMeRef}
      />
      <About
        totalVisitor={totalVisitor}
        aboutRef={aboutRef}
        footerRef={footerRef}
      />
      <MySkillSets mySkillSetsRef={mySkillSetsRef} />
      <ContactMe contactMeRef={contactMeRef} />
      <Footer
        footerRef={footerRef}
        aboutRef={aboutRef}
        mySkillSetsRef={mySkillSetsRef}
        contactMeRef={contactMeRef}
      />

      <div
        className='font-Inconsolata font-semibold text-lg tracking-wide 
        bg-skillSetBgColor text-secondaryTextColor flex justify-center
        pb-8'
      >
        Designed by John Dewey
      </div>
    </div>
  );
}

export default App;
