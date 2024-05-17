import React from 'react'
import MessagePage from '../../Pages/MessagePage/MessagePage';

const ProposalFiled = () => {
  return (
      <MessagePage 
        heading={"Proposal Filed"}
        firstLine={"Your proposal for the insurance policy has been duly submitted."}
        secondLine={"It is currently undergoing review for approval. Upon completion of background verification, you will be prompted to proceed with payment for the policy."}
        thirdLine={"Click here to track the policy"}
        linkTo={'/track-policy'}
        buttonName={"Track Policy"} />
    );
}

export default ProposalFiled