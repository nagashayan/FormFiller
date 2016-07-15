// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  /*chrome.tabs.executeScript({
    //code: 'document.body.style.backgroundColor="red"'
  });*/
    
    
    
    
    //list all forms on page
    console.log("listing forms");
    
    
    
    //execute content script and jquery
    chrome.tabs.executeScript(null, { file: "jquery-3.0.0.min.js" }, function() {
    chrome.tabs.executeScript(null, { file: "main.js" });
});
    
    
//    
//    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//  chrome.tabs.sendMessage(tabs[0].id, {type: "initclick"}, function(response) {
//    console.log(response);
//  });
//});
    
});
