export const homeMD = '# Aurora (Monitoring System) - Team Pixel\n' +
  '\n' +
  '## Project link\n' +
  '\n' +
  'https://brainworks.team\n' +
  '\n' +
  '## 1.프로젝트 개요\n' +
  '\n' +
  '### 1-1. 프로젝트 주제 및 선정배경\n' +
  '\n' +
  '서버를 다루면서 pm2와 같은 프로세스 모니터링 시스템을 보고 직접 만들어보고 싶다는 생각이 들어 프로젝트 주제를 선정하게 되었다.\n' +
  '\n' +
  '### 1-2. 개발 및 수행 목표\n' +
  '\n' +
  '팀을 생성하여, 팀 내부의 서버 모니터링을 하는 것 \n' +
  '\n' +
  '## 2. 팀 소개\n' +
  '\n' +
  '|  구분  | 이름  |                                                                      사진                                                                       |         Mail          |              Github              |   role    |\n' +
  '|:----:|:---:|:---------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------:|:--------------------------------:|:---------:|\n' +
  '|  팀장  | 김진효 | <img src="https://user-images.githubusercontent.com/86733620/175867409-88daa0dd-5022-42ce-b322-2b215ce2a08e.jpg" style="width: 50%"/> |   admin@jinhyo.dev    |  https://github.com/jinhyo-dev   | Front-end |\n' +
  '|  팀원  | 김성현 |     <img src="https://cdn.discordapp.com/attachments/935776183688245341/1128796818885586994/KakaoTalk_Image_2023-07-13-05-15-44.png" style="width: 50%">         |  pumdie77@gmail.com   | https://github.com/HYUN-8265 | Back-end  |\n' +
  '|  팀원  | 윤서준 |       <img src="https://cdn.discordapp.com/attachments/1081034221432340665/1128829356970614834/image.png" style="width: 50%"> |  me@designed.network  |  https://github.com/designed-re   |   Agent   |\n' +
  '\n' +
  '## 3. 사용기술\n' +
  '\n' +
  '#### 3-1. 개발에 사용한 기술\n' +
  '![C#](https://img.shields.io/badge/Csharp-239120?style=round-square&logo=Csharp&logoColor=white)\n' +
  '![React](https://img.shields.io/badge/React-61DAFB?style=round-square&logo=React&logoColor=white)\n' +
  '![vite](https://img.shields.io/badge/vite-646CFF?style=round-square&logo=vite&logoColor=white)\n' +
  '![NestJs](https://img.shields.io/badge/Nest.js-E0234E?style=round-square&logo=nestjs&logoColor=white)\n' +
  '![socketdotio](https://img.shields.io/badge/socket.io-010101?style=round-square&logo=socketdotio&logoColor=white)\n' +
  '![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=round-square&logo=MongoDB&logoColor=white)\n' +
  '![InfluxDB](https://img.shields.io/badge/InfluxDB-22ADF6?style=round-square&logo=InfluxDB&logoColor=white)\n' +
  '![FluentBit](https://img.shields.io/badge/FluentBit-49BDA5?style=round-square&logo=FluentBit&logoColor=white)\n' +
  '![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=round-square&logo=Chart.js&logoColor=white)\n' +
  '![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=round-square&logo=styled-components&logoColor=white)\n' +
  '\n' +
  '\n' +
  '#### 3-2. 개발에 소요된 물품 및 준비물\n' +
  '서버\n' +
  '\n' +
  '## 4. 수행 추진 일정\n' +
  '\n' +
  '* 3월: 프로젝트 주제 선정 및 프로젝트 제작 준비\n' +
  '* 4월: UI/UX 디자인 및 에이전트.백엔드 개발 시작\n' +
  '* 5월: 프론트엔드 개발 시작, 에이전트 <-> 백엔드 통신\n' +
  '* 6월: 백엔드 api 제작, 프론트엔드 페이지 구현 완료, 에이전트 개발 완료\n' +
  '* 7월: 프론트엔드 websocket 및 api 연동, 실시간 차트 및 전체 페이지 구현\n' +
  '\n' +
  '## 5. 프로젝트 상세 소개\n' +
  '\n' +
  '\n' +
  '#### 5-1. 데이터베이스 구조\n' +
  '\n' +
  'NoSQL인 MongoDB와 시계열 데이터베이스인 InfluxDB를 사용하여 데이터베이스 구조가 없다.\n' +
  '\n' +
  '#### 5-2. 상세 소개\n' +
  '### Front-end\n' +
  '\n' +
  '----\n' +
  '\n' +
  '프론트에서 websocket을 이용하여 실시간으로 aurora service와 통신하며 chart.js 라이브러리를 이용해 실시간 cpu 사용량, 메모리 사용량 등을 웹 페이지에 구현하여 쉽게 확인 할 수 있도록 하였습니다.\n' +
  '\n' +
  '### Technology\n' +
  '* Vite\n' +
  '  * React 번들러로 Vite을 사용했습니다. HMR과 빠른 빌드 속도가 모니터링 서비스에 도움이 되었습니다. CRA보다 훨씬 빠른 속도와 다양한 장점이 있습니다.\n' +
  '* Styled-components\n' +
  '  * CSS의 컴포넌트화로 스타일시트의 파일을 유지보수 할 필요가 없어 사용하게 되었습니다. CSS 모델을 문서 레벨이 아닌 컴포넌트 레벨로 추상화합니다. 또한 script 환경을 최대한 활용 할 수 있었습니다.\n' +
  '* Chart.js\n' +
  '  * 모니터링 시스템의 생명은 바로 그래프입니다. Chart.js는 container 부터 tooltip, legend, axis, line, bar 모든 것들이 컴포넌트의 형태로 제공되었고 이를 자유롭게 조합해서 사용하는 것이 가장 큰 장점이었습니다. \n' +
  '\n' +
  '\n' +
  '<img src="https://cdn.discordapp.com/attachments/935776183688245341/1128830825664872448/image.png">\n<br/><br/>' +
  '<img src="https://cdn.discordapp.com/attachments/935776183688245341/1128831408958345326/image.png">\n' +
  '\n' +
  '### Back-end\n' +
  '\n' +
  '-----\n' +
  '### Aurora Service\n' +
  'Service는 Client와 Agent사이에 위치하여, 사용자가 원활하게 모니터링을 할 수 있도록 돕는 서비스입니다.\n' +
  '\n' +
  '### Technology\n' +
  '* NestJS\n' +
  '  * API Gateway, Service(Backend)를 개발할 때 사용했습니다. NestJS는 TypeScript 기반의 Node.js 프레임워크로, 유연성과 확장성이 뛰어난 프로그래밍 언어 입니다. 프로젝트의 유연한 구조와 확장성을 위해 사용했습니다.\n' +
  '* MSA(Microservice Architecture)\n' +
  '  * MSA(Microservice Architecture)를 활용하여 API Gateway와 Service(Microservice)의 구조를 구현했습니다. Client의 요청은 API Gateway를 통해 들어오며, API Gateway는 이 요청을 적절한 Service(Microservice)로 전달합니다.\n' +
  '  * 서비스의 독립성과 확장성을 향상시키기 위해 사용했습니다.\n' +
  '* WebSocket\n' +
  '  * Client와 Agent 사이에서 실시간으로 데이터를 주고 받기 위해 사용했습니다. Agent가 수집한 정보를 Client의 요청에 따라 실시간으로 전송하도록 구현하였습니다.\n' +
  '\n' +
  '### Architecture\n' +
  '\n' +
  '<img src="https://cdn.discordapp.com/attachments/935776183688245341/1128826632673710090/253055366-bf156535-59d5-4b9b-bf0e-471a4e85968a.png"/>' +
  '\n' +
  '### Agent\n' +
  '\n' +
  '----\n' +
  '\n' +
  '### Aurora Agent\n' +
  'Agent는 사용자의 호스트에 설치되어 호스트의 상태를 실시간으로 수집할 수 있도록 하는 서비스입니다.\n' +
  '\n' +
  '### 사용기술\n' +
  '* Fluent-bit\n' +
  '  * Fluent-bit은 가장 가벼운 로그/Metrics 값 수집기입니다. 이 수집기를 사용하여, `Syslog, Cpu, Disk, Memory` 등등에 대한 상태를 수집하여 Agent에 AICL을 통해 전송합니다.\n' +
  '* Prometheus\n' +
  '  * Prometheus은 오픈소스 모니터링 시스템으로, 다양한 Exporter에서 수집한 정보를 Key-Value 방식으로 제공합니다.\n' +
  '* C#\n' +
  '  * Agent, Bridge(ACL,AICL), Head(Backend)을 개발할 때 사용했습니다. Cross-platform지원 및 Java에 비해 빠른 성능과 낮은 메모리 사용율을 가지는 프로그래밍 언어입니다. Linux와 Windows를 모두 동시에 지원하기 위해 사용했습니다.\n' +
  '* WebSocket\n' +
  '  * ACL, AICL에서 사용했습니다, ACL에서는 Star <-> Agent에서 데이터를 주고받는데 사용했습니다. AICL에서는 Fluent-bit <-> Agent에서 데이터를 보고받는데 사용했습니다.\n' +
  '\n' +
  '### 아키텍처\n' +
  '<img src="https://cdn.discordapp.com/attachments/935776183688245341/1128798428906934272/252694739-a21071e2-8973-45c7-9d1e-912717853add.png"/>\n' +
  '\n' +
  '### 흐름도\n' +
  '<img src="https://cdn.discordapp.com/attachments/935776183688245341/1128798670167482529/252724984-41f3a1a9-2a49-45a8-9bcd-d3eda8246ca8.png">\n' +
  '<br/><br/>\n' +
  '<img src="https://cdn.discordapp.com/attachments/935776183688245341/1128798669798396025/252827779-9a3c2ea5-c635-455e-adc3-e41cffede6b6.png"/>\n' +
  '\n' +
  '\n' +
  '## 6. 프로젝트 추진 결과\n' +
  '\n' +
  '#### 6-1. 수행 과정 및 결과 분석\n' +
  '\n' +
  '> 오로라 모니터링 서비스는 성능 및 시스템 상태를 실시간으로 관측할 수 있습니다. 수집된 데이터를 분석하여 사용자에게 그래프를 통해 시각화된 정보를 제공하며, 이를 통해 성능 저하 원인 파악과 성능 최적화에 도움을 줍니다. 직접 이 서비스를 만들면서 어떤 방법으로 작동되는지 알게되었고, 이번 프로젝트를 진행하면서 힘든점도 많았지만 힘들었던 만큼 실력 향상에 매우 큰 도움이 되었다고 생각합니다. \n' +
  '\n' +
  '#### 6-2. 유지 보수\n' +
  '\n' +
  '> 앞으로 사용자의 요구와 편의성을 고려한 다양한 플랜을 설정해 더 많은 정보와 사용성이 뛰어난 시스템을 구축할 예정입니다. 팀원들도 이 시스템을 활용하여 효율적인 통계 분석과 성능 최적화에 큰 도움을 받고 있습니다. 추가 기능을 계속해서 도입하며, 차후에는 서비스를 외부에도 정식 배포할 계획입니다. 이를 통해 더 큰 시장에서 우리의 서비스가 높은 경쟁력을 갖추게 되며, 최종 목표로는 창업 및 기업 확장을 실현할 수 있을 것으로 기대하고 있습니다. '