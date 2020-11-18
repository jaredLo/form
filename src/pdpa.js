import avatar from './assets/avatar.png'
import avatar2 from './assets/avatar2.png'
import wa from './assets/whatsapp.png'
import logo from './assets/wct_logo.png'

function App() {
  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div>
      <h4>Consent to Process Personal Data And Personal Data Protection Notice</h4>
      </div>


      <div>
        
      <hr/>
        <p>
          This Notice is issued to you by and on behalf of WCT Holdings Berhad and its related companies* (hereinafter referred to as “WCT
          Group”) pursuant to the Personal Data Protection Act 2010. In this notice “we”, “our” and “us” refer to any of the companies
          within the WCT Group.
        </p>
        
        <p>
          <b>Source and Description of Personal Data</b>
          <br/>
We have collected and/or will be collecting personal data as disclosed by / collected from you as described in the form attached
herewith. (Collectively referred to in this Notice as your "Data")
        </p>

        <p>
          <b>Purpose and Disclosure</b>
          <br/>
          Your Data is being or will be processed for the purposes for which it was disclosed by you, such as to enable us to consider
entering into a contract with you, to fulfil our contractual obligations to you and/or to offer or to deliver products and/or services
to you. In addition, your Data is also being processed or will be processed to enable us to better administer our contractual
relationship and/or to provide you with information on WCT Group, its activities, products and/or services and any other purposes
relating hereto. (Collectively referred to in this Notice as the "Purposes")
        </p>

        <p>
          For the Purposes, your Data may be disclosed to another company within the WCT Group or to our agents, representatives, professional advisors and/or consultants, third party service and/or utility providers, contractors, suppliers and/or vendors as well
          as to relevant governmental, municipal and/or regulatory authorities and any other parties as may deem necessary by us to fulfil
          the Purposes as mentioned above.
        </p>
        <p>
          <b>
            Access, Correction, Inquiry and/or Complaint</b>
          <br/>
You have the right to request for access to your Data and to request to update or correct the same. To request access or if you
have any inquiries and/or complaints regarding your Data and/or the manner it is being processed , please contact Corporate
Communication Manager at 03-78052266 or email us at pdpa@wct.my. Please note that you will be requested to provide
information to verify your identity. It will also be helpful if you can provide the name of the WCT Group company which is (or which
you believe is) processing your Data.
          
        </p>
        <p>
          <b> Consent and Choice</b>
          <br/>
          Save for Data necessary for the performance of contracts between us (for which you must provide the Data failing which you may
be in breach of contract and/or we may not be able to contract with or fulfil our contractual obligation to you), you may choose
whether or not to provide your Data and (if already provided) may choose whether or not to consent, or to withdraw or limit your
consent for your Data to be collected and/or processed as above. If you do not consent or wish to withdraw or limit your consent
for your Data to be collected and/or processed as above, please complete the Withdrawal Form on our website at
www.wct.com.my/pdpa and indicate your choice by following the 
          
        </p>

        <p>
          If you agree to have your Data to be collected and/or processed as above, please indicate your consent by signing below. 
          <br />
          Thank you. 
          <br />
          For and on behalf of
          <br/>
          <b>WCT Holdings Berhad and its related companies* </b>
          <br/>
          B-30-01, The Ascent, Paradigm, 
          <br/>
          No. 1, Jalan SS7/26A, Kelana Jaya, 47301 Petaling Jaya, Selangor 
        </p>

        <hr />
        
        <p><b>CONFIRMATION AND CONSENT</b></p>

        <div>
          <p>I, <input type="text"/>(name),<input type="text"/>(NRIC No.) confirm I have read the
above Notice and hereby give my consent to WCT Holdings Berhad and its related companies* (“WCT Group”) to process
my Data in accordance with the above. </p>
        </div>
      </div>

      <div className="privacy">
        <p><b>Privacy Notice*</b></p>
        <p>I have fully read and understood your Privacy Notice in WCT Berhad website in English and Bahasa Malaysia and I/We hereby agree and consent to you and your Group to use my and/or our employee's Personal Data in accordance with the terms and conditions set out in the Privacy Notice.</p>
          <div className="privacy-check-container">
             <p><input type="checkbox" />I have read, agreed and accepted the <b>disclaimer</b> and <b>privacy</b> notices.</p>
            </div>
        </div>

        
      <div className="buttons">
        <button>Reset</button>
        <button>Confirm</button>
      </div>




</div>
  );
}

export default App;
