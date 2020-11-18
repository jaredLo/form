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
      <header>
      <h3 style={{textAlign:"center"}}>
            Offer To Purchase
          </h3>
        <h3>Developer</h3>
        <table className="purchaser">
          <tr>
            <th>
              WCT OUG DEVELOPMENT SDN BHD (Co. No. 197301000681)
            </th>
            <th>PROJECT</th>
            <th>MAPLE RESIDENCES</th>

          </tr>
          
        </table>

        </header>
        <div>
        <p><b>A. DESCRIPTION OF PROPERTY</b></p>
        <table className="purchaser">
          <tr>
            <th>
              PARCEL NO.
          </th>
          <th>
              <input type="text"/>
          </th>
          <th style={{textAlign:"right"}}>
              PARCEL TYPE
          </th>
          <th>
          <input type="text"/>
          </th>
          <th rowSpan="2" style={{textAlign:"right"}}>
              BUILT-UP AREA
          </th>
          <th>
          <input type="text" placeholder="SQ. M"/>
          </th>
          </tr>
          <tr>
            <th>
              CARPARK NO.
          </th>
          <th>
              <input type="text"/>
          </th>
          <th>

          </th>
          <th>
          </th>

          <th>
          <input type="text" placeholder="SQ. FT"/>
          </th>
          </tr>
        </table>

          <div className="purchaser-container">

          <p style={{ marginTop: "50px"}}><b>B. PURCHASER(S) DETAILS</b></p>
          <table className="purchaser">
            <tr>
              <th>NAME(S)</th>
              <th>NRIC / CO. NO. / PASSPORT NO.</th>
              <th>GENDER (M/F)</th>
              <th>RACE (M/C/I/O)</th>
              <th>CONTACT NO.</th>
            </tr>
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
              <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
              <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
              <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
              <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            </table>

            <table className="purchaser-2">
              <tr>
              <th>
                CONTACT PERSON
              </th>
              <th>
                <input type='text'/>
              </th>
                <th rowSpan="4" style={{textAlign:"center", justifySelf:"self-start"}}>
                MAILING ADDRESS
              </th>
              <th >
                <input type="text"/>
              </th>
              
              </tr>

              <tr>
                <th>
                  EMAIL ADDRESS
                </th>
                <th>
                <input type='text'/>
              </th>
              <th >
                <input type="text"/>
              </th>
              
              </tr>

              <tr>
                <th>
                  OFFICE TEL NO.
                </th>
                <th>
                <input type='text'/>
              </th>
              <th >
                <input type="text"/>
              </th>
              </tr>

              <tr>
                <th>
                  MOBILE TEL NO.
                </th>
                <th>
                <input type='text'/>
              </th>
              </tr>

              
            </table>
          </div>
          
          {/* ------C. Payment details------ */}

          <div className="purchaser-container">

          <p style={{ marginTop: "50px"}}><b>C. PAYMENT DETAILS</b></p>
            <table className="purchaser">
              <tr>
                <th>
                  PARCEL PRICE
                </th>
                <th>
                  <input type="number" placeholder="RM"/>
                </th>
                <th>
                  BOOKING FEE
                </th>

                <th>
                  <input type="number" placeholder="RM"/>
                </th>
                <th>
                  WCT RECEIPT NO.
                </th>
                <th>
                <input type="text" />
                </th>
              </tr>

              <tr>
                <th>
                  BUMI DISCOUNT
                </th>
                <th>
                <input type="text" placeholder="YES/NO"/>
                </th>
                <th>
                  PAYMENT MODE
                </th>
                <th>
                <input type="text" placeholder="YES/NO"/>
                </th>
                <th>
                  CASH PURCHASE
                </th>
                <th>
                <input type="text" placeholder="YES/NO"/>
                </th>
              </tr>

              <tr>
                <th>
                  BUMI DISCOUNT
                </th>
                <th>
                <input type="number" placeholder="RM"/>
                </th>
                <th>
                  CHEQUE NUMBER
                </th>
                <th>
                <input type="text"/>
                </th>
                <th>
                  END FINANCING
                </th>
                <th>
                <input type="text" placeholder="BANK'S NAME"/>
                </th>
              </tr>

              <tr>
                <th>
                  SPA PRICE
                </th>
                <th>
                <input type="number" placeholder="RM"/>
                </th>
                <th>
                  CARD APPROVAL CODE
                </th>
                <th>
                <input type="text"/>
                </th>
                <th>
                  SOLICITOR
                </th>
                <th>
                <input type="text"/>
                </th>
              </tr>
            </table>
        </div>
        
        <div className="acknowledgement">
          <h3>ACKNOWLEDGEMENT, CONFIRMATION AND CONSENT </h3>
          <p>I/We hereby acknowledge and confirm that the particulars given herein are correct. I/We agree to the terms and conditions stated overleaf and hereby offer to purchase the property upon the said terms and conditions. I/We also confirm that I/We have read the Data Protection Notice stated overleaf and hereby give my/our consent to WCT Holdings Berhad and its related companies* (“WCT Group”) to process my personal data in accordance with the Notice.  </p>

        </div>

        <div className="tnc">
          <h3 style={{ marginTop: "65px",textAlign:"center"}}>
            Terms And Conditions Of Offer To Purchase
          </h3>
          
          <ol className="mainList">
            <li>&nbsp;My/Our offer to purchase the Property shall only be deemed accepted upon clearance of the booking fee paid by me/us which sum is as stipulated in Section C of the Offer to Purchase (“Booking Fee”) and issuance of the Developer’s official receipt for the same. No other act(s) or conduct(s) shall constitute acceptance. Subject to the Developer’s acceptance of my/our offer to purchase, the Booking Fee so paid shall be deemed as part payment towards the purchase price of the Property (“Purchase Price”).</li>
            <br/>
            <li>&nbsp;In any of the following events, the Developer shall have the absolute right and be entitled to forthwith rescind the sale and to deal with the Property as the Developer may deem fit in its absolute discretion without further reference to me/us whereupon I/we shall have no claims whatsoever against the Developer:-

             <ol>
             <br/>
                <li>&nbsp;I/We fail to execute the sale and purchase agreement and all relevant documents (“SPA Documents”) within twenty one (21) days from the date of my/our offer herein;</li>
                <br/>
                <li>&nbsp;I/We fail to pay in full the first ten per centum (10%) of the Purchase Price within twenty one (21) days from the date of my/our offer herein or within any extended time granted by the Developer to me/us in writing;</li>
                <br/>
                <li>&nbsp;Unless I/we notify the Developer in writing that I/we am/are a cash purchaser(s), I/we fail to secure a facility/loan for the purchase of the Property within twenty one (21) days from the date of my/our offer herein; and /or</li>
                <br/>
                <li>&nbsp;We commit an act of bankruptcy or enter into any composition or arrangement with my/our creditors.</li>
              </ol>
              
            </li>
            <br/>
            <li>&nbsp;Should I/we withdraw my/our offer to purchase herein or the Developer exercises its right to rescind the sale pursuant to paragraph 2 above, all sum received by the Developer herein (less administrative charges of Ringgit Malaysia Five Hundred (RM500.00) and where payment of the Booking Fee is paid via credit card, an additional two per centum (2%) of the Booking Fee being merchant handling fee) to me/us free of interest.</li>
            <br/>
            <li>&nbsp;I/We shall not attempt to sell, transfer, assign or howsoever dispose of the Property to any person(s) prior to the execution of the SPA Documents without the prior written consent of the Developer, which consent the Developer is not obliged to give and the decision of the Developer is final and no appeal will be entertained.</li>
            <br/>
            <li>&nbsp;I/We have inspected the plans and specifications of the Property and the Project and hereby confirm that I/we am/are satisfied with the plans, specifications, and locations of the Property. Notwithstanding the foregoing, I/We irrevocably give my/our consent to the Developer to make any deviation(s) from or alteration(s) of the said plans and/or specifications as may be required by the relevant authorities or if the Developer’s architects and/or engineers shall consider necessary or expedient.</li>
            <br/>
            <li>&nbsp;No oral communication or representation from the Developer or its agents/staff/employees shall form part of the sale of the Property.</li>
            <br/>
            <li>&nbsp;(If Bumiputera discount is applicable) In the event I/we have represented that I/we are purchasing as Bumiputera, the Developer reserves the right to withdraw the Bumiputera discount offered to me/us in reliance of my/our said representation if the required documents furnished by me/us to support my/our representation as Bumiputera are inadequate or I/we could not prove my/our Bumiputera status whereupon the non-Bumiputera purchase price shall apply for the sale of the Property and I/we shall within seven (7) days upon notification by the Developer, pay the difference between the first ten per centum (10%) of the Bumiputera purchase price and the first ten per centum (10%) of the non-Bumiputera purchase price to the Developer, failing which the Developer shall be entitled to rescind the sale of the Property to me/us and I/we shall have no claim whatsoever against the Developer.</li>
            <br/>
            <li>&nbsp;Any penalty on the stamp duty payable on the SPA Documents shall be borne by me/us if the SPA Documents are not signed and stamped within one (1) month from the date of payment of the Booking Fee by me/us.</li>

          </ol>

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
