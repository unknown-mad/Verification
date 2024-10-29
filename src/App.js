import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import LanguagePage from "./LanguagePage";
import TermsPage from "./TermsPage";
import  MobilePage from "./MobilePage"
import  AddressPage from "./AddressPage"
import UpdateAddressPage from "./UpdateAddressPage";
import TimePeriodPage   from "./TimePeriodPage"
import  BasicDetails from "./BasicDetails"
import Instruction from "./Instruction";
import DocUploadPage from "./DocUploadPage";
import Map from "./Map";
import FeedBackPage from "./FeedBackPage";
 

function App() {
  return (
    <div>
      {/* <LanguagePage /> */}
      {/* <TermsPage/> */}
      {/* <MobilePage/> */}
       {/* <AddressPage/> */}
       {/* <TimePeriodPage/> */}

       <Router> 
        <Routes>
        <Route path="/" element={<LanguagePage />} />
        <Route path="/TermsPage" element={<TermsPage />} />
        <Route path="/MobilePage" element={<MobilePage />} />
        <Route path="/AddressPage" element={<AddressPage />} />
        <Route path="/UpdateAddressPage" element={<UpdateAddressPage />} />
        <Route path="/TimePeriodPage" element={<TimePeriodPage />} />
        <Route path="/BasicDetails" element={<BasicDetails />} />
        <Route path="/Instruction" element={<Instruction />} />
        <Route path="/DocuploadPage" element={<DocUploadPage/>}/>
        <Route path="/Map" element={<Map/>}/>
        <Route path="/FeedBackPage" element={<FeedBackPage/>}/>
      </Routes>
    </Router>
        
    </div>
  );
} 

export default App;
