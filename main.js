console.log("this is main.js"+$("form"));
init();

function init(){
    
    console.log("init function");
    
    $('form *').filter(':input').each(function(){
        //your code here
        var ele = $(this);
        if(ele.css('display') != 'none'){
            console.log(ele);
            // store it so that we can use it in password confirmation field also 
            var password = generatePassword();
            var type = ele.attr('type');
            console.log("its type is"+type);
            if(type == "text"){
                ele.val(randomNames[Math.round(Math.random()*19)]);
            }
            else if(type == "number"){
                ele.val(Math.random()*100);
            }
            else if(type == "password"){
                console.log("pass = "+password);
                ele.val(password);
            }

        }
    });
}
//to generate random password
function generatePassword() {
    var length = 10,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

//Where el is the DOM element you'd like to test for visibility
function isHidden(el) {
    return (el.offsetParent === null)
}

var randomtextcontent = "The order of battle of the Croatian Special Police in 1991–95 included up to 30 individual special forces units subordinated to the Ministry of the Interior. The special police (logo pictured) was created around the Ministry of the Interior's existing airborne special forces unit following an open revolt of the Croatian Serbs against the Government of Croatia in August 1990. It further developed with the increasing involvement of the Yugoslav People's Army in the conflict, supporting the Croatian Serbs. The conflict escalated into the Croatian War of Independence in 1991. The special police took part in the first clashes of the war in Pakrac and at the Plitvice Lakes. As Croatia had no army, the 3,000-strong special forces became the country's most effective fighting force. Even though several special police units were transformed into the Croatian National Guard (later renamed the Croatian Army) in 1991, the special police continued to operate throughout the war as special forces units supporting virtually all army operations.";

var randomNames[] = {"Sherrell Basel",  
"Elijah Markell",  
"Bree Gunnell",  
"Matha Rhymes",  
"Roxann Mcquillen",  
"Jermaine Demyan",  
"Tresa Eure",  
"Annika Flowers",  
"Carrie Thorsen",  
"Angla Briese",  
"Erwin Losh",  
"Mandy Langstaff",  
"Gidget Spinelli",  
"Kia Collelo",  
"Sandi Borgman",  
"Marth Peets",  
"Tashia Beisner",  
"Chelsey Nowlen",  
"Jude Monreal",  
"Zada Suman"};



//
//chrome.runtime.onMessage.addListener(
//  function(request, sender, sendResponse) {
//    console.log(sender.tab ?
//                "from a content script:" + sender.tab.url :
//                "from the extension");
//    if (request.type == "initclick")
//      sendResponse("got init click");
//      
//      init();
//  });
