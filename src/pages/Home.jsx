
function Home ({logRoute, reportRoute}) {
    return (
    <div className="App">
      <div id="middleContainer">
        <h1 id="extensionTitle">ospo</h1>
        <p>Track your career journey.</p>
      </div>
      <button onClick={logRoute}>Log a job application</button>
      <button onClick={reportRoute}>Report an outcome</button>

      <div id="middleContainer" class="bottom">
        <br />
        <p>View statistics and more at</p>
        <a target="_blank" 
          rel="noreferrer noopener" 
          href="https://github.com/cartile"
        ><p><strong>ospo.com</strong></p></a>
      </div>
    </div>
    )
}

export { Home }