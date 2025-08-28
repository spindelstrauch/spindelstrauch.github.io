---
draft: false
title: 'アクセシビリティに配慮したカルーセルコンテンツの作成'
category:
  - コーディング
detail: '診療日情報を掲載するカレンダー'
thumbnail: '/images/projects/carousel/thumbnail.png'
role:
  - 'ヒアリング・要件整理'
  - 'コーディング（アクセシビリティ対応を含む）'
stylesheets:
  - '/css/projects/carousel/swiper-bundle.min.css'
  - '/css/projects/carousel/carousel.css'
  - '/css/projects/carousel/carousel-theme.css'
jsfiles:
  - '/js/projects/carousel/swiper-bundle.min.js'
  - '/js/projects/carousel/carousel.js'
---

## 実装例

<div>
  <h3 id="slide-manual">自動再生なしのスライド</h3>
  <div class="p-carousel" role="region" aria-labelledby="#slide-manual" id="carousel-sample01" data-slideautoplay="false">
    <!-- navigations -->
    <div class="p-carousel__nav">
      <!-- play / pause -->
      <button class="c-carousel-button-control" aria-controls="mainslide-track" id="carousel-control" aria-label="スライドを停止">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="c-carousel-button-play">
          <path
            d="M22.2594 15.4023L13.0462 10.0925C12.8352 9.95192 12.5539 9.95192 12.343 10.0925C12.132 10.233 11.9912 10.4442 11.9912 10.6902V21.31C11.9912 21.5563 12.1318 21.8023 12.343 21.9078C12.4484 21.9782 12.5892 22.0133 12.6947 22.0133C12.8002 22.0133 12.941 21.9782 13.0465 21.9078L22.2596 16.598C22.4706 16.4574 22.6114 16.2462 22.6114 16.0002C22.6111 15.7537 22.4704 15.5077 22.2594 15.4022L22.2594 15.4023Z"
            fill="#4D4D4D"
          />
        </svg>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="c-carousel-button-pause">
          <path
            d="M13.3332 9.77765C13.0975 9.77765 12.8713 9.8714 12.7046 10.0381C12.5381 10.2049 12.4443 10.431 12.4443 10.6667V21.3329C12.4443 21.6505 12.6138 21.9441 12.8888 22.1028C13.1637 22.2615 13.5026 22.2615 13.7776 22.1028C14.0528 21.9441 14.2222 21.6506 14.2222 21.3329V10.6667C14.2222 10.431 14.1285 10.2049 13.9617 10.0381C13.795 9.8714 13.5689 9.77765 13.3332 9.77765H13.3332Z"
            fill="#4D4D4D"
          />
          <path
            d="M18.6669 9.77765C18.4312 9.77765 18.2051 9.8714 18.0383 10.0381C17.8716 10.2049 17.7778 10.431 17.7778 10.6667V21.3329C17.7778 21.6505 17.9472 21.9441 18.2225 22.1028C18.4975 22.2615 18.8363 22.2615 19.1113 22.1028C19.3863 21.9441 19.5557 21.6506 19.5557 21.3329V10.6667C19.5557 10.431 19.462 10.2049 19.2955 10.0381C19.1287 9.8714 18.9026 9.77765 18.6669 9.77765H18.6669Z"
            fill="#4D4D4D"
          />
        </svg>
      </button>
      <!-- Thunbnails -->
      <div class="p-carousel__thumbnailArea">
        <div class="p-carousel__thumbnails">
          <div class="swiper" id="thumbnails-track">
            <ol class="swiper-wrapper" role="tablist" aria-label="表示するスライドを選択してください">
              <li class="swiper-slide" role="presentation">
                <button type="button" role="tab" aria-controls="carousel-item-1-1" class="p-carousel__thumbnail">
                  <span class="p-carousel__thumbnail-inner">
                    <span class="c-carousel__thumbnail-image"><img src="/images/projects/carousel/thumb-1.jpg" alt="" /></span>
                    <span class="c-carousel__thumbnail-heading">Slide1</span>
                    <span class="c-carousel__thumbnail-summary">UnsplashのJakob Owensが撮影した写真</span>
                  </span>
                </button>
              </li>
              <li class="swiper-slide" role="presentation">
                <button type="button" role="tab" aria-controls="carousel-item-1-2" class="p-carousel__thumbnail">
                  <span class="p-carousel__thumbnail-inner">
                    <span class="c-carousel__thumbnail-image"><img src="/images/projects/carousel/thumb-2.jpg" alt="" /></span>
                    <span class="c-carousel__thumbnail-heading">Slide2</span>
                    <span class="c-carousel__thumbnail-summary">Unsplashのzero takeが撮影した写真</span>
                  </span>
                </button>
              </li>
              <li class="swiper-slide" role="presentation">
                <button type="button" role="tab" aria-controls="carousel-item-1-3" class="p-carousel__thumbnail">
                  <span class="p-carousel__thumbnail-inner">
                    <span class="c-carousel__thumbnail-image"><img src="/images/projects/carousel/thumb-3.jpg" alt="" /></span>
                    <span class="c-carousel__thumbnail-heading">Slide3</span>
                    <span class="c-carousel__thumbnail-summary">UnsplashのBharath Kumarが撮影した写真</span>
                  </span>
                </button>
              </li>
              <li class="swiper-slide" role="presentation">
                <button type="button" role="tab" aria-controls="carousel-item-1-4" class="p-carousel__thumbnail">
                  <span class="p-carousel__thumbnail-inner">
                    <span class="c-carousel__thumbnail-image"><img src="/images/projects/carousel/thumb-4.jpg" alt="" /></span>
                    <span class="c-carousel__thumbnail-heading">Slide4</span>
                    <span class="c-carousel__thumbnail-summary">UnsplashのJanosch Diggelmannが撮影した写真</span>
                  </span>
                </button>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!-- Controls-->
      <div class="p-carousel__controls">
        <button class="c-carousel-control-button c-carousel-control-button--prev" tabindex="0" aria-controls="thumbnails-track">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.375 27.3125L23.1704 26.5171L16.6532 20L23.1704 13.4829L22.375 12.6875L15.0625 20L22.375 27.3125Z"
              fill="#4D4D4D"
              class="c-carousel-control-button-arrow"
            />
          </svg>
        </button>
        <button class="c-carousel-control-button c-carousel-control-button--next" tabindex="0" aria-controls="thumbnails-track">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.625 27.3125L16.8296 26.5171L23.3468 20L16.8296 13.4829L17.625 12.6875L24.9375 20L17.625 27.3125Z"
              fill="#4D4D4D"
              class="c-carousel-control-button-arrow"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Slide -->
    <div class="p-carousel__items swiper js-mainslide-track" id="mainslide-track">
      <div class="swiper-wrapper" role="presentation">
        <div class="swiper-slide" id="carousel-item-1-1" role="tabpanel">
          <div class="p-catousel__item">
            <a href="#">
              <picture class="c-carousel__items-image">
                <source media="(max-width:767px)" srcset="/images/projects/carousel/image1_s.jpg 340w" sizes="100vw" />
                <source media="(min-width:768px)" srcset="/images/projects/carousel/image1_l.jpg 1440w" sizes="(max-width:1440px) 100vw, 1440px" />
                <img src="/images/projects/carousel/image1_l.jpg" alt="UnsplashのJakob Owensが撮影した写真" />
              </picture>
            </a>
          </div>
        </div>
        <div class="swiper-slide" id="carousel-item-1-2" role="tabpanel">
          <div class="p-catousel__item">
            <a href="#">
              <picture class="c-carousel__items-image">
                <source media="(max-width:767px)" srcset="/images/projects/carousel/image2_s.jpg 340w" sizes="100vw" />
                <source media="(min-width:768px)" srcset="/images/projects/carousel/image2_l.jpg 1440w" sizes="(max-width:1440px) 100vw, 1440px" />
                <img src="/images/projects/carousel/image2_l.jpg" alt="Unsplashのzero takeが撮影した写真" />
              </picture>
            </a>
          </div>
        </div>
        <div class="swiper-slide" id="carousel-item-1-3" role="tabpanel">
          <div class="p-catousel__item">
            <a href="#">
              <picture class="c-carousel__items-image">
                <source media="(max-width:767px)" srcset="/images/projects/carousel/image3_s.jpg 340w" sizes="100vw" />
                <source media="(min-width:768px)" srcset="/images/projects/carousel/image3_l.jpg 1440w" sizes="(max-width:1440px) 100vw, 1440px" />
                <img src="/images/projects/carousel/image3_l.jpg" alt="UnsplashのBharath Kumarが撮影した写真" />
              </picture>
            </a>
          </div>
        </div>
        <div class="swiper-slide" id="carousel-item-1-4" role="tabpanel">
          <div class="p-catousel__item p-catousel__item--content p-carousel__item--p-slide4">
            <div class="p-slide4__content">
              <h2 class="p-slide4__heading">Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </p>
              <div class="p-slide4__link"><a href="#" class="c-slide-button c-button--white">Link Button</a></div>
            </div>
            <div class="p-slide4__image"><img src="/images/projects/carousel/image4_l.jpg" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mt-20">
  <h3 id="slide-autoplay">自動再生ありのスライド</h3>
  <div class="p-carousel" role="region" aria-labelledby="#slide-autoplay" id="carousel-sample02" data-slideautoplay="true">
    <!-- navigations -->
    <div class="p-carousel__nav">
      <!-- play / pause -->
      <button class="c-carousel-button-control" aria-controls="mainslide-track2" id="carousel-control2" aria-label="スライドを停止">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="c-carousel-button-play">
          <path
            d="M22.2594 15.4023L13.0462 10.0925C12.8352 9.95192 12.5539 9.95192 12.343 10.0925C12.132 10.233 11.9912 10.4442 11.9912 10.6902V21.31C11.9912 21.5563 12.1318 21.8023 12.343 21.9078C12.4484 21.9782 12.5892 22.0133 12.6947 22.0133C12.8002 22.0133 12.941 21.9782 13.0465 21.9078L22.2596 16.598C22.4706 16.4574 22.6114 16.2462 22.6114 16.0002C22.6111 15.7537 22.4704 15.5077 22.2594 15.4022L22.2594 15.4023Z"
            fill="#4D4D4D"
          />
        </svg>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="c-carousel-button-pause">
          <path
            d="M13.3332 9.77765C13.0975 9.77765 12.8713 9.8714 12.7046 10.0381C12.5381 10.2049 12.4443 10.431 12.4443 10.6667V21.3329C12.4443 21.6505 12.6138 21.9441 12.8888 22.1028C13.1637 22.2615 13.5026 22.2615 13.7776 22.1028C14.0528 21.9441 14.2222 21.6506 14.2222 21.3329V10.6667C14.2222 10.431 14.1285 10.2049 13.9617 10.0381C13.795 9.8714 13.5689 9.77765 13.3332 9.77765H13.3332Z"
            fill="#4D4D4D"
          />
          <path
            d="M18.6669 9.77765C18.4312 9.77765 18.2051 9.8714 18.0383 10.0381C17.8716 10.2049 17.7778 10.431 17.7778 10.6667V21.3329C17.7778 21.6505 17.9472 21.9441 18.2225 22.1028C18.4975 22.2615 18.8363 22.2615 19.1113 22.1028C19.3863 21.9441 19.5557 21.6506 19.5557 21.3329V10.6667C19.5557 10.431 19.462 10.2049 19.2955 10.0381C19.1287 9.8714 18.9026 9.77765 18.6669 9.77765H18.6669Z"
            fill="#4D4D4D"
          />
        </svg>
      </button>
      <!-- Thunbnails -->
      <div class="p-carousel__thumbnailArea">
        <div class="p-carousel__thumbnails">
          <div class="swiper" id="thumbnails-track2">
            <ol class="swiper-wrapper" role="tablist" aria-label="表示するスライドを選択してください">
              <li class="swiper-slide" role="presentation">
                <button type="button" role="tab" aria-controls="carousel-item-2-1" class="p-carousel__thumbnail">
                  <span class="p-carousel__thumbnail-inner">
                    <span class="c-carousel__thumbnail-image"><img src="/images/projects/carousel/thumb-1.jpg" alt="" /></span>
                    <span class="c-carousel__thumbnail-heading">Slide1</span>
                    <span class="c-carousel__thumbnail-summary">UnsplashのJakob Owensが撮影した写真</span>
                  </span>
                </button>
              </li>
              <li class="swiper-slide" role="presentation">
                <button type="button" role="tab" aria-controls="carousel-item-2-2" class="p-carousel__thumbnail">
                  <span class="p-carousel__thumbnail-inner">
                    <span class="c-carousel__thumbnail-image"><img src="/images/projects/carousel/thumb-2.jpg" alt="" /></span>
                    <span class="c-carousel__thumbnail-heading">Slide2</span>
                    <span class="c-carousel__thumbnail-summary">Unsplashのzero takeが撮影した写真</span>
                  </span>
                </button>
              </li>
              <li class="swiper-slide" role="presentation">
                <button type="button" role="tab" aria-controls="carousel-item-2-3" class="p-carousel__thumbnail">
                  <span class="p-carousel__thumbnail-inner">
                    <span class="c-carousel__thumbnail-image"><img src="/images/projects/carousel/thumb-3.jpg" alt="" /></span>
                    <span class="c-carousel__thumbnail-heading">Slide3</span>
                    <span class="c-carousel__thumbnail-summary">UnsplashのBharath Kumarが撮影した写真</span>
                  </span>
                </button>
              </li>
              <li class="swiper-slide" role="presentation">
                <button type="button" role="tab" aria-controls="carousel-item-2-4" class="p-carousel__thumbnail">
                  <span class="p-carousel__thumbnail-inner">
                    <span class="c-carousel__thumbnail-image"><img src="/images/projects/carousel/thumb-4.jpg" alt="" /></span>
                    <span class="c-carousel__thumbnail-heading">Slide4</span>
                    <span class="c-carousel__thumbnail-summary">UnsplashのJanosch Diggelmannが撮影した写真</span>
                  </span>
                </button>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!-- Controls-->
      <div class="p-carousel__controls">
        <button class="c-carousel-control-button c-carousel-control-button--prev" tabindex="0" aria-controls="thumbnails-track2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.375 27.3125L23.1704 26.5171L16.6532 20L23.1704 13.4829L22.375 12.6875L15.0625 20L22.375 27.3125Z"
              fill="#4D4D4D"
              class="c-carousel-control-button-arrow"
            />
          </svg>
        </button>
        <button class="c-carousel-control-button c-carousel-control-button--next" tabindex="0" aria-controls="thumbnails-track2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.625 27.3125L16.8296 26.5171L23.3468 20L16.8296 13.4829L17.625 12.6875L24.9375 20L17.625 27.3125Z"
              fill="#4D4D4D"
              class="c-carousel-control-button-arrow"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Slide -->
    <div class="p-carousel__items swiper js-mainslide-track" id="mainslide-track2">
      <div class="swiper-wrapper" role="presentation">
        <div class="swiper-slide" id="carousel-item-2-1" role="tabpanel">
          <div class="p-catousel__item">
            <a href="#">
              <picture class="c-carousel__items-image">
                <source media="(max-width:767px)" srcset="/images/projects/carousel/image1_s.jpg 340w" sizes="100vw" />
                <source media="(min-width:768px)" srcset="/images/projects/carousel/image1_l.jpg 1440w" sizes="(max-width:1440px) 100vw, 1440px" />
                <img src="/images/projects/carousel/image1_l.jpg" alt="UnsplashのJakob Owensが撮影した写真" />
              </picture>
            </a>
          </div>
        </div>
        <div class="swiper-slide" id="carousel-item-2-2" role="tabpanel">
          <div class="p-catousel__item">
            <a href="#">
              <picture class="c-carousel__items-image">
                <source media="(max-width:767px)" srcset="/images/projects/carousel/image2_s.jpg 340w" sizes="100vw" />
                <source media="(min-width:768px)" srcset="/images/projects/carousel/image2_l.jpg 1440w" sizes="(max-width:1440px) 100vw, 1440px" />
                <img src="/images/projects/carousel/image2_l.jpg" alt="Unsplashのzero takeが撮影した写真" />
              </picture>
            </a>
          </div>
        </div>
        <div class="swiper-slide" id="carousel-item-2-3" role="tabpanel">
          <div class="p-catousel__item">
            <a href="#">
              <picture class="c-carousel__items-image">
                <source media="(max-width:767px)" srcset="/images/projects/carousel/image3_s.jpg 340w" sizes="100vw" />
                <source media="(min-width:768px)" srcset="/images/projects/carousel/image3_l.jpg 1440w" sizes="(max-width:1440px) 100vw, 1440px" />
                <img src="/images/projects/carousel/image3_l.jpg" alt="UnsplashのBharath Kumarが撮影した写真" />
              </picture>
            </a>
          </div>
        </div>
        <div class="swiper-slide" id="carousel-item-2-4" role="tabpanel">
          <div class="p-catousel__item p-catousel__item--content p-carousel__item--p-slide4">
            <div class="p-slide4__content">
              <h2 class="p-slide4__heading">Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </p>
              <div class="p-slide4__link"><a href="#" class="c-slide-button c-button--white">Link Button</a></div>
            </div>
            <div class="p-slide4__image"><img src="/images/projects/carousel/image4_l.jpg" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## 開発の背景と目的

複数のサイトを運用しているクライアントより、運用サイト共通で使う、アクセシビリティに配慮したカルーセルコンテンツの雛形を作成して欲しいとのご依頼をいただきました。

## 使用技術

クライアントからは「バニラ JS であること」「アクセシビリティに配慮していること」「スライドで切り替わること」という仕様のみが提示されており、カルーセルの動きの実装については自作でもライブラリの使用でも可、との方針でした。

クライアントの運用サイトを確認したところ、アクセシビリティを確保しながらも、ビジュアル表現にある程度の自由度が求められる場面も想定されたため、ライブラリをベースにカスタマイズする形を選択しました。

検討したライブラリは、アクセシビリティに配慮したスライドが設置できる <a href="https://swiperjs.com/" target="_blank">Swiper</a> と <a href="https://ja.splidejs.com/" target="_blank">Splide</a> の 2 つです。

想定されるスライドのパターンとして、スライド内にリンク付きの画像を設置するデザインや、ボタンを配置してリンク先へ遷移させるデザインも考慮した結果、当時の Splide ではスライド内にコンテンツを含む場合にスクリーンリーダーでの読み上げがうまく動作しないケースがあったため、Swiper を採用しました。
