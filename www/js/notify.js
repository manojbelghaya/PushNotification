var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyCSYjFCNky5Q-uOmL4FR5xwkLLQrucq3G0');
var registrationIds = [];
 
// Value the payload data to send...
message.addData('message',"\u270C Peace, Love \u2764 and PhoneGap \u2706!");
message.addData('title','Push Notification Sample' );
message.addData('count','3'); // Shows up in the notification in the status bar
message.addData('sound','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// At least one reg id required
registrationIds.push('epL0lMhI0Q4:APA91bFpszBd0yXoisRYBEJXRAp_tY8ZkOv9Ngn3sZuAxbdkyTIfdRZoOnbXMOg1a3K1rSJBfcfe2UHsD41A9HJqivfN_JuJadEkKSs_MJcdNoSQBtCWZt7kTHqtSZUekIJXgDRkTMAl');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});