<!DOCTYPE html>
<html lang="en">

<head>
  <title>Septian Puji - Portofolio</title>
  <link rel="icon" href="assets/images/icon.png" type="image/x-icon">
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />

  <!-- Bootstrap core CSS -->
  <link href="js/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

  <!-- Additional CSS Files -->
  <link rel="stylesheet" href="assets/css/fontawesome.css" />
  <link rel="stylesheet" href="assets/css/templatemo-style.css" />
  <link rel="stylesheet" href="assets/css/owl.css" />
  <link rel="stylesheet" href="assets/css/lightbox.css" />
  <link rel="stylesheet" href="assets/css/timeline.css" />

  <!-- Language JSON -->
  <?php include 'lang_config.php';?>
</head>

<body>
  <div id="page-wraper">
    <!-- Sidebar Menu -->
    <div class="responsive-nav">
      <i class="fa fa-bars" id="menu-toggle"></i>
      <div id="menu" class="menu">
        <i class="fa fa-times" id="menu-close"></i>
        <div class="container">
          <div class="social-network">
            <ul class="soial-icons">
              <li>
                <a href="?lang=id">
                  <b>ID</b>
                </a>
              </li>
              <li>
                <a href="?lang=en">
                  <b>EN</b>
                </a>
              </li>
            </ul>
          </div>
          <div class="image" style="margin-top : 20px;">
            <img src="assets/images/author-image.jpg" alt="Profile Picture" />
          </div>
          <div class="author-content">
            <h4>Septian Puji</h4>
            <span>Web/Mobile Developer</span>
          </div>
          <div class="social-network">
            <ul class="soial-icons">
              <li>
                <a href="https://www.facebook.com/septianpujisaputro/" target="_blank" title="Facebook">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/septianpujipuji" target="_blank" title="Twitter">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/septian-puji-b93885135/" target="_blank" title="Linkedin">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="mailto:septianpujipuji@gmail.com" title="Email">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/septianpujis" target="_blank" title="Github">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <nav class="main-nav" role="navigation">
            <ul class="main-menu">
              <li><a href="#section1">
                  <?php echo $text['title_1']?>
                </a></li>
              <li><a href="#section2">
                  <?php echo $text['title_2']?>
                </a></li>
              <li><a href="#section3">
                  <?php echo $text['title_3']?>
                </a></li>
              <li><a href="#section4">
                  <?php echo $text['title_4']?>
                </a></li>
            </ul>
          </nav>
          <div class="copyright-text">
            <p>Copyright 2019 Reflux Design</p>
          </div>
        </div>
      </div>
    </div>

    <section class="section about-me" data-section="section1">
      <div class="container">
        <div class="section-heading">
          <h2 style="padding-bottom: 15px;">
            <?php echo $text['title_1']?>
          </h2>
          <div class="line-dec"></div>
          <h5 style="padding-top: 15px;">
            Web and Mobile Full Stack Developer.
          </h5>
          <span style="padding-bottom: 35px; padding-top:20px">
            <?php echo $text['about']; ?>
          </span>
        </div>
        <div class="left-image-post">
          <div class="row">
            <div class="col-md-6">
              <div class="left-image">
                <img src="assets/images/left-image.jpg" alt="Evotech Team" />
                <!-- Gambar ganti foto evotech aja, harusnya gapapa-->
              </div>
            </div>
            <div class="col-md-6">
              <div class="right-text">
                <p style="font-size:1.5em; margin:0px;">
                  <b>
                    <? echo $text['pengalaman_kerja_judul']?>
                  </b>
                </p>
                <p>
                  <?php echo $text['pengalaman_kerja_tanggal']?>
                </p>
                <p>
                  <?php echo $text['pengalaman_kerja_text']?>
                </p>
                <div class="white-button">
                  <a href="https://evotech.co.id/" target="_blank">Read More about Evotech</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-image-post">
          <div class="row">
            <div class="col-md-6">
              <div class="left-text">
                <p style="font-size:1.5em; margin:0px;">
                  <b>
                    <?php echo $text['sarjana_judul']?>
                  </b>
                </p>
                <p>
                  <?php echo $text['sarjana_tanggal']?>
                </p>
                <p>
                  <?php echo $text['sarjana_text']?>
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="right-image">
                <img src="assets/images/right-image.jpg" alt="" />
                <!-- gambar pake gambar wisuda, ada di hp-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" data-section="section5"
      style="padding-bottom: 30px; height: auto; margin: 30px 0px 10px 0px; ">
      <div class="container" style="height : 300px; ">
        <div class="section-heading" style="overflow-x : scroll; height : 100%; ">
          <ul class="timeline">
            <li data-year="<?php echo $text['timeline_year_1']?>" data-text="<?php echo $text['timeline_info_1']?>">
            </li>
            <li data-year="<?php echo $text['timeline_year_2']?>" data-text="<?php echo $text['timeline_info_2']?>">
            </li>
            <li data-year="<?php echo $text['timeline_year_3']?>" data-text="<?php echo $text['timeline_info_3']?>">
            </li>
            <li data-year="<?php echo $text['timeline_year_4']?>" data-text="<?php echo $text['timeline_info_4']?>">
            </li>
            <li data-year="<?php echo $text['timeline_year_5']?>" data-text="<?php echo $text['timeline_info_5']?>">
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section my-services" data-section="section2">
      <div class="container">
        <div class="section-heading">
          <h2 style="padding-bottom: 15px;">
            <?php echo $text['title_2']?>
          </h2>
          <div class="line-dec"></div>
          <h5 style="padding-top: 15px;"> </h5>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="service-item">
              <div class="first-service-icon service-icon"></div>
              <h4>
                <?php echo $text['good_1_title']?>
              </h4>
              <p>
                <?php echo $text['good_1_text']?>
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="service-item">
              <div class="second-service-icon service-icon"></div>
              <h4>
                <?php echo $text['good_2_title']?>
              </h4>
            </div>
          </div>
          <div class="col-md-6">
            <div class="service-item">
              <div class="third-service-icon service-icon"></div>
              <h4>
                <?php echo $text['good_3_title']?>
              </h4>
            </div>
          </div>
          <div class="col-md-6">
            <div class="service-item">
              <div class="fourth-service-icon service-icon"></div>
              <h4>
                <?php echo $text['good_4_title']?>
              </h4>
              <p>
                <?php echo $text['good_4_text']?>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section my-work" data-section="section3">
      <div class="container">
        <div class="section-heading">
          <h2 style="padding-bottom: 15px;">
            <?php echo $text['title_3']?>
          </h2>
          <div class="line-dec"></div>
          <span style="padding-top: 15px;">
            <?php echo $text['project_subtitle']?>
          </span>
        </div>
        <div class="row">
          <div class="isotope-wrapper">
            <form class="isotope-toolbar">
              <label>
                <input type="radio" data-type="*" checked="" name="isotope-filter" checked />
                <span>all</span>
              </label>
              <label>
                <input type="radio" data-type="web" name="isotope-filter" />
                <span>Web</span>
              </label>
              <label>
                <input type="radio" data-type="mobile" name="isotope-filter" />
                <span>Mobile</span>
              </label>
            </form>
            <div class="isotope-box">
              <div class="isotope-item" data-type="web">
                <figure class="snip1321">
                  <img src="assets/images/portofolio-01-T.PNG" alt="Project-01-Sipusdi" />
                  <figcaption>
                    <a href="assets/images/portfolio-01.gif" data-lightbox="image-1"
                      data-title="<?php echo $text['project_1_text']?>">
                      <i class="fa fa-search"></i>
                    </a>
                    <h4>Outsystems</h4>
                    <span>Low-Code Development Platform</span>
                  </figcaption>
                </figure>
              </div>

              <div class="isotope-item" data-type="web">
                <figure class="snip1321">
                  <img src="assets/images/portfolio-02.jpg" alt="sq-sample26" />
                  <figcaption>
                    <a href="https://i.imgur.com/zrsGOHF.gif" data-lightbox="image-2"
                      data-title="<?php echo $text['project_2_text']?>" data-alt="Project 02">
                      <i class="fa fa-search"></i>
                    </a>
                    <h4>Laravel 8</h4>
                    <span>PHP Web Framework</span>
                  </figcaption>
                </figure>
              </div>

              <div class="isotope-item" data-type="web">
                <figure class="snip1321">
                  <img src="assets/images/portfolio-03.jpg" alt="sq-sample26" />
                  <figcaption>
                    <a href="assets/images/portfolio-03.jpg" data-lightbox="image-3" data-title="<?php echo $text['project_3_text']?>">
                      <i class="fa fa-search"></i>
                    </a>
                    <h4>Golang</h4>
                    <span>Portofolio Mails Admin Panel</span>
                  </figcaption>
                </figure>
              </div>

              <div class="isotope-item" data-type="web">
                <figure class="snip1321">
                  <img src="assets/images/portfolio-04.jpg" alt="sq-sample26" />
                  <figcaption>
                    <a href="assets/images/portfolio-04.jpg" data-lightbox="image-4" data-title="Caption">
                      <i class="fa fa-search"></i>
                    </a>
                    <h4>Project Under Development</h4>
                    <!-- <span>customize anything</span> -->
                  </figcaption>
                </figure>
              </div>

              <div class="isotope-item" data-type="mobile">
                <figure class="snip1321">
                  <img src="assets/images/portfolio-05.jpg" alt="sq-sample26" />
                  <figcaption>
                    <a href="assets/images/portfolio-05.jpg" data-lightbox="image-5" data-title="Caption">
                      <i class="fa fa-search"></i>
                    </a>
                    <h4>Project Under Development</h4>
                    <!-- <span>customize anything</span> -->
                  </figcaption>
                </figure>
              </div>

              <div class="isotope-item" data-type="mobile">
                <figure class="snip1321">
                  <img src="assets/images/portfolio-06.jpg" alt="sq-sample26" />
                  <figcaption>
                    <a href="assets/images/portfolio-06.jpg" data-lightbox="image-6" data-title="Caption">
                      <i class="fa fa-search"></i>
                    </a>
                    <h4>Project Under Development</h4>
                    <!-- <span>customize anything</span> -->
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section contact-me" data-section="section4">
      <div class="container">
        <div class="section-heading">
          <h2 style="padding-bottom: 15px;">
            <?php echo $text['title_4']?>
          </h2>
          <div class="line-dec"></div>
          <span style="padding-top: 15px;">
            <?php echo $text['contact_me']?>
          </span>
        </div>
        <div class="row">
          <div class="right-content">
            <div class="container">
              <form id="contact" action="Message_Send.php" method="post">
                <input hidden disabled value="ID" name="lang" id="lang">
                <div class="row">
                  <div class="col-md-6">
                    <fieldset>
                      <input name="name" type="text" class="form-control" id="name" placeholder="Your name..."
                        required="" maxlength="50" />
                    </fieldset>
                  </div>
                  <div class="col-md-6">
                    <fieldset>
                      <input name="email" type="email" class="form-control" id="email" placeholder="Your email..."
                        required="" maxlength="250" />
                    </fieldset>
                  </div>
                  <div class="col-md-12">
                    <fieldset>
                      <input name="subject" type="text" class="form-control" id="subject" placeholder="Subject..."
                        required="" maxlength="500" />
                    </fieldset>
                  </div>
                  <div class="col-md-12">
                    <fieldset>
                      <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your message..."
                        required="" maxlength="5000"></textarea>
                    </fieldset>
                  </div>
                  <div class="col-md-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="button">
                        <?php echo $text['btn_send']?>
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

  <!-- Scripts -->
  <!-- Bootstrap core JavaScript -->
  <script src="js/jquery/jquery.min.js"></script>
  <script src="js/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/isotope.min.js"></script>
  <script src="assets/js/owl-carousel.js"></script>
  <script src="assets/js/lightbox.js"></script>
  <script src="assets/js/custom.js"></script>
  <script>
    $(".main-menu li:first").addClass("active");

    var showSection = function showSection(section, isAnimate) {
      var direction = section.replace(/#/, ""),
        reqSection = $(".section").filter(
          '[data-section="' + direction + '"]'
        ),
        reqSectionPos = reqSection.offset().top - 0;

      if (isAnimate) {
        $("body, html").animate(
          {
            scrollTop: reqSectionPos
          },
          800
        );
      } else {
        $("body, html").scrollTop(reqSectionPos);
      }
    };

    var checkSection = function checkSection() {
      $(".section").each(function () {
        var $this = $(this),
          topEdge = $this.offset().top - 80,
          bottomEdge = topEdge + $this.height(),
          wScroll = $(window).scrollTop();
        if (topEdge < wScroll && bottomEdge > wScroll) {
          var currentId = $this.data("section"),
            reqLink = $("a").filter("[href*=\\#" + currentId + "]");
          reqLink
            .closest("li")
            .addClass("active")
            .siblings()
            .removeClass("active");
        }
      });
    };

    $(".main-menu").on("click", "a", function (e) {
      e.preventDefault();
      showSection($(this).attr("href"), true);
    });

    $(window).scroll(function () {
      checkSection();
    });
  </script>


</body>

</html>