
// 확장 툴 실행 시점에서 발생한다.
//alert('create index!!');

//_httpRegex = /^(http\:\/\/|https\:\/\/)/;

var backGroundWindow = chrome.extension.getBackgroundPage();

function onLoad() {

    chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {

        var extensionOrigin = 'chrome-extension://' + chrome.extension.id;

        //console.log(extensionOrigin);

        if (!location.ancestorOrigins.contains(extensionOrigin)) {

            var iframe = document.createElement('iframe');
            iframe.id = 'emojiFrame';
            // Must be declared at web_accessible_resources in manifest.json
            iframe.src = chrome.extension.getURL('site/emoji/index.html');

            iframe.width = 750;
            iframe.height = 800;
            iframe.frameborder = 0;
            //iframe.scrolling = 'no';
            iframe.style.border = '0px';
            iframe.style.overflow = 'none';

            document.querySelector('#wrap').appendChild(iframe);
        }

        //var buttonElem1 = document.querySelector('#button_container1');
        //var buttonElem2 = document.querySelector('#button_container2');
        //var buttonElem3 = document.querySelector('#button_container3');


        //console.log(buttonElem3);

        ////chrome.extension.getBackgroundPage().console.log('test');

        //buttonElem1.addEventListener('click', function(){
        //
        //    // call event page
        //    chrome.extension.sendMessage({type:'popupPageRequest'}, function(response) {
        //
        //        var msgElem = document.querySelector('#msg_container1');
        //        msgElem.innerHTML = response.data;
        //    });
        //});
        //
        //buttonElem2.addEventListener('click', function(){
        //    // content page 로 message 전달을 요청하기 위해서는 해당 tabs.query 를 호출한다.
        //    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        //
        //        // call content page
        //        chrome.tabs.sendMessage(tabs[0].id, {type:'popupPageRequest'}, function(response) {
        //
        //            var msgElem = document.querySelector('#msg_container2');
        //            msgElem.innerHTML = response.data;
        //        });
        //    });
        //});

        //buttonElem3.addEventListener('click', function(){
        //    // content page 로 message 전달을 요청하기 위해서는 해당 tabs.query 를 호출한다.
        //    //var frameElem = document.querySelector('#emojimuan');
        //    //if (frameElem.contentDocument){
        //    //    frameElem.contentDocument.body.innerHTML = '';
        //    //}
        //    //frameElem.contentWindow.document.body = '';
        //
        //    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        //
        //        // call content page
        //        chrome.tabs.sendMessage(tabs[0].id, {type:'injectEmoji'}, function(response) {
        //
        //
        //            //msgElem.innerHTML = response.data;
        //        });
        //    });
        //});
    });
}

window.onload = onLoad;


//http://stackoverflow.com/questions/13667176/chrome-extension-onmessage