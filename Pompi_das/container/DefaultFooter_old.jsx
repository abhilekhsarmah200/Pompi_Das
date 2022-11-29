import React, { Component } from 'react';
import {
  contact_us_aq_url,
  dashboard_aqcare_url,
  dashboard_aqlife_url,
  events_aqlife_url,
  home_aqcare_url,
  home_aqlife_url,
  join_the_movement_aqlife_url,
  services_aqcare_url,
  services_aqlife_url,
  whats_our_purpose_aq_url,
  what_we_do_aq_url,
  who_we_are_aq_url,
} from '../data/urls.data';
// import emailIcon from "../assets/img/Footer/email(1).webp";
// import facebookIcon from "../assets/img/Footer/facebook-2.webp";
// import locationMark from "../assets/img/Footer/home(1).webp";
// import instagramIcon from "../assets/img/Footer/instagram-glyph-1.webp";
// import LinkedinIcon from "../assets/img/Footer/linkedin(1).webp";
// import MakeInIndia from "../assets/img/Footer/MakeInIndia.webp";
// import phoneIcon from "../assets/img/Footer/phone-call.webp";
// import SDG from "../assets/img/Footer/SDG.webp";
// import StartupIndia from "../assets/img/Footer/StartupIndia.webp";
// import twitterIcon from "../assets/img/Footer/twitter(1).webp";

class DefaultFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      company: false,
      care: false,
      life: false,
    };
    this.handelExpander = this.handelExpander.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true,
      });
    }, 2000);
  }
  handelExpander(view) {
    console.log(view);
    if (view === 'Company') {
      this.setState({
        company: true,
      });
    }
    if (view === 'Care') {
      this.setState({
        care: true,
      });
    }
    if (view === 'Life') {
      this.setState({
        life: true,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.show ? (
          <nav className='relative flex items-center justify-between flex-wrap bg-primary-color-100 sm:p-0 sm:pt-1'>
            {this.state.company ? (
              <div className='absolute bottom-0 text-sm text-black w-full bg-primary-color-100 rounded-t-lg z-10 customShadow lg:hidden'>
                <div
                  onClick={() => {
                    this.setState({
                      company: false,
                    });
                  }}
                  className='flex justify-center  w-8 z-20 h-10 cursor-pointer'
                >
                  <samp className='pi text-h5 mt-4 pi-chevron-left'></samp>
                </div>
                <div className='flex justify-center h-8 items-center footerBox'>
                  <div className='w-8 z-20'>
                    <img
                      src='https://atquest2.b-cdn.net/AtQuestIcon.png'
                      alt='atquest-icon'
                    />
                  </div>
                  <div className='text-h5 font-semibold ml-2 text-left'>
                    Company
                  </div>
                </div>
                <div className='flex justify-start items-start flex-col text-600 mb-10'>
                  <div className='flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox'>
                    <a href={what_we_do_aq_url}>What we do </a>
                  </div>
                  <div className='flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox'>
                    <a href={whats_our_purpose_aq_url}>What's our purpose</a>
                  </div>
                  <div className='flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox'>
                    <a href={who_we_are_aq_url}>Who we are</a>
                  </div>
                </div>
              </div>
            ) : null}

            {this.state.care ? (
              <div className='absolute bottom-0 text-sm text-black w-full bg-primary-color-100 rounded-t-lg z-10 customShadow lg:hidden'>
                <div
                  onClick={() => {
                    this.setState({
                      care: false,
                    });
                  }}
                  className='flex justify-center  w-8 z-20 h-10 cursor-pointer'
                >
                  <samp className='pi text-h5 mt-4 pi-chevron-left'></samp>
                </div>
                <div className='flex justify-center h-8 items-center footerBox'>
                  <div className='w-8 z-20'>
                    <img
                      src='https://atquest2.b-cdn.net/AtQuestCareIcon.png'
                      alt='atquest-care-icon'
                    />
                  </div>
                  <div className='text-h5 font-semibold ml-2 text-left'>
                    At Quest Care
                  </div>
                </div>
                <div className='flex justify-start text-600 items-start flex-col mb-10'>
                  <div className='flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox'>
                    <a href={home_aqcare_url}>Home</a>
                  </div>
                  <div className='flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox'>
                    <a href={services_aqcare_url}>Services</a>
                  </div>
                  <div className='flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox'>
                    <a href={dashboard_aqcare_url}>Sign In</a>
                  </div>
                  <div className='flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox'>
                    <a href={contact_us_aq_url}>Express interest</a>
                  </div>
                  <div className='flex mt-1 pl-10  pr-10 justify-between sm:justify-start items-center w-full h-8 footerBox'>
                    <div className='flex mt-1 justify-start items-center text-black cursor-pointer hover:text-black'>
                      Connect with Us
                    </div>
                    <a
                      className='flex justify-center text-center w-6 h-6 rounded-full bg-800 mx-2 cursor-pointer'
                      href='https://www.linkedin.com/company/atquestcare'
                      target='_blank'
                    >
                      <img
                        className='w-3'
                        src='https://atquest2.b-cdn.net/atquest-b2b/Footer/linkedin%20(1).svg'
                        alt=''
                      />
                    </a>
                    <a
                      className='flex justify-center text-center w-6 h-6 rounded-full bg-800 mx-2 cursor-pointer'
                      href='https://twitter.com/AtQuestCare'
                      target='_blank'
                    >
                      <img
                        className='w-3'
                        src='https://atquest2.b-cdn.net/atquest-b2b/Footer/twitter%20(1).svg'
                        alt=''
                      />
                    </a>
                    <a
                      className='flex justify-center text-center w-6 h-6 rounded-full bg-800 mx-2 cursor-pointer'
                      href='mailto:letstalk@at-quest.in'
                    >
                      <img
                        className='w-3'
                        src='https://atquest2.b-cdn.net/atquest-b2b/Footer/email%20(1).svg'
                        alt=''
                      />
                    </a>
                    <a
                      className='flex justify-center text-center w-6 h-6 rounded-full bg-800 mx-2 cursor-pointer'
                      href='tel:+919611024447'
                    >
                      <img
                        className='w-3'
                        src='https://atquest2.b-cdn.net/atquest-b2b/Footer/phone-call.svg'
                        alt=''
                      />
                    </a>
                  </div>
                </div>
              </div>
            ) : null}

            {this.state.life ? (
              <div className='absolute bottom-0 text-sm text-black w-full bg-primary-color-100 rounded-t-lg z-10 customShadow lg:hidden'>
                <div
                  onClick={() => {
                    this.setState({
                      life: false,
                    });
                  }}
                  className='flex justify-center  w-8 z-20 h-10 cursor-pointer'
                >
                  <samp className='pi text-h5 mt-4 pi-chevron-left'></samp>
                </div>
                <div className='flex justify-center h-8 items-center footerBox'>
                  <div className='w-8 z-20'>
                    <img
                      src='https://atquest2.b-cdn.net/AtQuestLifeIcon.png'
                      alt='atquest-life-icon'
                    />
                  </div>
                  <div className='text-h5 font-semibold ml-2 text-left'>
                    At Quest Life
                  </div>
                </div>
                <div className='flex justify-start text-600 items-start flex-col mb-10'>
                  <div className='flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox'>
                    <a href={home_aqlife_url}>Home</a>
                  </div>
                  <div className='flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox'>
                    <a href={services_aqlife_url}>Services</a>{' '}
                  </div>

                  <div className='flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox'>
                    <a href={events_aqlife_url}>Events</a>
                  </div>
                  <div className='flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox'>
                    <a href={dashboard_aqlife_url}>Sign In</a>
                  </div>
                  <div className='flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox'>
                    <a href={join_the_movement_aqlife_url}>Express Interest</a>
                  </div>
                  <div className='flex mt-1 pl-10  pr-10 justify-between sm:justify-start items-center w-full h-8 footerBox'>
                    <div className='flex mt-1 justify-start items-center text-black cursor-pointer hover:text-black'>
                      Connect with Us
                    </div>
                    <a
                      className='flex justify-center text-center w-6 h-6 rounded-full mx-2 bg-800'
                      href='https://www.facebook.com/atquestlife'
                      target='_blank'
                    >
                      <img
                        className='w-2'
                        src='https://atquest2.b-cdn.net/atquest-b2b/Footer/facebook-2.svg'
                        alt=''
                      />
                    </a>
                    <a
                      className='flex justify-center text-center w-6 h-6 rounded-full mx-2 bg-800'
                      href='https://www.instagram.com/Atquest_life/'
                      target='_blank'
                    >
                      <img
                        className='w-3'
                        src='https://atquest2.b-cdn.net/atquest-b2b/Footer/instagram-glyph-1.svg'
                        alt=''
                      />
                    </a>
                    <a
                      className='flex justify-center text-center w-6 h-6 rounded-full mx-2 bg-800'
                      href='mailto:support@at-quest.in'
                    >
                      <img
                        className='w-3'
                        src='https://atquest2.b-cdn.net/atquest-b2b/Footer/email%20(1).svg'
                        alt=''
                      />
                    </a>
                    <a
                      className='flex justify-center text-center w-6 h-6 rounded-full mx-2 bg-800'
                      href='tel:+919611054447'
                    >
                      <img
                        className='w-3'
                        src='https://atquest2.b-cdn.net/atquest-b2b/Footer/phone-call.svg'
                        alt=''
                      />
                    </a>
                  </div>
                </div>
              </div>
            ) : null}

            <div
              className={
                'lg:block flex flex-col w-full justify-around items-start bg-header text-left hidden md:hidden'
              }
            >
              <div className='flex w-full'>
                <div className='flex justify-between flex-col w-1/3'>
                  <div className='flex flex-col xl:px-16 px-8'>
                    <div className='flex justify-center items-center'>
                      <div className='w-8 mb-1'>
                        <img
                          src='https://atquest2.b-cdn.net/AtQuestIcon.png'
                          alt=''
                        />
                      </div>
                      <div className='text-h4 ml-2 font-semibold flex-grow text-left text-black'>
                        Company
                      </div>
                    </div>
                    <div className='text-sm flex flex-col ml-10'>
                      <div className='w-auto mt-4 lg:mt-2 text-600 cursor-pointer hover:text-black'>
                        <a href={what_we_do_aq_url}>What we do </a>
                      </div>

                      <div className='w-auto mt-4 lg:mt-2 text-600 cursor-pointer hover:text-black'>
                        <a href={whats_our_purpose_aq_url}>
                          What's our purpose
                        </a>
                      </div>
                      <div className='w-auto mt-4 lg:mt-2 text-600 cursor-pointer hover:text-black'>
                        <a href={who_we_are_aq_url}>Who we are</a>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-center'>
                    <div>
                      <img
                        src='https://atquest2.b-cdn.net/atquest-b2b/Footer/MakeInIndia.png'
                        alt=''
                      />
                    </div>
                    <div>
                      <img
                        src='https://atquest2.b-cdn.net/atquest-b2b/Footer/SDG.png'
                        alt=''
                      />
                    </div>
                    <div>
                      <img
                        src='https://atquest2.b-cdn.net/atquest-b2b/Footer/StartupIndia.png'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col w-1/3'>
                  <div className='flex justify-center items-center'>
                    <div className='w-8 mb-1'>
                      <img
                        src='https://atquest2.b-cdn.net/AtQuestCareIcon.png'
                        alt='atquest-care-icon'
                      />
                    </div>
                    <div className='text-h4 ml-2 font-semibold flex-grow text-left text-black'>
                      At Quest Care
                    </div>
                  </div>
                  <div className='text-sm flex flex-col ml-10'>
                    <div className='mt-4 lg:mt-2 text-600  cursor-pointer hover:text-black'>
                      <a href={home_aqcare_url}>Home</a>
                    </div>

                    <div className='mt-4 lg:mt-2 text-600  cursor-pointer hover:text-black'>
                      <a href={services_aqcare_url}>Services</a>
                    </div>

                    <div className='mt-4 lg:mt-2 text-600  cursor-pointer hover:text-black'>
                      <a href={dashboard_aqcare_url}>Sign In</a>
                    </div>
                    <div className='mt-4 lg:mt-2 text-600  cursor-pointer hover:text-black'>
                      <a href={contact_us_aq_url}>Express interest</a>
                    </div>
                    <div className='w-1/2 border border-1 border-500 my-2'></div>
                  </div>

                  <div className='flex flex-col ml-10 text-sm'>
                    <div className='text-h4 font-semibold flex-grow text-left text-black'>
                      Connect with us
                    </div>
                    <div className='flex mt-2 xl:flex-row flex-col'>
                      <div className='flex mr-2 xl:mb-0 mb-2'>
                        <div className='flex justify-center text-center w-8  h-8 rounded-full bg-800'>
                          <img
                            className='w-4'
                            src='https://atquest2.b-cdn.net/atquest-b2b/Footer/linkedin%20(1).svg'
                            alt=''
                          />
                        </div>
                        <a
                          className='mt-4 ml-2 lg:mt-2 text-600 cursor-pointer'
                          href='https://www.linkedin.com/company/atquestcare'
                          target='_blank'
                        >
                          @atquestCare
                        </a>
                      </div>
                      <div className='flex mr-2 xl:mb-0 mb-2'>
                        <div className='flex justify-center text-center w-8  h-8 rounded-full bg-800'>
                          <img
                            className='w-4'
                            src='https://atquest2.b-cdn.net/atquest-b2b/Footer/twitter%20(1).svg'
                            alt=''
                          />
                        </div>
                        <a
                          className='mt-4 ml-2 lg:mt-2 text-600 cursor-pointer'
                          href='https://twitter.com/AtQuestCare'
                          target='_blank'
                        >
                          @atquestCare
                        </a>
                      </div>
                    </div>
                    <div className='flex xl:mt-2 xl:flex-row flex-col'>
                      <div className='flex mr-2 xl:mb-0 mb-2'>
                        <div className='flex justify-center text-center w-8  h-8 rounded-full bg-800'>
                          <img
                            className='w-4'
                            src='https://atquest2.b-cdn.net/atquest-b2b/Footer/email%20(1).svg'
                            alt=''
                          />
                        </div>
                        <a
                          className='mt-4 ml-2 lg:mt-2 text-black cursor-pointer'
                          href='mailto:letstalk@at-quest.in'
                        >
                          letstalk@at-quest.in
                        </a>
                      </div>
                      <div className='flex mr-2 xl:mb-0 mb-2'>
                        <div className='flex justify-center text-center w-8  h-8 rounded-full bg-800'>
                          <img
                            className='w-4'
                            src='https://atquest2.b-cdn.net/atquest-b2b/Footer/phone-call.svg'
                            alt=''
                          />
                        </div>
                        <a
                          className='mt-4 ml-2 lg:mt-2 text-black cursor-pointer'
                          href='tel:+919611024447'
                        >
                          +91 96110 24447
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col w-1/3'>
                  <div className='flex justify-center items-center'>
                    <div className='w-8 mb-1'>
                      <img
                        src='https://atquest2.b-cdn.net/AtQuestLifeIcon.png'
                        alt='atquest-life-icon'
                      />
                    </div>
                    <div className='text-h4 ml-2 font-semibold flex-grow text-left text-black'>
                      At Quest Life
                    </div>
                  </div>
                  <div className='text-sm flex flex-col ml-10'>
                    <div className='block mt-4 lg:mt-2 text-600 mr-4 cursor-pointer hover:text-black'>
                      <a href={home_aqlife_url}>Home</a>
                    </div>

                    <div className='block mt-4 lg:mt-2 text-600 mr-4 cursor-pointer hover:text-black'>
                      <a href={services_aqlife_url}>Services</a>
                    </div>

                    <div className='block mt-4 lg:mt-2 text-600 mr-4 cursor-pointer hover:text-black'>
                      <a href={events_aqlife_url}>Events</a>
                    </div>

                    <div className='block mt-4 lg:mt-2 text-600 mr-4 cursor-pointer hover:text-black'>
                      <a href={dashboard_aqlife_url}>Sign In</a>
                    </div>

                    <div className='block mt-4 lg:mt-2 text-600 mr-4 cursor-pointer hover:text-black'>
                      <a href={join_the_movement_aqlife_url}>
                        Express Interest
                      </a>
                    </div>
                    <div className='w-1/2 border border-1 border-500 my-2'></div>
                  </div>
                  <div className='flex flex-col ml-10 text-sm'>
                    <div className='text-h4 font-semibold flex-grow text-left text-black'>
                      Connect with us
                    </div>
                    <div className='flex mt-2 xl:flex-row flex-col'>
                      <div className='flex mr-2 xl:mb-0 mb-2'>
                        <div className='flex justify-center text-center w-8  h-8 rounded-full bg-800'>
                          <img
                            className='w-2'
                            src='https://atquest2.b-cdn.net/atquest-b2b/Footer/facebook-2.svg'
                            alt=''
                          />
                        </div>
                        <a
                          className='mt-4 ml-2 lg:mt-2  cursor-pointer'
                          href={home_aqlife_url}
                          target='_blank'
                        >
                          @atquestLife
                        </a>
                      </div>
                      <div className='flex mr-2 xl:mb-0 mb-2'>
                        <div className='flex justify-center text-center w-8  h-8 rounded-full bg-800'>
                          <img
                            className='w-4'
                            src='https://atquest2.b-cdn.net/atquest-b2b/Footer/instagram-glyph-1.svg'
                            alt=''
                          />
                        </div>
                        <a
                          className='mt-4 ml-2 lg:mt-2 text-600 cursor-pointer'
                          href='https://www.instagram.com/Atquest_life/'
                          target='_blank'
                        >
                          @atquest_life
                        </a>
                      </div>
                    </div>
                    <div className='flex xl:mt-2 xl:flex-row flex-col'>
                      <div className='flex mr-2 xl:mb-0 mb-2'>
                        <div className='flex justify-center text-center w-8  h-8 rounded-full bg-800'>
                          <img
                            className='w-4'
                            src='https://atquest2.b-cdn.net/atquest-b2b/Footer/email%20(1).svg'
                            alt=''
                          />
                        </div>
                        <a
                          className='mt-4 ml-2 lg:mt-2 text-black cursor-pointer'
                          href='mailto:support@at-quest.in'
                        >
                          support@at-quest.in
                        </a>
                      </div>
                      <div className='flex mr-2 xl:mb-0 mb-2'>
                        <div className='flex justify-center text-center w-8  h-8 rounded-full bg-800'>
                          <img
                            className='w-4'
                            src='https://atquest2.b-cdn.net/atquest-b2b/Footer/phone-call.svg'
                            alt=''
                          />
                        </div>
                        <a
                          className='mt-4 ml-2 lg:mt-2 text-black cursor-pointer'
                          href='tel:+919611054447'
                        >
                          +91 96110 54447
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-center w-full my-8'>
                <div className='w-full border border-1 border-500 mx-5'></div>
              </div>
              <div className='w-full flex-wrap text-sm text-black flex justify-around items-center pb-4'>
                <div className='w-32 mx-2'>
                  <img
                    src='https://atquest2.b-cdn.net/AtQuestLogoNew.png'
                    alt='at-quest-logo'
                  />
                </div>
                <div>&#169; 2020 At Quest Sustainable Solutions Pvt Ltd.</div>
                <div
                  onClick={() => (window.location = '/privacy-policy')}
                  className='cursor-pointer'
                >
                  Privacy Policy
                </div>
                <div
                  onClick={() => (window.location = '/refunds-cancellation')}
                  className='cursor-pointer'
                >
                  {'Refund & Cancellation Policy'}
                </div>
                <div
                  onClick={() => (window.location = '/disclaimer')}
                  className='cursor-pointer'
                >
                  Disclaimer
                </div>
                <div
                  onClick={() => (window.location = '/terms-and-conditions')}
                  className='cursor-pointer'
                >
                  Terms of service
                </div>
                <div className='flex items-center justify-center'>
                  <span>
                    <img
                      className='h-4'
                      src='https://atquest2.b-cdn.net/atquest-b2b/Footer/home%20(1).svg'
                      alt=''
                    />
                  </span>
                  <span className='ml-1'>Bangalore, India</span>
                </div>
              </div>
            </div>
            <div className='flex-col w-full justify-around text-white items-start bg-header text-left lg:hidden'>
              <div className='w-full flex justify-center bg-primary-color-900 opacity-50 h-10 my-1'>
                <div className='flex justify-around w-10/12 items-center '>
                  <div className='w-8 z-20'>
                    <img
                      src='https://atquest2.b-cdn.net/AtQuestIcon.png'
                      alt='at-quest-icon'
                    />
                  </div>
                  <div className='text-h6 ml-2 flex-grow text-left'>
                    Company
                  </div>
                  <div
                    onClick={() => this.handelExpander('Company')}
                    className='w-8 z-20 cursor-pointer'
                  >
                    <samp className='pi pi-sort-down'></samp>
                  </div>
                </div>
              </div>

              <div className='w-full flex justify-center bg-primary-color-900 opacity-50 h-10 my-1'>
                <div className='flex justify-around w-10/12 items-center '>
                  <div className='w-8'>
                    <img
                      src='https://atquest2.b-cdn.net/AtQuestCareIcon.png'
                      alt='atquest-care-icon'
                    />
                  </div>
                  <div className='text-h6 ml-2 flex-grow text-left'>
                    At Quest Care
                  </div>
                  <div
                    onClick={() => this.handelExpander('Care')}
                    className='w-8 z-20 cursor-pointer'
                  >
                    <samp className='pi pi-sort-down'></samp>
                  </div>
                </div>
              </div>

              <div className='w-full flex justify-center bg-primary-color-900 opacity-50 h-10 my-1'>
                <div className='flex justify-around w-10/12 items-center '>
                  <div className='w-8'>
                    <img
                      src='https://atquest2.b-cdn.net/AtQuestLifeIcon.png'
                      alt='atquest-life-icon'
                    />
                  </div>
                  <div className='text-h6 ml-2 flex-grow text-left'>
                    At Quest Life
                  </div>
                  <div
                    onClick={() => this.handelExpander('Life')}
                    className='w-8 z-20 cursor-pointer'
                  >
                    <samp className='pi pi-sort-down'></samp>
                  </div>
                </div>
              </div>
              <div className='w-full text-sm text-black flex flex-col justify-around items-center p-2'>
                <div className='w-full flex mb-2 sm:justify-around justify-between'>
                  <div
                    onClick={() => (window.location = '/privacy-policy')}
                    className='cursor-pointer'
                  >
                    Privacy Policy
                  </div>
                  <div
                    onClick={() => (window.location = '/refunds-cancellation')}
                    className='cursor-pointer'
                  >
                    {' '}
                    {'Refund & Cancellation Policy'}
                  </div>
                </div>

                <div className='w-full flex mb-2 sm:justify-around justify-between'>
                  <div
                    onClick={() => (window.location = '/disclaimer')}
                    className='cursor-pointer'
                  >
                    Disclaimer
                  </div>
                  <div
                    onClick={() => (window.location = '/terms-and-conditions')}
                    className='cursor-pointer'
                  >
                    Terms of service
                  </div>
                </div>

                <div> &#169; 2020 At Quest Sustainable Solutions Pvt Ltd.</div>
              </div>
            </div>
          </nav>
        ) : null}
      </React.Fragment>
    );
  }
}

export default DefaultFooter;
