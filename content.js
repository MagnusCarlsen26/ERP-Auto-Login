function fillFeedback(type) {
    const userId = 'B21AI039';
    const password = 'Your Password';
    const answer = 'Your security answer';
    const emailOtp = '';
    const requestedUrl = 'https://erp.iitj.ac.in/IIT_ERP3/';
    const answerRev = answer.split("").reverse().join("");

    fetch("https://erp.iitj.ac.in/SSOAdministration/auth.htm", {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "content-type": "application/x-www-form-urlencoded",
        },
        "body": `user_id=${userId}&password=${password}&answer=${answer}&email_otp=&requestedUrl=https%3A%2F%2Ferp.iitj.ac.in%2FIIT_ERP3%2F&answerrev=${answerRev}`,
        "method": "POST"
      })
      .then( async(res) => console.log( await res.text() ) )
      .then( () => window.location.href = 'https://erp.iitj.ac.in/IIT_ERP3/')
      .catch( err => console.error(err) )

}
  
fillFeedback("tyype")