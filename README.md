# Angularwiki

This project is the source code of the wiki for iGEM2018 Team GO ParisSaclay. It is mainly based on Angular,
with a module to load page from the MediaWiki provided by the iGEM organization.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment on iGEM MediaWiki

It is a bit tricky as the wikicode parser will prevent you from just pasting the code between script tag.
Our solution is to use base64 encoded data URL to load the first code.


Our procedure is as follow :
  
    ng build --prod

Go to the dist directory, then

    cat runtime.js polyfills.js main.js | base64  > base64_js.txt

Edit base64_js.txt to add to the beginning :

    <script>var base64script = atob("

and to the end :
    
    ");eval(base64script); </script>

This creates a script tag with a simple base64 script loader.

Then to remove newlines :

    `tr -d '\n' < base64_js.txt> base64_js_nn.txt

Same procedure for for CSS except you add it between:

    <link rel="stylesheet" href="data:text/css;base64,

and

    ">

Then : 

    tr -d '\n' < base64_css.txt > base64_css_nn.txt


Add something similar to this wiki edit field (you will have to get rid of the CDN when exporting for good, using similar technique) :

 
  <html>
  
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <meta charset="utf-8">
  
    
    <base href="http://2018.igem.org/Team:GO_Paris-Saclay/DesignTryArea">
  
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
  
    <div id="bigmaindiv">
    <app-root></app-root>
    </div>

You'll need to copy the created CSS and JS tags into the edit field. However, as they are more than 10 000 lines long,
this will be a bit difficult. If you're on linux, it is suggested to install and use xclip, an utility that copies to X11 middle-click clipboard :


    xclip -i base64_css_nn.txt 

and middle click into edit field,

then :

    xclip -i base64_js_nn.txt 

and same middle click.

Then add to the edit field  :



    <script>
    $(".body").append($("#bigmaindiv"));
    $('#top_title').remove();
    $('#bigmaindiv').insertBefore('#content');
    
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
    width:100vw;
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

This is to bust out of the content div of MediaWiki, and do some tweak to appear correctly.
