$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});


{/* <div class="container-lg">
<div class="row row-cols-1 row-cols-md-3 g-2">
  <!-- 1 -->
  <div class="col ml-md-auto">
    <div id="carouselExampleControls1" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a class="pb-sm-2" href="" data-toggle="modal" data-target="#c1"><img src="./images/c1.png" alt="" class="img-fluid"></a>
        </div>
        <div class="carousel-item">
          <a class="pb-sm-2" href="" data-toggle="modal" data-target="#c2"><img src="./images/c2.png" alt="" class="img-fluid"></a>
        </div>
        <div class="carousel-item">
          <a class="pb-sm-2" href="" data-toggle="modal" data-target="#c3"><img src="./images/c3.png" alt="" class="img-fluid"></a>
        </div>
        <!-- <div class="carousel-item">
          <a class="pb-sm-2" href="" data-toggle="modal" data-target="#c4"><img src="./images/c4.jpg" alt="" class="img-fluid"></a>
        </div>
        <div class="carousel-item">
          <a class="pb-sm-2" href="" data-toggle="modal" data-target="#c5"><img src="./images/c5.jpg" alt="" class="img-fluid"></a>
        </div>
        <div class="carousel-item">
          <a class="pb-sm-2" href="" data-toggle="modal" data-target="#c6"><img src="./images/c6.jpg" alt="" class="img-fluid"></a>
        </div>
        <div class="carousel-item">
          <a class="pb-sm-2" href="" data-toggle="modal" data-target="#c7"><img src="./images/c7.jpg" alt="" class="img-fluid"></a>
        </div> -->
      </div>

      <a class="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
        <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <!-- 2 -->
  <div class="col mr-md-auto">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <!-- <div class="carousel-item active">
          <a class="pb-sm-2" href="" data-toggle="modal" data-target="#c1"><img src="./images/c1.png" alt="" class="img-fluid"></a>
        </div>
        <div class="carousel-item">
          <a class="pb-sm-2" href="" data-toggle="modal" data-target="#c2"><img src="./images/c2.png" alt="" class="img-fluid"></a>
        </div>
        <div class="carousel-item">
          <a class="pb-sm-2" href="" data-toggle="modal" data-target="#c3"><img src="./images/c3.png" alt="" class="img-fluid"></a>
        </div> -->
        <div class="carousel-item active">
          <a class="pb-sm-2" href="" data-toggle="modal" data-target="#c4"><img src="./images/c4.jpg" alt="" class="img-fluid"></a>
        </div>
        <div class="carousel-item">
          <a class="pb-sm-2" href="" data-toggle="modal" data-target="#c5"><img src="./images/c5.jpg" alt="" class="img-fluid"></a>
        </div>
        <div class="carousel-item">
          <a class="pb-sm-2" href="" data-toggle="modal" data-target="#c6"><img src="./images/c6.jpg" alt="" class="img-fluid"></a>
        </div>
        <div class="carousel-item">
          <a class="pb-sm-2" href="" data-toggle="modal" data-target="#c7"><img src="./images/c7.jpg" alt="" class="img-fluid"></a>
        </div>
      </div>

      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</div>
</div>
<!--  --> */}