import React, { Component } from 'react';
import './Team.css';
import PageTitle from '../PageTitle/PageTitle';
import { withRouter } from 'react-router-dom';

class Team extends Component {
  render() {
    const location = this.props.location.pathname;
    return (
      <div className='Team'>
        {location === '/' ? null : <PageTitle title='Team' />}
        <div className='container'>
          <p className='red-paragraph'>best team ever</p>
          <div className='Team-top'>
            <h1 className='title-1'>The team</h1>
            <button className='primary-btn'>join us</button>
          </div>
          <div className='grid-team'>
            <div className='member'>
              <div className='picture-container'>
                <img src='https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dd0f7a1edfe6a352f6adcb0_team-1-p-1080.jpeg' alt='team' />
              </div>
              <div className='Team-content'>
                <p className='member-name'>person name</p>
                <p className='red-paragraph position-job'>position job</p>
                <div className='social-media'>
                  <div className='circle'>
                    <i className='fab fa-twitter'></i>
                  </div>
                  <div className='circle'>
                    <i className='fab fa-instagram'></i>
                  </div>
                  <div className='circle'>
                    <i className='fab fa-linkedin-in'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='member'>
              <div className='picture-container'>
                <img src='https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dd0f7a1edfe6a352f6adcb0_team-1-p-1080.jpeg' alt='team' />
              </div>
              <div className='Team-content'>
                <p className='member-name'>person name</p>
                <p className='red-paragraph'>position job</p>
                <div className='social-media'>
                  <div className='circle'>
                    <i className='fab fa-twitter'></i>
                  </div>
                  <div className='circle'>
                    <i className='fab fa-instagram'></i>
                  </div>
                  <div className='circle'>
                    <i className='fab fa-linkedin-in'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='member'>
              <div className='picture-container'>
                <img src='https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dd0f7a1edfe6a352f6adcb0_team-1-p-1080.jpeg' alt='team' />
              </div>
              <div className='Team-content'>
                <p className='member-name'>person name</p>
                <p className='red-paragraph'>position job</p>
                <div className='social-media'>
                  <div className='circle'>
                    <i className='fab fa-twitter'></i>
                  </div>
                  <div className='circle'>
                    <i className='fab fa-instagram'></i>
                  </div>
                  <div className='circle'>
                    <i className='fab fa-linkedin-in'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Team);
