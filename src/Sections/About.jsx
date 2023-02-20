import PageIndicator1 from "../assets/About/PageIndicator1.png";
import {initializeApp} from "firebase/app";
import {collection, getCountFromServer, getFirestore} from "firebase/firestore";
import {addDoc} from "firebase/firestore";
import {useEffect, useState, useRef} from "react";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  TRAFFIC_INFO_REF,
  VISITORS_COL,
} from "../apikey";

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

export default function About({aboutRef, footerRef}) {
  const [totalVisitor, setTotalVisitor] = useState(0);
  const dataFetchedRef = useRef(false);

  const sendIpInformation = async (countryCode, region, ip) => {
    await addDoc(collection(db, TRAFFIC_INFO_REF + VISITORS_COL), {
      ip: ip,
      countryCode: countryCode,
      region: region,
    });
  };

  const getIpInformation = async () => {
    fetch("http://ip-api.com/json/")
      .then((response) => response.json())
      .then((data) => {
        sendIpInformation(data.countryCode, data.region, data.query);
      });
  };

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
    <div
      className='px-32 flex items-center justify-between h-screen tablet:px-4'
      ref={aboutRef}
    >
      <div>
        <h1 className='font-Inconsolata text-5xl text-primaryTextColor font-bold tablet:text-3xl phone:text-2xl'>
          Hello, I'm
        </h1>

        <div className='flex'>
          <h1
            className='font-Inconsolata text-5xl text-primaryTextColor font-bold whitespace-nowrap
            tracking-wide tablet:text-3xl phone:text-2xl'
          >
            a Front end
          </h1>
          <div className='mr-6' />
          <h1
            className='font-Inconsolata text-5xl text-secondaryColor font-bold tracking-wide
          tablet:text-3xl phone:text-2xl'
          >
            Developer
          </h1>
        </div>

        <div
          className='font-Inconsolata font-semibold text-xl text-secondaryTextColor w-96 mt-4
          tracking-wide tablet:text-lg phone:text-md'
        >
          I design and build user-friendly websites and android apps.
        </div>

        <button
          className='font-Inconsolata text-xl text-primaryTextColor bg-secondaryColor mt-4
            px-8 py-2 rounded-sm tablet:text-lg tablet:px-4 tablet:py-2 phone:text-md'
          onClick={() => {
            footerRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "start",
            });
          }}
        >
          Connect With Me
        </button>

        <div className='mt-16 flex font-Inconsolata font-semibold text-lg text-secondaryTextColor'>
          <div className='mr-4'>Total number of visits:</div>
          <div className='text-primaryTextColor'>{totalVisitor}</div>
        </div>
      </div>
      <img src={PageIndicator1} className='laptop:hidden' />
    </div>
  );
}
