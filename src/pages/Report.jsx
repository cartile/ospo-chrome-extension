import leftArrow from '../assets/icons/leftArrow.svg'

function Report ({homeRoute}) {
    return (
    <div className="App">
      <div id="loggedInContainer">
        <p>Profile</p>
        <p>Logout</p>
      </div>
      <div id="leftArrowContainer" onClick={homeRoute} class="prevent-select">
          <img src={leftArrow} alt="Back Arrow" draggable="false" />
      </div>
      <div id="middleContainer">
        <h1 id="extensionTitle">ospo</h1>
        <p>Start typing a company to edit your entry</p>
      </div>
      <input type="text" id="fname" name="fname" placeholder="Company Name" />

      <div id="middleContainer" class="bottom">
        <br />
        <p>View statistics and more at</p>
        <a href="https://github.com/cartile"><p><strong>ospo.com</strong></p></a>
      </div>
    </div>
    )
}

export { Report }