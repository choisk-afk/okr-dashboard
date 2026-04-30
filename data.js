const OKR_DATA = {
  year: 2026,
  orgName: "결제정산프로덕트실",
  months: ["2026-01", "2026-02", "2026-03"],
  monthLabels: { "2026-01": "1월", "2026-02": "2월", "2026-03": "3월" },
  teams: [
    "결제플랫폼팀", "결제허브팀", "정산플랫폼팀",
    "배민페이플랫폼팀", "배민선물하기팀", "결제웹프론트개발팀"
  ],
  objectives: [
    {
      id: "O1",
      title: "플랫폼 기반의 주문/결제 영향력을 확대한다",
      subtitle: "Platform Impact",
      keyResults: [
        {
          id: "KR1-1",
          title: "배민페이 점유율 27.7% → 39.0%로 확대",
          unit: "%",
          annualTarget: 39.0,
          baseline: 27.7,
          baselineLabel: "25년 27.7% (카드 21.8% / 머니 4.0% / 계좌 1.9%)",
          monthly: {
            "2026-01": { target: 27.9, actual: 28.1 },
            "2026-02": { target: 28.1, actual: 27.8 },
            "2026-03": { target: 28.7, actual: 27.6 }
          },
          subKRs: [
            { label: "카드 점유율", monthly: { "2026-01": { t: 22.1, a: 22.1 }, "2026-02": { t: 22.4, a: 21.9 }, "2026-03": { t: 22.7, a: 21.7 } } },
            { label: "계좌 점유율", monthly: { "2026-01": { t: 1.9, a: 2.0 }, "2026-02": { t: 1.9, a: 2.0 }, "2026-03": { t: 2.0, a: 2.0 } } },
            { label: "머니 점유율", monthly: { "2026-01": { t: 3.9, a: 4.0 }, "2026-02": { t: 3.8, a: 3.9 }, "2026-03": { t: 3.7, a: 3.9 } } },
            { label: "휴대폰 점유율", monthly: { "2026-01": { t: 0.0, a: 0.0 }, "2026-02": { t: 0.0, a: 0.0 }, "2026-03": { t: 0.3, a: 0.0 } } }
          ],
          tasks: [
            { id: "T1", name: "배민클럽 구독자 배민페이머니 결제 시 포인트 추가 적립 프로모션", team: "배민페이플랫폼팀", status: "진행중", targetDate: "2026-04-28", owner: "김혜정", wikiLink: "https://cloud.wiki.woowa.in/wiki/x/tazDOQ" },
            { id: "T2", name: "배민클럽 비구독자 배민페이머니 확대 실험", team: "배민페이플랫폼팀", status: "진행중", targetDate: "2026-04-28", owner: "김혜정", wikiLink: "https://cloud.wiki.woowa.in/wiki/x/FtvMPg" },
            { id: "T3", name: "배민페이머니를 활용한 더치페이", team: "배민페이플랫폼팀", status: "진행중", targetDate: "2026-06-04", owner: "허난영", wikiLink: "https://cloud.wiki.woowa.in/wiki/x/hBeiMw" },
            { id: "T4", name: "배민페이머니 소멸 알림 도입", team: "배민페이플랫폼팀", status: "과제완료", targetDate: "2026-02-25", completedDate: "2026-02-25", owner: "형성현", wikiLink: "https://cloud.wiki.woowa.in/wiki/x/BYHJNw" },
            { id: "T5", name: "배민페이에 휴대폰 간편결제 추가", team: "배민페이플랫폼팀", status: "진행중", targetDate: "2026-05-07", owner: "양아영", wikiLink: "https://cloud.wiki.woowa.in/wiki/x/oV9PL" }
          ]
        },
        {
          id: "KR1-2",
          title: "배민포인트 활성화율 5.8% → 10.4%로 확대",
          unit: "%",
          annualTarget: 10.4,
          baseline: 5.8,
          baselineLabel: "25년 5.8%",
          monthly: {
            "2026-01": { target: 6.2, actual: 5.9 },
            "2026-02": { target: 6.6, actual: 4.9 },
            "2026-03": { target: 7.0, actual: 5.1 }
          },
          tasks: [
            { id: "T6", name: "배민포인트 지급 당일 소멸 기능 구현", team: "배민페이플랫폼팀", status: "과제완료", targetDate: "2026-02-11", completedDate: "2026-02-11", owner: "김혜정", jiraLink: "https://cloud.jira.woowa.in/browse/PAYPRODUCT-8033" },
            { id: "T7", name: "포인트 함 지면 개편 및 고도화", team: "배민페이플랫폼팀", status: "계획중", owner: "김혜정" },
            { id: "T8", name: "배민포인트 프리퀀시 고도화 대응", team: "배민페이플랫폼팀", status: "진행중", targetDate: "2026-04-07", completedDate: "2026-04-13", owner: "전태준", jiraLink: "https://cloud.jira.woowa.in/browse/PAYPRODUCT-8446" }
          ]
        },
        {
          id: "KR1-3",
          title: "선물하기 주문수 연간 누적 5,680만 건 달성",
          unit: "건",
          isCumulative: true,
          annualTarget: 56800000,
          baselineLabel: "25년 연간 3,784만건",
          monthly: {
            "2026-01": { target: 3900000, actual: 3901211 },
            "2026-02": { target: 7873500, actual: 7325050 },
            "2026-03": { target: 12258900, actual: 11032053 }
          },
          subKRs: [
            { label: "배민 발행 상품권 사용 주문수", monthly: { "2026-01": { t: 3810000, a: 3810788 }, "2026-02": { t: 7673000, a: 7156173 }, "2026-03": { t: 11940000, a: 10794880 } } },
            { label: "외부 교환권 사용 주문수", monthly: { "2026-01": { t: 90000, a: 90423 }, "2026-02": { t: 200500, a: 168877 }, "2026-03": { t: 318900, a: 237173 } } }
          ],
          tasks: [
            { id: "T9", name: "선물하기 홈 카테고리/상품 위젯 개선 실험", team: "배민선물하기팀", status: "진행중", targetDate: "2026-04-02", completedDate: "2026-04-30", owner: "박성현", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/GIFT/pages/966886555/2026-01+-" },
            { id: "T10", name: "외부교환권 배민 내 사용 대행사 추가 연동 (다우기술 - 컴포즈커피)", team: "배민선물하기팀", status: "진행중", targetDate: "2026-05-07", owner: "박성현" },
            { id: "T11", name: "외부교환권 기 연동 대행사 보유 브랜드 추가 (던킨, 파스쿠찌, 쉐이크쉑)", team: "배민선물하기팀", status: "계획중", targetDate: "2026-05-14", owner: "박성현" },
            { id: "T12", name: "주문서 내 선물하기 상품권 1뎁스 노출 API 제공", team: "배민선물하기팀", status: "과제완료", targetDate: "2026-03-03", completedDate: "2026-03-03", owner: "최중현", jiraLink: "https://cloud.jira.woowa.in/browse/BMGIFT-10920" },
            { id: "T13", name: "배민클럽 바우처 SAP 연동", team: "배민선물하기팀", status: "과제완료", targetDate: "2026-03-19", completedDate: "2026-03-19", owner: "신지혜", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/GIFT/pages/968857825" }
          ]
        }
      ]
    },
    {
      id: "O2",
      title: "고도화 된 플랫폼 기반으로 성장 임팩트를 도모한다",
      subtitle: "Growth Impact",
      keyResults: [
        {
          id: "KR2-1",
          title: "전사 전략과제 지연율 0% 달성",
          unit: "건",
          isLowerBetter: true,
          annualTarget: 0,
          baselineLabel: "신규 지표",
          monthly: {
            "2026-01": { target: 0, actual: 0 },
            "2026-02": { target: 0, actual: 0 },
            "2026-03": { target: 0, actual: 0 }
          },
          tasks: [
            { id: "T14", name: "즉시할인 타임세일 API 정책 변경 대응", team: "결제허브팀", status: "과제완료", targetDate: "2026-04-01", completedDate: "2026-04-01", owner: "설소영, 김윤정", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYMENTHUB/pages/925664219/PJ+202601+-" },
            { id: "T15", name: "기준수수료, 과제코드 연동을 통한 비용집계 자동화 대응", team: "결제허브팀", status: "진행중", targetDate: "2026-04-09", owner: "임상혁, 신영민", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYMENTHUB/pages/1005437529/260226" },
            { id: "T16", name: "메뉴할인분담금, 메뉴쿠폰 안분계산기 연동 효율화", team: "결제허브팀", status: "과제완료", targetDate: "2026-01-27", completedDate: "2026-01-27", owner: "설소영, 김윤정", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYMENTHUB/pages/936379778/PJ+202512+-" },
            { id: "T17", name: "DSM 신규요금 체계 V3 정산 자동화", team: "정산플랫폼팀", status: "과제완료", targetDate: "2026-03-31", completedDate: "2026-03-31", owner: "황혜진", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/SETTLESYS/pages/978661942/260204+DSM+V3" },
            { id: "T18", name: "수수료 비용 집계 자동화", team: "정산플랫폼팀", status: "과제완료", targetDate: "2026-03-31", completedDate: "2026-04-01", owner: "박연화", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/SETTLESYS/pages/800556575/250812" },
            { id: "T19", name: "라이더 - 로드러너 전환 - 정산 서비스 이관", team: "정산플랫폼팀", status: "진행중", targetDate: "2026-03-31", owner: "김초롱", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/SETTLESYS/pages/762417108/20250708+-" },
            { id: "T20", name: "배민클럽 장기 상품 - 정기결제 시스템 대응", team: "결제플랫폼팀", status: "과제완료", targetDate: "2026-02-24", completedDate: "2026-02-24", owner: "장우진", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYPLATFORM/pages/943391450/260108" },
            { id: "T21", name: "결제 관련 지면 다국어 대응", team: "결제플랫폼팀", status: "과제완료", targetDate: "2026-03-12", completedDate: "2026-03-12", owner: "장우진", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYPLATFORM/pages/965138791/260126" },
            { id: "T22", name: "배민클럽 배민페이머니 프로모션 - 결제 대응", team: "결제플랫폼팀", status: "진행중", targetDate: "2026-04-28", completedDate: "2026-04-02", owner: "장우진", jiraLink: "https://cloud.jira.woowa.in/browse/COREPAY-9421" },
            { id: "T23", name: "주문서 > 선물함 다국어 대응", team: "배민선물하기팀", status: "과제완료", targetDate: "2026-03-31", completedDate: "2026-03-31", owner: "송채원", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/GIFT/pages/1000821939" },
            { id: "T24", name: "다국어 대응 - 배민페이, 배민포인트, 배민페이머니", team: "배민페이플랫폼팀", status: "과제완료", targetDate: "2026-03-24", completedDate: "2026-04-03", owner: "주지민", wikiLink: "https://cloud.wiki.woowa.in/wiki/x/BG4xOw" }
          ]
        },
        {
          id: "KR2-2",
          title: "신규 결제 경험 제공 (3건 이상)",
          unit: "건",
          isCumulative: true,
          annualTarget: 3,
          baselineLabel: "25년 2건 (알리페이/위챗페이)",
          monthly: {
            "2026-01": { target: 1, actual: 0 },
            "2026-02": { target: 1, actual: 0 },
            "2026-03": { target: 1, actual: 0 }
          },
          tasks: [
            { id: "T25", name: "배민페이-휴대폰 도입", team: "결제플랫폼팀", status: "진행중", owner: "장우진", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYPLATFORM/pages/828420679/250609" },
            { id: "T26", name: "식권 결제수단 연동", team: "결제플랫폼팀", status: "계획중", owner: "한다솜" },
            { id: "T27", name: "지역화폐 결제수단 제공", team: "결제플랫폼팀", status: "계획중", owner: "한다솜" },
            { id: "T28", name: "온누리상품권 결제수단 제공", team: "결제플랫폼팀", status: "계획중", owner: "한다솜" },
            { id: "T29", name: "배민 비즈 결제 (법인카드 결제)", team: "결제플랫폼팀", status: "계획중", owner: "장우진" },
            { id: "T30", name: "애플페이-해외카드 도입", team: "결제플랫폼팀", status: "진행중", owner: "한다솜" }
          ]
        }
      ]
    },
    {
      id: "O3",
      title: "압도적인 글로벌 1위 핀테크 신뢰도를 굳건히 한다",
      subtitle: "Platform Trust",
      keyResults: [
        {
          id: "KR3-1",
          title: "월 평균 결제 성공률(AR) 99.13% 이상",
          unit: "%",
          annualTarget: 99.13,
          baseline: 99.0,
          baselineLabel: "25년 월 평균 99.01%",
          monthly: {
            "2026-01": { target: 99.05, actual: 99.06 },
            "2026-02": { target: 99.06, actual: 99.06 },
            "2026-03": { target: 99.08, actual: 99.04 }
          },
          tasks: [
            { id: "T31", name: "배민페이 전 지면 보안키패드 입력 시 햅틱 반응 적용", team: "배민페이플랫폼팀", status: "과제완료", targetDate: "2026-02-10", completedDate: "2026-02-10", owner: "형성현", wikiLink: "https://cloud.wiki.woowa.in/wiki/x/f746Og" },
            { id: "T32", name: "영구 사용 불가 배민페이카드 자동 비활성화 처리 - 현대카드", team: "배민페이플랫폼팀", status: "과제완료", targetDate: "2026-03-10", completedDate: "2026-03-10", owner: "형성현", wikiLink: "https://cloud.wiki.woowa.in/wiki/x/ZYYnOw" },
            { id: "T33", name: "배민페이계좌 비활성화 적용 승인 실패 에러코드 확대", team: "배민페이플랫폼팀", status: "과제완료", targetDate: "2026-03-17", completedDate: "2026-03-17", owner: "형성현", wikiLink: "https://cloud.wiki.woowa.in/wiki/x/HOGDNQ" },
            { id: "T34", name: "영구 사용 불가 배민페이카드 자동 비활성화 처리(OTC 인증 방식)", team: "배민페이플랫폼팀", status: "진행중", targetDate: "2026-04-28", owner: "형성현", wikiLink: "https://cloud.wiki.woowa.in/wiki/x/KgBAPQ" },
            { id: "T35", name: "장애대응 자동화 Phase3", team: "결제플랫폼팀", status: "과제완료", targetDate: "2026-04-02", completedDate: "2026-04-02", owner: "장우진", jiraLink: "https://cloud.jira.woowa.in/browse/COREPAY-9430" },
            { id: "T36", name: "장애대응 자동 고도화", team: "결제플랫폼팀", status: "계획중", owner: "장우진" },
            { id: "T37", name: "배민페이 계좌 딤드 대상 오픈뱅킹 코드 추가", team: "결제플랫폼팀", status: "과제완료", targetDate: "2026-03-17", completedDate: "2026-03-17", owner: "정연희", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYPLATFORM/pages/1001304031/260225" }
          ]
        },
        {
          id: "KR3-2",
          title: "주문 유실 수 연간 1,000건 이내",
          unit: "건",
          isLowerBetter: true,
          isCumulative: true,
          annualTarget: 1000,
          baselineLabel: "25년 실제 발생 4건",
          monthly: {
            "2026-01": { target: 83, actual: 0 },
            "2026-02": { target: 166, actual: 0 },
            "2026-03": { target: 250, actual: 0 }
          },
          tasks: []
        },
        {
          id: "KR3-3",
          title: "CS 인입율 25년 대비 60% 수준으로 감소 (6,073건 → 3,756건)",
          unit: "건",
          isLowerBetter: true,
          isCumulative: true,
          annualTarget: 3756,
          baseline: 6073,
          baselineLabel: "25년 6,073건",
          monthly: {
            "2026-01": { target: 671, actual: 725 },
            "2026-02": { target: 1284, actual: 1345 },
            "2026-03": { target: 1741, actual: 1962 }
          },
          subKRs: [
            { label: "결제플랫폼팀 (520→260건)", monthly: { "2026-01": { t: 22, a: 41 }, "2026-02": { t: 44, a: 56 }, "2026-03": { t: 66, a: 90 } } },
            { label: "결제허브팀 PG민원 (172→86건)", monthly: { "2026-01": { t: 9, a: 3 }, "2026-02": { t: 18, a: 8 }, "2026-03": { t: 27, a: 17 } } },
            { label: "정산플랫폼팀 (1,574→787건)", monthly: { "2026-01": { t: 66, a: 85 }, "2026-02": { t: 132, a: 153 }, "2026-03": { t: 198, a: 245 } } },
            { label: "배민페이플랫폼팀 (232→116건)", monthly: { "2026-01": { t: 10, a: 32 }, "2026-02": { t: 20, a: 45 }, "2026-03": { t: 30, a: 71 } } },
            { label: "배민선물하기팀 (3,575→2,500건)", monthly: { "2026-01": { t: 564, a: 564 }, "2026-02": { t: 1070, a: 1083 }, "2026-03": { t: 1420, a: 1539 } } }
          ],
          tasks: [
            { id: "T38", name: "배민회원정보 변경 시 배민페이 회원 정보 동기화", team: "배민페이플랫폼팀", status: "과제완료", targetDate: "2026-01-13", completedDate: "2026-01-13", owner: "김혜정", wikiLink: "https://cloud.wiki.woowa.in/wiki/x/qgzNMw" },
            { id: "T39", name: "결제 이상거래 케이스 분석 및 선제 대응 방안 제안", team: "결제허브팀", status: "진행중", targetDate: "2026-06-30", owner: "나은희", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYMENTHUB/pages/960437308/260219" },
            { id: "T40", name: "해외카드결제 민원 발생 원인 분석 및 대응", team: "결제허브팀", status: "진행중", targetDate: "2026-06-30", owner: "정신호" },
            { id: "T41", name: "선물하기 상품권 수신자 셀프 환불 도입", team: "배민선물하기팀", status: "과제완료", targetDate: "2026-03-19", completedDate: "2026-03-19", owner: "김희선", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/GIFT/pages/988841006/2026-03" },
            { id: "T42", name: "서비스 UX 개선 - 고객향 안내 강화", team: "배민선물하기팀", status: "계획중", targetDate: "2026-04-30", owner: "김희선" },
            { id: "T43", name: "채권압류 및 정산보류/해제 프로세스 개선", team: "정산플랫폼팀", status: "계획중", targetDate: "2026-06-30", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/SETTLESYS/pages/1100479269/260420" }
          ]
        }
      ]
    },
    {
      id: "O4",
      title: "자동화 기반의 운영 레버리지를 극대화 한다",
      subtitle: "Operating Leverage",
      keyResults: [
        {
          id: "KR4-1",
          title: "운영 처리시간 연간 2,016시간 단축 (3,376h → 1,360h)",
          unit: "시간",
          isLowerBetter: true,
          annualTarget: 1360,
          baseline: 3376,
          baselineLabel: "25년 3,376시간",
          monthly: {
            "2026-01": { target: 3376, actual: 3160 },
            "2026-02": { target: 3376, actual: 3160 },
            "2026-03": { target: 2663, actual: 3074.6 }
          },
          subKRs: [
            { label: "결제플랫폼팀 월마감 (528→84h)", monthly: { "2026-01": { t: 528, a: 312 }, "2026-02": { t: 528, a: 312 }, "2026-03": { t: 528, a: 288 } } },
            { label: "결제허브팀 대사/응대 (598→431h)", monthly: { "2026-01": { t: 598, a: 598 }, "2026-02": { t: 598, a: 598 }, "2026-03": { t: 598, a: 536.6 } } },
            { label: "정산플랫폼팀 대사/보정 (72→0h)", monthly: { "2026-01": { t: 72, a: 72 }, "2026-02": { t: 72, a: 72 }, "2026-03": { t: 72, a: 72 } } },
            { label: "결제웹프론트 선물하기/정산 (2,178→845h)", monthly: { "2026-01": { t: 2178, a: 2178 }, "2026-02": { t: 2178, a: 2178 }, "2026-03": { t: 1465, a: 2178 } } }
          ],
          tasks: [
            { id: "T44", name: "PG 부분취소 대사 처리 자동화", team: "결제허브팀", status: "과제완료", targetDate: "2026-03-20", completedDate: "2026-03-20", owner: "김재준", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYMENTHUB/pages/1015284361" },
            { id: "T45", name: "주문-결제 정합성 확인 어드민 구축", team: "결제허브팀", status: "진행중", targetDate: "2026-05-22", owner: "정신호, 신영민", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYMENTHUB/pages/886912020/-" },
            { id: "T46", name: "결제 작업공지 전파 자동화 (n8n)", team: "결제허브팀", status: "진행중", targetDate: "2026-04-30", owner: "정신호, 배지영" },
            { id: "T47", name: "상품권 예외 환불/연장 기능 추가", team: "배민선물하기팀", status: "과제완료", targetDate: "2026-02-12", completedDate: "2026-02-12", owner: "김희선", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/GIFT/pages/939655767/2026-02" },
            { id: "T48", name: "오픈뱅킹 결제대사 개선", team: "결제플랫폼팀", status: "진행중", targetDate: "2026-05-15", owner: "최유성", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYPLATFORM/pages/1004885549" },
            { id: "T49", name: "채권압류서류 분류 자동화", team: "결제웹프론트개발팀", status: "진행중", targetDate: "2026-06-30", owner: "안현철" },
            { id: "T50", name: "선물하기 VoC 자동화", team: "결제웹프론트개발팀", status: "진행중", targetDate: "2026-06-30", owner: "박지은" }
          ]
        },
        {
          id: "KR4-2",
          title: "정산 수동 미개입율 65% 달성",
          unit: "%",
          annualTarget: 65,
          baseline: 48.21,
          baselineLabel: "25년 48.21%",
          monthly: {
            "2026-01": { target: 48.21, actual: 25.81 },
            "2026-02": { target: 48.21, actual: 35.71 },
            "2026-03": { target: 48.21, actual: 32.26 }
          },
          tasks: [
            { id: "T51", name: "배치재수행 개선 - P1. 운영자 수행 기능 구현", team: "정산플랫폼팀", status: "계획중", targetDate: "2026-06-30" },
            { id: "T52", name: "배치재수행 개선 - P2. 자동 재시도 기능 구현", team: "정산플랫폼팀", status: "계획중", targetDate: "2026-07-31" },
            { id: "T53", name: "보정 승인 프로세스 도입", team: "정산플랫폼팀", status: "계획중", targetDate: "2026-06-30" }
          ]
        },
        {
          id: "KR4-3",
          title: "주문-정산 데이터 정합성 준수율 94% 달성",
          unit: "%",
          annualTarget: 94,
          baseline: 83,
          baselineLabel: "25년 83%",
          monthly: {
            "2026-01": { target: 83, actual: 94 },
            "2026-02": { target: 85, actual: 90 },
            "2026-03": { target: 88, actual: 95 }
          },
          tasks: [
            { id: "T54", name: "배민스토어 결제정보처리시스템 연동 (매입 기능 전환)", team: "결제허브팀", status: "과제완료", targetDate: "2026-02-11", completedDate: "2026-02-11", owner: "설소영, 강성효", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYMENTHUB/pages/612217763/8+LaaS+-+-" },
            { id: "T55", name: "배민스토어 결제정보처리시스템 연동 (결제 기능 전환)", team: "결제허브팀", status: "진행중", targetDate: "2026-04-30", owner: "나은희, 임상혁", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYMENTHUB/pages/723856565/01-1.+-" }
          ]
        },
        {
          id: "KR4-4",
          title: "인프라 비용 전년대비 10% 절감 ($1,397K → $1,258K)",
          unit: "$",
          isLowerBetter: true,
          isCumulative: true,
          annualTarget: 1257601,
          baseline: 1397335,
          baselineLabel: "25년 $1,397,335",
          monthly: {
            "2026-01": { target: 104800, actual: 116172 },
            "2026-02": { target: 209600, actual: 220358 },
            "2026-03": { target: 314400, actual: 330763 }
          },
          tasks: [
            { id: "T56", name: "현금영수증 시스템 통합", team: "결제플랫폼팀", status: "과제완료", targetDate: "2026-04-14", completedDate: "2026-04-14", owner: "장우진", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYPLATFORM/pages/977472373" },
            { id: "T57", name: "빌링어드민 이관", team: "결제플랫폼팀", status: "진행중", targetDate: "2026-05-01", owner: "한다솜", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYPLATFORM/pages/984446390" },
            { id: "T58", name: "배치플랫폼 전환", team: "결제플랫폼팀", status: "과제완료", targetDate: "2026-03-18", completedDate: "2026-03-18", owner: "최유성" },
            { id: "T59", name: "빌링마트 F/O 및 결제정보처리시스템으로 기능 전환", team: "결제허브팀", status: "진행중", targetDate: "2026-06-30", owner: "권유삼, 나은희" },
            { id: "T60", name: "정산시스템 배치플랫폼 전환", team: "정산플랫폼팀", status: "진행중", targetDate: "2026-09-30", owner: "권세희", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/SETTLESYS/pages/860214265/251001" },
            { id: "T61", name: "비용절감 - 배치 개선 (베타 서버)", team: "정산플랫폼팀", status: "과제완료", targetDate: "2026-04-30", completedDate: "2026-04-06", owner: "정용준", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/SETTLESYS/pages/973648191/260121" },
            { id: "T62", name: "비용절감 - 배치 개선 (운영 서버)", team: "정산플랫폼팀", status: "진행중", targetDate: "2026-06-30", owner: "정용준", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/SETTLESYS/pages/973648191/260121" },
            { id: "T63", name: "정산시스템 k8s 전환", team: "정산플랫폼팀", status: "진행중", targetDate: "2026-06-30", owner: "이소진" }
          ]
        }
      ]
    }
  ],
  aiReports: {
    "2026-01": {
      summary: "1월은 26년 OKR 체계가 본격 가동된 첫 달입니다. 배민페이 점유율이 28.1%로 월 목표(27.9%)를 초과 달성했고, 선물하기 주문수도 390만건으로 목표를 정확히 맞췄습니다. 다만 배민포인트 활성화율은 5.9%로 목표(6.2%) 대비 소폭 미달입니다.",
      achievements: [
        "배민페이 점유율 28.1%로 월 목표(27.9%) 초과 달성 — 카드 22.1% 정확히 달성, 머니 4.0%로 목표(3.9%) 초과",
        "선물하기 주문수 390.1만건으로 월 목표(390만) 달성률 100.03%",
        "결제 성공률(AR) 99.06%로 월 목표(99.05%) 달성",
        "주문 유실 0건 — 목표 대비 완벽 달성",
        "결제허브팀 PG민원 3건으로 목표(9건) 대비 대폭 절감 (달성률 166.67%)"
      ],
      risks: [
        "배민포인트 활성화율 5.9%로 목표(6.2%) 대비 미달 — 프로모션 효과 아직 미반영",
        "CS 인입 725건으로 목표(671건) 대비 8% 초과 — 특히 배민페이플랫폼팀 32건(목표 10건)으로 큰 gap",
        "인프라 비용 $116,172로 목표($104,800) 대비 10.8% 초과"
      ],
      recommendations: [
        "배민포인트 활성화율 개선을 위해 프리퀀시 고도화 과제 일정 준수 모니터링 필요",
        "배민페이플랫폼팀 CS 인입 급증 원인 분석 시급 — 회원정보 동기화 완료 효과 추적",
        "인프라 비용 초과는 RDS F/O 전환 과정 일시적 이중 운영 영향 — 2월 내 정리 필요"
      ]
    },
    "2026-02": {
      summary: "2월은 대부분의 안정성 지표가 양호하나, 배민포인트 활성화율이 4.9%로 하락하면서 우려 시그널이 나타났습니다. 배민페이 점유율은 27.8%로 1월(28.1%) 대비 소폭 하락하며 목표(28.1%)에 미달했습니다.",
      achievements: [
        "결제 성공률(AR) 99.06%로 월 목표(99.06%) 정확히 달성",
        "주문 유실 0건 유지 — 2개월 연속 완벽 달성",
        "결제허브팀 PG민원 누적 8건으로 누적 목표(18건) 대비 절반 수준",
        "선물하기 주문수 누적 732.5만건으로 안정적 누적 중",
        "결제플랫폼팀 운영 처리시간 312시간으로 월마감 자동화 효과 지속"
      ],
      risks: [
        "배민포인트 활성화율 4.9%로 1월(5.9%) 대비 하락, 목표(6.6%) 대비 75.2% 달성 — KR 달성 위험",
        "배민페이 점유율 27.8%로 목표(28.1%) 미달 — 머니/카드 모두 전월 대비 하락",
        "선물하기 주문수 누적 732.5만으로 누적 목표(787.3만) 대비 93% — gap 확대 중",
        "정산 수동 미개입율 35.71%로 목표(48.21%) 대비 크게 미달"
      ],
      recommendations: [
        "배민포인트 활성화율 급락 원인 긴급 분석 필요 — 시즌 영향인지 구조적 문제인지 판단",
        "2Q 시작과 함께 배민클럽 프로모션 통한 머니 점유율 반등 전략 점검",
        "정산 수동 미개입율 개선을 위한 보정 승인 프로세스, 배치 재수행 과제 일정 앞당기기 검토"
      ]
    },
    "2026-03": {
      summary: "3월은 Q1 마감월로 종합 평가가 필요한 시점입니다. 배민페이 점유율이 27.6%로 3개월 연속 하락하며 Q1 목표(28.7%) 달성에 실패했습니다. 반면 선물하기 주문수는 1,103만건으로 Q1 누적 목표(1,225.9만)의 89.99%를 기록해 근접했습니다. 결제 성공률은 99.04%로 소폭 미달했으나, 주문 유실 0건 유지는 긍정적입니다.",
      achievements: [
        "주문 유실 0건 — Q1 전체 0건으로 연간 1,000건 목표 대비 매우 양호",
        "주문-정산 정합성 준수율 95%로 월 목표(88%) 대폭 초과 달성",
        "결제플랫폼팀 운영 처리시간 288시간으로 지속 개선 (Q1 달성률 145.45%)",
        "결제허브팀 PG민원 누적 17건으로 목표(27건) 대비 달성률 137%"
      ],
      risks: [
        "배민페이 점유율 27.6%로 Q1 목표(28.7%) 미달 — 3개월 연속 하락 추세 심각",
        "배민포인트 활성화율 5.1%로 Q1 목표(7.0%) 대비 73.37% — KR 달성 위험도 높음",
        "CS 인입 누적 1,962건으로 Q1 목표(1,741건) 대비 12.7% 초과, 특히 정산(245건/목표198건), 배민페이(71건/목표30건) 심각",
        "결제 성공률 99.04%로 Q1 목표(99.08%) 미달 — 0.04%p 차이지만 개선 필요",
        "정산 수동 미개입율 32.26%로 Q1 목표(48.21%) 크게 미달 — 자동화 과제 착수 시급"
      ],
      recommendations: [
        "배민페이 점유율 하락 추세 전환이 2Q 최우선 과제 — 배민클럽 프로모션 + 더치페이 기능 출시 일정 확정 필요",
        "배민포인트 활성화율 회복을 위해 포인트함 개편, 프리퀀시 고도화 2Q 초 동시 착수 권고",
        "CS 인입 목표 미달 팀(결제플랫폼, 정산, 배민페이) 각각 Top 인입 원인 분석 및 액션플랜 수립 권고",
        "정산 수동 미개입율 개선을 위해 보정 승인 프로세스, 배치 재수행 P1 과제 우선순위 최상위 배치 필요",
        "2Q OKR 리뷰 시 배민페이 점유율 / 포인트 활성화율 trajectory 현실 반영 여부 재점검 권고"
      ]
    }
  }
};
