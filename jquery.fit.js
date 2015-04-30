/*!
 * jQuery Fit - Lightweight jQuery plugin for expanding an element's height
 *
 * Version:  0.1
 *
 * Copyright (c) 2015 Pedro Moreira
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://github.com/pdcmoreira/jquery-fit
 *
 */

(function ($) {
    
    $.fn.fit = function(options) {
        var settings = $.extend({
            width: false,
            height: false,
            widthMargin: 0,
            heightMargin: 0,
            widthClip: null,
            heightClip: null
        }, options);
        
        function calc(element, margin, clip) {
            var fClip = null;
            
            if(clip) {
                var cElement = $(clip);
                
                if(cElement.length && cElement.offset().top > element.offset().top) {
                    fClip = cElement.offset().top;
                }
            }

            if(fClip === null)
                fClip = $(document).height();

            var size = fClip
                - element.offset().top
                - margin;
            
            return size;
        }
        
        if(settings.height) {
            this.css("height", calc(this, settings.heightMargin, settings.heightClip));
        }
        
        if(settings.width) {
            this.css("width", calc(this, settings.widthMargin, settings.widthClip));
        }
        
        return this;
    };
    
}(jQuery));