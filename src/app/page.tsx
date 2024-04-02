'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

import AOS from "aos";
import "aos/dist/aos.css";


export default function Home() {



  return (
    <section className='h-full '>
      {/* <div className='absolute bg-transparent ' style={{
        transform: `translate(${xy.x}px, ${xy.y}px)`
      }} /> */}



      {/* <div className="styles_pageWrapper__YIB2q">
        <div className="CursorCircle_cursor__Wko3P CursorCircle_cursor_small__jsqaz">
        </div>
        <div className="CursorCircle_cursor__Wko3P CursorCircle_cursor_bigWrapper__YCE_o">
          <div className="CursorCircle_cursor_big__VmAMr">
          </div>
        </div>
        <div className="styles_letters__gqxIL">
          <div className="styles_lettersRow__HoiKg">
            <span className="styles_textDecor__U0_YS">s</span>
            <span className="styles_textDecor__U0_YS">w</span>
          </div>
          <div className="styles_lettersRow__HoiKg">
            <span className="styles_textDecor__U0_YS">e</span>
            <span className="styles_textDecor__U0_YS">ll</span>
          </div>
        </div>
        <div className="styles_header__p4QXK">
          <header className="styles_wrapper__nYu6r">
            <div className="styles_burgerMenuWrapper__NaYqV">
              <div>
                <div className="styles_nav__gcXf3">
                </div>
              </div>
              <div>
                <div>
                  <nav className="styles_wrapper__mFiw9 styles_burgerContent__5sxSD">
                    <a className="btn btn-primary styles_btnAfter___ruZ2">Swell.</a>
                    <a className="btn btn-primary">About us</a>
                    <a className="btn btn-primary">Projects</a>
                    <a className="btn btn-primary">Contact</a>
                  </nav>
                  <div className="styles_miniMenu__VqUeD">Menu<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1.5H15.5" stroke="white" stroke-width="2.5" stroke-linecap="square">
                    </path>
                    <path d="M1.5 7.5H15.5" stroke="white" stroke-width="2.5" stroke-linecap="square">
                    </path>
                    <path d="M1.5 13.5H15.5" stroke="white" stroke-width="2.5" stroke-linecap="square">
                    </path>
                  </svg>
                  </div>
                </div>
              </div>
              <button className="btn btn-burger styles_burgerBtn__QAhg9">
                <svg fill="#FFFFFF" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" id="hamburger-menu">
                  <path d="M 9.667 15 L 39.667 15 C 40.437 15 40.918 14.167 40.533 13.5 C 40.354 13.191 40.024 13 39.667 13 L 9.667 13 C 8.897 13 8.416 13.833 8.801 14.5 C 8.98 14.809 9.31 15 9.667 15 Z M 9.667 37 L 39.667 37 C 40.437 37 40.918 36.167 40.533 35.5 C 40.354 35.191 40.024 35 39.667 35 L 9.667 35 C 8.897 35 8.416 35.833 8.801 36.5 C 8.98 36.809 9.31 37 9.667 37 Z M 9.667 26 L 39.667 26 C 40.437 26 40.918 25.167 40.533 24.5 C 40.354 24.191 40.024 24 39.667 24 L 9.667 24 C 8.897 24 8.416 24.833 8.801 25.5 C 8.98 25.809 9.31 26 9.667 26 Z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="30px" height="30px" viewBox="0 0 64 64" id="close">
                  <line x1="60.92" x2="3.08" y1="5.92" y2="58.08" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="4">
                  </line>
                  <line x1="3.08" x2="60.92" y1="5.92" y2="58.08" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="4">
                  </line>
                </svg>
              </button>
            </div>
          </header>
        </div>
        <div className="styles_footer__uKv1y">
          <footer className="styles_wrapper__AVBoc">
            <nav className="styles_leftSide__EFLMt">
              <div className="styles_text__r91Bo">
                <span>
                  <span className="styles_div__Eh5g9">
                    <i className="i-linkedin circle-border i-negative">
                    </i>
                  </span>
                </span>
                <div className="styles_fill__m1ljM">
                </div>
              </div>
              <div className="styles_text__r91Bo">
                <span>
                  <span className="styles_div__Eh5g9">
                    <i className="i-instagram circle-border i-negative">
                    </i>
                  </span>
                </span>
                <div className="styles_fill__m1ljM">
                </div>
              </div>
            </nav>
            <nav className="styles_rightSide__OfqA1">
              <i className="i-copyright circle-border">© 2024</i>
              <div>
                <div className="styles_text__r91Bo">
                  <span>
                    <span className="styles_div__Eh5g9">
                      <i className="circle-border i-negative i-sound">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="1" y1="16" x2="1" y2="3.094265" stroke="white" stroke-width="2">
                          </line>
                          <line x1="9" y1="16" x2="9" y2="8.280455" stroke="white" stroke-width="2">
                          </line>
                          <line x1="5" y1="16" x2="5" y2="4.008347" stroke="white" stroke-width="2">
                          </line>
                          <line x1="13" y1="16" x2="13" y2="4.517675" stroke="white" stroke-width="2">
                          </line>
                          <line x1="17" y1="16" x2="17" y2="9.172814" stroke="white" stroke-width="2">
                          </line>
                        </svg>
                      </i>
                    </span>
                  </span>
                  <div className="styles_fill__m1ljM">
                  </div>
                </div>
              </div>
            </nav>
          </footer>
        </div>
        <div className="styles_content__WvOcS">
          <main className="Home_wrapper__CDAK8">
            <h1>Swell Interactive</h1>
            <section className="Home_canvasWrapper__fVqcl">
              <div data-line="true">
                <div>
                  <div>
                    <canvas data-engine="three.js r154" width="2560" height="1271">
                    </canvas>
                  </div>
                  <h2>
                    <div>
                      <div>
                        <div className="Home_caseInfo__cJh86">
                          <h4 className="Home_subtitle__KzT68 3dtext">Swell</h4>
                        </div>
                      </div>
                    </div>
                  </h2>
                  <h3>
                    <div>
                      <div>
                        <div className="Home_caseInfo__cJh86">
                          <p className="Home_text__FLP25 3dtext">Experts in the Digital Experience</p>
                        </div>
                      </div>
                    </div>
                  </h3>
                  <div>
                    <div>
                      <div>
                        <div className="Home_caseInfo__cJh86">
                          <div className="styles_text__r91Bo btn btn-secondary Home_btnSecondary__IHZcE styles_hoverBlack__wEWcb btn btn-secondary Home_btnSecondary__IHZcE" color="#000">
                            <span>
                              <span className="styles_div__Eh5g9">
                                <i>PROJECTS<span className="icon i-arrow">
                                </span>
                                </i>
                              </span>
                            </span>
                            <div className="styles_fill__m1ljM">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        <div className="styles_bgCanvas__YVjuW">
          <div id="video">
            <div>
              <canvas data-engine="three.js r154" width="2560" height="1271">
              </canvas>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

