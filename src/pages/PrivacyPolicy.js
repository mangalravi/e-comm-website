import React from 'react';
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import Container from '../component/Container';

const PrivacyPolicy = () => {
  return (
   <>
              <Meta title={"Privacy Policy"} />
      <BreadCrumb title="Privacy Policy" />
      <Container class1="policy-wrapper home-wrapper-2 py-5">
    <div className="row">
        <div className="col-12">
            <div className="policy">
                
            </div>
        </div>
    </div>
</Container>
   </>
  )
}

export default PrivacyPolicy