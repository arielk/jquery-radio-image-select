/**
 * Author: Yakir Sitbon.
 * Project Url: https://github.com/KingYes/jquery-radio-image-select
 * Author Website: http://www.yakirs.net/
 * Version: 1.0
 **/

(function($)
{
    $.fn.radioImageSelect = function(options)
    {
        var defaults = {
            imgItemClass: 'radioSelectImgItem',
            imgItemCheckedClass: 'radioSelectImgItemChecked',
            hideLabel: true
        };
        
        options = $.extend(defaults, options);
        
        var methods = {
            syncClassChecked : function(img)
            {
                var radioName = img.prev('input[type="radio"]').attr('name');
                
                $('input[name="' + radioName + '"]').each(function()
                {
                    var myImg = $(this).next('img');
                    
                    myImg.removeClass(options.imgItemCheckedClass);
                    if ($(this).prop('checked'))
                    {
                        myImg.addClass(options.imgItemCheckedClass);
                    }
                });
            }
        };
        return this.each(function()
        {
            $(this)
                .hide()
                .after('<img src="' + $(this).data('image') + '" alt="radio image" />')
            ;

            var img = $(this).next('img');
            img.addClass(options.imgItemClass);

            if (options.hideLabel)
            {
                $('label[for=' + $(this).attr('id') + ']').hide();
            }
            
            if ($(this).prop('checked'))
            {
                img.addClass(options.imgItemCheckedClass);
            }
            
            img.on('click', function(e)
            {
                $(this).prev('input[type="radio"]').attr('checked', 'checked');
                methods.syncClassChecked($(this));
            });
        });
    }
})(jQuery);
