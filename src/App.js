

function App() {
  return (
    <div className="form-container">
      <h1>Personal Data Protection Act (PDPA) Form</h1>
      <form>
        <label>This Notice is issued to you by and on behalf of WCT Holdings Berhad and its related companies* (hereinafter referred to as <b>“WCT Group”</b>) pursuant to the Personal Data Protection Act 2010. In this notice “we”, “our” and “us” refer to any of the companies within the <b>WCT Group</b>.</label>
        <div className="label">
          <label><b>Source and Description of Personal Data</b></label>
          <div><label>We have collected and/or will be collecting personal data as disclosed by / collected from you as described in the form attached herewith. (Collectively referred to in this Notice as your <b>“Data”</b>)</label>
          </div>
        </div>

        <div className="label">
          <label><b>Purpose and Disclosure</b></label>
          <div><label>Your Data is being or will be processed for the purposes for which it was disclosed by you, such as to enable us to consider entering into a contract with you, to fulfil our contractual obligations to you and/or to offer or to deliver products and/or services to you. In addition, your Data is also being processed or will be processed to enable us to better administer our contractual relationship and/or to provide you with information on WCT Group, its activities, products and/or services and any other purposes relating hereto. (Collectively referred to in this Notice as the “Purposes”)</label>
          </div>
        </div>

        <div className="label">
          <div><label>For the Purposes, your Data may be disclosed to another company within the WCT Group or to our agents, representatives, professional advisors and/or consultants, third party service and/or utility providers, contractors, suppliers and/or vendors as well as to relevant governmental, municipal and/or regulatory authorities and any other parties as may deem necessary by us to fulfil the Purposes as mentioned above.</label>
          </div>
        </div>

        <div className="label">
          <label><b>Access, Correction, Inquiry and/or Complaint</b></label>
          <div><label>You have the right to request for access to your Data and to request to update or correct the same. To request access or if you have any inquiries and/or complaints regarding your Data and/or the manner it is being processed , please contact Corporate Communication Manager at 03-78052266 or email us at pdpa@wct.my. Please note that you will be requested to provide information to verify your identity. It will also be helpful if you can provide the name of the WCT Group company which is (or which you believe is) processing your Data.</label>
          </div>
        </div>

        <div className="label">
          <label><b>Consent and Choice</b></label>
          <div><label>Save for Data necessary for the performance of contracts between us (for which you must provide the Data failing which you may be in breach of contract and/or we may not be able to contract with or fulfil our contractual obligation to you), you may choose whether or not to provide your Data and (if already provided) may choose whether or not to consent, or to withdraw or limit your consent for your Data to be collected and/or processed as above. If you do not consent or wish to withdraw or limit your consent for your Data to be collected and/or processed as above, please complete the Withdrawal Form on our website at www.wct.com.my/pdpa and indicate your choice by following the steps provided there.</label>
          </div>
        </div>

        <div className="label">
          <div><label>If you agree to have your Data to be collected and/or processed as above, please indicate your consent by signing below.
Thank you.
For and on behalf of
            <br/>
            <b>WCT Holdings Berhad and its related companies*</b>
            <br/>
B-30-01, The Ascent, Paradigm,
            <br />
No. 1, Jalan SS7/26A, Kelana Jaya, 47301 Petaling Jaya, Selangor Darul Ehsan</label>
            
          </div>
        </div>
        
        <hr />

        
        <div className="label">
          <label><b>Privacy Notice</b></label>
          <div><label>I have fully read and understood your Privacy Notice in WCT Group in English and Bahasa Malaysia and I/We hereby agree and consent to you and your Group to use my and/or our employee's Personal Data in accordance with the terms and conditions set out in the Privacy Notice.</label>
          </div>
          <br />
          <div className="label">
            <label><b>CONFIRMATION AND CONSENT</b></label>
          <br/>
            <div className="confirmation"><label>I, <input type="text" placeholder="Your Name"/>, <input type="text" placeholder="NRIC/Passport No."/> confirm I have read the above Notice and hereby give my consent to WCT Holdings Berhad and its related companies* (<b>“WCT Group”</b>) to process my Data in accordance with the above.</label>
          </div>
        </div>


          <div><label><i>*WCT Holdings Berhad, WCT Berhad, WCT Construction Sdn Bhd, WCT Land Sdn Bhd, Labur Bina Sdn Bhd, Gemilang Waras Sdn Bhd, Gabungan Efektif Sdn Bhd, Camellia Tropicana Sdn Bhd, Jelas Puri Sdn Bhd, Labur Bina Management Sdn Bhd, Atlanta Villa Sdn Bhd, One Medini Sdn Bhd, WCT Land Resources Sdn Bhd, BBT Mall Sdn Bhd, WCT Properties Sdn Bhd, BBT Hotel Sdn Bhd, WCT Hotel & Facilities Management Sdn Bhd, WCT Property Management Sdn Bhd, Urban Courtyard Sdn Bhd, Segi Astana Sdn Bhd, Platinum Meadow Sdn Bhd, WCT Assets Sdn Bhd, WCT Realty Sdn Bhd, WCT Premier Development Sdn Bhd, Pioneer Acres Sdn Bhd, Jubilant Courtyard Sdn Bhd, WCT Acres Sdn Bhd, WCT Hartanah Jaya Sdn Bhd, WCT Equity Sdn Bhd, WCT Plantations Sdn Bhd, WCT Group Sdn Bhd, WCT Green Sdn Bhd, WCT Pioneer Development Sdn Bhd, WCT Precious Development Sdn Bhd, WCT Phenomenon Development Sdn Bhd, WCT OUG Development Sdn Bhd and other companies which may be included in the future as related companies.</i></label>
          </div>
        </div>




        <div className="label">
        <input type="checkbox" />
          <label>I have read, agreed and accepted the disclaimer and privacy notices.</label>
        </div>

        <div className="buttons">
          <button>Reset</button>
          <button className="confirm">Confirm</button>
          

        </div>

      </form>
    </div>
  );
}

export default App;
