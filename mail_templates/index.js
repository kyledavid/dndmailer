const getParty = (party) => {
  if (party.length > 1) {
    var length = party.length
    var commaPart = party.map((part, i) => {
      if (i === length-1) {
        return part
      }
      return part + ','
    })

    commaPart.splice(-1, 0, 'and')

    return commaPart.join(' ') + ' have joined the party...'
  }

  return party[0] + ' has joined the party...'
}

export const rsvp = (names, playerDeficit) => `
<html>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700" rel="stylesheet">
    <style>
      html {
        box-sizing: border-box;
      }
      * {
        box-sizing: inherit;
        color: #1b1b1b;
        font-size: 14px;
        font-family: 'Libre Baskerville', serif;
      }

      .background {
        background-image: url('https://vignette.wikia.nocookie.net/sigil-city-of-doors-nwn2-persistent-world/images/9/9c/Red-dragon-mountain.jpg/revision/latest?cb=20170223010116');
        background-size: cover;
        padding: 5px 0 20px 0;
      }
      .container {
        background-color: #FFFEFE;
        max-width: 500px;
        margin: auto;
        position: relative;
        z-index: 2;
        box-shadow: 7px 7px #6D3B40;
        text-align: center;
      }
      .header {
        background-color: #cccccc;
        border-bottom: 2px solid #F32732;
        padding: 0 140px;
      }
      .main {
        padding: 0 20px 60px 20px;
      }
      .party {
        margin-top: 40px;
        font-size: 26px;
      }
      .needed {
        font-size: 90px;
        font-weight: 700;
        margin: 0;
        margin-top: 15px;
      }
      .venture {
        font-size: 20px;
      }
      .down {
        font-size: 36px;
        margin-top: 1.4em;
        margin-bottom: 1em;
      }
      .yeah-dawg {
        color: #fff !important;
        font-size: 36px;
        font-weight: 700;
        text-decoration: none;
        background-color: #F32732;
        padding: 10px;
        box-shadow: 5px 5px 0 #6D3B40;
      }
      .yeah-dawg:hover {
        background-color: #6d3b40;
        color: yellow!important;
      }
      img {
        max-width: 100%;
      }
    </style>
  </head>
  <body>
    <div class="background">
      <div class="container">
        <header class="header">
          <img src="cid:dndlogo">
        </header>
        <div class="main">
          <div class="party">
            ${getParty(names)}
          </div>
          <h2 class="needed">
            ${playerDeficit}
          </h2>
          <div class="venture">
            more are needed to venture forth
          </div>

          <h2 class="down">Are You Down?</h2>
          <a class="yeah-dawg" href="#">Yeah Dawg</a>

         </div>
       </div>
     </div>
  </body>
</html>
`
