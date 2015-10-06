-------------------------------------------------------------------------------------
GBCF-v3 Installation Readme in English by Mike Cherim @ http://green-beast.com
-------------------------------------------------------------------------------------

INSTALLATION:

This section will help guide you through the simple installation process. Please 
note that some configuration is required.

   1. Unzip and check out this readme file. Hehe, guess you did that. Okay, find
      the CONFIG.php file. It'll be in the gbcf-v3/files folder.

   2. Open that file using a text editor like Notepad, Textpad, or a markup 
      editor that won't mess up the scripting. Don't use Word, and Dreamweaver 
      can be dangerous. Some FTP programs can work well, and you may be able to 
      edit the file from within your server admin.

   3. Enter the first two variables, $send_email and $reply_email as a minimum. 
      The next two, $addressee and $web_site are a good idea as well. There are 
      many other variables, like language, if needed, display options, and more, 
      but they can wait until the script validation is done.

   4. Once that is done, put the entire gbcf-v3 folder on your server on the 
      root, within a directory, or within a sub-directory. Do not rename 
      anything! (Unless you first check out the FAQs to learn how.) Load all files.

   5. A 1 byte error-log.txt file is located in the files sub-directory located 
      in gbcf-v3. Find it and make it writable. CHMOD 666 if needed. This is an 
      essential step and you will not be able to proceed until done.

   6. You're about done. Go to the validation.php page with your browser and look 
      for the green validation bar with form ID. From there you can check on the 
      script's variables, locate available languages, etc. You may also move the
      validation file to validate and test in the same directory your contact page 
      will be in.

   7. Assuming you're a go, load up the form testing page and give it a whirl. 
      You may also move this page, as you can with the validation page, to perform
      a test of the form in the same directory your contact page will be in. This 
      is an option. If the validation page is good, the form should be too!

   8. If it works, and it should, you can work on using the CONFIG.php to customize 
      and further configure. You will also want to edit the style sheet if changes 
      are desired (it can be found in the themes sub-directory).

   9. Add the link to the style sheet and the focus JavaScript file - for form field
      focus effects for Internet Explorer - to the head of your contact form page 
      (see Figure 1), then add the PHP "include" to the body content area of that 
      same page (see Figure 2). Go live and worry not.

 <!--Figure 1 (written as xhtml)-->
  <link rel="stylesheet" type="text/css" href="gbcf-v3/files/themes/default.css" media="screen" />
 <!--[if IE]>
  <script type="text/javascript" src="gbcf-v3/files/focus.js"></script>
 <![endif]-->

Figure 1 Note: You may choose to add the form styles to your own style sheet or 
do something else such as use existing styles. It's your call. Use the default 
style sheet to see what classes you have available to you. The style sheet name 
in the example is default.css. Change as needed if using a theme.

 <!--Figure 2-->
  <?php include_once("gbcf-v3/form.php"); ?>

Figure 2 Note: In all cases above, adjust the path to the files to meet your needs 
such as if your contact page is in a folder: ../gbcf-v3/form.php.


GET MORE HELP

Once installed you will be able to access more help info on the associated form 
pages. Load these pages with your browser:

  path-to/gbcf-v3/help.php          <- Your help page has lots of info
  path-to/gbcf-v3/validation.php    <- Validate your script installation
  path-to/gbcf-v3/test-form.php     <- Test the configuration and function

These pages are also available at http://green-beast.com/gbcf-v3/ 
The help page may be more current http://green-beast.com/gbcf-v3/help.php

-------------------------------------------------------------------------------------