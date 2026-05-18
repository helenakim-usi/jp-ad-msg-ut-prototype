# JP 광고 메시지 UT 프로토타입

Instagram 피드 **광고 → LP 클릭 플로우** UT용 HTML 프로토타입.
가설 H1/H2/H3 각각 광고 카피와 도착 LP가 다름.

## 실행

```
cd "JP_광고메시지_UT_프로토타입"
python3 -m http.server 8080
# 브라우저에서 http://localhost:8080  열기
```

`index.html`(가설 선택) → `feed.html?h=N`(인스타 피드+광고) → 광고 탭 → LP

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

## 자산(사진) 교체

광고 소재의 사진 영역은 `.ph` 플레이스홀더(빗금 박스, “📷 Figma 소재 교체”).
Figma MCP 호출 한도 리셋 후 위 노드에서 PNG export → `assets/`에 저장 →
`styles.css`의 해당 `.ph` 블록을 `background-image` 또는 `<img>`로 교체.

## ⚠ 콘텐츠 검토 필요

LP H1 「好みのテイストから探す」에 **「韓国 インテリア」** 항목이 Figma 원본 그대로 포함됨.
메모리 기록 *「JP '한국 인테리어' 전면 소구 중단 — '도쿄 브랜드의 합리적 대안' 메시지로 대체」* 방침과 충돌 가능.
UT 진행 전 유지/순화/제거 여부 확정 필요. (`app.js` HYPO[1].lp.sections[0].taste 의 ⚠ 주석 참고)
