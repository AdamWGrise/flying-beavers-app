import React from 'react'
import './style.css'

function Carousel () {
  return (
    <div className='bd-example'>
      <div id='carouselExampleCaptions' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li data-target='#carouselExampleCaptions' data-slide-to='0' className='active' />
          <li data-target='#carouselExampleCaptions' data-slide-to='1' />
          <li data-target='#carouselExampleCaptions' data-slide-to='2' />
        </ol>
        <div className='carousel-inner'>
          {/* First item */}
          <div className='carousel-item max-height'>
            <img src='planner.jpg' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h5 className='car-1'>Share your to-do lists</h5>

              <p>"ClanManager shares the family to-do lists so no one forgets about grocery shopping or taking out the trash"</p>
              <h5 className='car-1'>Share your shopping lists</h5>
              <p>Keep the home shopping lists in one place in the cloud - everyone in the family can add items, then remove them while shopping.</p>

            </div>
          </div>
          {/* Second item */}
          <div className='carousel-item max-height active'>
            <img src='indoors-3203076_1280.jpg' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'>

              <h5 className='car-1'>Share your schedules</h5>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit".</p>
              <p>Show the family's calendars in one place for easier logistics and planning.</p>

            </div>
          </div>
          {/* Third item */}
          <div className='carousel-item max-height'>
            <img src='todo.jpg' className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h5 className='car-1'>Share your important information</h5>
              <p>Emergency Contact info, medications, allergies, everything in one spot to make things efficent.</p>
            </div>
          </div>
        </div>
        <a className='carousel-control-prev' href='#carouselExampleCaptions' role='button' data-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='sr-only'>Previous</span>
        </a>
        <a className='carousel-control-next' href='#carouselExampleCaptions' role='button' data-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  )
}

export default Carousel
