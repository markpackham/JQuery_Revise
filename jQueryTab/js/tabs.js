$('.tabs > ul li a').on('click', function () {
        /* We need to work our way down the tree to get what we want */
        var that = $(this),
            tabs = that.parent().parent().parent(),
            /*We only want value after the # in the href */
            target = $.trim(that.attr('href').substring(1)),
            items = tabs.find('ul li');

        /*Change background when clicking on new tag, so remove previous selected and place selected class on new clicked on tab */
        items.removeClass('selected').find('a[href="#"' + target + '"]').parent().addClass('selected');
        tabs.find('.tab').show();
        tabs.find('.tab:not(".' + target + '")').hide();
    }
);