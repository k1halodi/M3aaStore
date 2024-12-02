import React from 'react';
import Area from '@components/common/Area';
import './Layout.scss';

export default function Layout() {
  return (
    <>
      <div className="header flex justify-between">
        <Area id="header" noOuter />
      </div>
      <main className="content">
        <Area id="content" className="" noOuter />
      </main>
      <div className="footer">
        <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
          <div>
            <div className="card-icons flex justify-center space-x-4 md:justify-start">
              <div>
              <a href="https://www.facebook.com/M3aaStore" target="_blank" rel="noopener noreferrer">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"/>
</svg>
            </a>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="24"
                  aria-labelledby="pi-master"
                  viewBox="0 0 38 24"
                >
                  <path
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                    opacity="0.07"
                  />
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  />
                  <circle cx="15" cy="12" r="7" fill="#EB001B" />
                  <circle cx="23" cy="12" r="7" fill="#F79E1B" />
                  <path
                    fill="#FF5F00"
                    d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  viewBox="0 0 38 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="24"
                  role="img"
                  aria-labelledby="pi-paypal"
                >
                  <title id="pi-paypal">PayPal</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  />
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  />
                  <path
                    fill="#003087"
                    d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"
                  />
                  <path
                    fill="#3086C8"
                    d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"
                  />
                  <path
                    fill="#012169"
                    d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="self-center">
            <div className="copyright text-center md:text-right text-textSubdued">
              <span>Copyright © 2020 EverShop</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const layout = {
  id: 'layout',
  areaId: 'body',
  sortOrder: 1
};
