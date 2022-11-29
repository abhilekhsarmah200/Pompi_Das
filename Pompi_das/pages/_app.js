import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import Head from 'next/head';
import '../styles/TabViewDemo.css';
import '../styles/normalize.css';
import '../style.css';
import '../styles/custom.css';
import 'animate.css/animate.min.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* CDN for Josefin Sans font */}
        <link
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap'
          rel='stylesheet'
          crossorigin='anonymous'
        ></link>
        {/* CDN for Product Sans front */}
        <link
          href='https://fonts.cdnfonts.com/css/product-sans'
          rel='stylesheet'
          crossorigin='anonymous'
        ></link>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* CDN for Josefin Sans and Montserrat font */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      {/* <div className='overlay 3xs:hidden flex'>
        <div className='iconContainer'>
          <div className='phone'>
            <i className='pi pi-refresh'></i>
            <p>Rotate Your Device !</p>
          </div>
        </div>
      </div> */}
      <Component {...pageProps} />
      <div className='bg-primary-color-100 text-center sm:mt-10'></div>
    </>
  );
}

export default MyApp;
