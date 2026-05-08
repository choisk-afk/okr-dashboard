const OKR_DATA = {
  year: 2026,
  orgName: "결제정산프로덕트실",
  months: ["2026-01", "2026-02", "2026-03", "2026-04"],
  monthLabels: { "2026-01": "1월", "2026-02": "2월", "2026-03": "3월", "2026-04": "4월" },
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
            "2026-03": { target: 28.7, actual: 27.6 },
            "2026-04": { target: 29.9, actual: 27.7 }
          },
          subKRs: [
            { label: "카드 점유율", monthly: { "2026-01": { t: 22.1, a: 22.1 }, "2026-02": { t: 22.4, a: 21.9 }, "2026-03": { t: 22.7, a: 21.7 }, "2026-04": { t: 22.9, a: 21.71 } } },
            { label: "계좌 점유율", monthly: { "2026-01": { t: 1.9, a: 2.0 }, "2026-02": { t: 1.9, a: 2.0 }, "2026-03": { t: 2.0, a: 2.0 }, "2026-04": { t: 2.0, a: 2.06 } } },
            { label: "머니 점유율", monthly: { "2026-01": { t: 3.9, a: 4.0 }, "2026-02": { t: 3.8, a: 3.9 }, "2026-03": { t: 3.7, a: 3.9 }, "2026-04": { t: 4.3, a: 3.89 } } },
            { label: "휴대폰 점유율", monthly: { "2026-01": { t: 0.0, a: 0.0 }, "2026-02": { t: 0.0, a: 0.0 }, "2026-03": { t: 0.3, a: 0.0 }, "2026-04": { t: 0.7, a: 0.0 } } }
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
            "2026-03": { target: 7.0, actual: 5.1 },
            "2026-04": { target: 7.3, actual: 4.4 }
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
            "2026-03": { target: 12258900, actual: 11032053 },
            "2026-04": { target: 16263700, actual: 14593623 }
          },
          subKRs: [
            { label: "배민 발행 상품권 사용 주문수", monthly: { "2026-01": { t: 3810000, a: 3810788 }, "2026-02": { t: 7673000, a: 7156173 }, "2026-03": { t: 11940000, a: 10794880 }, "2026-04": { t: 15674000, a: 14285279 } } },
            { label: "외부 교환권 사용 주문수", monthly: { "2026-01": { t: 90000, a: 90423 }, "2026-02": { t: 200500, a: 168877 }, "2026-03": { t: 318900, a: 237173 }, "2026-04": { t: 589700, a: 308344 } } }
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
            "2026-03": { target: 0, actual: 0 },
            "2026-04": { target: 0, actual: 0 }
          },
          tasks: [
            { id: "T14n", name: "메뉴할인 즉시할인 시스템 이관", team: "결제허브팀", status: "진행중", addedMonth: "2026-04" },
            { id: "T14", name: "즉시할인 타임세일 API 정책 변경 대응", team: "결제허브팀", status: "과제완료", targetDate: "2026-04-01", completedDate: "2026-04-01", owner: "설소영, 김윤정", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYMENTHUB/pages/925664219/PJ+202601+-" },
            { id: "T15", name: "기준수수료, 과제코드 연동을 통한 비용집계 자동화 대응", team: "결제허브팀", status: "과제완료", targetDate: "2026-04-09", completedDate: "2026-04-09", owner: "임상혁, 신영민", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYMENTHUB/pages/1005437529/260226" },
            { id: "T16", name: "메뉴할인분담금, 메뉴쿠폰 안분계산기 연동 효율화", team: "결제허브팀", status: "과제완료", targetDate: "2026-01-27", completedDate: "2026-01-27", owner: "설소영, 김윤정", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYMENTHUB/pages/936379778/PJ+202512+-" },
            { id: "T17", name: "DSM 신규요금 체계 V3 정산 자동화", team: "정산플랫폼팀", status: "과제완료", targetDate: "2026-03-31", completedDate: "2026-03-31", owner: "황혜진", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/SETTLESYS/pages/978661942/260204+DSM+V3" },
            { id: "T18", name: "수수료 비용 집계 자동화", team: "정산플랫폼팀", status: "과제완료", targetDate: "2026-03-31", completedDate: "2026-04-01", owner: "박연화", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/SETTLESYS/pages/800556575/250812" },
            { id: "T19", name: "라이더 - 로드러너 전환 - 정산 서비스 이관", team: "정산플랫폼팀", status: "진행중", targetDate: "2026-03-31", owner: "김초롱", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/SETTLESYS/pages/762417108/20250708+-" },
            { id: "T19n", name: "푸드 - 메뉴할인 시스템 이관 대응", team: "정산플랫폼팀", status: "진행중", addedMonth: "2026-04" },
            { id: "T20", name: "배민클럽 장기 상품 - 정기결제 시스템 대응", team: "결제플랫폼팀", status: "과제완료", targetDate: "2026-02-24", completedDate: "2026-02-24", owner: "장우진", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYPLATFORM/pages/943391450/260108" },
            { id: "T21", name: "결제 관련 지면 다국어 대응", team: "결제플랫폼팀", status: "과제완료", targetDate: "2026-03-12", completedDate: "2026-03-12", owner: "장우진", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYPLATFORM/pages/965138791/260126" },
            { id: "T22", name: "배민클럽 배민페이머니 프로모션 - 결제 대응", team: "결제플랫폼팀", status: "진행중", targetDate: "2026-04-28", owner: "장우진", jiraLink: "https://cloud.jira.woowa.in/browse/COREPAY-9421" },
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
            "2026-03": { target: 1, actual: 0 },
            "2026-04": { target: 1, actual: 0 }
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
            "2026-03": { target: 99.08, actual: 99.04 },
            "2026-04": { target: 99.09, actual: 99.06 }
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
            "2026-03": { target: 250, actual: 0 },
            "2026-04": { target: 333, actual: 0 }
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
            "2026-03": { target: 1741, actual: 1962 },
            "2026-04": { target: 2046, actual: 2364 }
          },
          subKRs: [
            { label: "결제플랫폼팀 (520→260건)", monthly: { "2026-01": { t: 22, a: 41 }, "2026-02": { t: 44, a: 56 }, "2026-03": { t: 66, a: 90 }, "2026-04": { t: 88, a: 120 } } },
            { label: "결제허브팀 PG민원 (172→86건)", monthly: { "2026-01": { t: 9, a: 3 }, "2026-02": { t: 18, a: 8 }, "2026-03": { t: 27, a: 17 }, "2026-04": { t: 35, a: 24 } } },
            { label: "정산플랫폼팀 (1,574→787건)", monthly: { "2026-01": { t: 66, a: 85 }, "2026-02": { t: 132, a: 153 }, "2026-03": { t: 198, a: 245 }, "2026-04": { t: 264, a: 322 } } },
            { label: "배민페이플랫폼팀 (232→116건)", monthly: { "2026-01": { t: 10, a: 32 }, "2026-02": { t: 20, a: 45 }, "2026-03": { t: 30, a: 71 }, "2026-04": { t: 39, a: 92 } } },
            { label: "배민선물하기팀 (3,575→2,500건)", monthly: { "2026-01": { t: 564, a: 564 }, "2026-02": { t: 1070, a: 1083 }, "2026-03": { t: 1420, a: 1539 }, "2026-04": { t: 1620, a: 1806 } } }
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
            "2026-03": { target: 2663, actual: 3074.6 },
            "2026-04": { target: 2339, actual: 896.6 }
          },
          subKRs: [
            { label: "결제플랫폼팀 월마감 (528→84h)", monthly: { "2026-01": { t: 528, a: 312 }, "2026-02": { t: 528, a: 312 }, "2026-03": { t: 528, a: 288 }, "2026-04": { t: 352, a: 288 } } },
            { label: "결제허브팀 대사/응대 (598→431h)", monthly: { "2026-01": { t: 598, a: 598 }, "2026-02": { t: 598, a: 598 }, "2026-03": { t: 598, a: 536.6 }, "2026-04": { t: 598, a: 536.6 } } },
            { label: "정산플랫폼팀 대사/보정 (72→0h)", monthly: { "2026-01": { t: 72, a: 72 }, "2026-02": { t: 72, a: 72 }, "2026-03": { t: 72, a: 72 }, "2026-04": { t: 72, a: 72 } } },
            { label: "결제웹프론트 선물하기/정산 (2,178→845h)", monthly: { "2026-01": { t: 2178, a: 2178 }, "2026-02": { t: 2178, a: 2178 }, "2026-03": { t: 1465, a: 2178 }, "2026-04": { t: 1317, a: 0 } } }
          ],
          tasks: [
            { id: "T44n", name: "서비스대사 처리 자동화(자동취소, 자동일치 등)", team: "결제허브팀", status: "진행중", addedMonth: "2026-04" },
            { id: "T44", name: "PG 부분취소 대사 처리 자동화", team: "결제허브팀", status: "과제완료", targetDate: "2026-03-20", completedDate: "2026-03-20", owner: "김재준", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYMENTHUB/pages/1015284361" },
            { id: "T45", name: "주문-결제 정합성 확인 어드민 구축", team: "결제허브팀", status: "진행중", targetDate: "2026-05-22", owner: "정신호, 신영민", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYMENTHUB/pages/886912020/-" },
            { id: "T46", name: "결제 작업공지 전파 자동화 (n8n)", team: "결제허브팀", status: "진행중", targetDate: "2026-04-30", owner: "정신호, 배지영" },
            { id: "T47", name: "상품권 예외 환불/연장 기능 추가", team: "배민선물하기팀", status: "과제완료", targetDate: "2026-02-12", completedDate: "2026-02-12", owner: "김희선", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/GIFT/pages/939655767/2026-02" },
            { id: "T48", name: "오픈뱅킹 결제대사 개선", team: "결제플랫폼팀", status: "진행중", targetDate: "2026-05-15", owner: "최유성", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYPLATFORM/pages/1004885549" },
            { id: "T48n1", name: "오픈뱅킹 결산 데이터 검증 자동화", team: "결제플랫폼팀", status: "계획중", addedMonth: "2026-04" },
            { id: "T48n2", name: "월마감 회계 처리 자동화", team: "결제플랫폼팀", status: "계획중", addedMonth: "2026-04" },
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
            "2026-03": { target: 48.21, actual: 32.26 },
            "2026-04": { target: 48.21, actual: 23.33 }
          },
          tasks: [
            { id: "T51", name: "배치재수행 개선 - P1. 운영자 수행 기능 구현", team: "정산플랫폼팀", status: "계획중", targetDate: "2026-06-30" },
            { id: "T52", name: "배치재수행 개선 - P2. 자동 재시도 기능 구현", team: "정산플랫폼팀", status: "계획중", targetDate: "2026-07-31" },
            { id: "T52n", name: "배치재수행 개선 - P3. 배치 파이프라인 개선", team: "정산플랫폼팀", status: "계획중", addedMonth: "2026-04" },
            { id: "T53", name: "보정 승인 프로세스 도입", team: "정산플랫폼팀", status: "계획중", targetDate: "2026-06-30" },
            { id: "T53n1", name: "채권압류 누적잔액 조정 자동화", team: "정산플랫폼팀", status: "과제완료", addedMonth: "2026-04" },
            { id: "T53n2", name: "월결산 개선 - 계정과목 대사 구현", team: "정산플랫폼팀", status: "진행중", addedMonth: "2026-04" },
            { id: "T53n3", name: "AI 활용 - 운영업무 자동화", team: "정산플랫폼팀", status: "계획중", addedMonth: "2026-04" },
            { id: "T53n4", name: "부가세 매출할인 로직 개선", team: "정산플랫폼팀", status: "과제완료", addedMonth: "2026-04" },
            { id: "T53n5", name: "배민정산 할인금액 N자 분담 구조 마련", team: "정산플랫폼팀", status: "진행중", addedMonth: "2026-04" },
            { id: "T53n6", name: "DSM V1 수수료 한도캡 개선", team: "정산플랫폼팀", status: "과제완료", addedMonth: "2026-04" },
            { id: "T53n7", name: "신규 결제 수단 추가 - 애플페이 대응", team: "정산플랫폼팀", status: "진행중", addedMonth: "2026-04" }
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
            "2026-03": { target: 88, actual: 95 },
            "2026-04": { target: 91, actual: 95 }
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
            "2026-03": { target: 314400, actual: 330763 },
            "2026-04": { target: 419200, actual: 438595 }
          },
          tasks: [
            { id: "T56", name: "현금영수증 시스템 통합", team: "결제플랫폼팀", status: "과제완료", targetDate: "2026-04-14", completedDate: "2026-04-14", owner: "장우진", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYPLATFORM/pages/977472373" },
            { id: "T57", name: "빌링어드민 이관", team: "결제플랫폼팀", status: "진행중", targetDate: "2026-05-01", owner: "한다솜", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/PAYPLATFORM/pages/984446390" },
            { id: "T58", name: "배치플랫폼 전환", team: "결제플랫폼팀", status: "과제완료", targetDate: "2026-03-18", completedDate: "2026-03-18", owner: "최유성" },
            { id: "T59", name: "빌링마트 F/O 및 결제정보처리시스템으로 기능 전환", team: "결제허브팀", status: "진행중", targetDate: "2026-06-30", owner: "권유삼, 나은희" },
            { id: "T60", name: "정산시스템 배치플랫폼 전환", team: "정산플랫폼팀", status: "진행중", targetDate: "2026-09-30", owner: "권세희", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/SETTLESYS/pages/860214265/251001" },
            { id: "T61", name: "비용절감 - 배치 개선 (베타 서버)", team: "정산플랫폼팀", status: "과제완료", targetDate: "2026-04-30", completedDate: "2026-04-06", owner: "정용준", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/SETTLESYS/pages/973648191/260121" },
            { id: "T62", name: "비용절감 - 배치 개선 (운영 서버)", team: "정산플랫폼팀", status: "진행중", targetDate: "2026-06-30", owner: "정용준", wikiLink: "https://cloud.wiki.woowa.in/wiki/spaces/SETTLESYS/pages/973648191/260121" },
            { id: "T63", name: "정산시스템 k8s 전환", team: "정산플랫폼팀", status: "진행중", targetDate: "2026-06-30", owner: "이소진" },
            { id: "T63n1", name: "배포/서버 K8s 기반으로 변경", team: "정산플랫폼팀", status: "진행중", addedMonth: "2026-04" },
            { id: "T63n2", name: "장기 미해소 기술 부채 개선", team: "정산플랫폼팀", status: "진행중", addedMonth: "2026-04" },
            { id: "T63n3", name: "재배달비 세금계산서 발행 대응", team: "정산플랫폼팀", status: "진행중", addedMonth: "2026-04" },
            { id: "T63n4", name: "부분환불 기능 확대", team: "정산플랫폼팀", status: "과제완료", addedMonth: "2026-04" },
            { id: "T63n5", name: "비즈머니 가상계좌 API 연동 개선", team: "결제플랫폼팀", status: "계획중", addedMonth: "2026-04" },
            { id: "T63n6", name: "KB, NH 직승인 거래 대상 확대", team: "결제플랫폼팀", status: "계획중", addedMonth: "2026-04" },
            { id: "T63n7", name: "현금영수증 api 신규 전환", team: "결제허브팀", status: "진행중", addedMonth: "2026-04" },
            { id: "T63n8", name: "결제수수료 공시 집계 자동화", team: "결제허브팀", status: "진행중", addedMonth: "2026-04" }
          ]
        }
      ]
    }
  ],
  arMetrics: {
    description: "결제수단별 AR(Authorization Rate) — 결제 성공률 (AR = SR + RR)",
    source: "Zeppelin SR/RR/FR 노트북 (raw_log.serverlog_billing_logging_dh_pay_dashboard)",
    note: "데이터 기준: 월별 집계 / 보조결제수단 제외 / B2B 제외 / AR = SR + RR",
    months: ["2026-01", "2026-02", "2026-03", "2026-04"],
    overall: {
      "2026-01": 99.06, "2026-02": 99.06, "2026-03": 99.04, "2026-04": 99.06
    },
    methods: [
      {
        name: "전체",
        sr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        rr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        fr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        ar: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null }
      },
      {
        name: "배민페이카드",
        sr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        rr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        fr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        ar: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null }
      },
      {
        name: "배민페이계좌",
        sr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        rr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        fr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        ar: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null }
      },
      {
        name: "배민페이머니",
        sr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        rr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        fr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        ar: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null }
      },
      {
        name: "신용/체크카드",
        sr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        rr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        fr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        ar: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null }
      },
      {
        name: "카카오페이",
        sr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        rr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        fr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        ar: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null }
      },
      {
        name: "네이버페이",
        sr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        rr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        fr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        ar: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null }
      },
      {
        name: "토스페이",
        sr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        rr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        fr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        ar: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null }
      },
      {
        name: "휴대폰",
        sr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        rr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        fr: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null },
        ar: { "2026-01": null, "2026-02": null, "2026-03": null, "2026-04": null }
      }
    ]
  },

  completionReports: [
    {
      id: "CR1",
      team: "배민선물하기팀",
      title: "[효과분석] 상품권 수신자 셀프환불 (배포 후 1달 성과)",
      date: "2026-03-31",
      summary: "3/19 배포된 셀프환불 기능이 관련 VOC를 57% 감소시키며 CS 인입율 OKR 달성에 기여. 미등록 만료 환불 VOC 일평균 5.87건→2.11건(▼64%), 소멸알림톡 VOC 2.04→1.11건(▼45%).",
      highlights: ["VOC 57% 감소 (배포 전→후)", "고객 자가해결 체계 구축", "2026 CS OKR 연간 목표(▼30%) 기여"],
      url: "https://cloud.wiki.woowa.in/wiki/spaces/GIFT/pages/1059165667/1"
    },
    {
      id: "CR2",
      team: "결제허브팀",
      title: "GS25·GS더프레시 미회수반품완료 정산 메일 자동화",
      date: "2026-05-06",
      summary: "n8n 워크플로우를 활용해 매주 월요일 전주 정산 데이터를 Excel로 자동 생성·이메일 발송. 주 1회 최대 30분 수작업을 완전 자동화. KR4-1 운영 처리시간 단축 과제 기여.",
      highlights: ["주 30분 수작업 자동화 완료", "n8n 워크플로우 구축", "운영 처리시간 단축 KR 기여"],
      url: "https://cloud.wiki.woowa.in/wiki/spaces/PAYMENTHUB/pages/1126057083/GS25+GS"
    },
    {
      id: "CR3",
      team: "정산플랫폼팀",
      title: "260121) 정산플랫폼팀 비용절감",
      date: "2026-02-02",
      summary: "경정청구DB 삭제로 일별 스토리지 $61 절감(연간 $22,265), 셀러/라이더정산 베타 배치 agent 삭제로 월 $156 절감, 배민정산 베타 서버 스펙다운으로 월 $250 절감. 총 연간 약 $27K+ 비용 절감 달성.",
      highlights: ["연간 $22,265 DB 스토리지 절감", "월 $406 추가 인프라 절감", "KR4-4 인프라 비용 절감 OKR 기여"],
      url: "https://cloud.wiki.woowa.in/wiki/spaces/SETTLESYS/pages/973648191/260121"
    },
    {
      id: "CR4",
      team: "정산플랫폼팀",
      title: "[AI 자동화] 운영업무 AI 대체 가능성 검토 결과",
      date: "2026-05-06",
      summary: "10개 운영업무 대상 AI 대체 가능성 분석. 과제 사전 검토 자동화(★★★★☆), 정산 이상 탐지 자동화 등 고가능성 아이템 발굴. AI 활용 - 운영업무 자동화 과제의 실행 기반 마련.",
      highlights: ["10개 운영업무 AI 대체 가능성 분석 완료", "과제 사전 검토 자동화 PoC 설계", "운영 레버리지 KR과 연계된 AI 로드맵 수립"],
      url: "https://cloud.wiki.woowa.in/wiki/spaces/SETTLESYS/pages/1127155165/AI+AI"
    },
    {
      id: "CR5",
      team: "결제허브팀",
      title: "AWS Bedrock KB 기반 AI 지능형 장애 분석 봇 PoC",
      date: "2026-02-09",
      summary: "AWS Bedrock Knowledge Bases를 활용해 소스코드·로그를 연결하는 AI 장애 분석 봇 기술 검증. 해커톤 아이디어를 PoC로 발전시켜 장애 원인 즉각 추론 가능성 확인.",
      highlights: ["AI 장애 분석 봇 PoC 완료", "AWS Bedrock KB 기술 검증", "장애대응 자동화 과제 기술 기반 확보"],
      url: "https://cloud.wiki.woowa.in/wiki/spaces/PAYMENTHUB/pages/984139043/AWS+Bedrock+KB+AI+PoC"
    },
  ],

  giftMetrics: {
    annualTarget: 869380000000,
    months: ["2026-01", "2026-02", "2026-03", "2026-04"],
    metrics: [
      {
        name: "발행금액 전체",
        unit: "억원",
        annualTarget: 8694,
        monthly: {
          "2026-01": { actual: 697.1 },
          "2026-02": { actual: 661.5 },
          "2026-03": { actual: 661.5 },
          "2026-04": { actual: 650.4 }
        }
      },
      {
        name: "B2C (배민앱&PC)",
        unit: "억원",
        annualTarget: 615,
        monthly: {
          "2026-01": { actual: 47.7 },
          "2026-02": { actual: 47.5 },
          "2026-03": { actual: 43.7 },
          "2026-04": { actual: 53.0 }
        }
      },
      {
        name: "B2B2C (카카오)",
        unit: "억원",
        annualTarget: 6583,
        monthly: {
          "2026-01": { actual: 517.8 },
          "2026-02": { actual: 501.9 },
          "2026-03": { actual: 504.3 },
          "2026-04": { actual: 485.3 }
        }
      },
      {
        name: "B2B (직접&대행)",
        unit: "억원",
        annualTarget: 766,
        monthly: {
          "2026-01": { actual: 59.7 },
          "2026-02": { actual: 47.7 },
          "2026-03": { actual: 48.8 },
          "2026-04": { actual: 49.0 }
        }
      },
      {
        name: "B2B2C (그외채널)",
        unit: "억원",
        annualTarget: 633,
        monthly: {
          "2026-01": { actual: 62.7 },
          "2026-02": { actual: 56.3 },
          "2026-03": { actual: 55.7 },
          "2026-04": { actual: 54.7 }
        }
      }
    ],
    orderCount: {
      name: "선물하기 주문수 (누적)",
      unit: "만건",
      annualTarget: 5680,
      monthly: {
        "2026-01": { target: 390,   actual: 390.1 },
        "2026-02": { target: 787.4, actual: 732.5 },
        "2026-03": { target: 1225.9,actual: 1103.2 },
        "2026-04": { target: 1626.4,actual: 1459.4 }
      }
    },
    analysis: {
      "2026-01": {
        summary: "1월 기준 선물하기 누적 주문수는 목표(390만) 대비 실적 약 390.1만으로 겉보기에는 부합합니다. 반면 발행금액 전체는 연간 목표를 12개월로 균등 분할할 때의 월 기대치(연 8,694억 → 약 724억/월) 대비 697.1억으로 낮아, 금액·거래 규모 측면의 성장률은 보수적으로 보입니다. 근거: 본 대시보드 선물하기 지표 시트 집계.",
        gaps: [
          {
            title: "발행금액 전체 — 연간 진도율 기준 하회",
            detail: "월간 발행금액이 단순 월할 선형 가정보다 낮습니다. 특히 비중이 큰 B2B2C(카카오) 채널 편차가 전체 합계를 좌우하므로, 채널별 캠페인·제휴 일정과의 대조가 필요합니다."
          },
          {
            title: "B2C·B2B 채널 — 월할 대비 소폭 부족",
            detail: "B2C(47.7억)·B2B(59.7억) 등은 각 연간 목표를 월 단순 분해한 수치보다 낮거나 근접합니다. 시즌성·프로모션 유무에 따른 변동으로 볼 수 있으며, 인과 확정을 위해서는 그로스/제휴 일정 등 별도 근거 자료가 필요합니다."
          }
        ]
      },
      "2026-02": {
        summary: "2월 누적 주문수는 목표 787.4만 대비 실적 732.5만(약 93%)로 격차가 발생했습니다. 발행금액 전체도 661.5억으로 전월 대비 감소했습니다. KR1-3 하위 지표상 배민 발행 상품권·외부 교환권 모두 누적 목표를 밑돌았습니다. 설 연휴 등으로 선물·결제 수요가 분산이 됐을 가능성과, 외부 교환권은 대행사·브랜드 추가 연동 과제(T10~T11) 이전 단계로 노출·전환이 제한됐을 수 있습니다.",
        gaps: [
          {
            title: "주문수 누적 — 목표 대비 미달(약 93%)",
            detail: "누적 목표 대비 실적 격차가 본격화된 시점입니다. 동월 목표 증분 대비 신규 유입·전환이 부족했거나, 전월 대비 일별 추이가 약했을 수 있습니다. 수치 근거: 본 대시보드 주문수 표."
          },
          {
            title: "외부 교환권 주문수 — 목표·실적 격차 확대",
            detail: "KR1-3 세부값 기준 외부 교환권 사용 주문이 누적 목표보다 낮습니다. 대행사 연동·브랜드 확장 과제가 진행·계획 단계인 점과 정합됩니다."
          },
          {
            title: "B2B2C(카카오) 발행금액 — 전월 대비 하락",
            detail: "517.8억 → 501.9억으로 감소하며 전체 발행금액 하방 압력에 기여했습니다. 카카오 채널 캠페인·상품 구성 변화 등 외부 요인과의 대조가 필요합니다."
          }
        ]
      },
      "2026-03": {
        summary: "3월 누적 주문수 달성률은 약 90%(1,103.2만 / 1,225.9만)로, 2월에 이어 격차가 유지됩니다. 발행금액 전체는 661.5억으로 전월과 동일 수준이며, B2B2C(카카오)는 소폭 반등(504.3억)했으나 주문수 누적은 따라가지 못했습니다. 외부 교환권 세그먼트의 누적 목표 대비 실적 격차가 상대적으로 큽니다.",
        gaps: [
          {
            title: "주문수 누적 — 달성률 추가 하락",
            detail: "누적 기준 목표 대비 약 90%로 전월(93%)보다 낮습니다. 배민 발행 상품권·외부 교환권 양쪽 모두 누적 목표를 하회하는 패턴이 지속됩니다."
          },
          {
            title: "외부 교환권 — 전환 병목 가능성",
            detail: "누적 목표 대비 실적 격차가 외부 교환권에서 두드러집니다. 연동 대행사·브랜드 확장이 완료되기 전까지는 사용 전환에 상한이 있을 수 있습니다. 과제 맥락: KR1-3 연계 T10~T11."
          }
        ]
      },
      "2026-04": {
        summary: "4월 누적 주문수는 약 89.7%(1,459.4만 / 1,626.4만)로 목표 미달이 이어집니다. 다만 B2C 발행금액은 53.0억으로 전월(43.7억) 대비 반등하여 앱·PC 채널 쪽에서는 개선 신호가 있습니다. 그럼에도 B2B2C(카카오)·그외 채널과 전체 발행금액(650.4억)은 연간 선형 진도를 채우기에 부족해, 구조적으로는 대형 채널 회복과 주문 전환 동반 성장이 필요합니다.",
        gaps: [
          {
            title: "주문수 누적 — 목표 대비 지속 미달",
            detail: "1~4월 누적 목표 대비 실적이 줄곧 낮은 추세입니다. 월 증분 목표를 충족하려면 신규 유입·재구매·외부 교환권 활용도를 동시에 끌어올릴 필요가 있습니다."
          },
          {
            title: "B2B2C(카카오)·전체 발행금액 — 대형 채널 부진",
            detail: "카카오 채널 발행금액이 485.3억으로 3월(504.3억) 대비 다시 하락했고, 발행금액 전체도 650.4억으로 연간 분할 대비 여유가 없습니다. 제휴·프로모션·상품 라인업 등 채널 운영 데이터와 교차 검증이 필요합니다."
          },
          {
            title: "외부 교환권 — 누적 격차 여전",
            detail: "4월 누적 기준 외부 교환권 사용 주문도 목표를 크게 밑돕니다. 대행사 추가·브랜드 롤온이 실적에 반영되는 시점이 뒤로 밀릴수록 상반기 누적은 회복이 어렵습니다."
          }
        ]
      }
    }
  },

  paymentShare: {
    label: "점유율(금액 기준, 보조결제수단 포함)",
    months: ["2026-01", "2026-02", "2026-03", "2026-04"],
    analysis: {
      "2026-01": {
        summary: "1월은 25년 12월 대비 배민페이(+0.42%p)와 신용/체크카드(+0.43%p)가 동반 상승했습니다. 카카오페이·토스페이는 소폭 하락, 네이버페이는 -0.26%p 하락했습니다. 연초 신년 카드사 프로모션과 배민페이 신규 기능 출시 효과가 반영된 결과입니다.",
        changes: [
          { method: "배민페이(전체)", delta: "+0.42%p (27.64% → 28.06%)", reason: "1월 배민클럽 구독 확대와 배민페이머니 소멸 알림 도입(1/13 배포), 배민회원정보 동기화 완료(1/13)가 배민페이 결제 경험을 개선한 효과로 해석됩니다. 배민페이카드가 +0.35%p 상승하며 전체 상승을 이끌었습니다.", source: "https://cloud.wiki.woowa.in/wiki/spaces/GROWTHPLANNING/pages/937287020/26+1" },
          { method: "└ 배민페이카드", delta: "+0.35%p (21.77% → 22.12%)", reason: "1월 신규 카드사 연동 및 배민페이카드 이용 편의 개선 효과로 연초 상승세를 기록했습니다." },
          { method: "└ 배민페이머니", delta: "0.00%p (3.97% → 3.97%)", reason: "배민페이머니 소멸 알림 도입(OKR 과제 완료)에도 불구하고 전월과 동일 수준을 유지했습니다. 머니 점유율 확대를 위한 추가 프로모션이 필요한 상황입니다." },
          { method: "└ 배민페이계좌", delta: "+0.07%p (1.90% → 1.97%)", reason: "계좌 결제는 소폭 상승했습니다. 배민페이계좌는 1월부터 완만한 상승 추세를 보이기 시작했습니다." },
          { method: "신용/체크카드", delta: "+0.43%p (16.90% → 17.33%)", reason: "롯데카드·농협카드 매일 선착순 최대 1만2천원 할인 프로모션(1/1~1/31)이 배민 앱 내에서 집행되면서 신용/체크카드 결제 비중이 상승했습니다. (그로스기획실 '26년 1월' 위키 결제사 할인 항목 확인)", source: "https://cloud.wiki.woowa.in/wiki/spaces/GROWTHPLANNING/pages/937287020/26+1" },
          { method: "카카오페이", delta: "-0.07%p (15.26% → 15.19%)", reason: "카카오페이 즉시할인(매일 오전 11시 선착순 1,000원)이 1/1~1/31 운영됐음에도 소폭 하락했습니다. 이는 카드사 프로모션 집중으로 신용/체크카드 쪽으로 일부 결제가 이동한 결과로 분석됩니다. (그로스기획실 '26년 1월' 위키 결제사 할인 항목 확인)", source: "https://cloud.wiki.woowa.in/wiki/spaces/GROWTHPLANNING/pages/937287020/26+1" },
          { method: "네이버페이", delta: "-0.26%p (12.42% → 12.16%)", reason: "25년 12월 대비 네이버페이 전용 프로모션이 축소되면서 점유율이 하락했습니다. 연말 대비 연초 네이버페이 할인 행사 부재가 주요 원인으로 추정됩니다." },
          { method: "토스페이", delta: "-0.04%p (11.12% → 11.08%)", reason: "토스페이는 소폭 하락했으나 거의 보합 수준입니다. 토스페이 자체 앱 내 포인트 적립 프로모션이 배민 앱에서 상대적으로 약화된 것으로 보입니다." }
        ]
      },
      "2026-02": {
        summary: "2월은 카카오페이(+0.36%p)와 토스페이(+0.35%p)가 큰 폭으로 상승하며 간편결제 3사가 전월 대비 반등했습니다. 반면 신용/체크카드(-0.43%p)와 배민페이(-0.28%p)는 동반 하락했습니다. 배민 앱 내 카드사 프로모션이 상시 진행되는 가운데 카카오페이·토스페이 자체 결제 유인이 강화된 영향입니다.",
        changes: [
          { method: "배민페이(전체)", delta: "-0.28%p (28.06% → 27.78%)", reason: "배민페이카드와 머니 하락이 주도했습니다. 배민클럽 장기 상품 정기결제 시스템 대응(2/24 완료)과 법인카드 카드사 변경 대응(2/10 완료) 등 내부 과제들이 완료됐으나, 경쟁사 프로모션 대비 배민페이 전용 유인책이 부족했습니다." },
          { method: "└ 배민페이카드", delta: "-0.26%p (22.12% → 21.86%)", reason: "배민페이카드는 2월부터 하락 추세가 본격화됐습니다. 카카오페이·토스페이의 배민 앱 내 즉시할인 프로모션이 강화되면서 카드 결제에서 간편결제로 이동이 발생한 것으로 분석됩니다." },
          { method: "└ 배민페이머니", delta: "-0.05%p (3.97% → 3.92%)", reason: "배민포인트 지급 당일 소멸 기능(2/11 완료) 출시에도 불구, 배민페이머니 활성화율이 4.9%로 하락한 것과 맞물려 머니 결제 비중도 소폭 줄었습니다." },
          { method: "└ 배민페이계좌", delta: "+0.03%p (1.97% → 2.00%)", reason: "배민페이계좌는 2월에도 소폭 상승하며 안정적 성장세를 이어갔습니다." },
          { method: "신용/체크카드", delta: "-0.43%p (17.33% → 16.90%)", reason: "1월에 집중됐던 롯데카드·농협카드 프로모션이 2월에도 지속됐으나(2/1~2/28), 삼성카드(2/6~2/28)가 새로 추가됐음에도 카카오페이·토스페이 프로모션 효과에 밀려 점유율이 하락했습니다. (그로스기획실 '26년 2월' 위키 결제사/카드 할인 항목 확인)", source: "https://cloud.wiki.woowa.in/wiki/spaces/GROWTHPLANNING/pages/972360249/26+2" },
          { method: "카카오페이", delta: "+0.36%p (15.19% → 15.55%)", reason: "2월 카카오페이 자체 배민 내 즉시할인·적립 프로모션이 강화되면서 큰 폭 상승했습니다. 특히 요기요(YGY)에서도 카카오페이 관련 혜택이 집행된 것으로 확인됩니다. (그로스기획실 '26년 2월' 위키 결제사 항목)", source: "https://cloud.wiki.woowa.in/wiki/spaces/GROWTHPLANNING/pages/972360249/26+2" },
          { method: "토스페이", delta: "+0.35%p (11.08% → 11.43%)", reason: "토스페이는 2월 배민 앱 내 결제 시 포인트 추가 적립 이벤트 집행으로 큰 폭 상승했습니다. 2월 들어 토스페이의 배민 내 존재감이 강화되는 추세가 확인됩니다." },
          { method: "네이버페이", delta: "-0.25%p (12.16% → 11.91%)", reason: "네이버페이는 2월에도 하락세가 이어졌습니다. 네이버페이 전용 배민 프로모션이 2월 위키에서 확인되지 않으며, 경쟁사 대비 혜택이 상대적으로 약했습니다." }
        ]
      },
      "2026-03": {
        summary: "3월은 즉시할인이 +0.66%p 대폭 상승하며 가장 두드러진 변화를 보였습니다. 신용/체크카드는 -0.63%p로 가장 큰 폭 하락했고, 네이버페이도 -0.23%p 하락했습니다. 배민페이는 -0.10%p 소폭 하락하며 점유율 하락세가 지속됐습니다.",
        changes: [
          { method: "배민페이(전체)", delta: "-0.10%p (27.78% → 27.68%)", reason: "배민페이카드(-0.12%p)와 머니(-0.03%p)가 소폭 하락했고, 계좌만 +0.04%p 상승했습니다. 배민페이 관련 OKR 과제(다국어 대응 3/24 완료, 다국어 주문서 3/31 완료 등)가 마무리됐으나 점유율 반등으로 이어지지 않았습니다." },
          { method: "└ 배민페이카드", delta: "-0.12%p (21.86% → 21.74%)", reason: "3월에도 배민페이카드 하락세가 지속됐습니다. 즉시할인·간편결제 경쟁이 심화되면서 상대적 점유율이 축소되는 추세입니다." },
          { method: "└ 배민페이머니", delta: "-0.03%p (3.92% → 3.89%)", reason: "배민페이머니는 3월에도 소폭 하락했습니다. 배민클럽 바우처 SAP 연동(3/19 완료)과 다국어 대응(3/24 완료) 등 인프라 과제는 완료됐으나 머니 사용 유인 프로모션이 부재했습니다." },
          { method: "└ 배민페이계좌", delta: "+0.04%p (2.00% → 2.04%)", reason: "배민페이계좌는 3월에도 꾸준히 상승했습니다. 1~3월 내내 월 +0.03~0.04%p씩 상승 중이며 배민페이 내 유일한 성장 수단입니다." },
          { method: "즉시할인", delta: "+0.66%p (5.55% → 6.21%)", reason: "3월 그로스기획실 프로모션에서 파리바게뜨 픽업 최대 5,000원 즉시할인(3/16~3/29), 파파존스 최대 8,000원 즉시할인(3/16~3/29), 멕시카나 선착순 메뉴 즉시할인 등 즉시할인 프로모션이 집중 집행됐습니다. 이는 3월 즉시할인 점유율 급등의 직접적 원인입니다. (그로스기획실 '26년 3월' 위키 결제사 할인 항목 확인)", source: "https://cloud.wiki.woowa.in/wiki/spaces/GROWTHPLANNING/pages/1010895946/26+3" },
          { method: "신용/체크카드", delta: "-0.63%p (16.90% → 16.27%)", reason: "삼성카드 결제혜택(3/6~3/31)과 농협카드 할인(3/13~3/31)이 집행됐음에도 즉시할인 급증으로 인해 상대적 점유율이 크게 하락했습니다. 즉시할인은 결제수단 무관하게 적용되어 신용/체크카드 결제의 상대적 비중이 희석됩니다. (그로스기획실 '26년 3월' 위키)", source: "https://cloud.wiki.woowa.in/wiki/spaces/GROWTHPLANNING/pages/1010895946/26+3" },
          { method: "카카오페이", delta: "-0.08%p (15.55% → 15.47%)", reason: "3월 요기요(YGY)에서 카카오페이 결제사 할인(3/9~3/31)이 집행됐으나, 배민 앱 내에서는 즉시할인 중심으로 재편되면서 카카오페이 점유율이 소폭 하락했습니다. (그로스기획실 '26년 3월' 위키)", source: "https://cloud.wiki.woowa.in/wiki/spaces/GROWTHPLANNING/pages/1010895946/26+3" },
          { method: "네이버페이", delta: "-0.23%p (11.91% → 11.68%)", reason: "3월 네이버페이 전용 배민 프로모션이 확인되지 않으며, 즉시할인 확대로 인한 상대적 희석 효과가 지속됐습니다." }
        ]
      },
      "2026-04": {
        summary: "4월은 즉시할인 점유율이 전월 대비 +0.47%p로 가장 큰 폭의 상승을 기록했으며, 카카오페이(+0.20%p)·토스페이(+0.08%p)가 소폭 상승한 반면 신용/체크카드(-0.22%p)와 배민페이(-0.03%p)는 소폭 하락했습니다.",
        changes: [
          {
            method: "즉시할인",
            delta: "+0.47%p (6.21% → 6.68%)",
            reason: "4월 전반에 걸쳐 스타벅스, 피자헛, 노모어피자, 메가MGC커피 등 브랜드 파트너 즉시할인 프로모션이 대거 집행됐습니다. (그로스기획실 '26년 4월' 위키 기준) 위클리 슈퍼딜로 매주 특정 브랜드 최대 7,500원 즉시할인이 적용되면서 즉시할인 결제 비중이 지속 확대되고 있습니다.",
            source: "https://cloud.wiki.woowa.in/wiki/spaces/GROWTHPLANNING/pages/1058716490/26+4"
          },
          {
            method: "카카오페이",
            delta: "+0.20%p (15.47% → 15.67%)",
            reason: "카카오페이는 자체 카카오페이 포인트 리워드 및 배민 내 카카오페이 결제 시 추가 적립 프로모션을 상시 운영합니다. 3월 대비 4월에 배민 앱 내 카카오페이 노출이 확대되거나 배민클럽 연계 혜택이 강화됐을 가능성이 높습니다. 4월 통신사 프로모션 정산 관련 제휴사업팀 위키에서도 4월 간편결제사 제휴 프로모션 집행이 확인됩니다.",
            source: "https://cloud.wiki.woowa.in/wiki/spaces/partnershipmkt/pages/1125025373/26+4+5+4+27-5+3"
          },
          {
            method: "토스페이",
            delta: "+0.08%p (11.33% → 11.41%)",
            reason: "토스페이는 4월 중 배민 내 토스페이 결제 시 포인트 추가 적립 이벤트를 진행한 것으로 추정됩니다. 토스페이는 연초부터 꾸준히 점유율을 확대 중이며 4월에도 미세 상승을 지속하고 있습니다."
          },
          {
            method: "신용/체크카드",
            delta: "-0.22%p (16.27% → 16.05%)",
            reason: "즉시할인·간편결제 3사 프로모션 효과로 인해 상대적 점유율이 하락했습니다. 절대 결제 금액이 줄었다기보다 간편결제 및 즉시할인 사용이 증가하면서 비중이 희석된 것으로 분석됩니다."
          },
          {
            method: "배민페이(전체)",
            delta: "-0.03%p (27.68% → 27.65%)",
            reason: "전체 점유율은 소폭 하락했으나 수단별로 방향이 다릅니다. 배민클럽 구독자 대상 배민페이머니 포인트 추가 적립 프로모션이 4월 집행됐음에도 가시적 반등이 없으며, 휴대폰 결제 미출시(0.00%, 목표 0.7%)가 핵심 갭입니다."
          },
          {
            method: "└ 배민페이카드",
            delta: "-0.03%p (21.74% → 21.71%)",
            reason: "배민페이카드는 4월에도 소폭 하락세가 이어졌습니다. 간편결제 3사(카카오페이·네이버페이·토스페이)의 포인트 적립 프로모션 강화로 상대적 이탈이 발생하고 있습니다. 현대카드 앱 간편 등록 기능(4/29 배포 완료)이 카드 등록 편의성을 높여 향후 반등 기대 요인으로 작용할 수 있습니다."
          },
          {
            method: "└ 배민페이머니",
            delta: "0.00%p (3.89% → 3.89%)",
            reason: "배민페이머니는 전월과 동일한 수준을 유지했습니다. '배민클럽 구독자 배민페이머니 결제 시 포인트 추가 적립 프로모션'이 4월 말(4/28 목표)에 집행됐으나, 월 평균 기준으로는 아직 효과가 반영되지 않은 것으로 보입니다. 더치페이 기능도 6월 목표로 진행 중으로 Q2 내 상승 반전이 기대됩니다."
          },
          {
            method: "└ 배민페이계좌",
            delta: "+0.02%p (2.04% → 2.06%)",
            reason: "배민페이계좌는 미세하지만 유일하게 상승세를 보였습니다. 1~4월 연속 소폭 상승(1.97%→2.00%→2.04%→2.06%) 추세입니다. 토스뱅크 앱 간편 등록 기능(4/29 목표)과 은행 앱 연동 개선 효과가 서서히 반영되는 것으로 추정됩니다."
          }
        ]
      }
    },
    methods: [
      { name: "배민페이(전체)", group: "배민페이", data: { "2026-01": 28.06, "2026-02": 27.78, "2026-03": 27.68, "2026-04": 27.65 } },
      { name: "배민페이카드",   group: "배민페이", data: { "2026-01": 22.12, "2026-02": 21.86, "2026-03": 21.74, "2026-04": 21.71 } },
      { name: "배민페이계좌",   group: "배민페이", data: { "2026-01":  1.97, "2026-02":  2.00, "2026-03":  2.04, "2026-04":  2.06 } },
      { name: "배민페이머니",   group: "배민페이", data: { "2026-01":  3.97, "2026-02":  3.92, "2026-03":  3.89, "2026-04":  3.89 } },
      { name: "신용/체크카드",  group: "일반",     data: { "2026-01": 17.33, "2026-02": 16.90, "2026-03": 16.27, "2026-04": 16.05 } },
      { name: "카카오페이",     group: "간편3사",   data: { "2026-01": 15.19, "2026-02": 15.55, "2026-03": 15.47, "2026-04": 15.67 } },
      { name: "네이버페이",     group: "간편3사",   data: { "2026-01": 12.16, "2026-02": 11.91, "2026-03": 11.68, "2026-04": 11.59 } },
      { name: "토스페이",       group: "간편3사",   data: { "2026-01": 11.08, "2026-02": 11.43, "2026-03": 11.33, "2026-04": 11.41 } },
      { name: "즉시할인",       group: "기타",     data: { "2026-01":  5.43, "2026-02":  5.55, "2026-03":  6.21, "2026-04":  6.68 } },
      { name: "휴대폰",         group: "기타",     data: { "2026-01":  4.60, "2026-02":  4.55, "2026-03":  4.57, "2026-04":  4.54 } },
      { name: "상품권",         group: "기타",     data: { "2026-01":  3.14, "2026-02":  3.09, "2026-03":  3.04, "2026-04":  3.05 } },
      { name: "쿠폰",           group: "기타",     data: { "2026-01":  2.23, "2026-02":  2.49, "2026-03":  2.92, "2026-04":  2.46 } },
      { name: "애플페이",       group: "기타",     data: { "2026-01":  0.41, "2026-02":  0.40, "2026-03":  0.39, "2026-04":  0.38 } },
      { name: "해외카드",       group: "기타",     data: { "2026-01":  0.09, "2026-02":  0.08, "2026-03":  0.13, "2026-04":  0.15 } },
      { name: "알리페이",       group: "기타",     data: { "2026-01":  0.04, "2026-02":  0.03, "2026-03":  0.07, "2026-04":  0.09 } },
      { name: "위챗페이",       group: "기타",     data: { "2026-01":  0.04, "2026-02":  0.04, "2026-03":  0.09, "2026-04":  0.13 } }
    ]
  },

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
    "2026-04": {
      summary: "4월은 Q2 첫 달이자 Q1 성과를 기반으로 2분기 방향을 잡는 시점입니다. 결제 성공률·주문 유실·정합성 준수율 등 신뢰도 지표는 안정적이나, 배민페이 점유율과 포인트 활성화율의 하락세가 지속되고 있어 경계가 필요합니다. 운영 처리시간이 896.6h로 목표(2,339h) 대비 대폭 단축된 것은 이번 달 가장 두드러진 성과입니다.",
      achievements: [
        "운영 처리시간 896.6h — 목표(2,339h) 대비 61.7% 초과달성. 결제플랫폼팀 월마감 자동화(288h) + 결제허브팀 대사 개선(536.6h) 효과 본격화",
        "주문-정산 정합성 준수율 95% — 4개월 연속 목표(이달 91%) 초과 달성, 배민스토어 결제정보처리시스템 연동 효과",
        "주문 유실 0건 — 4월까지 누적 0건, 연간 1,000건 목표 완벽 유지",
        "결제 성공률(AR) 99.06% — 월 목표(99.09%) 대비 소폭 미달이나 안정적 수준 유지",
        "기준수수료·과제코드 연동 비용집계 자동화 과제완료(4/9) — KR2-1 전사 전략과제 지연율 0% 유지 기여"
      ],
      risks: [
        "배민포인트 활성화율 4.4% — 월 목표(7.3%) 대비 60.3%로 4개월 연속 하락세. '포인트 함 지면 개편' 과제가 계획중 단계에 머물러 있어 개선 시그널 없음",
        "배민페이 점유율 27.7% — 목표(29.9%) 대비 92.6%, Q1 대비 소폭 반등했으나 휴대폰 결제 기여분 0%(목표 0.7%)로 신규 수단 확대 지연이 핵심 원인",
        "선물하기 주문수 누적 1,459만건 — 목표(1,626만건) 대비 89.7%, 4개월간 약 10% gap 고착화. 외부교환권(30.8만건/목표 58.9만건) 목표 대비 52.3%로 부진",
        "CS 인입 2,364건 — 목표(2,046건) 대비 15.5% 초과. 정산플랫폼팀(322건/목표264건), 배민페이플랫폼팀(92건/목표39건) 특히 심각",
        "정산 수동 미개입율 23.33% — 목표(48.21%) 대비 48.4%, 4개월 연속 목표의 절반 수준. 배치 재수행 개선 P1~P3 과제 전부 계획중 단계로 착수 지연",
        "인프라 비용 $438,595 — 목표($419,200) 대비 4.6% 초과. 4개월 누적 $1,105,725로 연간 목표 페이스 상회 중"
      ],
      recommendations: [
        "배민포인트 활성화율: '포인트 함 지면 개편' 과제 즉시 착수 필요. 현재 4.4%에서 연간 목표 10.4% 달성 위해서는 Q2 내 가시적 개선이 필수",
        "배민페이 휴대폰 도입 일정 재점검: 4월까지 기여분 0%로 KR1-1 달성에 직접 영향. 5월 내 출시 가능 여부 확인 및 경영진 보고 권고",
        "CS 인입 급증 팀 별도 액션플랜 수립: 배민페이플랫폼팀(목표 대비 236%), 정산플랫폼팀(목표 대비 122%) 각각 인입 Top 3 원인 분석 및 이달 내 처리 방안 마련",
        "정산 수동 미개입율: 배치 재수행 개선 P1 과제를 계획중에서 즉시 진행중으로 전환 필요. 현 추세라면 연간 65% 목표는 불가능",
        "운영 처리시간 개선 성과 공유: 4월 896.6h는 큰 성과. 어떤 자동화 과제가 기여했는지 정리해서 타 KR 자동화에 레버리지 활용 권고"
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
