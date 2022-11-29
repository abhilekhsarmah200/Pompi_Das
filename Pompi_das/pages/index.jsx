import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Avatar } from 'primereact/avatar';
import ScrollAnimation from 'react-animate-on-scroll';

const pompiImage = '/images/Pompi_DAS.png';

export default function index() {
  const [activeIndex1, setActiveIndex1] = useState(1);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const tabHeaderIIITemplate = (options) => {
    const items = [
      { label: 'Update', icon: 'pi pi-refresh' },
      { label: 'Delete', icon: 'pi pi-times' },
      { label: 'Upload', icon: 'pi pi-upload' },
    ];

    return (
      <SplitButton
        label='Header III'
        icon='pi pi-plus'
        onClick={options.onClick}
        className='px-2'
        model={items}
      ></SplitButton>
    );
  };
  const tabHeaderIITemplate = (options) => {
    return (
      <div
        className='flex align-items-center px-3'
        style={{ cursor: 'pointer' }}
        onClick={options.onClick}
      >
        <Avatar
          image='images/avatar/amyelsner.png'
          onImageError={(e) =>
            (e.target.src =
              'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
          }
          shape='circle'
          className='mx-2'
        />
        Amy Elsner
      </div>
    );
  };
  return (
    <>
      <div>
        <div className='flex shadow-2xl bg1 justify-between items-center rounded-bl-2xl'>
          <div className='text-3xl text-white flex justify-center mx-auto'>
            <ScrollAnimation
              animateOnce={true}
              animateIn='animate__bounceInRight'
            >
              Hello This is Pompi...
            </ScrollAnimation>
          </div>
          <div className=''>
            <ScrollAnimation
              animateOnce={true}
              animateIn='animate__bounceInLeft'
            >
              <img
                src={pompiImage}
                className='flex opacity-75 rounded-6 w-auto h-xl'
                alt=''
              />
            </ScrollAnimation>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
