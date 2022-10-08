import React from 'react'
import FeedbackSuccess from '../../assets/img/FeedbackSuccess.svg'
import inviteUnSuccess from '../../assets/img/inviteUnSuccess.png'
import inviteSuccess from '../../assets/img/inviteSuccess.png'
const Feedback=()=>{
return (
    <>
    <div className="modal-dialog payment-success-modal-dialog">
  {/* Modal content*/}
  <div className="modal-content payment-success-modal-content" style={{"height":"470px"}}>
    <div className="modal-body">
      <button className="close" data-dismiss="modal" style={{"margin":"6px 10px 0px 0px"}} type="button">
        ×
      </button>
      <div className="row">
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12 text-center logo-col" style={{"margin-top":"40","padding-left":"40%"}}>
          <img className="fd-success" alt='feed back success' src={FeedbackSuccess} style={{"display":"block"}} />
          <img className="md-success"alt='inviteSuccess' src={inviteSuccess} style={{"display":"none"}} />
          <img className="md-unsuccess" alt='inviteUnSuccess' src={inviteUnSuccess} style={{"display":"none"}} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12 text-center" style={{"margin-top":"25px"}}>
          <p className="congrats">Thank you for your feedback.</p>
          <p className="congrats-desc">Your feedback has been recorded successfully.</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
)
}
export default Feedback