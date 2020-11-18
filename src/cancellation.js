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
      <h3 style={{textAlign:"center"}}>
            Cancellation Form
          </h3>

      <table className="purchaser">
        <tr>
          <th>
            Date:
          </th>
          <th >
            <input type="text" style={{width:"18vw"}}/>
          </th>
        </tr>
        <tr>
          <th >
            To:
          </th>
          <th>
            <p style={{fontWeight:"normal"}}>
              WCT OUG DEVELOPMENT SDN BHD
               <br/>
              B-29-02 Level 29 The Ascent Paradigm
              <br/>
              1 Jalan SS7/26A Kelana Jaya
              <br/>
              47301 Petaling Jaya, 
            </p>
          </th>
        </tr>
      </table>

      <div>
        <p>Dear Sir/ Madam,</p>
        <table className="purchaser">
          <tr>
            <th>RE :</th>
            <th>INSTRUCTION TO CANCEL OFFER TO PURCHASE (“OTP”)</th>
          </tr>
          <tr>
            <th>Project : </th>
            <th><input type="text"/></th>
          </tr>
          <tr>
            <th>Parcel No. ("Property") : </th>
            <th><input type="text"/></th>
          </tr>
          <tr>
            <th>SPA Price : </th>
            <th><input type="text"/></th>
          </tr>
          <tr>
            <th>Name of Purchaser (1) : </th>
            <th><input type="text"/></th>
          </tr>
          <tr>
            <th>Name of Purchaser (2) : </th>
            <th><input type="text"/></th>
          </tr>
          <tr>
            <th>Name of Purchaser (3) : </th>
            <th><input type="text"/></th>
          </tr>
          <tr>
            <th>Name of Purchaser (4) : </th>
            <th><input type="text"/></th>
          </tr>
          <tr>
            <th>Name of Purchaser (5) : </th>
            <th><input type="text"/></th>
          </tr>
        </table>

        <hr />
        <div className="text">
          <p>I/We refer to the OTP in respect of the above-mentioned Property dated<input type="text"/>I/We, the
undersigned wish to cancel the purchase of the Property and hereby confirm my/our request for the said cancellation.</p>
        </div>

        <table className="purchaser">
          <tr>
            <th>
              The reason for the cancellation is due to : 
            </th>
            <th>
              <input type="text"/>
            </th>
          </tr>
          <tr>
            <th>
            </th>
            <th>
              <input type="text"/>
            </th>
          </tr>
          <tr>
            <th>
            </th>
            <th>
              <input type="text"/>
            </th>
          </tr>
            <tr>
            <th>
            </th>
            <th>
            (Refer Loan Rejection Letter / supporting documents attached).
            </th>
          </tr>

          <tr>
            <th>
              Please issue a refund cheque payable to :
            </th>
            <th>
            <input type="text"/>
            </th>
          </tr>

          <tr>
            <th>
            </th>
            <th>
            ("Payee" if any)
            </th>
          </tr>
        </table>

        <p>
          I/We hereby agree to deduct any merchant / cancellation / administrative charges (if any) from the refund amount
          payable to me/us. You are hereby authorized to release the said refund cheque to the Payee above.
          I/We shall from the date of this letter, have no further claims or any rights whatsoever in respect of the Property and
          you are fully entitled to deal with the Property in any manner whatsoever without any reference to me/us. I/We
          understand that the Property shall immediately be open for offers to purchaser by other parties, and the developer
          shall have the right to accept any such offer(s) as case may be, without any further reference to me/us. 
          <br />
          <br />
          Thank You.
        </p>

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
    </div>
  );
}

export default App;
