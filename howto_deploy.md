    ng build --prod

    cat runtime.js polyfills.js scripts.js  main.js | base64 > base64_js_noloader.txt
    tr -d '\n' < base64_js_noloader.txt> base64_js_noloader_1.txt

    cat styles.css | base64 > base64_css_noloader.txt
    tr -d '\n' < base64_css_noloader.txt > base64_css_noloader_1.txt
    

Upload the base64 noloader_1 JS & CSS files to the corresponding text file with wiki upload tool.

Then add this to all pages you need to have accessible directly from URL :

(This has a loading spinner integrated. You have to modify all URL to be your own (ctrl+g "http://"))

    <html>
    <div id="removeme"><img class="spinner" src="http://2018.igem.org/wiki/images/c/cc/T--GO_Paris-Saclay--mascotte_spinner.png"> Loading, please wait</div>
    
    <style>
    .spinner {
      width: 40px;
    
      margin: 100px auto;
      -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
      animation: sk-rotateplane 1.2s infinite ease-in-out;
    }
    
    @-webkit-keyframes sk-rotateplane {
      0% { -webkit-transform: perspective(120px) }
      50% { -webkit-transform: perspective(120px) rotateY(180deg) }
      100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
    }
    
    @keyframes sk-rotateplane {
      0% { 
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
      } 50% { 
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
      } 100% { 
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      }
    }
    </style>
    
      <meta charset="utf-8">
      <base href="http://2018.igem.org/Team:GO_Paris-Saclay">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <div id="bigmaindiv">
    <app-root></app-root>
    </div>
    
    <script>
    const cssreq = new XMLHttpRequest();
    cssreq.open('GET', 'http://2018.igem.org/wiki/images/2/22/T--GO_Paris-Saclay--maincss.txt', false); 
    console.log("Sending CSS XHR...");
    cssreq.send(null);
    console.log("Received CSS results");
    var b64_csstext = cssreq.responseText;
    var css_text = atob(b64_csstext);
    $('head').append("<style>"+css_text+"</style>");
    
    const req = new XMLHttpRequest();
    req.open('GET', 'http://2018.igem.org/wiki/images/e/ee/T--GO_Paris-Saclay--mainscript.txt', false); 
    console.log("Sending JS XHR...");
    req.send(null);
    console.log("Received JS results");
    var b64_text = req.responseText;
    var js_text = atob(b64_text);
    eval(js_text);
    
    
    setTimeout(function(){
        $(".body").append($("#bigmaindiv"));
    
    $('#top_title').remove();
    $('#removeme').remove();
    $('#bigmaindiv').insertBefore('#content'); }, 0);
    </script>
    
    <style>
    #content{
    background-color: #FFFFFF00;
    width: 0px;
    padding: 0px;
    border: none;
    margin-left: 0px;
    margin-right: auto;
    }
    #bigmaindiv
    {
    width:100%;
    position:absolute;
    background-color: white;
    margin-left : 0px;
    margin-top: 25px
    margin-right : 0px;
    }
    body{
    background-color: #FFFFFF;
    }
    </style>
    
    </html>
