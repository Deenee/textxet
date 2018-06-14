var axios = require('axios');
const response = require('../responses');
/**
 * Home Controller --defualt
 * Returns the welcome page.
 */

exports.sendTextMessage = function (req, res) {
    // Gets the root directory

    if (!req.query.apiKey || !req.query.source || !req.query.recepient || req.content)  {
        res.send(response.error([], 'You need to pass all parameters.', '400'));
    }

    var content = req.query.content   || 'hello dee';
    var source = req.query.source || 'Test Play' ;
    var api_key = req.query.apiKey;
    var merchant_id = req.query.merchant_id;
    var recepient = req.query.recepient;
     
    // Send message
    axios.get(url, () => {
    }).then((data)=> {
        console.log('success-------->' + data);
        res.send(response.success([], 'Message Sent Successfully', '200')); 
    }).catch((err) =>{
        console.log('error occured--------->' + err);
        res.send(response.error([], 'Error', '500'));
    });
}