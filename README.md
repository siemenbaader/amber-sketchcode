amber-sketchcode
================

SketchCode implemented in Amber Smalltalk


Installation Notes
==================


There are several bugs in Amber#0.12.3's Bower setup. To install this completely do:

    git clone git@github.com:siemenbaader/amber-sketchcode.git
    cd amber-sketchcode
    bower install # Pick 1 to install Amber's own tarballed Bootstrap#2.1.2
    bower install bootswatch#3.1.1+1
    ln bower_components/jquery/jquery.js bower_components/jquery/jquery-1.10.2.js

This will install Bootstrap 2.3.2 for the Helios IDE & Bootswatch based on Bootstrap#3.1.1.