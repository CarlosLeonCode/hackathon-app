'use client';
import Video from 'react-player';
const LOGO = require('../../../src/img/app-logo.png').default;
const ISOTIPO = require('../../../src/img/isotipo.png').default;
const MEMBER1 = require('../../../src/img/team-1.png').default;
const MEMBER2 = require('../../../src/img/team-2.jpeg').default;
const MEMBER3 = require('../../../src/img/team-3.jpeg').default;
const MEMBER4 = require('../../../src/img/team-4.png').default;

export default function DashboardFeature() {

  return (
    <div>
      <header className="header-area">
          <div className="navbar-area">
              <div className="container relative">
                  <div className="row">
                      <div className="w-full">
                          <nav className="flex items-center justify-between navbar navbar-expand-lg">
                              <a className="mr-4 navbar-brand" href="index.html">
                                <img src={ISOTIPO.src} alt="Logo" className='w-10'/>
                              </a>
                              <button className="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                                  <span className="toggler-icon"></span>
                                  <span className="toggler-icon"></span>
                                  <span className="toggler-icon"></span>
                              </button>

                              <div className="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none" id="navbarOne">
                                  <ul id="nav" className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#features">Sobre Nosotros</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#about">Cómo Funciona</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#facts">Contactos</a>
                                    </li>
                                  </ul>
                              </div>
{/*
                              <div className="absolute right-0 hidden mt-2 mr-24 navbar-btn sm:inline-block lg:mt-0 lg:static lg:mr-0">
                                  <a className="main-btn gradient-btn" data-scroll-nav="0" href="#" rel="nofollow">Download Now</a>
                              </div> */}
                          </nav>
                      </div>
                  </div>
              </div>
          </div>

          <div id="home" className="header-hero">
              <div className="container">
                  <div className="justify-center row">
                      <div className="w-full lg:w-2/3">
                          <div className="pt-32 mb-12 text-center lg:pt-48 header-hero-content">
                              <h3 className="text-4xl font-light leading-tight text-white header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">BIENVENIDO A ClearEduCertify</h3>
                              <h2 className="mb-6 mt-10 text-4xl font-bold text-white header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">Una plataforma que impulsa tu carrera con la confianza de certificaciones digitales.</h2>
                              <p className="mb-8 mt-8 text-white text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Certificados digitalmente enriquecidos por datos y seguridad blockchain, diseñados específicamente para contribuir en tu desarrollo educativo.</p>
                              <a href="#" className="main-btn blue-bg wow fadeInUp text-white" data-wow-duration="1.3s" data-wow-delay="1.1s">Empecemos!</a>
                          </div>
                      </div>
                  </div>
                  <div className="justify-center row">
                      <div className="w-full lg:w-2/3">
                          <div className="text-center header-hero-image wow fadeIn grid justify-center" data-wow-duration="1.3s" data-wow-delay="1.4s">
                              <img src={LOGO.src} alt="hero" className='w-[25rem]'/>
                          </div>
                      </div>
                  </div>
              </div>
              <div id="particles-1" className="particles"></div>
          </div>
      </header>

      <section id="features" className="services-area pt-120">
        <div className="container">
            <div className="justify-center row">
                <div className="w-full lg:w-2/3">
                    <div className="pb-10 text-center section-title">
                        <div className="m-auto line"></div>
                        <h3 className="title mt-20">Diseño limpio y sencillo, <span> ¡Viene con todo lo que necesitas para empezar!</span></h3>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section id="about" className="relative pt-20 about-area">
        <div className="container">
            <div className="row">
                <div className="w-full lg:w-1/2">
                    <div className="mx-4 mt-12 about-content wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div className="mb-4 section-title">
                          <div className="line"></div>
                          <h3 className="title">Certificados digitales</h3>
                        </div>
                        <p className="mb-8">Los certificados digitales pueden ser emitidos por las instituciones educativas.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="relative pt-20 about-area">
        <div className="container">
            <div className="row">
                <div className="w-full lg:w-1/2 lg:order-last">
                    <div className="mx-4 mt-12 about-content wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div className="mb-4 section-title">
                            <div className="line"></div>
                            <h3 className="title">Autenticidad Garantizada</h3>
                        </div>
                        <p className="mb-8">Los certificados pueden ser validados por la escuela, la institución de educación superior o la empresa que participó en este proceso de formación. Una vez validado, los recursos de seguridad blockchain se incorporan y evitan cualquier posibilidad de fraude.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:order-first"></div>
            </div>
        </div>
      </section>

      <section className="relative pt-20 about-area">
        <div className="container">
            <div className="row">
                <div className="w-full lg:w-1/2">
                    <div className="mx-4 mt-12 about-content wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div className="mb-4 section-title">
                            <div className="line"></div>
                            <h3 className="title">Cartera digital de competencias</h3>
                        </div>
                        <p className="mb-8">Cada usuario tendrá su cartera digital personalizada de certificaciones emitidas con tecnología blockchain. Es un ambiente privado, seguro, accesible y online - en cualquier momento y desde cualquier lugar con acceso a Internet.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2"></div>
            </div>
        </div>
        <div className="about-shape-1"></div>
      </section>

      <section id="team" className="team-area pt-120">
        <div className="container">
            <div className="justify-center row">
                <div className="w-full lg:w-2/3">
                    <div className="pb-8 text-center section-title">
                        <div className="m-auto line"></div>
                        <h3 className="title mt-20"><span>Conoce</span> Nuestro Equipo Creativo</h3>
                    </div>
                </div>
            </div>
            <div className="justify-center row">
                <div className="w-full sm:w-2/3 lg:w-1/3">
                    <div className="mt-8 text-center single-team wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div className="relative team-image">
                            <img className="w-full h-80 object-cover" src={MEMBER1.src} alt="Team" />
                        </div>
                        <div className="p-8">
                            <h5 className="mb-1 text-xl font-bold text-gray-900">Luz Lopez</h5>
                            <p>Bussines Strategy</p>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-2/3 lg:w-1/3">
                    <div className="mt-8 text-center single-team wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div className="relative team-image">
                            <img className="w-full h-80 object-cover object-bottom" src={MEMBER3.src} alt="Team" />
                        </div>
                        <div className="p-8">
                            <h5 className="mb-1 text-xl font-bold text-gray-900">Waira Tamayo</h5>
                            <p>CMO</p>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-2/3 lg:w-1/3">
                    <div className="mt-8 text-center single-team wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div className="relative team-image">
                            <img className="w-full h-80 object-cover" src={MEMBER4.src} alt="Team" />
                        </div>
                        <div className="p-8">
                            <h5 className="mb-1 text-xl font-bold text-gray-900">Joann Cruz</h5>
                            <p>UX Designer</p>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-2/3 lg:w-1/3">
                    <div className="mt-8 text-center single-team wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div className="relative team-image">
                          <img className="w-full h-80 object-cover" src={MEMBER2.src} alt="Team"/>
                        </div>
                        <div className="p-8">
                            <h5 className="mb-1 text-xl font-bold text-gray-900">Carlos Leon</h5>
                            <p>Software Engineer - CTO</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      <footer id="footer" className="relative z-10 footer-area pt-120">
        <div className="footer-bg"></div>
          <div className="container">
              <div className="px-6 pt-10 pb-20 mb-12 bg-white rounded-lg shadow-xl md:px-12 subscribe-area wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                  <div className="row">
                      <div className="w-full lg:w-1/2">
                          <div className="lg:mt-12 subscribe-content">
                              <h2 className="text-2xl font-bold sm:text-4xl subscribe-title">
                                  Subscribe Our Newsletter
                                  <span className="block font-normal">get reguler updates</span>
                              </h2>
                          </div>
                      </div>
                      <div className="w-full lg:w-1/2">
                          <div className="mt-12 subscribe-form">
                              <form action="#" className="relative focus:outline-none">
                                  <input type="email" placeholder="Enter eamil" className="w-full py-4 pl-6 pr-40 duration-300 border-2 rounded focus:border-theme-color focus:outline-none" />
                                  <button className="main-btn gradient-btn">Subscribe</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="footer-widget pb-120">
                  <div className="row">
                      <div className="w-4/5 md:w-3/5 lg:w-2/6">
                          <div className="mt-12 footer-about wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                              <a className="inline-block mb-8 logo" href="index.html">
                                  <img src="assets/images/logo.svg" alt="logo" className="w-40" />
                              </a>
                              <p className="pb-10 pr-10 leading-snug text-white">Lorem ipsum dolor sit amet consetetur sadipscing elitr, sederfs diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                              <ul className="flex footer-social">
                                  <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled"></i></a></li>
                                  <li><a href="javascript:void(0)"><i className="lni lni-twitter-filled"></i></a></li>
                                  <li><a href="javascript:void(0)"><i className="lni lni-instagram-filled"></i></a></li>
                                  <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original"></i></a></li>
                              </ul>
                          </div>
                      </div>
                      <div className="w-4/5 sm:w-2/3 md:w-3/5 lg:w-2/6">
                          <div className="row">
                              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                                  <div className="mt-12 link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                                      <div className="footer-title">
                                          <h4 className="mb-8 text-2xl font-bold text-white">Quick Link</h4>
                                      </div>
                                      <ul className="link">
                                          <li><a href="javascript:void(0)">Road Map</a></li>
                                          <li><a href="javascript:void(0)">Privacy Policy</a></li>
                                          <li><a href="javascript:void(0)">Refund Policy</a></li>
                                          <li><a href="javascript:void(0)">Terms of Service</a></li>
                                          <li><a href="javascript:void(0)">Pricing</a></li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                                  <div className="mt-12 link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                                      <div className="footer-title">
                                          <h4 className="mb-8 text-2xl font-bold text-white">Resources</h4>
                                      </div>
                                      <ul className="link">
                                          <li><a href="javascript:void(0)">Home</a></li>
                                          <li><a href="javascript:void(0)">Page</a></li>
                                          <li><a href="javascript:void(0)">Portfolio</a></li>
                                          <li><a href="javascript:void(0)">Blog</a></li>
                                          <li><a href="javascript:void(0)">Contact</a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="w-4/5 sm:w-1/3 md:w-2/5 lg:w-2/6">
                          <div className="mt-12 footer-contact wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                              <div className="footer-title">
                                  <h4 className="mb-8 text-2xl font-bold text-white">Contact Us</h4>
                              </div>
                              <ul className="contact">
                                  <li>+809272561823</li>
                                  <li>info@gmail.com</li>
                                  <li>www.yourweb.com</li>
                                  <li>123 Stree New York City , United <br /> States Of America 750.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="py-8 border-t border-gray-200 footer-copyright">
                  <p className="text-white">
                      Template by <a className="duration-300 hover:text-theme-color-2" href="https://tailwindtemplates.co" rel="nofollow" target="_blank">TailwindTemplates</a> and
                      <a className="duration-300 hover:text-theme-color-2" href="https://uideck.com" rel="nofollow" target="_blank">UIdeck</a>
                  </p>
              </div>
          </div>
          <div id="particles-2" className="particles"></div>
      </footer>
    </div>
  );
}
