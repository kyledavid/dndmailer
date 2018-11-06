export const rsvp = (names, playerDeficit) => `
<html>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700" rel="stylesheet">
    <style>
      * {
        color: #1b1b1b;
        font-size: 14px;
        font-family: 'Libre Baskerville', serif;
      }
      .container {
        background-image: url('https://vignette.wikia.nocookie.net/sigil-city-of-doors-nwn2-persistent-world/images/9/9c/Red-dragon-mountain.jpg/revision/latest?cb=20170223010116');
        background-size: cover;
      }
      .main {
        background-color: #FFFEFE;
        max-width: 500px;
        margin: auto;
        position: relative;
        z-index: 2;
      }
      .header {
        background-color: #cccccc;
        border-bottom: 1px solid #F32732;
      }
      .party {
        font-size: 26px;
      }
      .needed {
        font-size: 90px;
        font-weight: 700;
      }
      .venture {
        font-size: 20px;
      }
      form h2 {
        font-size: 36px;
      }
      input[type="submit"] {
        font-size: 36px;
        font-weight: 700;
      }
      img {
        max-width: 100%;
      }

    </style>
  </head>
  <body>
    <div class="container">
      <div class="main">
        <header class="header">
          <img src="cid:dndlogo">
        </header>
        <div class="party">
          ${names.join(',')} have joined the party...
        </div>
        <h2 class="needed">
          ${playerDeficit}
        </h2>
        <div class="venture">
          more are needed to venture forth
        </div>
        <form method="post" action="https://enigmatic-peak-91949.herokuapp.com/confirm">
          <h2>Are You Down?</h2>
          <input type="submit" value="Yeah Dawg!" />
        </form>
       </div>
     </div>
  </body>
</html>
`
