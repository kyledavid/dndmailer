export const rsvp = (names, playerDeficit) => `
  <div style="background-color: aqua; padding: 50px 50px 100px 50px;">
    <div style="background-color: #fff;"">
      <h3 style="font-size: 22px; color: aqua; padding: 20px;">These bros confirmed for today's sesh...</h3>
      <p style="font-size: 18px; color: #22222a; padding: 20px;">${names.join(',')}</p>
      <p style="font-size: 18px; color: #22222a; padding: 20px;">We need ${playerDeficit} more players...are you in?
      <form method="post" action="https://enigmatic-peak-91949.herokuapp.com/confirm">
        <input type="submit" value="Yeah Dawg" />
      </form></p>
    </div>
  </div>
`
