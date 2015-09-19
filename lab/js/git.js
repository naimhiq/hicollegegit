var GIT = GIT || {};

(function ($, window, document, GIT, undefined) {
    GIT.buildTree = (function () {
        function _buildTree() {
            var $document = $(document),
                commandSelector = '.on-tree > div';
                context = this;

            context.init = function() {
                // initialization here


                onHoverCommits();
                scrollingToDivs();
            };

            var onHoverCommits = function() {
                // codeHere'
               $(commandSelector).mouseover(function(){
                   $(this).find('.flyOut').show();
               }).mouseout(function(){
                   $(this).find('.flyOut').hide();

               });
            };

            var scrollingToDivs = function(){

                $('.on-tree > div a[href^="#"]').on('click',function (e) {
                    e.preventDefault();
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html, body').animate({
                            'scrollTop': target.offset().top
                        }, 1100);
                        return false;
                    }

                });
            };


            return context;
        }
        return new _buildTree();
    }());
}(jQuery,this, this.document, GIT));



$(function(){

     GIT.buildTree.init();








}());