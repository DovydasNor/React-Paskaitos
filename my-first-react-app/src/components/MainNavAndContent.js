function MainNavAndContent() {
    return (
        <div className="Main-nav-wrap">
        <div className="Content-box">
        <h2>Content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum vitae leo efficitur imperdiet. Phasellus.</p>
        <h3>Sub Header</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum vitae leo efficitur imperdiet. Phasellus.</p>
        </div>
        <div className='Main-nav-idc'>
          <div className="Main-Nav-Title">
            <h3>Navigation</h3>
          </div>
          <div className="Main-nav-box">
            <ul className="Main-nav">
              <a className="Main-nav-link" href="home"> <li className="Li-main">Home</li> </a>
              <a className="Main-nav-link" href="product"> <li className="Li-main">Product</li> </a>
              <a className="Main-nav-link" href="company"> <li className="Li-main">Company</li> </a>
              <a className="Main-nav-link" href="contacts"> <li className="Li-main">Contact</li> </a>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default MainNavAndContent