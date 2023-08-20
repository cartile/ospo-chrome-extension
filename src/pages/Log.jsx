import leftArrow from '../assets/icons/leftArrow.svg'
import companies from '../data/companies'

function Log ({homeRoute}) {
    return (
    <div className="App">
      <div id="leftArrowContainer" onClick={homeRoute} class="prevent-select">
          <img src={leftArrow} alt="Back Arrow" draggable="false" />
      </div>
      <div id="middleContainer">
        <h1 id="extensionTitle">ospo</h1>
        <p>Log Form</p>
      </div>

      <input type="text" id="fname" name="fname" placeholder="Company Name" />
      <input type="text" id="lname" name="lname" placeholder="Role"/>
      <button>Log</button>

      <div id="middleContainer" class="bottom">
        <br />
        <p>View statistics and more at</p>
        <a href="https://github.com/cartile"><p><strong>ospo.com</strong></p></a>
      </div>
    </div>
    )
}

export { Log }