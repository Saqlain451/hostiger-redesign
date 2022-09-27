import React, { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import TextBtn from "../../components/txt&input/TextBtn";
import { useGlobalHook } from "../../Hooks/Context";
import Title from '../../components/TItle/Title'
import TableHead from "../../components/TableHead/TableHead";
import "./domain.css";
const Domain = () => {
  const { domainHero, txtbtnHome,faqDomain,titleFaq, hostingFeatures,hostTitle,titleChange,domainTableHeader,tableRowDomain } = useGlobalHook();
  useEffect(()=>{
    titleChange("Domain Page");
  })

  return (
    <>
      <div className="domain-hero">
        <Hero {...domainHero} />
      </div>

      <div className="domain-textbtn">
        <TextBtn {...txtbtnHome} />
      </div>
      <div className="domain-features">
      <Title {...hostTitle}/>
        <div className="container">
          <div className="row justify-content-center">{hostingFeatures}</div>
        </div>
      </div>

      <div className="domain-table">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <TableHead {...domainTableHeader} />
              <tbody>
                {tableRowDomain}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="domain-faq">
        <Title {...titleFaq} /> 
        <div className="container">
          <div className="row justify-content-center gy-4">{faqDomain}</div>
        </div>
      </div>
    </>
  );
};

export default Domain;
