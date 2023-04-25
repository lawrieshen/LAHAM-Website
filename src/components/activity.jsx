import React, { Component } from 'react';

function ActivityList() {
  const activities = [
    { id: 1, 
      name: 'Charity Support', 
      image: 'images/charity-image.png', 
      desc_1: 'We are a sponsor for Starlight Children Foundation.',
      desc_2: 'We use profits from work to develop games for the children being supported by Starlight.',
      desc_3: 'We believe it Is Important to give back to the community and also share our values.' },
    { id: 2, 
      name: 'Industry Support', 
      image: 'images/Screen-Producers-Australia-image.jpeg', 
      desc_1: 'We are an active member in Screen Producers Australia (SPA).',
      desc_2: 'We affiliate with Media, Entertainment and Arts Alliance (MEAA) to support Actors/Actresses WH&S.',
      desc_3: 'We want to ensure that the multimedia industry is equal and promotes all individuals.' },
    { id: 3, 
      name: 'Netflix',
      image: 'images/Netflix_Logo.png',
      desc_1: 'We were involved in the initiation phase of launching a new tv series from North American Netflix to Australian Netflix.',
      desc_2: 'We liaised and negotiated with all relevant stakeholders to ensure licensing Issues and other conflicts were solved.',
      desc_3: 'It was a 8 month project, where we achieved a successful outcome.' },
    { id: 4, 
      name: 'Current Project', 
      image: 'images/tiktok-logo.jpeg', 
      desc_1: 'Currently the USA TikTok situation has urged TikTok Australia to promote their platform.',
      desc_2: 'We have been Involved to ensure that TikTok Australia remains as safe as possible for Australian users so that we do not have a similar situation to USA.',
      desc_3: 'other ongoing efforts...'},
  ];

  return (
    <section data-section="activities">
    <div className="colorlib-narrow-content">
      <h2 className="colorlib-heading" style={{fontSize: '24px'}}>Activities</h2>
      <ul style={{paddingInlineStart: '0px'}}>
        {activities.map(activity => (
          <ul key={activity.id}>
            <div >
              <img src={activity.image} alt={activity.name} style={{ width: '300px', height: '200px', marginRight: '10px', marginBottom: '20px', maxWidth: '100%' }}></img>
              <div>
                <h3 style={{fontFamily: '"Quicksand", Arial, sans-serif', 
                            fontSize: '24px', 
                            fontWeight: '500',
                            textDecoration: 'underline'}}>
                              {activity.name}
                  </h3>
                <ul  style={{fontSize: '20px', paddingBottom: '20px'}}>
                  <li>{activity.desc_1}</li>
                  <li>{activity.desc_2}</li>
                  <li>{activity.desc_3}</li>
                </ul>
              </div>
            </div>
          </ul>
        ))}
      </ul>
    </div>
    </section>
  );
}

export default ActivityList;