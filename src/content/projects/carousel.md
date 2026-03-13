---
draft: false
order: 4
title: '運用サイト共通利用を想定したアクセシブルなスライド設計'
category:
  - コーディング
detail: '複数のサイトでの共通利用を想定したアクセシブルなスライドの制作事例です。'
thumbnail: '../../images//projects/carousel/thumbnail.png'
role:
  - 'ヒアリング・要件整理'
  - '実装方針の検討（アクセシビリティ要件を踏まえた技術選定）'
  - 'コーディング（アクセシビリティ対応を含む）'
techstack:
  - 'HTML'
  - 'CSS'
  - 'JavaScript'
stylesheets:
  - '/css/projects/carousel/swiper-bundle.min.css'
  - '/css/projects/carousel/carousel.css'
  - '/css/projects/carousel/carousel-theme.css'
jsfiles:
  - '/js/projects/carousel/swiper-bundle.min.js'
  - '/js/projects/carousel/carousel.js'
---

複数の運用サイトを持つクライアントから、共通で利用可能なアクセシビリティに配慮したカルーセルコンテンツの雛形作成を依頼され、設計・コーディング（アクセシビリティ対応を含む）を担当しました。

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

## 背景と課題

クライアントから提示された要件は以下で、条件を満たせばスライドの実装方法やライブラリの使用も可とのことでした。

- バニラJavaScriptで動作すること
- 読み上げやキーボード動作が可能など、アクセシビリティに配慮されていること
- スライドでコンテンツが切り替わること

運用サイトを確認した結果、アクセシビリティを確保しつつ、ビジュアル表現にも一定の自由度が求められるケースが想定されました。そのため、ゼロから自作するよりも、ビジュアル表現に選択肢がある既存ライブラリをカスタマイズする形での実装が最適と判断しました。

ライブラリの検討段階では、作成当時バニラJSかつプラグイン内でのアクセシビリティ対応が可能だった以下の2つを比較しました。

- [Swiper](https://swiperjs.com/)
- [Splide](https://ja.splidejs.com/)

検討の結果、当時の Splide では、先方が例として提示したコンテンツ構成において、スクリーンリーダー利用時に読み上げ順が不安定になるケースが確認されました。

一方 Swiper では、

- スライド切り替え時の制御
- ARIA属性の調整

が比較的容易であり、要件を満たした実装が可能と判断し、
採用に至りました。

## 実装のポイント

Swiper をベースとしつつ、クライアントのデザイン要件に合わせたカスタマイズを行い、バニラ JavaScript による操作性を維持したまま既存サイトへ容易に組み込める構造を設計しました。あわせて、将来的に他の運用サイトでも再利用できるよう、汎用性と柔軟性を備えたコンポーネントとして構築しています。

Swiper は標準で `aria` 属性や `role` 属性がスライド本体、「前へ」「次へ」ボタン、ページネーションに付与されており、基本的なアクセシビリティ対応は行われていますが、実運用を想定すると不十分な点もあったため、以下の対応を追加しました。

- スクリーンリーダー向けの読み上げは標準で実装されているものの、案内文言がすべて英語であったため、日本語表記に変更
- スライド内にリンクやボタンなどの操作要素が配置されるケースを考慮し、自動再生中であってもスライド内にフォーカスがある場合は自動再生を停止する挙動に調整
- スライド切り替え中にスクリーンリーダーが途中状態のテキストを読み上げないよう、切り替えアニメーション開始時に `aria-busy` 属性を `true` に設定し、アニメーション完了後に `false` に戻すことで、切り替え中の読み上げを抑制

## 本実装で重視した設計観点

[W3CのARIA Authoring Practices Guide (APG)に掲載されている Carousel パターン](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)を参照しつつ、今回の要件であるサムネイル付きスライド構成に関する具体例は掲載されていなかったため、仕様を読み解いたうえで本件に適した形へ落とし込みました。

納品後は先方側で調整・展開される前提であったことから、

- デザイン変更に耐えられる構造であること
- 最低限のアクセシビリティ要件を満たしたうえで、再利用可能であること

を重視しました。
