# JP 광고 메시지 UT 프로토타입

Instagram 피드 **광고 → LP 클릭 플로우** UT용 HTML 프로토타입.
가설 H1/H2/H3 각각 광고 카피와 도착 LP가 다름.

## 접속 (온라인 UT — 고정 링크)

GitHub Pages 배포: **https://helenakim-usi.github.io/jp-ad-msg-ut-prototype/**

| 용도 | URL |
|---|---|
| 시작 화면(가설 선택) | `…/jp-ad-msg-ut-prototype/` |
| H1 / H2 / H3 바로 시작 | `…/feed.html?h=1` (`h=2`, `h=3`) |

원격 고객이 자기 기기에서 직접 접속·조작 가능. 파일 수정 후 `git push` → 1~2분 내 반영.

## 로컬 실행 (개발용)

```
cd "JP_광고메시지_UT_프로토타입"
python3 -m http.server 8080   # http://localhost:8080
```

`index.html`(가설 선택) → `feed.html?h=N`(인스타 피드 + **3장 캐러셀 광고**, 좌우 스와이프)
→ 슬라이드/「詳しくはこちら」 탭 → 해당 가설 기획전 LP

## 파일 구성

| 파일 | 역할 |
|---|---|
| `index.html` | UT 시작 — 가설 3종 선택 (KR 셸) |
| `feed.html?h=1\|2\|3` | Instagram 피드 모킹 + 스폰서 광고 |
| `lp.html?h=1\|2\|3` | LP **재현본** (실 URL 미제공 시 fallback) |
| `app.js` | 가설 데이터(`HYPO`) + 피드/LP 렌더러 |
| `styles.css` | 공통 스타일 (디바이스 프레임·IG·LP) |

## 가설 ↔ Figma 출처

파일: `JP Commerce / Biz task board` (`mwTMyNCcKkNhaMVFl9aD1W`)

| 가설 | 광고 카피 | UT 광고 에셋 | LP(신버전) |
|---|---|---|---|
| H1 | 好きなデザインを手が届く価格で | `6874:2509` | `6905:1264` |
| H2 | この品質でこの価格 | `6874:2559` | `6905:1381` |
| H3 | かわいい部屋づくりに広さは関係ない | `6874:2560` | `6905:1473` |
| (섹션) | UT용 에셋 | `6874:2756` | LP `6905:1263` |

## 실제 LP URL 연결 (★ 연결 완료)

광고/「詳しくはこちら」 탭 시 **실제 기획전 페이지**로 이동(전체 화면 전환).
`app.js`의 가설별 `lpUrl`에 연결됨:

| 가설 | 도착 LP (실 페이지) |
|---|---|
| H1 | https://www.ohouse.com/ja-JP/store/exhibitions/10072 |
| H2 | https://www.ohouse.com/ja-JP/store/exhibitions/10073 |
| H3 | https://www.ohouse.com/ja-JP/store/exhibitions/10074 |

- URL 변경 시 `app.js`의 `HYPO[n].lpUrl` 수정
- `lpUrl`을 비우면 → 추출 카피로 만든 `lp.html` 재현본으로 대체(백업)

## 광고 이미지 교체 (캐러셀 3장 × 가설)

광고는 **가설당 3장 캐러셀**(좌우 스와이프, 도트·`N/3` 카운터).
아래 파일명으로 `assets/`에 넣으면 **자동 적용**(없으면 재현 플레이스홀더 표시).

| 가설 | 파일명 (assets/) | Figma 프레임 (UT용 에셋 내) |
|---|---|---|
| H1 | `h1-1.jpg` `h1-2.jpg` `h1-3.jpg` | `6874:2452` · `6874:2462` · `6874:2487` |
| H2 | `h2-1.jpg` `h2-2.jpg` `h2-3.jpg` | `6874:2510` · `6874:2521` · `6874:2538` |
| H3 | `h3-1.jpg` `h3-2.jpg` `h3-3.jpg` | `6874:2695` · `6874:2740` · `6874:2792` |

- 배포본은 **1080px·JPEG로 웹 최적화**(9장 합 ~2.6MB). Figma 원본(대용량)은 `assets/`에 두되 `.gitignore`로 git 제외.
- 원본 교체 시: 원본을 `assets/`에 넣고 `sips -s format jpeg -Z 1080 -s formatOptions 86 원본 --out h{n}-{m}.jpg` 로 재생성.
- 슬라이드 수/매핑은 `app.js`의 `HYPO[n].figmaSlides` 에 정의 (개수 변경 시 자동 반영).
- 푸시하면 1~2분 내 라이브 반영.

## ⚠ 콘텐츠 검토 필요

LP H1 「好みのテイストから探す」에 **「韓国 インテリア」** 항목이 Figma 원본 그대로 포함됨.
메모리 기록 *「JP '한국 인테리어' 전면 소구 중단 — '도쿄 브랜드의 합리적 대안' 메시지로 대체」* 방침과 충돌 가능.
UT 진행 전 유지/순화/제거 여부 확정 필요. (`app.js` HYPO[1].lp.sections[0].taste 의 ⚠ 주석 참고)
