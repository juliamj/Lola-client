import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className='background'>
      <div className='text-light text-center m-5'>
        <h1>
          Welcome to <span className='logo display-3'>Lola</span>
        </h1>
        <div className='mediumtext'>a language tandem site</div>
      </div>
      <div className='row mt-5'>
        <div className='col-md-6 m-auto'>
          <div className='card card-body text-center bg-light border border-0 shadow m-5'>
            {/* <div className='logo'>
              Lola 
            </div> */}
            <p>Create an account or login</p>
            <Link to='/users/register' className='btn bg-orange btn-block mb-2'>
              Register
            </Link>
            <Link
              to='/users/login'
              className='btn royalpurple-button btn-block'
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      {/* Welcome Text */}
      <div className='justify-content-center'>
        <div className='p-3 text m-5 bg-light rounded border border-0 shadow m-5'>
          <div className='d-flex flex-row '>
            <div className=''>
              <h2 className='text-center p-2 m-2'>
                What is <span className='logo'>Lola</span>?
              </h2>
              <p className='pr-5 pl-5'>
                <img
                  className='welcome-image pr-5'
                  alt='People in a natural history museum'
                  src='museum-illu.png'
                />
                <i>Lola</i> is a <b>language tandem</b> website that connects
                you with other people who speak the language you want to learn.
                A ‘language tandem’ is when two people get together, and spend
                some time speaking two languages: each for half the time.
              </p>
              <p className='pr-5 pl-5'>
                Normally, this means two people have a coffee and might run out
                of topics, despite desperately wanting to speak together. This
                is where Lola comes in. We’ll grease the wheels and get you
                talking sooner by matching you with other people who love doing
                activities you love to do, in your area.
              </p>
              <p className='pr-5 pl-5'>
                We believe doing activities together is the best way to really
                become fluent. No more sitting and talking about how much you
                love hiking. Go out and hike with your tandem partner, and the
                words will come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
