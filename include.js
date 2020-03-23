(function($) {
    $.fn.extend({
        include : function(src) {
            this.each(function() {
                var container = $(this);
                var pageSrc   = src;

                $.get(pageSrc, function(data) {
                    container.html(data);
                });
            });
        return this;
        }
    });

    $(document).ready(function() {
        $('.header').include('include/header.html');
        $('.footer').include('include/footer.html');
    });
})(jQuery);
