import React, { Component } from 'react';

class certifications extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/certifications/'+projects.image;
        return <div key={projects.title} className="columns certifications-item">
           <div className="item-wrap">
            <a target="_blank" rel="noopener noreferrer" href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="certifications-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
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
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default certifications;
