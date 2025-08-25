'use strict';

/**
 * Carousel component
 */

/**
 * メインスライドのアクティブ設定
 * @param {object} slide - スライドオブジェクト
 */
let mainslideActiveSetting = (slide) => {
  slide.forEach((element) => {
    // リンク箇所を取得
    const links = element.getElementsByTagName('a');

    // アクティブなスライドのtabindexを0、aria-hiddenをfalseに変更
    if (element.classList.contains('swiper-slide-visible')) {
      for (let i = 0; i < links.length; i++) {
        links[i].setAttribute('tabindex', '0');
      }
      element.setAttribute('aria-hidden', 'false');
    } else {
      // 非アクティブなスライドはaria-hiddenをtrueに変更、リンクのtabindexは-1に変更
      for (let i = 0; i < links.length; i++) {
        links[i].setAttribute('tabindex', '-1');
      }
      element.setAttribute('aria-hidden', 'true');
    }
  });
};

/**
 * サムネイルスライドのアクティブ設定
 * @param {object} slide - スライドオブジェクト
 */
let thumbnailActiveSetting = (slide) => {
  slide.forEach((element) => {
    if (element.classList.contains('swiper-slide-thumb-active')) {
      element.children[0].setAttribute('aria-selected', 'true');
    } else {
      element.children[0].setAttribute('aria-selected', 'false');
    }
  });
};

/**
 * 文字列のtrue/falseをBooleanに変換
 * @param {string} str
 */
function parseStrToBoolean(str) {
  // 文字列を判定
  return str == 'true' ? true : false;
}

/**
 * サムネイルオプション
 *
 */
const setThumbOptions = (SPThumbView, PCThumbView) => ({
  slidesPerView: SPThumbView,
  spaceBetween: 6,
  allowTouchMove: true,
  mousewheel: true,
  breakpoints: {
    768: {
      slidesPerView: PCThumbView,
      spaceBetween: 8,
    },
  },
  a11y: { enabled: false },
});

/**
 * スライド初期設定
 */
// windowサイズ取得
let winWidth = window.outerWidth;

/**
 * スライド枚数に応じて設定を変更する
 */
const slideArea = document.querySelectorAll('.p-carousel'); // カルーセル本体

slideArea.forEach((el) => {
  const id = el.getAttribute('id');
  const targetSlide = document.getElementById(id);

  const mainSlide = targetSlide.querySelector('.p-carousel__items'); // メインスライド
  const thumbSlide = targetSlide.querySelector('.p-carousel__thumbnails'); // サムネイルスライド
  const controlButton = targetSlide.querySelector('.c-carousel-button-control'); // コントロールボタン

  // メインスライドに設定されているスライドの数
  const mainSlideItems = mainSlide.querySelectorAll('.swiper-slide').length;

  // スライドを自動再生するか
  const isAutoplay = parseStrToBoolean(el.getAttribute('data-slideautoplay'));

  let autoplaySetting; // 自動再生時の設定
  let PCThumbView; // PC表示時のサムネイルの表示枚数。スライド枚数により可変
  let SPThumbView; // SP表示時のサムネイルの表示枚数。スライド枚数により可変。
  let loopSetting; // ループ再生の有無
  let thumb_options = {}; // サムネイルのオプション

  // スライドが1枚以上の場合
  if (mainSlideItems > 1) {
    // サムネイル分の高さを設定
    // el.classList.add('p-carousel--has-thumbnail');

    // SP表示では全てのサムネイルを表示
    SPThumbView = mainSlideItems;

    // PC表示ではスライドが5枚以下の場合のは全てのサムネイルを表示、5枚の場合はサムネイルの5枚目は見切れ表示にする
    if (mainSlideItems < 5) {
      PCThumbView = mainSlideItems;
    } else {
      PCThumbView = 4.2;
    }

    // サムネイルオプションを設定
    thumb_options = setThumbOptions(SPThumbView, PCThumbView);

    /*
     * メインスライド・自動再生の有無による出しわけ
     * 再生・停止ボタンの設置
     * オプション設定
     */
    // 自動再生ありの場合
    if (isAutoplay) {
      controlButton.style.display = 'block';
      controlButton.querySelector('.c-carousel-button-play').style.display = 'none';
      targetSlide.querySelector('.p-carousel__thumbnailArea').classList.add('autoplay');

      // サムネイルオプション
      thumb_options = setThumbOptions(SPThumbView, PCThumbView);

      // メインスライドの再生設定
      autoplaySetting = {
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      };
    } else {
      // 自動再生なしの場合
      controlButton.style.display = 'none';
      targetSlide.querySelector('.p-carousel__thumbnailArea').classList.remove('autoplay');

      // サムネイルオプション
      thumb_options = setThumbOptions(SPThumbView, PCThumbView);

      // メインスライドは自動再生しない
      autoplaySetting = false;
    }

    // メインスライドループあり
    loopSetting = true;
  } else {
    // メインスライドが1枚の場合
    // サムネイルを表示させない（読み上げ対象からも除外）
    thumbSlide.parentNode.style.display = 'none';

    // コントロールを表示させない
    controlButton.style.display = 'none';

    // メインスライド設定
    loopSetting = false; // ループなし
    autoplaySetting = false; // 自動再生なし
  }

  // Thumbnails
  const targetThumb = thumbSlide.querySelector('.swiper');
  const thumbnail = new Swiper(targetThumb, thumb_options);

  // Carousel
  let activeSlide;
  let isAutoplayOn;

  const carousel = new Swiper(mainSlide, {
    loop: loopSetting,
    loopAdditionalSlides: 1,
    watchSlidesProgress: true,
    autoHeight: true,
    autoplay: autoplaySetting,
    thumbs: {
      swiper: thumbnail,
    },
    navigation: {
      nextEl: `#${id} .c-carousel-control-button--next`,
      prevEl: `#${id} .c-carousel-control-button--prev`,
    },
    a11y: {
      slideLabelMessage: '{{index}} of {{slidesLength}}',
      nextSlideMessage: '次のスライドに移動する',
      prevSlideMessage: '1つ前のスライドに移動する',
      slideRole: 'tabpanel',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    on: {
      afterInit: function () {
        // コンテンツ幅を設定
        const slideWidth = this.width;
        el.style.width = slideWidth + 'px';

        // aria-live属性を assertive -> polite に変更
        const a11yHelper = targetSlide.querySelector('.swiper-notification');
        a11yHelper.setAttribute('aria-live', 'off');

        // メインスライドのアクティブ設定
        const mainSlides = this.slides;
        mainslideActiveSetting(mainSlides);

        // サムネイルのアクティブ設定
        const thumbSlides = thumbnail.slides;
        thumbnailActiveSetting(thumbSlides);

        // サムネイル分の高さを確保
        const thumbHeight = thumbSlide.parentNode.offsetHeight;
        el.style.paddingBottom = `${thumbHeight}px`;

        // 自動再生ありの場合：ボタン位置の設定
        if (autoplaySetting) {
          const hoge = (thumbHeight - 34) / 2;
          controlButton.style.bottom = `${hoge}px`;
        }

        // メインスライドでループ表示用に複製したスライドのIDを変更
        const duplicateSlides = el.querySelectorAll('.swiper-slide.swiper-slide-duplicate');
        duplicateSlides.forEach((slide) => {
          const slideID = slide.getAttribute('id');
          slide.setAttribute('id', `${slideID}-duplicate`);
        });

        // サムネイルにdata属性「data-thumb-index」を設定（キーボード操作で使用）
        thumbSlides.forEach((element, index) => {
          const thumb = element.firstElementChild;
          const num = index;
          thumb.setAttribute('data-thumb-index', num);
        });

        if (typeof autoplaySetting === 'object') {
          isAutoplayOn = true;
        } else {
          isAutoplayOn = false;
        }
      },
      slideChange: function () {
        // 何番目のスライドが表示されるか
        const index = this.realIndex + 1;

        /**
         * スライド制御
         */
        const mainSlides = this.slides;
        const thumbSlides = thumbnail.slides;

        setTimeout(function () {
          // メインスライドのアクティブ設定
          mainslideActiveSetting(mainSlides);

          // サムネイルのアクティブ設定
          thumbnailActiveSetting(thumbSlides);

          // LiveRegionのテキストを変更する
          targetSlide.querySelector('.swiper-notification').textContent =
            '現在' + index + '枚目のスライドを表示しています。';
        }, 0);

        /**
         * 表示
         */
        // もしもPCレイアウトかつ5枚目のスライドだったら、スライド変更時に全体を左にずらす
        if (winWidth > 767) {
          // サムネイルスライドの幅を取得
          const thumbSlideWidth = thumbSlides[0].clientWidth;
          // はみ出して表示する分の幅（サムネイルスライドの20%）を算出
          const cutoffWidth = Math.round((thumbSlideWidth * 20) / 100);
          // 動かす幅を設定（サムネイルスライド幅 - はみ出し分 + スライドの余白）
          const movingWidth = thumbSlideWidth - cutoffWidth + 8;

          if (index == 5) {
            thumbnail.setTranslate(-movingWidth);
          } else {
            thumbnail.setTranslate(0);
          }
        }
      },
      slideChangeTransitionStart: function () {
        // aria-busy を true に変更
        this.wrapperEl.setAttribute('aria-busy', 'true');
      },
      slideChangeTransitionEnd: function () {
        // aria-busy を false に変更
        this.wrapperEl.setAttribute('aria-busy', 'false');
      },
    },
  });

  /**
   * キーボード制御
   * サムネイル上でエンターキーを押した場合、そのスライドに移動
   */
  thumbnail.$el.on('keydown', (event) => {
    if (event.keyCode !== 13 && event.keyCode !== 32) return;

    const selected = event.target;
    const slideIndex = selected.getAttribute('data-thumb-index');

    if (!slideIndex) return;

    thumbnail.slideToLoop(slideIndex);
    carousel.slideToLoop(slideIndex);
  });

  /**
   * 再生・一時停止ボタン制御
   */
  controlButton.addEventListener('click', function (event) {
    const isPause = this.classList.contains('is-pause');
    if (isPause) {
      this.classList.remove('is-pause');
      controlButton.querySelector('.c-carousel-button-pause').style.display = 'block';
      controlButton.querySelector('.c-carousel-button-play').style.display = 'none';
      this.setAttribute('aria-label', 'スライドを停止');
      isAutoplayOn = true;
      carousel.autoplay.start();
    } else {
      this.classList.add('is-pause');
      controlButton.querySelector('.c-carousel-button-pause').style.display = 'none';
      controlButton.querySelector('.c-carousel-button-play').style.display = 'block';
      this.setAttribute('aria-label', 'スライドを再生');
      isAutoplayOn = false;
      carousel.autoplay.stop();
    }
  });

  /**
   * 自動再生時、スライド内にフォーカスがある場合はスライドを止める
   */
  const autoplayStop = (isAutoplay, isAutoplayOn) => {
    if (isAutoplay && isAutoplayOn) {
      const a11yHelper = targetSlide.querySelector('.swiper-notification');
      a11yHelper.setAttribute('aria-live', 'polite');
      carousel.autoplay.stop();
    }
  };

  const autoplayStart = (isAutoplay, isAutoplayOn) => {
    if (isAutoplay && isAutoplayOn) {
      const a11yHelper = targetSlide.querySelector('.swiper-notification');
      a11yHelper.setAttribute('aria-live', 'off');
      carousel.autoplay.start();
    }
  };

  // サムネイル
  const hoge = targetSlide.querySelector('[role=tablist]');

  //mouse
  hoge.addEventListener('mouseover', (event) => {
    autoplayStop(isAutoplay, isAutoplayOn);
  });

  hoge.addEventListener('mouseout', (event) => {
    autoplayStart(isAutoplay, isAutoplayOn);
  });

  // focus
  hoge.addEventListener('focusin', (event) => {
    autoplayStop(isAutoplay, isAutoplayOn);
  });

  hoge.addEventListener('focusout', (event) => {
    autoplayStart(isAutoplay, isAutoplayOn);
  });

  // メインスライド
  const mainSlideCtrl = targetSlide.querySelector('.js-mainslide-track');

  // mouse
  mainSlideCtrl.addEventListener('mouseover', (event) => {
    autoplayStop(isAutoplay, isAutoplayOn);
  });

  mainSlideCtrl.addEventListener('mouseout', (event) => {
    autoplayStart(isAutoplay, isAutoplayOn);
  });

  // focus
  mainSlideCtrl.addEventListener('focusin', (event) => {
    autoplayStop(isAutoplay, isAutoplayOn);
  });

  mainSlideCtrl.addEventListener('focusout', (event) => {
    autoplayStart(isAutoplay, isAutoplayOn);
  });
});
