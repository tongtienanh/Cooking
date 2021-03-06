import '../../../../../../resources/assets/js/components/course';

const review = {
    init() {
        this.dropdownRegion();
        this.owlCarouselbanner();
        this.owlCarouselcollection();
        // this.dropdownSearch();
        this.tabs();
        this.rating();
        this.seeMore();
    },
    dropdownRegion() {
        $('#dropdownRegion').click(function () {
            $('.dropdown-region').show()
            $(document).mouseup(function (e) {

                var container = $(".dropdown-region");

                if (!container.is(e.target) && container.has(e.target).length === 0) {

                    container.hide();

                }
            });
        })
    },
    owlCarouselbanner() {
        $('#banner').owlCarousel({
            loop: true,
            margin: 10,
            pagination: false,
            nav: false,
            lazyLoad: true,
            navText: ['', ''],
            autoplay: true,
            dots:false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    },
    owlCarouselcollection() {
        $('#owl-collection').owlCarousel({
            loop: true,
            margin: 16,
            nav: true,
            autoPlay: true,
            lazyLoad: true,
            dots: false,
            pagination: false,
            navigation: false,
            responsive: {
                0: {
                    items: 1.5,
                    navigation: false,
                },
                600: {
                    items: 1.5,
                    nav: false,
                    navigation: false,
                },
                1000: {
                    items: 3
                }
            }
        })
    },
    // dropdownSearch(){
    //     $('#dropdownSearch').click(function () {
    //         $('.dropdown-search').show()
    //         $(document).mouseup(function (e) {
    //
    //             var container = $(".dropdown-search");
    //
    //             if (!container.is(e.target) && container.has(e.target).length === 0) {
    //
    //                 container.hide();
    //
    //             }
    //         });
    //     })
    //
    // }
    tabs() {
        $('.hover').click(function () {
            $('.hover').removeClass('active')
            $(this).addClass('active')
            var index = $(this).index();
            $('.list-item').hide()
            $('.list-item').eq(index).show();
        })

    },
    rating() {
        $('.rating i').click(function (e) {
            e.stopPropagation();
            if ($(this).hasClass('heart-active')) {

                $(this).removeClass('heart-active');
                var old = $(this).parent('.rating').find('.number-count').text()
                $(this).parent('.rating').find('.number-count').text(parseInt(old) - 1)
            } else {
                $(this).addClass('heart-active');
                var old = $(this).parent('.rating').find('.number-count').text()
                $(this).parent('.rating').find('.number-count').text(parseInt(old) + 1)
            }
        });

    },
    seeMore() {
        $('.btn').click(function () {
            $('.list-item').append('<div style="display: flex; margin-left: -15px;">\n' +
                '    <div class="" style="box-sizing: border-box; background-clip: padding-box; width: 33%; border-width: 0px 0px 0px 15px; border-style: solid; border-color: transparent; border-image: initial;">\n' +
                '            <div class="card_rating">\n' +
                '                <div id="" class="review-item">\n' +
                '                    <div class="img-wrapper">\n' +
                '                        <img\n' +
                '                            alt=""\n' +
                '                            title="L??? ?????i v?? qu??n cua l???i th??ch k??u b??. T?????ng kh??ng ngon ai ng??? ngon xu???t s???c !!!!"\n' +
                '                            src="https://static.riviu.co/480/image/2021/02/24/284839e93da80f8913200d570892dccc.jpeg" class="review-avatar" id="" style="object-fit: cover;"> <!---->\n' +
                '                        <div class="number-index d-flex flex-column">\n' +
                '                            <div class="bookmark mt-3">\n' +
                '                                <i class="fa fa-bookmark-o" aria-hidden="true"></i>\n' +
                '                            </div>\n' +
                '                            <a href="/la-doi-vo-quan-cua-lai-thich-keu-bo-tuong-khong-ngon-ai-ngo-ngon-xuat-sac" class="link-body"><span class="body">Tui d??? ?? m???i ng?????i, th??ch l??m ng?????c ?????i v???y m???i ch???u ???????? R??? t???i b???n v?? qu??n CUA C???M Garden, nh??ng l???i order b?? n?? ??n ???? Tuy l?? g???i sai tr??i nh??ng m?? ph???i c??ng nh???n qu??n chuy??n c??c m??n cua bao ??n, ?????c th???t th??? n??y m?? l???i c?? menu c??c m??n b?? ngon nh???c nh???i ??????????????????????????????????????Cua C???m G...</span></a>\n' +
                '                        </div>\n' +
                '                        <div class="clearfix"></div>\n' +
                '                    </div>\n' +
                '                    <div class="box-info">\n' +
                '                        <a href="/la-doi-vo-quan-cua-lai-thich-keu-bo-tuong-khong-ngon-ai-ngo-ngon-xuat-sac"\n' +
                '                           class=""\n' +
                '                           title="L??? ?????i v?? qu??n cua l???i th??ch k??u b??. T?????ng kh??ng ngon ai ng??? ngon xu???t s???c !!!!">\n' +
                '                            <h4 class="title mb-2 ">L??? ?????i v?? qu??n cua l???i th??ch k??u b??. T?????ng kh??ng ngon ai ng??? ngon xu???t s???c !!!!</h4>\n' +
                '                        </a>\n' +
                '                        <a href="" class="author d-flex align-items-center float-left">\n' +
                '                            <img alt="trung cut" title="Tr???ng C??t" src="https://static.riviu.co/50/image/2020/12/21/582d8745b13153e8a8311e468a219d24_output.jpeg" class="rounded-circle mr-1" style="object-fit: cover;">\n' +
                '                            <h5 class="my-auto text-truncate" style="font-size: 14px;">Tr???ng C??t</h5>\n' +
                '                        </a>\n' +
                '                        <div class="rating d-flex align-conent-center float-right hover hover-ic"><i class="fa fa-heart-o" aria-hidden="true"></i>\n' +
                '                            <span class="my-auto">35</span>\n' +
                '                        </div>\n' +
                '                        <div class="clearfix"></div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '    </div>\n' +
                '    <div class="" style="box-sizing: border-box; background-clip: padding-box; width: 33%; border-width: 0px 0px 0px 15px; border-style: solid; border-color: transparent; border-image: initial;">\n' +
                '            <div class="card_rating">\n' +
                '                <div id="" class="review-item">\n' +
                '                    <div class="img-wrapper">\n' +
                '                        <img alt="" title="BBq q4 ngon b??? r???" src="https://static.riviu.co/480/image/2021/02/24/8500f03a7209ac1eb253cf54e736d834.jpeg" class="review-avatar" id="" style="object-fit: cover;"> <!---->\n' +
                '                        <div class="number-index d-flex flex-column">\n' +
                '                            <div class="bookmark mt-3"><i class="fa fa-bookmark-o" aria-hidden="true"></i></div>\n' +
                '                            <a href="/bbq-q4-ngon-bo-re" class="link-body"><span class="body">Qu??n be b?? xinh xinh trong h???m , theo phong c??ch h??n nh???t . M??nh lu??n lu??n ch??? c?? m???t set test khi ??n bbq th , bcb bcg dzu heo , l???n n??y m??nh th???y c?? da heo l??? n??n k??u th??? . G???i th??m soup kim chi ??cn??m n???m r???t ok nha . N?????c ch???m v???a mi???ng , kh?? ngon ?? . Ph???c v??? thang ??i???m 10 nha ...</span></a>\n' +
                '                        </div>\n' +
                '                        <div class="clearfix"></div>\n' +
                '                    </div>\n' +
                '                    <div class="box-info">\n' +
                '                        <a href="/bbq-q4-ngon-bo-re" class="" title="BBq q4 ngon b??? r???">\n' +
                '                            <h4 class="title mb-2 ">BBq q4 ngon b??? r???</h4>\n' +
                '                        </a>\n' +
                '                        <a href="/pnhphuc275" class="author d-flex align-items-center float-left">\n' +
                '                            <img alt="phuc hoang" title="Ph??c Ho??ng"\n' +
                '                                 src="https://static.riviu.co/50/image/2020/12/01/fe46ce7cd5791af3d2c8e271cd1a7422.jpeg" class="rounded-circle mr-1" style="object-fit: cover;">\n' +
                '                            <h5 class="my-auto text-truncate" style="font-size: 14px;">Ph??c Ho??ng</h5>\n' +
                '                        </a>\n' +
                '                        <div class="rating d-flex align-conent-center float-right hover hover-ic">\n' +
                '                            <i class="fa fa-heart-o" aria-hidden="true"></i>\n' +
                '                            <span class="my-auto">1</span>\n' +
                '                        </div>\n' +
                '                        <div class="clearfix"></div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '    </div>\n' +
                '    <div class="" style="box-sizing: border-box; background-clip: padding-box; width: 33%; border-width: 0px 0px 0px 15px; border-style: solid; border-color: transparent; border-image: initial;">\n' +
                '            <div class="card_rating">\n' +
                '                <div id="" class="review-item">\n' +
                '                    <div class="img-wrapper">\n' +
                '                        <img alt="pho kho gia lai - hoa po lang " title="Ph??? kh?? Gia Lai - Hoa P?? Lang " src="https://static.riviu.co/480/image/2021/02/24/1cdea5fffc65f9b85c625f2ede919ac1.jpeg" class="review-avatar" id="" style="object-fit: cover;"> <!---->\n' +
                '                        <div class="number-index d-flex flex-column">\n' +
                '                            <div class="bookmark mt-3">\n' +
                '                                <i class="fa fa-bookmark-o" aria-hidden="true"></i></div>\n' +
                '                            <a href="/pho-kho-gia-lai-hoa-po-lang" class="link-body"><span class="body">Ng??n ph??? truy???n th???ng th?? chuy???n sang ph??? kh?? n??, l??u r???i m???i gh?? mua l???i m??n n??y. Nh?? c??u vi???t tr??n b???ng hi???u trong qu??n "Hoa L?? Lang - M???t ch??t g?? ????? nh???" ????, m??i v??? v???n nh?? h???i tr?????c ???? t???ng ??n t???i qu??n.\n' +
                '                        M??nh mua ph??? kh?? t??i, n???m v???i gi?? l?? 47k (???? bao g???m ti???n h???p) qu??n ?????c...</span></a>\n' +
                '                        </div>\n' +
                '                        <div class="clearfix"></div>\n' +
                '                    </div>\n' +
                '                    <div class="box-info">\n' +
                '                        <a href="/pho-kho-gia-lai-hoa-po-lang" class="" title="Ph??? kh?? Gia Lai - Hoa P?? Lang ">\n' +
                '                            <h4 class="title mb-2 ">Ph??? kh?? Gia Lai - Hoa P?? Lang </h4>\n' +
                '                        </a>\n' +
                '                        <a href="/heavenly" class="author d-flex align-items-center float-left">\n' +
                '                            <img alt="heaven ly" title="Heaven Ly"\n' +
                '                                 src="https://static.riviu.co/50/image/2021/02/07/8d5399aa95182b21d88904b518e51fb5.jpeg"\n' +
                '                                 class="rounded-circle mr-1" style="object-fit: cover;">\n' +
                '                            <h5 class="my-auto text-truncate" style="font-size: 14px;">Heaven Ly</h5>\n' +
                '                        </a>\n' +
                '                        <div class="rating d-flex align-conent-center float-right hover hover-ic"><i class="fa fa-heart-o" aria-hidden="true"></i>\n' +
                '                            <span class="my-auto">45\n' +
                '                        </span>\n' +
                '                        </div>\n' +
                '                        <div class="clearfix"></div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '    </div>\n' +
                '</div>')
        })
    }
}
$(function () {
    // Passive event listeners
    jQuery.event.special.touchstart = {
        setup: function( _, ns, handle ) {
            this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
        }
    };
    jQuery.event.special.touchmove = {
        setup: function( _, ns, handle ) {
            this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
        }
    };
    let bLazy = new Blazy({});
    review.init();
})
