import React, { Component } from 'react';

class Certifications extends Component {
  render() {

    if(this.props.data){
      var certificate = this.props.data.certificate.map(function(certificate){
        var certificateImage = 'images/certifications/'+certificate.image;
        return <div key={certificate.title} className="columns certifications-item">
           <div className="item-wrap">
            <a target="_blank" rel="noopener noreferrer" href={certificate.url} title={certificate.title}>
               <img alt={certificate.title} src={certificateImage} />
              <sub>{certificate.title}</sub>
               <div className="overlay">
                  <div className="certifications-item-meta">
                 <h5>{certificate.title}</h5>
                     <p>{certificate.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="certifications">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Certifications.</h1>

            <div id="certifications-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {certificate}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Certifications;
